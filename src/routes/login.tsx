import { useForm } from "@tanstack/react-form";
import { createFileRoute, redirect } from "@tanstack/react-router";
import * as z from "zod";
import Header from "#/components/Header";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { loginFn } from "#/server";

export const Route = createFileRoute("/login")({
	beforeLoad: ({ context }) => {
		if (context.user) {
			throw redirect({ to: "/dashboard" });
		}
	},
	component: RouteComponent,
});

const LoginFormSchema = z.object({
	email: z.email(),
	password: z.string(),
});
function RouteComponent() {
	const navigate = Route.useNavigate();
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		validators: { onSubmit: LoginFormSchema },
		onSubmit: async ({ value }) => {
			const res = await loginFn({ data: value });
			if (res.success) {
				navigate({ to: "/dashboard" });
			}
		},
	});
	return (
		<>
			<Header />
			<section className="min-h-dvh grid place-content-center">
				<Card className="min-w-sm">
					<CardHeader>
						<CardTitle>Login to your account</CardTitle>
					</CardHeader>
					<CardContent>
						<form
							id="login-form"
							onSubmit={(e) => {
								e.preventDefault();
								form.handleSubmit();
							}}
						>
							<FieldGroup>
								<form.Field
									name="email"
									// biome-ignore lint/correctness/noChildrenProp: <explanation>
									children={(field) => {
										const isInvalid =
											field.state.meta.isTouched && !field.state.meta.isValid;
										return (
											<Field data-invalid={isInvalid}>
												<FieldLabel htmlFor={field.name}>Email</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													aria-invalid={isInvalid}
													type="email"
													placeholder={"Email"}
													autoComplete={"off"}
												/>
												{isInvalid && (
													<FieldError errors={field.state.meta.errors} />
												)}
											</Field>
										);
									}}
								/>
								<form.Field
									name="password"
									// biome-ignore lint/correctness/noChildrenProp: <explanation>
									children={(field) => {
										const isInvalid =
											field.state.meta.isTouched && !field.state.meta.isValid;
										return (
											<Field data-invalid={isInvalid}>
												<FieldLabel htmlFor={field.name}>Password</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													aria-invalid={isInvalid}
													type="password"
													placeholder={"Password"}
													autoComplete={"off"}
												/>
												{isInvalid && (
													<FieldError errors={field.state.meta.errors} />
												)}
											</Field>
										);
									}}
								/>
							</FieldGroup>
						</form>
					</CardContent>
					<CardFooter>
						<Field orientation={"horizontal"}>
							<Button
								type="button"
								variant={"outline"}
								onClick={() => form.reset()}
							>
								Reset
							</Button>
							<Button type="submit" form="login-form">
								Login
							</Button>
						</Field>
					</CardFooter>
				</Card>
			</section>
		</>
	);
}
