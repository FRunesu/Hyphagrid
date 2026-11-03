import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Data Analytics', href: '#analytics' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why a Website', href: '#why-website' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      if (window.scrollY > 40) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const headerTone = scrolled || menuOpen
    ? 'bg-cream/95 text-ink shadow-sm backdrop-blur'
    : 'bg-transparent text-white'

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerTone}`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <a href="#top" className="shrink-0 font-display text-xl font-semibold tracking-tight">
          Hypha<span className="text-accent">grid</span>
        </a>

        <div className="hidden items-center gap-5 text-sm font-medium lg:flex xl:gap-7">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="whitespace-nowrap opacity-80 transition-opacity hover:opacity-100">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              scrolled ? 'bg-ink text-white hover:bg-accent' : 'bg-white text-ink hover:bg-accent hover:text-white'
            }`}
          >
            Start a project
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-current/20 lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-ink/10 bg-cream px-5 pb-5 pt-2 text-ink shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="border-b border-ink/10 py-3 text-sm font-medium">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-4 w-fit rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white">
              Start a project
            </a>
          </div>
        </div>
      )}
    </motion.header>
  )
}
