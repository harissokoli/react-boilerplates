import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from './useAppSelector';

const useIsLoggedIn = () => {
	const location = useLocation();
	const user = useAppSelector((state) => state.user);

	const [isLoggedIn, setIsLoggedIn] = useState(user.isLoggedIn);

	useEffect(() => setIsLoggedIn((loggedIn) => loggedIn), [location]);
	useEffect(() => {
		if (!user) {
			setIsLoggedIn(false);
		}
	}, [user]);

	return isLoggedIn;
};

export default useIsLoggedIn;
