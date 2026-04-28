import { useSession } from "@tanstack/react-start/server";

type SessionUser = {
	user_name: string;
	user_email: string;
};
export function useAppSession() {
	return useSession<SessionUser>({
		password: process.env.SESSION_SECRET!,
		cookie: {
			maxAge: 60 * 60,
		},
	});
}
type ShortSessionToken = {
	AccessToken: string;
	IdToken: string;
};
export function useShortTokenSession() {
	return useSession<ShortSessionToken>({
		password: process.env.SESSION_SECRET!,
		cookie: {
			maxAge: 60 * 60,
		},
	});
}
type LongSessionToken = {
	RefreshToken: string;
};
export function useLongTokenSession() {
	return useSession<LongSessionToken>({
		password: process.env.SESSION_SECRET!,
		cookie: {
			maxAge: 30 * 24 * 60 * 60,
		},
	});
}
