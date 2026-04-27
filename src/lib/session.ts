import { useSession } from "@tanstack/react-start/server";

type SessionUser = {
	user_name: string;
	user_email: string;
};
export function useAppSession() {
	return useSession<SessionUser>({
		password: process.env.SESSION_SECRET!,
		cookie: {
			maxAge: 30 * 24 * 60 * 60,
		},
	});
}
type SessionToken = {
	AccessToken: string;
	IdToken: string;
	RefreshToken: string;
	TokenType: string;
};
export function useTokenSession() {
	return useSession<SessionToken>({
		password: process.env.SESSION_SECRET!,
		cookie: {
			maxAge: 30 * 24 * 60 * 60,
		},
	});
}
