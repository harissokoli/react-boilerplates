import Router from 'navigation/Router';
import ReactDOM from 'react-dom/client';
import 'styles/index.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import setupDayjs from 'helpers/dayjs';

import './i18n';

setupDayjs();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.Fragment>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</React.Fragment>
);
