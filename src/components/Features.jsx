import { motion } from "framer-motion";
import { Wand2, Timer, Zap, Shield, FileText, Sparkles } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI slide generation",
    desc: "Describe your idea and let the model draft a full deck: titles, bullets, speaker notes, and design layout.",
    color: "from-fuchsia-500/20 to-purple-500/20",
  },
  {
    icon: Timer,
    title: "Lightning fast",
    desc: "Go from prompt to presentation in under a minute with server‑side rendering and smart caching.",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Zap,
    title: "Design presets",
    desc: "Pick from premium themes engineered by brand designers. Always crisp typography and spacing.",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Shield,
    title: "Brand‑safe",
    desc: "Set brand colors, logos, and tone once. Every deck respects your guardrails and content policy.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: FileText,
    title: "Export anywhere",
    desc: "One click export to PowerPoint, Google Slides, or PDF. Keep animations and vector quality.",
    color: "from-indigo-500/20 to-sky-500/20",
  },
  {
    icon: Sparkles,
    title: "Smart visuals",
    desc: "Auto‑illustrations, charts, and icons sourced and styled to match your narrative—no stock look.",
    color: "from-pink-500/20 to-rose-500/20",
  },
];

export default function Features() {
  return (
    <section className="relative w-full bg-[#06060a] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Everything you need to ship a beautiful deck
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/60"
        >
          Thoughtfully crafted features that balance creative control with blazing speed.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${f.color} blur-2xl`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
