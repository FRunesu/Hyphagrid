import { motion } from 'framer-motion'

const stats = [
  { value: '81%', label: 'of consumers research a business online before buying' },
  { value: '75%', label: 'judge a company’s credibility by its website design' },
  { value: '88%', label: 'are less likely to return after a bad website experience' },
  { value: '0.05s', label: 'is all it takes for visitors to form an opinion of your site' },
]

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
              className="rounded-3xl bg-cream p-8"
            >
              <p className="font-display text-5xl font-medium text-accent">{s.value}</p>
              <p className="mt-4 leading-relaxed text-ink/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
