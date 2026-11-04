import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'

const stats = [
  { value: 81, suffix: '%', decimals: 0, category: 'ONLINE RESEARCH', label: 'of consumers research a business online before buying' },
  { value: 75, suffix: '%', decimals: 0, category: 'CREDIBILITY', label: 'judge a company’s credibility by its website design' },
  { value: 88, suffix: '%', decimals: 0, category: 'CUSTOMER RETENTION', label: 'are less likely to return after a bad website experience' },
  { value: 0.05, suffix: 's', decimals: 2, category: 'FIRST IMPRESSION', label: 'is all it takes for visitors to form an opinion of your site' },
]

function CountUp({ value, suffix, decimals, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = useReducedMotion()
  const count = useMotionValue(0)
  const display = useTransform(count, latest =>
    (decimals ? latest.toFixed(decimals) : Math.round(latest).toString()) + suffix
  )

  useEffect(() => {
    if (!inView) return
    if (prefersReducedMotion) {
      count.set(value)
      return
    }
    const controls = animate(count, value, { duration: 1.35, ease: 'easeOut' })
    return () => controls.stop()
  }, [count, inView, prefersReducedMotion, value])

  return (
    <motion.span ref={ref} aria-label={value + suffix} className="hypha-stat-value">
      {display}
    </motion.span>
  )
}

export default function WhyWebsite() {
  return (
    <section id="why-website" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Why your company needs a website
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
            Your customers are already looking for you online
          </h2>
          <p className="mt-5 text-lg text-ink/70">
            A website is your hardest-working employee: open 24/7, answering questions, building
            trust and capturing leads while you sleep. Without one, those customers find your
            competitors instead.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="hypha-stat-card rounded-3xl bg-cream p-8"
            >
              <p className="hypha-stat-kicker">{String(i + 1).padStart(2, '0')} / {s.category}</p>
              <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} label={s.label} />
              <p className="hypha-stat-label">{s.label}</p>
              <div className="hypha-stat-track" aria-hidden="true">
                <motion.span
                  className="hypha-stat-fill"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 1.15, delay: i * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
