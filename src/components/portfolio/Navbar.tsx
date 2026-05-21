import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navSections } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
      const sections = ["hero", ...navSections.map((n) => n.id)];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-strong" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => scrollTo("hero")} className="font-mono text-sm tracking-[0.3em] text-gradient-neon">
            SANGITHAA.SRI
          </button>
          <div className="hidden items-center gap-1 md:flex">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--gradient-neon)", opacity: 0.18 }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo("connect")}
            className="hidden rounded-full px-4 py-2 text-xs font-medium glass neon-border hover:glow-cyan transition-all md:block"
          >
            Hire Me
          </button>
        </div>
        <div className="h-[2px] w-full bg-transparent">
          <div
            className="h-full transition-[width]"
            style={{ width: `${progress}%`, background: "var(--gradient-neon)" }}
          />
        </div>
      </motion.nav>
    </>
  );
}
