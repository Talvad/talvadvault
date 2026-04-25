import { createServerFn } from "@tanstack/react-start";
import { useAppSession } from "#/lib/session";

export const checkAuthFn = createServerFn({
	method: "GET",
}).handler(async () => {
	const session = await useAppSession();
	return { email: session.data.email };
});

export const loginFn = createServerFn({
	method: "POST",
})
	.inputValidator((data: { email: string; password: string }) => data)
	.handler(async ({ data }) => {
		const session = await useAppSession();
		await session.update({ email: data.email });
		return { success: true };
	});
