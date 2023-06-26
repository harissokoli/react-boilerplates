import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'styles/index.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import store, { persistor } from './store';

import setupDayjs from './helpers/dayjs';

import './i18n';
import Router from './navigation/Router';

declare global {
	interface Window {
		APP_API_URL: string;
	}
}

setupDayjs();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.Fragment>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.Fragment>
);
