import localStorage from 'helpers/localStorage';

export interface ICredentials {
	get(): string;
	set(accessToken: string): void;
	remove(): void;
	exist(): boolean;
}

class Credentials implements ICredentials {
	public storageKey: string;
	tokenKey: string;

	constructor(tokenKey = 'token') {
		this.storageKey = 'auth';
		this.tokenKey = tokenKey;
	}

	public get(): string {
		return localStorage.getFromObject(this.storageKey, this.tokenKey);
	}

	public set(accessToken: string) {
		localStorage.setToObject(this.storageKey, this.tokenKey, accessToken);
	}

	public remove() {
		localStorage.setToObject(this.storageKey, this.tokenKey, null);
	}

	public exist(): boolean {
		return Boolean(localStorage.getFromObject(this.storageKey, this.tokenKey));
	}
}

export default Credentials;
