import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="Credentials"
          title="Certifications"
          subtitle="Verified credentials from world-class institutions and tech leaders."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative h-full overflow-hidden rounded-2xl glass neon-border p-6 transition-shadow hover:shadow-[var(--shadow-neon)]"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-50"
                  style={{ background: c.color }}
                />
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-xs font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${c.color}, transparent)` }}
                  >
                    {c.issuer.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.issuer}
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{c.title}</h3>
                <div className="mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[oklch(0.85_0.18_195/0.15)] px-2.5 py-1 text-[11px] font-medium text-[oklch(0.85_0.18_195)]">
                    <BadgeCheck className="h-3.5 w-3.5" /> Verified
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">#0{i + 1}</span>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
