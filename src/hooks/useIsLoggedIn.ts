import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useBasicContext } from 'store/useBasicContext';

const useIsLoggedIn = () => {
	const location = useLocation();
	const { isLoggedIn: loggedIn } = useBasicContext();

	const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);

	useEffect(() => setIsLoggedIn((loggedIn: any) => loggedIn), [location]);

	return isLoggedIn;
};

export default useIsLoggedIn;
