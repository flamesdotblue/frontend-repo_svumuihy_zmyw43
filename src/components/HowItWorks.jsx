import { motion } from "framer-motion";
import { Upload, FileText, Wand2, PlayCircle } from "lucide-react";

const steps = [
  {
    title: "Start with a brief",
    desc: "Paste an outline, drop a doc, or just type a prompt. Add brand preferences in one go.",
    icon: Upload,
  },
  {
    title: "AI drafts your deck",
    desc: "Content, structure, and visual direction generated instantly—clear, concise, and on‑brand.",
    icon: Wand2,
  },
  {
    title: "Refine and export",
    desc: "Edit slides inline, regenerate sections, and export to PPT, Slides, or PDF with animations intact.",
    icon: FileText,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative w-full bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
            >
              From idea to deck, in three steps
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-2 max-w-xl text-white/65"
            >
              A streamlined flow designed for focus. Let automation handle the busywork.
            </motion.p>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <PlayCircle className="h-4 w-4" />
            Watch a 60s demo
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex rounded-xl bg-white/10 p-3">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-white/60">Step {i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>

              <div className="mt-4 h-36 w-full rounded-xl bg-gradient-to-br from-white/5 to-white/0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
