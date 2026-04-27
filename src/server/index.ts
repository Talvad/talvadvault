import { createServerFn } from "@tanstack/react-start";
import { useAppSession, useTokenSession } from "#/lib/session";
import { cognitoLogin, verifyToken } from "./api";
export const loginFn = createServerFn({
	method: "POST",
})
	.inputValidator((data: { email: string; password: string }) => data)
	.handler(async ({ data }) => {
		try {
			const userSession = await useAppSession();
			const tokenSession = await useTokenSession();
			const response = await cognitoLogin(data);
			const tokens = response.data.AuthenticationResult;
			await tokenSession.update({
				AccessToken: tokens.AccessToken,
				IdToken: tokens.IdToken,
				RefreshToken: tokens.RefreshToken,
				TokenType: tokens.TokenType,
			});
			const payload = await verifyToken(tokens.AccessToken);
			await userSession.update({
				user_email: data.email,
				user_name: payload.username,
			});
			return { success: true };
		} catch (error) {
			return { success: false };
		}
	});

export const fetchUserFn = createServerFn({ method: "GET" }).handler(
	async () => {
		const session = await useAppSession();
		if (!session.data.user_name) return null;
		return { email: session.data.user_email, name: session.data.user_name };
	},
);
