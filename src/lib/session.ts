import { useSession } from "@tanstack/react-start/server";

type SessionUser = {
	user_name: string;
	user_email: string;
};
export function useAppSession() {
	return useSession<SessionUser>({
		password: process.env.SESSION_SECRET!,
	});
}
