import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import useIsLoggedIn from 'hooks/useIsLoggedIn';

import { RouteGuardHookProps, RoutesNames } from 'types/Routing';

/*
	Name: Guest
	Rule: Can access route only when visitor not authenticated
*/

const redirectRoute = RoutesNames.Home;

function useGuestGuard(): RouteGuardHookProps {
	const navigate = useNavigate();
	const isLoggedIn = useIsLoggedIn();

	const check = useCallback(() => {
		if (isLoggedIn) {
			navigate(redirectRoute, { replace: true });
		}
	}, [isLoggedIn]);
	return { check };
}

export default useGuestGuard;
