import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="section-container py-16">
      <h1 className="text-4xl font-bold">Welcome to Billings Builds</h1>
    </main>
  )
}
