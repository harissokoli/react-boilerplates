import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useBasicStore } from 'store/useBasicContext';

const useIsLoggedIn = () => {
	const location = useLocation();
	const { isLoggedIn: loggedIn } = useBasicStore((state) => state);

	const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);

	useEffect(() => setIsLoggedIn((loggedIn: any) => loggedIn), [location]);

	return isLoggedIn;
};

export default useIsLoggedIn;
