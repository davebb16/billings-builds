import { createRootRouteWithContext } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  ),
})
