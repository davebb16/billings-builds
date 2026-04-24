import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CtaButton } from '@/components/CtaButton'
import bbLogo from '@/assets/images/bb-logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={cn(
          'w-full max-w-5xl rounded-2xl px-5 py-3 transition-all duration-300',
          scrolled
            ? 'bg-zinc-950/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50'
            : 'bg-zinc-950/60 backdrop-blur-md border border-white/8',
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer group">
            <img src={bbLogo} alt="Billings Builds" className="h-8 w-8 rounded-lg" />
            <div className='flex gap-1'>
            <span
              className="text-white text-base tracking-tight"
              style={{ fontFamily: "'Conneqt', sans-serif", fontWeight: 700 }}
            >
              Billings
            </span>
            <span
              className="text-red-500 text-base tracking-tight"
              style={{ fontFamily: "'Conneqt', sans-serif", fontWeight: 700 }}
            >Builds</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer"
                activeProps={{ className: 'text-white bg-white/5' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <CtaButton size="sm" className="hover:translate-y-0 shadow-lg shadow-red-500/25">
                Start a Project
              </CtaButton>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <CtaButton className="w-full mt-2 hover:translate-y-0">
                Start a Project
              </CtaButton>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
