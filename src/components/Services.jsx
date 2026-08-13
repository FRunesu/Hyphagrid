import { motion } from 'framer-motion'
import { Globe, Megaphone, Bot, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    body: 'Fast, modern, mobile-first websites that make your business look established and win trust in the first five seconds.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    body: 'Campaigns, SEO and content that put your business in front of the people already searching for what you sell.',
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    body: 'Chatbots that answer customer questions 24/7, qualify leads and book appointments — so no enquiry ever goes cold.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    body: 'Dashboards and insight pipelines that turn your sales, transaction and operations data into decisions you can act on.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">What we do</p>
        <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
          One team for your entire digital presence
        </h2>
        <p className="mt-5 text-lg text-ink/70">
          Deploy a website, orchestrate marketing, and continuously improve with chatbots and
          analytics — all built and maintained by one partner.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-14 grid gap-6 md:grid-cols-2"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="group rounded-3xl border border-ink/10 bg-white p-8 transition-shadow hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
              <s.icon size={22} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-medium">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-ink/70">{s.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
