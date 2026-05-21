import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { technicalSkills, professionalSkills } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

function SkillCard({ name, level, icon, i }: { name: string; level: number; icon: string; i: number }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[icon] ?? Icons.Sparkles;
  const C = 2 * Math.PI * 36;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative flex items-center gap-4 rounded-2xl glass neon-border p-5 transition-shadow hover:glow-purple"
    >
      <div className="relative h-20 w-20 shrink-0">
        <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
          <circle cx="40" cy="40" r="36" stroke="oklch(1 0 0 / 0.1)" strokeWidth="4" fill="none" />
          <motion.circle
            cx="40" cy="40" r="36"
            stroke="url(#skill-grad)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={C}
            initial={{ strokeDashoffset: C }}
            whileInView={{ strokeDashoffset: C - (C * level) / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: i * 0.05 }}
          />
          <defs>
            <linearGradient id="skill-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.85 0.18 195)" />
              <stop offset="100%" stopColor="oklch(0.65 0.27 300)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-6 w-6 text-[oklch(0.85_0.18_195)]" />
        </div>
      </div>
      <div className="min-w-0">
        <div className="font-semibold">{name}</div>
        <div className="font-mono text-xs text-muted-foreground">{level}%</div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader kicker="Toolkit" title="Skills" subtitle="A blend of technical depth and professional polish." />
        <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">// Technical</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technicalSkills.map((s, i) => <SkillCard key={s.name} {...s} i={i} />)}
        </div>
        <h3 className="mb-6 mt-14 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">// Professional</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {professionalSkills.map((s, i) => <SkillCard key={s.name} {...s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
