import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 text-white md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-soft">
            Let’s work together
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-6xl">
            Ready to look the part online?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Tell us about your business and we’ll show you what a website, chatbot or analytics
            dashboard could do for it — no jargon, no obligation.
          </p>
          <a
            href="mailto:frunesu1.0@gmail.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-white"
          >
            <Mail size={18} />
            frunesu1.0@gmail.com
          </a>
        </motion.div>
      </div>
      <footer className="mt-24 border-t border-white/10 pt-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/50 md:flex-row">
          <p>
            Hypha<span className="text-accent">grid</span> — Websites · Marketing · AI Chatbots ·
            Data Analytics
          </p>
          <p>© {new Date().getFullYear()} Hyphagrid. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}
