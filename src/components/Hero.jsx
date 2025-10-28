import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Sparkles, Wand2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Non-blocking gradient auras and vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div className="absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.3),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-2xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/85 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-amber-300" />
          <span>AI‑powered deck designer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="mt-6 max-w-5xl bg-gradient-to-br from-white via-white to-amber-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Present like a brand. Create like a pro.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-4 max-w-2xl text-balance text-base text-white/75 sm:text-lg"
        >
          Less typing, more visual. Generate stunning slides with an interactive, modern canvas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            <Wand2 className="h-4 w-4" />
            Generate a deck
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/15"
          >
            See visuals
          </a>
        </motion.div>

        {/* Bottom soft fade so content above the fold feels grounded */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
}
