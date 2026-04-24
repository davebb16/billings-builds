import { createRootRouteWithContext, HeadContent, Outlet } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

interface RouterContext {
  queryClient: QueryClient
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://billingsbuilds.com/#business',
      name: 'Billings Builds',
      url: 'https://billingsbuilds.com',
      email: 'dbillings100@gmail.com',
      description:
        'Freelance full-stack development: web applications, APIs, and mobile apps built with React, Node.js, and React Native.',
      founder: {
        '@type': 'Person',
        name: 'David Billings',
        email: 'dbillings100@gmail.com',
        jobTitle: 'Full-Stack Developer',
      },
      knowsAbout: [
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'React Native',
        'GraphQL',
        'Full-Stack Web Development',
      ],
      areaServed: 'Worldwide',
      priceRange: '$$$',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://billingsbuilds.com/#website',
      url: 'https://billingsbuilds.com',
      name: 'Billings Builds',
      description: 'High quality digital products fast',
      publisher: { '@id': 'https://billingsbuilds.com/#business' },
    },
  ],
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'author', content: 'David Billings' },
      { name: 'theme-color', content: '#09090B' },
      { property: 'og:site_name', content: 'Billings Builds' },
      { property: 'og:locale', content: 'en_US' },
      { 'script:ld+json': jsonLd },
    ],
    links: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <HeadContent />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  ),
})
