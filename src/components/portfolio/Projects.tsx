import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Sparkles, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";

export function Projects() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker="Build Log" title="Projects" subtitle="Click any project to expand a detailed breakdown." />
        <div className="space-y-4">
          {projects.map((p, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`overflow-hidden rounded-2xl glass neon-border transition-shadow ${
                  isOpen ? "shadow-[var(--shadow-neon)]" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: "var(--gradient-neon)" }}
                    >
                      <Sparkles className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {p.category}
                      </div>
                      <h3 className="text-base font-semibold md:text-lg">{p.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="hidden rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-400 md:inline-flex">
                      {p.status}
                    </span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="border-t border-border/60 px-5 pb-6 pt-5">
                        <p className="text-muted-foreground">{p.description}</p>
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full glass px-3 py-1 text-[11px] font-mono text-[oklch(0.85_0.18_195)]"
                            >
                              {t}
                            </span>
                          ))}
                          <Button asChild variant="outline" size="sm" className="ml-auto gap-1.5">
                            <a href={p.link} target="_blank">
                              {p.linkText || "View Project"}
                              <ArrowUpRight className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
