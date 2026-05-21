import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader kicker="Milestones" title="Achievements" subtitle="Recognitions earned across academics, ideathons, and hackathons." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[a.icon] ?? Icons.Award;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ scale: 1.04 }}
                className="group relative overflow-hidden rounded-2xl glass p-6"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at center, oklch(0.65 0.27 300 / 0.2), transparent 70%)" }} />
                <div className="relative">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl glass-strong glow-purple">
                    <Icon className="h-6 w-6 text-[oklch(0.85_0.18_195)]" />
                  </div>
                  <p className="font-medium leading-snug">{a.title}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
