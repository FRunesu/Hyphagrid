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
        scrolled ? 'bg-cream/95 text-ink shadow-sm backdrop-blur' : 'bg-transparent text-white'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 px-5 py-3 sm:px-6">
        <a href="#top" className="shrink-0 font-display text-xl font-semibold tracking-tight">
          biz<span className="text-accent">.amp</span>
        </a>
        <div className="order-3 flex w-full items-center gap-4 overflow-x-auto py-2 text-xs font-medium lg:order-none lg:w-auto lg:gap-5 xl:gap-6 xl:text-sm">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="whitespace-nowrap opacity-80 transition-opacity hover:opacity-100">
              {link.label}
            </a>
          ))}
          <a href="#contact" className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:px-4 ${
            scrolled ? 'bg-ink text-white hover:bg-accent' : 'bg-white text-ink hover:bg-accent hover:text-white'
          }`}>
            Start a project
          </a>
        </div>
      </nav>
    </motion.header>
  )
}
