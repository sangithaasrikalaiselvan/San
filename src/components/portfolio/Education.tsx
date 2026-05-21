import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker="Academia" title="Education" subtitle="The foundation of every system I build." />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass neon-border p-6 transition-shadow hover:glow-cyan"
            >
              <div
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ background: "var(--gradient-neon)" }}
              />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl glass-strong">
                  <GraduationCap className="h-5 w-5 text-[oklch(0.85_0.18_195)]" />
                </div>
                <h3 className="mt-5 text-xl font-bold leading-tight">{e.school}</h3>
                <p className="mt-2 text-muted-foreground">{e.degree}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {e.duration}
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold text-background"
                    style={{ background: "var(--gradient-neon)" }}
                  >
                    {e.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
