import { motion } from 'framer-motion'

const bars = [
  { label: 'Mon', v: 42 },
  { label: 'Tue', v: 58 },
  { label: 'Wed', v: 49 },
  { label: 'Thu', v: 74 },
  { label: 'Fri', v: 91 },
  { label: 'Sat', v: 100 },
  { label: 'Sun', v: 66 },
]

const kpis = [
  { value: '$175K', label: 'Revenue tracked weekly', delta: '+9.7% vs last week' },
  { value: '38%', label: 'Faster reporting cycles', delta: 'from days to minutes' },
  { value: '12', label: 'Live dashboards shipped', delta: 'InnBucks & SPAR Zimbabwe' },
]

const analyticsCompanies = [
  {
    name: 'InnBucks',
    industry: 'Fintech · Mobile Money',
    logo: '💳',
    bgColor: 'from-blue-600 to-blue-700',
  },
  {
    name: 'SPAR Zimbabwe',
    industry: 'Retail · FMCG',
    logo: '🛒',
    bgColor: 'from-red-600 to-red-700',
  },
]

export default function Analytics() {
  return (
    <section id="analytics" className="bg-ink py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-soft">
              Data analytics
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
              Where trust meets insight
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Finally — anyone in your business can get insights grounded in the facts of your own
              data. We build pipelines, semantic models and dashboards that answer questions like
              "what sold best last quarter, and where?" in seconds, not weeks.
            </p>
            <ul className="mt-8 space-y-4 text-white/80">
              {[
                'Sales & transaction analytics with drill-downs by branch, product and period',
                'Automated reporting — scheduled dashboards replace manual spreadsheets',
                'Forecasting and anomaly detection on top of your operational data',
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>

            {/* Companies we've worked with */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft mb-4">
                Companies we've worked with
              </p>
              <div className="flex flex-wrap gap-3">
                {analyticsCompanies.map((company, i) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className={`bg-gradient-to-br ${company.bgColor} rounded-2xl px-6 py-4 flex items-center gap-4 transition-all hover:scale-105 hover:shadow-xl`}
                  >
                    <span className="text-4xl">{company.logo}</span>
                    <div>
                      <p className="font-display text-lg font-semibold">{company.name}</p>
                      <p className="text-sm opacity-90">{company.industry}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <a
              href="#projects"
              className="mt-10 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-white"
            >
              View analytics case studies
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/60">Weekly Revenue Overview</p>
                <p className="font-display text-2xl">Retail transactions</p>
              </div>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-soft">
                Live
              </span>
            </div>
            <div className="mt-8 flex h-48 gap-3">
              {bars.map((b, i) => (
                <div key={b.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${b.v}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.07, ease: 'easeOut' }}
                    className="w-full rounded-t-lg bg-gradient-to-t from-accent/60 to-accent"
                  />
                  <span className="text-xs text-white/50">{b.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              {kpis.map((k) => (
                <div key={k.label}>
                  <p className="font-display text-2xl">{k.value}</p>
                  <p className="mt-1 text-xs text-white/60">{k.label}</p>
                  <p className="mt-1 text-xs font-medium text-emerald-400">{k.delta}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
