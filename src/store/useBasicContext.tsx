import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

const BasicContext = createContext({});

export const BasicsProvider = ({ children }: PropsWithChildren) => {
	const initialData = {
		isLoading: false,
		isLoggedIn: false,
	};

	const [data, setData] = useState<any>(initialData);

	const handleSetData = (field: string, value: any) => setData({ ...data, [field]: value });

	return <BasicContext.Provider value={{ ...data, setData: handleSetData }}>{children}</BasicContext.Provider>;
};

export const useBasicContext = () => useContext<any>(BasicContext);
