import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { hackathons } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Hackathons() {
  return (
    <section id="hackathons" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="Battle-Tested"
          title="Hackathons"
          subtitle="48–72 hour sprints turning bold ideas into working products."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {hackathons.map((h, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[h.icon] ?? Icons.Rocket;
            return (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl glass neon-border p-6"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full opacity-30 transition-opacity group-hover:opacity-60"
                  style={{ background: "var(--gradient-neon)" }} />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl glass-strong">
                    <Icon className="h-5 w-5 text-[oklch(0.85_0.18_195)]" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{h.org}</div>
                    <h3 className="mt-1 text-lg font-bold">{h.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      <span className="text-foreground/80">Project · </span>
                      {h.project}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
