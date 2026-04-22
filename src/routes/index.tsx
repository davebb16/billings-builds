import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Globe,
  Cpu,
  Smartphone,
  Palette,
  ArrowRight,
  Search,
  PenLine,
  Code2,
  Rocket,
  CheckCircle2,
  ChevronDown,
  Star,
  Timer,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Globe,
    title: 'Full-Stack Web Apps',
    description:
      'End-to-end web applications built with React, Next.js, Node.js, and modern tooling — fast, scalable, and production-ready.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
  },
  {
    icon: Cpu,
    title: 'API Development',
    description:
      'Robust RESTful and GraphQL APIs with proper authentication, documentation, and the performance your product demands.',
    tags: ['REST', 'GraphQL', 'Auth', 'Databases'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Cross-platform mobile apps with React Native that feel native on both iOS and Android without the double codebase headache.',
    tags: ['React Native', 'iOS', 'Android', 'Expo'],
  },
  {
    icon: Palette,
    title: 'UI/UX Engineering',
    description:
      'Beautiful, accessible interfaces built with design systems and component libraries — pixel-perfect and delightful to use.',
    tags: ['Design Systems', 'shadcn/ui', 'Tailwind', 'A11y'],
  },
]

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description:
      'Deep dive into your goals, users, and constraints. We align on scope, timeline, and what success looks like.',
  },
  {
    number: '02',
    icon: PenLine,
    title: 'Design',
    description:
      'Architecture planning and UI wireframes. We design the system before writing a single line of code.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build',
    description:
      'Clean, tested, documented code. Regular check-ins and demos keep you in the loop the whole time.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description:
      'Deployment, monitoring, and post-launch support. We ship together — and I\'m here if anything needs fixing.',
  },
]

const differentiators = [
  {
    icon: Timer,
    title: 'Fast Turnaround',
    description: 'Ship MVPs in weeks, not months. Speed without cutting corners.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description: 'TypeScript-first, tested, documented code you\'ll actually want to maintain.',
  },
  {
    icon: Star,
    title: 'Senior-Level Craft',
    description: 'Years of production experience across startups and enterprise environments.',
  },
]

const checkmarks = [
  'Clear communication, no flakiness',
  'Transparent pricing & timeline',
  'Code that\'s yours to keep',
  'Post-launch support included',
]

