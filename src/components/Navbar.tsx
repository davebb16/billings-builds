import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-red-500/25">
              <Zap className="h-4 w-4 text-white fill-white" />
            </div>
            <span className="font-bold text-base tracking-tight text-white">
              Billings<span className="text-red-500">Builds</span>
            </span>
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
              <Button
                size="sm"
                className="bg-red-500 text-white hover:bg-red-400 font-semibold cursor-pointer shadow-lg shadow-red-500/25 transition-all duration-200"
              >
                Start a Project
              </Button>
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
              <Button className="w-full mt-2 bg-red-500 text-white hover:bg-red-400 font-semibold cursor-pointer">
                Start a Project
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
