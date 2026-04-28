import { createServerFn } from "@tanstack/react-start";
import {
	useAppSession,
	useLongTokenSession,
	useShortTokenSession,
} from "#/lib/session";
import { cognitoLogin, cognitoRefreshUser, verifyToken } from "./api";
export const loginFn = createServerFn({
	method: "POST",
})
	.inputValidator((data: { email: string; password: string }) => data)
	.handler(async ({ data }) => {
		const userSession = await useAppSession();
		const shortTokenSession = await useShortTokenSession();
		const longTokenSession = await useLongTokenSession();
		try {
			const response = await cognitoLogin(data);
			const tokens = response.data.AuthenticationResult;
			await shortTokenSession.update({
				AccessToken: tokens.AccessToken,
				IdToken: tokens.IdToken,
			});
			await longTokenSession.update({
				RefreshToken: tokens.RefreshToken,
			});
			const payload = await verifyToken(tokens.IdToken);
			await userSession.update({
				user_email: payload.name as string,
				user_name: payload.email as string,
			});
			return { success: true };
		} catch (error) {
			return { success: false };
		}
	});

export const fetchUserFn = createServerFn({ method: "GET" }).handler(
	async () => {
		const shortTokenSession = await useShortTokenSession();
		const longTokenSession = await useLongTokenSession();
		const userSession = await useAppSession();
		try {
			const refreshToken = longTokenSession.data.RefreshToken || null;
			const idToken = shortTokenSession.data.IdToken || null;
			if (!idToken && refreshToken) {
				const response = await cognitoRefreshUser(refreshToken);
				const tokens = response.data.AuthenticationResult;
				await shortTokenSession.update({
					AccessToken: tokens.AccessToken,
					IdToken: tokens.IdToken,
				});
				const payload = await verifyToken(tokens.IdToken);
				await userSession.update({
					user_email: payload.name as string,
					user_name: payload.email as string,
				});
			}
			if (!userSession.data.user_name) return null;
			return {
				email: userSession.data.user_email,
				name: userSession.data.user_name,
			};
		} catch (error) {
			return null;
		}
	},
);