// ─── Sections ────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 20% 30%, oklch(0.795 0.166 85 / 0.12) 0%, transparent 55%),
          radial-gradient(ellipse 60% 50% at 80% 70%, oklch(0.655 0.149 87 / 0.08) 0%, transparent 55%),
          radial-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 36px 36px',
      }}
    >
      {/* Decorative orbs */}
      <div
        aria-hidden="true"
        className="absolute top-32 left-1/4 h-72 w-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'oklch(0.795 0.166 85)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-32 right-1/4 h-56 w-56 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'oklch(0.655 0.149 87)' }}
      />

      <div className="section-container relative z-10 flex flex-col items-center text-center pt-28 pb-16">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
          </span>
          Available for new projects
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] mb-6 max-w-5xl">
          I Build Digital
          <br />
          <span className="gold-gradient-text">Products That Scale.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
          Freelance full-stack developer crafting high-performance web apps, APIs, and mobile
          experiences. From idea to production — I make it happen.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-yellow-400 text-zinc-950 hover:bg-yellow-300 font-bold px-8 py-6 text-base shadow-2xl shadow-yellow-500/25 cursor-pointer transition-all duration-200 hover:shadow-yellow-500/40 hover:-translate-y-0.5"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="#services">
            <Button
              variant="outline"
              size="lg"
              className="border-white/15 text-white hover:bg-white/8 hover:border-white/25 font-semibold px-8 py-6 text-base cursor-pointer transition-all duration-200 bg-transparent backdrop-blur-sm"
            >
              See My Work
            </Button>
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-14 flex flex-col sm:flex-row items-center gap-6 text-sm text-zinc-500">
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-1">5.0 across all clients</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-white/10" />
          <div className="flex flex-wrap justify-center gap-3">
            {checkmarks.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 border-t border-white/5">
      <div className="section-container">
        <div className="mb-16 max-w-2xl">
          <Badge
            variant="outline"
            className="border-yellow-400/30 text-yellow-400 bg-yellow-400/10 mb-4"
          >
            Services
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            What I Build
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            From front-end magic to back-end power — full-stack development tailored to your
            product needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map(({ icon: Icon, title, description, tags }) => (
            <div
              key={title}
              className={cn(
                'group relative p-7 rounded-2xl cursor-default',
                'glass-card',
                'hover:bg-white/[0.06] hover:border-yellow-400/20 transition-all duration-300',
              )}
            >
              {/* Gold glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px oklch(0.795 0.166 85 / 0.15)' }}
              />

              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-all duration-300">
                <Icon className="h-6 w-6 text-yellow-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-5 text-sm">{description}</p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-zinc-400 border border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/5">
      <div className="section-container">
        <div className="mb-16 max-w-2xl">
          <Badge
            variant="outline"
            className="border-yellow-400/30 text-yellow-400 bg-yellow-400/10 mb-4"
          >
            Process
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            How We Work Together
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A proven 4-step process that keeps projects on track and clients in the loop from
            day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(({ number, icon: Icon, title, description }, index) => (
            <div key={title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_0px)] w-5 h-px bg-gradient-to-r from-yellow-400/30 to-transparent z-10" />
              )}

              <div
                className={cn(
                  'p-6 rounded-2xl h-full glass-card',
                  'hover:bg-white/[0.06] transition-all duration-300',
                )}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="h-10 w-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-yellow-400" />
                  </div>
                  <span className="text-4xl font-black text-white/5 select-none">{number}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhySection() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/5">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <Badge
              variant="outline"
              className="border-yellow-400/30 text-yellow-400 bg-yellow-400/10 mb-4"
            >
              Why Billings Builds
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
              Senior craft.
              <br />
              <span className="gold-gradient-text">Freelance agility.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              You get the quality and experience of a senior developer without the overhead of a
              big agency or the uncertainty of hiring in-house. Direct communication, full
              ownership, and code you can be proud of.
            </p>

            <ul className="space-y-3">
              {checkmarks.map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="inline-block mt-10">
              <Button
                size="lg"
                className="bg-yellow-400 text-zinc-950 hover:bg-yellow-300 font-bold cursor-pointer shadow-lg shadow-yellow-500/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Right - Differentiators */}
          <div className="flex flex-col gap-4">
            {differentiators.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className={cn(
                  'flex gap-5 p-6 rounded-2xl glass-card',
                  'hover:bg-white/[0.06] transition-all duration-300 cursor-default',
                )}
              >
                <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/5">
      <div className="section-container">
        <div
          className="relative rounded-3xl overflow-hidden p-12 sm:p-16 text-center"
          style={{
            background: `
              radial-gradient(ellipse 80% 80% at 50% 50%, oklch(0.795 0.166 85 / 0.15) 0%, transparent 70%),
              oklch(0.115 0 0)
            `,
            border: '1px solid oklch(0.795 0.166 85 / 0.2)',
          }}
        >
          {/* Grid overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10">
            <p className="text-yellow-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Ready to build?
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 max-w-2xl mx-auto">
              Let's turn your idea into{' '}
              <span className="gold-gradient-text">something real.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
              Tell me about your project and let's see if we're a good fit. No pressure, no
              commitment — just a conversation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-zinc-950 hover:bg-yellow-300 font-bold px-10 py-6 text-base cursor-pointer shadow-2xl shadow-yellow-500/30 transition-all duration-200 hover:shadow-yellow-500/50 hover:-translate-y-0.5"
                >
                  Start the Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="mailto:dbillings100@gmail.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/15 text-white hover:bg-white/8 hover:border-white/25 font-semibold px-10 py-6 text-base cursor-pointer bg-transparent"
                >
                  Email Directly
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <CTASection />
    </main>
  )
}
