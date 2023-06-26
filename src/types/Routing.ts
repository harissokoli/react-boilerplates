export enum RoutesNames {
	Home = '/',
	Login = '/login',
	Register = '/register',
	Profile = '/profile',
}

export enum RouteGuard {
	Guest = 'Guest',
}

export interface RouteGuardHookProps {
	check: () => void;
}

type Keys = keyof typeof RoutesNames;
type RoutesNamesType = (typeof RoutesNames)[Keys];

export interface RouterConfig {
	path: RoutesNamesType;
	element: JSX.Element;
	public?: boolean;
	guards?: Array<RouteGuard>;
	innerRoutes?: boolean;
}
