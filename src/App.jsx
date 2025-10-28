import Hero from "./components/Hero";
import VisualShowcase from "./components/VisualShowcase";
import Features from "./components/Features";
import CTA from "./components/CTA";
import { Rocket } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      {/* Top glass nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-fuchsia-500">
              <Rocket className="h-4 w-4 text-black" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white/90">AuraSlides</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#showcase" className="transition hover:text-white">Showcase</a>
            <a href="#" className="transition hover:text-white">Themes</a>
            <a href="#" className="transition hover:text-white">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10 md:inline-block">Sign in</a>
            <a href="#" className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">Start free</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <VisualShowcase />
        <Features />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-black/60 py-8 text-sm text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p>© {new Date().getFullYear()} AuraSlides. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
