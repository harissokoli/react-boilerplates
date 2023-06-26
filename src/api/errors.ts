import { AxiosResponse } from 'axios';

export interface APISingleErrorMessage {
	field: string;
	error: string;
}

export interface APIErrorMessage {
	property: string;
	constraints: { [key: string]: string };
}

export class APIError extends Error {
	name: string;
	message: string;
	data: any;
	status: number;
	errorMessages: { [key: string]: string };
	response: AxiosResponse;

	constructor(message: string, response: AxiosResponse<any>) {
		super(message);
		this.name = 'APIError';
		this.message = message;
		this.data = response.data;
		this.status = response.status;
		this.errorMessages = Array.isArray(response.data?.message)
			? this.extractErrorMessages(response.data.message)
			: typeof response.data === 'object'
			? this.extractSingleErrorMessage(response.data)
			: {};
		this.response = response;
	}

	private extractSingleErrorMessage(message: APISingleErrorMessage) {
		return { [message.field]: message.error };
	}

	private extractErrorMessages(messages: APIErrorMessage[]) {
		const errors: { [key: string]: string } = {};
		for (const message of messages) {
			errors[message.property] = Object.values(message.constraints)[0];
		}
		return errors;
	}
}
