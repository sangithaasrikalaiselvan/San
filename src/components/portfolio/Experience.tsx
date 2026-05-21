import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Briefcase, ChevronDown, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader kicker="Career" title="Experience" subtitle="Roles where I shipped real ML systems and learned in the wild." />
        <div className="relative">
          <div
            className="absolute left-6 top-0 h-full w-px"
            style={{ background: "linear-gradient(var(--neon-cyan), var(--neon-purple), transparent)" }}
          />
          <div className="space-y-5">
            {experiences.map((e, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={e.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-16"
                >
                  <div
                    className="absolute left-3 top-5 flex h-7 w-7 items-center justify-center rounded-full glass-strong"
                    style={{ boxShadow: "0 0 20px oklch(0.78 0.18 200 / 0.6)" }}
                  >
                    <Briefcase className="h-3.5 w-3.5 text-[oklch(0.85_0.18_195)]" />
                  </div>
                  <div
                    className={`overflow-hidden rounded-2xl glass neon-border transition-shadow ${
                      isOpen ? "shadow-[var(--shadow-neon)]" : ""
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between p-5 text-left"
                    >
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {e.company}
                        </div>
                        <h3 className="text-lg font-semibold">{e.role}</h3>
                        <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" /> {e.duration}
                        </div>
                      </div>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown className="h-5 w-5" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                        >
                          <div className="border-t border-border/60 px-5 pb-6 pt-4 text-muted-foreground">
                            {e.details}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
