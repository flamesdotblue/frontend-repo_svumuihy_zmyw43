import { motion } from "framer-motion";
import { Check, Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#07070b] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(99,102,241,0.25),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 backdrop-blur md:p-10"
        >
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Ready to build your next deck with AI?
              </h3>
              <p className="mt-2 max-w-xl text-white/70">
                Kickstart your storytelling with a powerful co‑pilot. Generate, edit, and export—without leaving your flow.
              </p>

              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-white/75 sm:grid-cols-2">
                <li className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> No signup required</li>
                <li className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Free forever plan</li>
                <li className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Exports to PPT & Slides</li>
                <li className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Brand‑safe generation</li>
              </ul>
            </div>

            <div className="shrink-0">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                <Rocket className="h-4 w-4" />
                Launch the generator
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
