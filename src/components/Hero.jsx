import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const slides = [
  { src: './hero/construction.jpg', label: 'Construction' },
  { src: 'https://images.unsplash.com/photo-1757359056339-22968344cce6?auto=format&fit=crop&w=2400&q=85', label: 'Real estate & property' },
  { src: './hero/law.jpg', label: 'Law firms' },
  { src: 'https://images.unsplash.com/photo-1776993298422-3e8c397d0235?auto=format&fit=crop&w=2400&q=85', label: 'Restaurants' },
  { src: 'https://images.unsplash.com/photo-1767423802472-f5fd07dfdb10?auto=format&fit=crop&w=2400&q=85', label: 'Accounting' },
  { src: 'https://images.unsplash.com/photo-1699862345412-15a3816d01a1?auto=format&fit=crop&w=2400&q=85', label: 'Car dealerships' },
  { src: './hero/retail.jpg', label: 'Retail & grocery' },
]
const SLIDE_MS = 4500

function contrastFor(image) {
  try {
    const canvas = document.createElement('canvas')
    const width = 32
    const height = 20
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d', { willReadFrequently: true })
    if (!context) return 0.68
    context.drawImage(image, 0, 0, width, height)
    const pixels = context.getImageData(0, 0, width, height).data
    let total = 0
    let count = 0
    for (let y = 6; y < height; y += 1) {
      for (let x = 0; x < 19; x += 1) {
        const offset = (y * width + x) * 4
        total += 0.2126 * pixels[offset] + 0.7152 * pixels[offset + 1] + 0.0722 * pixels[offset + 2]
        count += 1
      }
    }
    const brightness = total / count / 255
    return Math.min(0.78, Math.max(0.48, 0.44 + brightness * 0.55))
  } catch {
    return 0.68
  }
}

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [shade, setShade] = useState(0.58)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    let cancelled = false
    const probe = new window.Image()
    const updateShade = () => {
      if (!cancelled) setShade(contrastFor(probe))
    }
    probe.onload = updateShade
    probe.onerror = () => {
      if (!cancelled) setShade(0.68)
    }
    probe.crossOrigin = 'anonymous'
    probe.src = slides[index].src
    if (probe.complete && probe.naturalWidth) updateShade()
    return () => {
      cancelled = true
      probe.onload = null
      probe.onerror = null
    }
  }, [index])

  return (
    <section id="top" className="relative h-[100svh] min-h-[100svh] w-full overflow-hidden">
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
      <div className="absolute inset-0" style={{ '--hero-shade': shade }} />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24">
        <motion.div
          key={slides[index].label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-4 inline-flex w-fit self-start rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm"
        >
          Industries we serve · {slides[index].label}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="max-w-4xl font-display text-base font-medium leading-[1.08] text-white md:text-2xl"
        >
          Digital experiences that make your business look as good as it is.
        </motion.h1>
        <div className="mt-12 flex items-center gap-2" role="group" aria-label="Choose a hero image">
          {slides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setIndex(i)}
              aria-label={'Show ' + s.label}
              aria-pressed={i === index}
              className="group flex items-center justify-center rounded-full p-1.5"
            >
              <span className={i === index
                ? 'h-1.5 w-10 rounded-full bg-white transition-all duration-500'
                : 'h-1.5 w-4 rounded-full bg-white/50 transition-all duration-500 group-hover:bg-white/80'}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
