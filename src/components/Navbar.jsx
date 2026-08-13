import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-cream/90 text-ink shadow-sm backdrop-blur' : 'bg-transparent text-white'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight">
          Runesu<span className="text-accent">.</span>Digital
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="opacity-80 transition-opacity hover:opacity-100">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              scrolled ? 'bg-ink text-white hover:bg-accent' : 'bg-white text-ink hover:bg-accent hover:text-white'
            }`}
          >
            Start a project
          </a>
        </div>
      </nav>
    </motion.header>
  )
}
