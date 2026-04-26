import { createServerFn } from "@tanstack/react-start";
import { useAppSession } from "#/lib/session";

export const getCurrentUser = createServerFn({
	method: "GET",
}).handler(async () => {
	const session = await useAppSession();
	return { email: session.data.email || null };
});
