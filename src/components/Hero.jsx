import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const slides = [
  { src: './hero/construction.jpg', label: 'Construction' },
  { src: './hero/law.jpg', label: 'Law firms' },
  { src: './hero/restaurant.jpg', label: 'Restaurants' },
  { src: './hero/accounting.jpg', label: 'Accounting' },
  { src: './hero/dealership.jpg', label: 'Car dealerships' },
  { src: './hero/retail.jpg', label: 'Retail & grocery' },
]

const SLIDE_MS = 4500

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={slides[index].src}
          src={slides[index].src}
          alt={slides[index].label}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-25%' }}
          transition={{ duration: 1.1, ease: [0.32, 0.72, 0, 1] }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/80"
        >
          Websites · Marketing · AI Chatbots · Data Analytics
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-white md:text-7xl"
        >
          Digital experiences that make your business look as good as it is.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-6 max-w-2xl text-lg text-white/85"
        >
          From construction sites to law firms, restaurants to car dealerships — we design websites,
          chatbots and analytics that win customers and answer questions before you do.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-white"
          >
            See our work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Talk to us
          </a>
        </motion.div>

        <div className="mt-12 flex items-center gap-3">
          {slides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setIndex(i)}
              aria-label={`Show ${s.label}`}
              className="group flex items-center gap-2"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? 'w-10 bg-white' : 'w-4 bg-white/40 group-hover:bg-white/70'
                }`}
              />
              <span
                className={`hidden text-xs font-medium transition-opacity md:inline ${
                  i === index ? 'text-white' : 'text-white/50'
                }`}
              >
                {s.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
