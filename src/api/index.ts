import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { ICredentials } from './credentials';
import { APIError } from './errors';

import Config from 'constants/config';

const API_URL = Config.apiUrl;
const API_TIMEOUT = 60 * 1000;

export interface IAPIClient {
	logout(): void;
	authRequest(config: AxiosRequestConfig): Promise<AxiosResponse<any>>;
	noAuthRequest(config: AxiosRequestConfig): Promise<AxiosResponse<any>>;
	login(data?: unknown): void;
}

export class APIClient implements IAPIClient {
	credentials: ICredentials;
	accessToken: string;
	instance: AxiosInstance;
	noAuthInstance: AxiosInstance;

	constructor(credentials: ICredentials) {
		this.credentials = credentials;
		this.accessToken = credentials.get();

		this.instance = axios.create({
			baseURL: API_URL,
			timeout: API_TIMEOUT,
		});

		this.noAuthInstance = axios.create({
			baseURL: API_URL,
			timeout: API_TIMEOUT,
		});

		this.instance.interceptors.response.use(undefined, (error) => {
			if (!error.response || error.response.status === 401) {
				credentials.remove();
				return;
			}

			throw new APIError(error.message, error.response);
		});

		this.setToken(this.accessToken);
	}

	private setToken(accessToken: string) {
		if (accessToken) {
			this.instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
			this.credentials.set(accessToken);
		} else {
			delete this.instance.defaults.headers.common['Authorization'];
			this.credentials.remove();
		}
		this.accessToken = accessToken;
	}

	public logout() {
		this.setToken('');
	}

	public async authRequest(config: AxiosRequestConfig): Promise<AxiosResponse<any>> {
		return await this.instance.request(config);
	}

	public async noAuthRequest(config: AxiosRequestConfig): Promise<AxiosResponse<any>> {
		return await this.noAuthInstance.request(config);
	}

	public async login(data: any): Promise<any> {
		const response = await this.instance.post(`${API_URL}/login`, data);

		this.setToken(response.data.accessToken);
		return response.data;
	}
}

export default APIClient;
