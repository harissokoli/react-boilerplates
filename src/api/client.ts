import APIClient from 'api';
import Credentials from 'api/credentials';

export const credentials = new Credentials('accessToken');
export * from 'api';
export default new APIClient(credentials);
