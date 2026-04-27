import { createServerFn } from "@tanstack/react-start";

export const loginFn = createServerFn({
	method: "POST",
})
	.inputValidator((data: { email: string; password: string }) => data)
	.handler(async ({ data }) => {
		return { success: true };
	});
