import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className='min-h-dvh grid place-content-center'>
    <h1>Login</h1>
  </section>
}
