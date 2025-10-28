import { motion } from "framer-motion";

const cards = [
  { title: "Pitch Deck", accent: "from-amber-400/30 to-orange-500/20" },
  { title: "Marketing Plan", accent: "from-violet-400/30 to-fuchsia-500/20" },
  { title: "Investor Update", accent: "from-cyan-400/30 to-blue-500/20" },
];

function SlideMock({ title }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4">
      {/* Title bar */}
      <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2">
        <div className="text-sm font-medium text-white/90">{title}</div>
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-rose-400" />
        </div>
      </div>
      {/* Body grid */}
      <div className="mt-4 grid grid-cols-12 gap-3">
        <div className="col-span-7 space-y-3">
          <div className="h-4 w-3/4 rounded bg-white/20" />
          <div className="h-3 w-5/6 rounded bg-white/15" />
          <div className="h-3 w-2/3 rounded bg-white/10" />
          <div className="mt-3 h-28 rounded-lg bg-gradient-to-br from-white/10 to-transparent" />
        </div>
        <div className="col-span-5 space-y-3">
          <div className="h-24 rounded-lg bg-gradient-to-br from-amber-300/20 to-fuchsia-300/10" />
          <div className="h-16 rounded-lg bg-gradient-to-br from-cyan-300/20 to-blue-300/10" />
          <div className="h-3 w-3/5 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export default function VisualShowcase() {
  return (
    <section id="showcase" className="relative w-full bg-[#06060a] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Visual first. Minimal text.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-2 max-w-xl text-center text-white/65"
        >
          Explore how your slides can look before you even start typing.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -6, rotate: -0.5, scale: 1.01 }}
              className={`relative rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur`}
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.accent} blur-2xl`} />
              <SlideMock title={c.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
