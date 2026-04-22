import { Link } from '@tanstack/react-router'
import { Zap, Mail } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:dbillings100@gmail.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-zinc-950">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
              <Zap className="h-3.5 w-3.5 text-zinc-950 fill-zinc-950" />
            </div>
            <span className="font-bold text-sm text-white">
              Billings<span className="text-yellow-400">Builds</span>
              <span className="text-zinc-500 font-normal ml-1">LLC</span>
            </span>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link to="/" className="hover:text-white transition-colors cursor-pointer">
              Home
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors cursor-pointer">
              Contact
            </Link>
            <a
              href="mailto:dbillings100@gmail.com"
              className="hover:text-white transition-colors cursor-pointer"
            >
              dbillings100@gmail.com
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="h-8 w-8 rounded-lg border border-white/10 flex items-center justify-center text-zinc-500 hover:text-yellow-400 hover:border-yellow-400/30 transition-all duration-200 cursor-pointer"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Billings Builds LLC. All rights reserved. Crafted with care by David Billings.
        </div>
      </div>
    </footer>
  )
}
