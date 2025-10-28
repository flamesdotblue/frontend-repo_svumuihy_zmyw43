import { motion } from "framer-motion";
import { Wand2, Timer, Zap, Shield, FileText, Sparkles } from "lucide-react";

const features = [
  { icon: Wand2, title: "1‑click decks", color: "from-amber-400/30 to-orange-500/20" },
  { icon: Timer, title: "Under 60s", color: "from-cyan-400/30 to-blue-500/20" },
  { icon: Zap, title: "On‑brand themes", color: "from-fuchsia-400/30 to-violet-500/20" },
  { icon: Shield, title: "Guardrails", color: "from-emerald-400/30 to-teal-500/20" },
  { icon: FileText, title: "PPT, Slides, PDF", color: "from-indigo-400/30 to-sky-500/20" },
  { icon: Sparkles, title: "Smart visuals", color: "from-pink-400/30 to-rose-500/20" },
];

export default function Features() {
  return (
    <section className="relative w-full bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Designed for speed and polish
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur"
            >
              <div className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${f.color} blur-2xl`} />
              <div className="relative z-10 flex flex-col items-start gap-3">
                <div className="inline-flex rounded-xl bg-white/10 p-3">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white">{f.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
