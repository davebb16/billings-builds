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
import { SpaceBackground } from '@/components/SpaceBackground'

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
      "Clean, tested, documented code. Regular check-ins and demos keep you in the loop the whole time.",
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description:
      "Deployment, monitoring, and post-launch support. We ship together — and I'm here if anything needs fixing.",
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
    description: "TypeScript-first, tested, documented code you'll actually want to maintain.",
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
  "Code that's yours to keep",
  'Post-launch support included',
]

// ─── Sections ────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <SpaceBackground />

      <div className="section-container relative z-10 flex flex-col items-center text-center pt-28 pb-20">
        {/* Badge — neutral, only the dot is red */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/12 bg-white/[0.04] text-zinc-400 text-sm font-medium mb-10 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          Available for new projects
        </div>

        {/* Headline — user's copy, one gradient word */}
        <h1
          className="font-bold tracking-tight leading-[1.05] mb-7 max-w-3xl"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
        >
          <span className="accent-gradient-text">High Quality</span>
          <span className="text-white"> Digital Products Fast.</span>
        </h1>

        {/* Sub — user's copy */}
        <p className="text-base sm:text-lg text-zinc-500 max-w-xl leading-relaxed mb-10">
          Freelance developer crafting top of the line websites, APIs, and mobile
          experiences. From idea to production — fast.
        </p>

        {/* CTAs — smaller, less aggressive */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-12">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-red-500 text-white hover:bg-red-400 font-semibold px-8 py-5 text-sm shadow-md shadow-red-500/10 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <a href="#services">
            <Button
              variant="outline"
              size="lg"
              className="border-white/12 text-zinc-400 hover:text-white hover:bg-white/5 hover:border-white/20 font-medium px-8 py-5 text-sm cursor-pointer transition-all duration-200 bg-transparent backdrop-blur-sm"
            >
              What I Build
            </Button>
          </a>
        </div>

        {/* Stats — smaller, more restrained */}
        <div className="flex items-center gap-8 sm:gap-10">
          {[
            { value: '20+', label: 'Projects Shipped' },
            { value: '4+', label: 'Years Experience' },
            { value: '5.0★', label: 'Avg. Rating' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                'flex flex-col items-center',
                i > 0 && 'pl-8 sm:pl-10 border-l border-white/8',
              )}
            >
              <span className="text-xl sm:text-2xl font-bold text-white leading-none mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-600 whitespace-nowrap">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-700 hover:text-zinc-500 transition-colors cursor-pointer z-10"
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
        <div className="mb-14 max-w-2xl">
          <Badge variant="outline" className="border-white/10 text-zinc-500 bg-transparent mb-4">
            Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            What I Build
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed">
            From front-end magic to back-end power — full-stack development tailored to your
            product needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map(({ icon: Icon, title, description, tags }) => (
            <div
              key={title}
              className="group relative p-7 rounded-2xl cursor-default glass-card hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/8">
                <Icon className="h-5 w-5 text-zinc-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2.5">{title}</h3>
              <p className="text-zinc-500 leading-relaxed mb-5 text-sm">{description}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] text-zinc-500 border border-white/6"
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
        <div className="mb-14 max-w-2xl">
          <Badge variant="outline" className="border-white/10 text-zinc-500 bg-transparent mb-4">
            Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            How We Work Together
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed">
            A proven 4-step process that keeps projects on track and clients in the loop from day
            one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-2xl h-full glass-card hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-zinc-400" />
                </div>
                <span className="text-4xl font-black text-white/[0.04] select-none">{number}</span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
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
          <div>
            <Badge
              variant="outline"
              className="border-white/10 text-zinc-500 bg-transparent mb-4"
            >
              Why Billings Builds
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
              Senior craft.{' '}
              <span className="accent-gradient-text">Freelance agility.</span>
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              You get the quality and experience of a senior developer without the overhead of a
              big agency. Direct communication, full ownership, and code you can be proud of.
            </p>
            <ul className="space-y-3">
              {checkmarks.map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-400 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-zinc-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-block mt-10">
              <Button
                size="lg"
                className="bg-red-500 text-white hover:bg-red-400 font-semibold cursor-pointer shadow-md shadow-red-500/10 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {differentiators.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 p-6 rounded-2xl glass-card hover:bg-white/[0.06] transition-all duration-300 cursor-default"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-zinc-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 text-sm">{title}</h3>
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
          className="violet-glow relative rounded-3xl overflow-hidden p-12 sm:p-16 text-center"
          style={{
            background: 'oklch(0.115 0 0)',
            border: '1px solid oklch(1 0 0 / 8%)',
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative z-10">
            <p className="text-zinc-500 font-medium text-xs tracking-widest uppercase mb-5">
              Ready to build?
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 max-w-2xl mx-auto">
              Let's turn your idea into{' '}
              <span className="accent-gradient-text">something real.</span>
            </h2>
            <p className="text-zinc-500 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Tell me about your project and let's see if we're a good fit. No pressure, no
              commitment — just a conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-red-500 text-white hover:bg-red-400 font-semibold px-10 py-5 text-sm cursor-pointer shadow-md shadow-red-500/10 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  Start the Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="mailto:dbillings100@gmail.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/12 text-zinc-400 hover:text-white hover:bg-white/5 hover:border-white/20 font-medium px-10 py-5 text-sm cursor-pointer bg-transparent"
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
