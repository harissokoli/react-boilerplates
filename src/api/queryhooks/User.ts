import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export interface User {
	id: string;
	name: string;
	email: string;
}

export const userKeys = {
	user: (id: string) => ['user', id] as const,
};

/**
 * This is a mock function that simulates an API call.
 */
const getUser = (id: string): Promise<User> => {
	return new Promise<User>((resolve) => {
		setTimeout(() => {
			resolve({
				id,
				name: 'John Doe',
				email: 'John@gmail.com',
			});
		}, 1000);
	});
};

export const useUser = (id: string, options?: UseQueryOptions<User>) => {
	return useQuery<User>(userKeys.user(id), () => getUser(id), options);
};
