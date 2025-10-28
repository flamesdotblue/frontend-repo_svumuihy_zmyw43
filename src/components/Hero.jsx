import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Sparkles, Wand2, FileText, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-black">
      {/* Background gradient auras */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35),transparent_60%)] blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-28 lg:py-32">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span>Next‑gen AI Presentation Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Create stunning decks in seconds with an AI co‑pilot
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 max-w-xl text-base text-white/70 sm:text-lg"
          >
            Turn rough ideas into polished, on‑brand presentations. Generate slides, visuals, and speaker notes—instantly. Beautiful by default. Customizable when you need it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <Wand2 className="h-4 w-4" />
              Generate your first deck
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <FileText className="h-4 w-4" />
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 flex items-center gap-6 text-white/60"
          >
            <div className="flex items-center gap-2">
              <Rocket className="h-4 w-4 text-emerald-300" />
              <span className="text-sm">From idea to slides in under 60s</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="text-sm">No credit card required</div>
          </motion.div>
        </div>

        {/* Spline Scene */}
        <div className="relative h-[60vh] w-full md:h-[70vh]">
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          {/* Soft vignette overlay to blend with background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
