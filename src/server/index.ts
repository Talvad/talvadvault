import { createServerFn } from "@tanstack/react-start";
import { useAppSession } from "#/lib/session";

export const loginFn = createServerFn({
	method: "POST",
})
	.inputValidator((data: { email: string; password: string }) => data)
	.handler(async ({ data }) => {
		const session = await useAppSession();
		await session.update({ user_email: data.email, user_name: "my test name" });
		return { success: true };
	});

export const fetchUserFn = createServerFn({ method: "GET" }).handler(
	async () => {
		const session = await useAppSession();
		if (!session.data.user_email) return null;
		return { email: session.data.user_email, name: session.data.user_name };
	},
);
