import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUp } from 'lucide-react'

const bars = [
  { label: 'Mon', v: 42 }, { label: 'Tue', v: 58 }, { label: 'Wed', v: 49 },
  { label: 'Thu', v: 74 }, { label: 'Fri', v: 91 }, { label: 'Sat', v: 100 },
  { label: 'Sun', v: 66 },
]
const kpis = [
  { value: '$175K', label: 'Revenue tracked weekly', delta: '+9.7% vs last week' },
  { value: '38%', label: 'Faster reporting cycles', delta: 'from days to minutes' },
  { value: '12', label: 'Live dashboards shipped', delta: 'InnBucks & SPAR Zimbabwe' },
]

export default function Analytics() {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const openFromNavigation = () => {
      if (window.location.hash === '#analytics') setExpanded(true)
    }
    openFromNavigation()
    window.addEventListener('hashchange', openFromNavigation)
    return () => window.removeEventListener('hashchange', openFromNavigation)
  }, [])

  return (
    <section id="analytics" className="bg-ink py-14 text-white md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">Data analytics</p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight md:text-4xl">Turn your business data into clearer decisions.</h2>
            {!expanded && <p className="mt-3 text-base text-white/70">See how analytics can help your team understand sales, customers and operations.</p>}
          </div>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-white"
          >
            {expanded ? 'Show less' : 'Explore data analytics'}
            {expanded ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          </button>
        </div>

        {expanded && (
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <h3 className="font-display text-3xl font-medium leading-tight md:text-4xl">Where trust meets insight</h3>
              <p className="mt-5 text-lg text-white/70">
                Finally, anyone in your business can get insights grounded in your own data. We build pipelines, semantic models and dashboards that answer questions like “what sold best last quarter, and where?” in seconds, not weeks.
              </p>
              <ul className="mt-7 space-y-3 text-white/80">
                {[
                  'Sales and transaction analytics by branch, product and period',
                  'Automated reporting that replaces manual spreadsheets',
                  'Forecasting and anomaly detection on operational data',
                ].map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}
              </ul>
              <a href="#projects" className="mt-8 inline-block rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink">
                View analytics case studies
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <div><p className="text-sm text-white/60">Weekly Revenue Overview</p><p className="font-display text-2xl">Retail transactions</p></div>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-soft">Example</span>
              </div>
              <div className="mt-7 flex h-40 gap-3">
                {bars.map((bar, i) => (
                  <div key={bar.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                    <motion.div initial={{ height: 0 }} animate={{ height: `${bar.v}%` }} transition={{ duration: 0.6, delay: i * 0.05 }} className="w-full rounded-t-lg bg-gradient-to-t from-accent/60 to-accent" />
                    <span className="text-xs text-white/50">{bar.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-3">
                {kpis.map((kpi) => <div key={kpi.label}><p className="font-display text-2xl">{kpi.value}</p><p className="mt-1 text-xs text-white/60">{kpi.label}</p><p className="mt-1 text-xs font-medium text-emerald-400">{kpi.delta}</p></div>)}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
