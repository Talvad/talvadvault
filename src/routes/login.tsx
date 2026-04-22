import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className='min-h-dvh grid place-content-center'>
    <Card className='min-w-sm'>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
      </CardHeader>
      <CardContent>
        
      </CardContent>
    </Card>
  </section>
}
