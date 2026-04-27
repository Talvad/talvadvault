import { CognitoJwtVerifier } from "aws-jwt-verify";
import type { AxiosInstance } from "axios";
import axios from "axios";

const puplicApi: AxiosInstance = axios.create({
	baseURL: process.env.API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const cognitoLogin = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	try {
		const response = await puplicApi.post("/user/login", { email, password });
		return response.data;
	} catch (error) {
		throw error;
	}
};
const userPoolId = process.env.USER_POOL_ID!;
const clientId = process.env.USER_POOL_CLIENT_ID!;
export const verifyToken = async (token: string) => {
	try {
		const verifier = CognitoJwtVerifier.create({
			userPoolId,
			tokenUse: "access",
			clientId,
		});
		const payload = await verifier.verify(token);
		return payload;
	} catch (error) {
		throw error;
	}
};
