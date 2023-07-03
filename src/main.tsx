import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Router from 'navigation/Router';
import ReactDOM from 'react-dom/client';
import 'styles/index.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { BasicsProvider } from 'store/useBasicContext';

import setupDayjs from 'helpers/dayjs';

import './i18n';

setupDayjs();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.Fragment>
		<QueryClientProvider client={queryClient}>
			<BasicsProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</BasicsProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.Fragment>
);
