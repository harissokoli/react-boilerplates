import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'screens/Home';

import AuthGuard from 'components/Navigation/AuthGuard';
import GuardedRoute from 'components/Navigation/GuardedRoute';

import { RouterConfig, RoutesNames } from 'types/Routing';

function Router() {
	return (
		<div>
			<div>HEADER HERE</div>
			<Routes>
				{/* Public routes */}
				{getFilteredRoutes(RoutesFilter.Public).map((el) => (
					<Route
						key={el.path}
						path={`${el.path}${el.innerRoutes ? '/*' : ''}`}
						element={<GuardedRoute guards={el.guards}>{el.element}</GuardedRoute>}
					/>
				))}

				{/*Private routes*/}
				<Route element={<AuthGuard />}>
					{getFilteredRoutes(RoutesFilter.Private).map((el) => (
						<Route
							key={el.path}
							path={`${el.path}${el.innerRoutes ? '/*' : ''}`}
							element={<GuardedRoute guards={el.guards}>{el.element}</GuardedRoute>}
						/>
					))}
				</Route>

				{/* Everything else */}
				<Route path="*" element={<div>404: This route doesnt exist</div>} />
			</Routes>
			<div>FOOTER HERE</div>
		</div>
	);
}

export default Router;

export const ROUTES: RouterConfig[] = [
	{
		path: RoutesNames.Home,
		element: <Home />,
		innerRoutes: true,
		public: true,
	},
	{
		path: RoutesNames.Login,
		element: <div>Login Route</div>,
		innerRoutes: false,
		public: true,
	},
	{
		path: RoutesNames.Register,
		element: <div>Register route</div>,
		innerRoutes: false,
		public: true,
	},
	{
		path: RoutesNames.Profile,
		element: <div>Profile route</div>,
		innerRoutes: false,
		public: false,
	},
];

enum RoutesFilter {
	Public = 'Public',
	Private = 'Private',
}

function getFilteredRoutes(filter: RoutesFilter): RouterConfig[] {
	switch (filter) {
		case RoutesFilter.Public:
			return ROUTES.filter((c) => c.public);
		case RoutesFilter.Private:
			return ROUTES.filter((c) => !c.public);
		default:
			return [];
	}
}
