import * as z from "zod";
import { useForm } from "@tanstack/react-form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "#/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Field, FieldError, FieldGroup, FieldLabel } from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

const LoginFormSchema = z.object({
  user_name: z.string(),
  password: z.string(),
});
function RouteComponent() {
  const form = useForm({
    defaultValues: {
      user_name: "",
      password: "",
    },
    validators: { onSubmit: LoginFormSchema },
    onSubmit: async ({ value }) => {
      console.log("Values : ", value);
    },
  });
  return (
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
                name="user_name"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>User name</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={e=>field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder={"User name"}
                        autoComplete={"off"}
                      />
                      {isInvalid && <FieldError errors={field.state.meta.errors}/>}
                    </Field>
                  );
                }}
              />
              <form.Field
                name="password"
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
                        onChange={e=>field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        type="password"
                        placeholder={"Password"}
                        autoComplete={"off"}
                      />{isInvalid && <FieldError errors={field.state.meta.errors}/>}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation={'horizontal'}>
            <Button type="button" variant={"outline"} onClick={()=>form.reset()}>Reset</Button>
            <Button type="submit" form="login-form">Login</Button>
          </Field>
        </CardFooter>
      </Card>
    </section>
  );
}
