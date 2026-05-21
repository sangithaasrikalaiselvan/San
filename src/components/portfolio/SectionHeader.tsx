import { motion } from "framer-motion";

export function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-mono tracking-[0.3em] uppercase text-gradient-neon">
        <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.85_0.18_195)] animate-pulse" />
        {kicker}
      </div>
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
