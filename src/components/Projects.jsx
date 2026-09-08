import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'

const websites = [
  {
    name: 'Brimpton LLC',
    url: 'https://www.brimptonllc.com/',
    tag: 'Staffing & Outsourcing',
    blurb:
      'Corporate site for a virtual staffing company connecting businesses with reliable remote teams and virtual staff solutions.',
    hero: './hero/retail.jpg',
  },
  {
    name: 'Omnyx Labs',
    url: 'https://omnyxlabs.vercel.app/docs/agentic',
    tag: 'AI Platform',
    blurb:
      'Documentation and product site for a personality-intelligence platform that helps AI agents adapt to how each user works.',
    hero: './hero/construction.jpg',
  },
  {
    name: 'Mudhumeni (M.A.L)',
    url: 'https://mudhumeni-frontend.vercel.app/',
    tag: 'AgriTech',
    blurb:
      'Landing site for an AI-driven smart greenhouse platform — IoT sensors, edge AI and dashboards acting as a digital extension officer for farmers.',
    hero: './hero/retail.jpg',
  },
  {
    name: 'FieldForce Agro Services',
    url: 'https://field-force-website.vercel.app/',
    tag: 'Agrochemicals',
    blurb:
      'Full company website for an agrochemical supplier — services, product catalogues, crop guides, gallery and advisory request forms.',
    hero: './hero/construction.jpg',
  },
  {
    name: 'Mundia & Mudhara Legal Practitioners',
    url: 'https://mundia-and-mudhara-legal-practition.vercel.app/',
    tag: 'Law Firm',
    blurb:
      'Elegant website for a Harare commercial law firm — practice areas, team profiles and a professional presence that reflects the firm's standing.',
    hero: './hero/law.jpg',
  },
]

const caseStudies = [
  {
    name: 'InnBucks',
    tag: 'Fintech · Mobile Money',
    summary:
      'Transaction analytics for one of Zimbabwe's fastest-growing mobile money services.',
    challenge:
      'Millions of wallet transactions across agents and branches, but reporting lived in slow, manual spreadsheets. Leadership couldn't see daily patterns, agent performance or unusual activity[...]',
    solution:
      'We built an automated analytics pipeline and dashboard suite: daily transaction volumes and values, branch and agent drill-downs, customer activity cohorts, and anomaly flags for unusual tr[...]',
    results: [
      'Reporting cycle cut from days to minutes with automated daily dashboards',
      'Agent and branch performance visible at a glance, enabling targeted support',
      'Anomaly detection surfaced irregular transaction patterns for review',
    ],
  },
  {
    name: 'SPAR Zimbabwe',
    tag: 'Retail · FMCG',
    summary:
      'Sales and inventory analytics across retail stores for a leading supermarket brand.',
    challenge:
      'Store-level POS data existed in silos, making it hard to compare stores, spot fast- and slow-moving lines, or plan stock around demand patterns and seasonality.',
    solution:
      'We consolidated POS and inventory data into a single model with dashboards covering sales by store, category and product line, basket analysis, and stock-movement views that highlight overs[...]',
    results: [
      'Single view of sales across stores, categories and time periods',
      'Fast/slow-moving product lines identified, informing promotions and ordering',
      'Stock planning informed by demand trends instead of gut feel',
    ],
  },
]

export default function Projects() {
  const [open, setOpen] = useState(null)

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Projects</p>
        <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
          Work we've shipped
        </h2>
      </motion.div>

      <h3 className="mt-14 font-display text-2xl font-medium">Data analytics case studies</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {caseStudies.map((c) => (
          <motion.button
            key={c.name}
            onClick={() => setOpen(c)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="group rounded-3xl bg-ink p-8 text-left text-white transition-transform hover:-translate-y-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
              {c.tag}
            </p>
            <h4 className="mt-3 font-display text-3xl font-medium">{c.name}</h4>
            <p className="mt-3 text-white/70">{c.summary}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-soft">
              Read case study
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.button>
        ))}
      </div>

      <h3 className="mt-16 font-display text-2xl font-medium">Websites</h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {websites.map((w) => (
          <motion.a
            key={w.name}
            href={w.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 transition-shadow hover:shadow-xl"
          >
            {/* Hero background image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity group-hover:opacity-10 duration-300"
              style={{ backgroundImage: `url('${w.hero}')` }}
            />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{w.tag}</p>
              <h4 className="mt-3 font-display text-xl font-medium">{w.name}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{w.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                Visit site
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8 md:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {open.tag}
                  </p>
                  <h4 className="mt-2 font-display text-3xl font-medium">{open.name}</h4>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Close case study"
                  className="rounded-full p-2 text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="mt-6 space-y-6 text-ink/80">
                <div>
                  <h5 className="font-semibold text-ink">The challenge</h5>
                  <p className="mt-2 leading-relaxed">{open.challenge}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-ink">What we built</h5>
                  <p className="mt-2 leading-relaxed">{open.solution}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-ink">Results</h5>
                  <ul className="mt-2 space-y-2">
                    {open.results.map((r) => (
                      <li key={r} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
