import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { navSections } from "@/lib/data";

export function FloatingNav() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8"
        >
          {navSections.map((s, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Sparkles;
            return (
              <motion.button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                whileHover={{ y: -6, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                animate={{ y: [0, -4, 0] }}
                transition={{
                  y: { duration: 4 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 },
                }}
                className="group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl glass neon-border p-4 transition-all hover:glow-purple"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-neon)" }}
                >
                  <Icon className="h-5 w-5 text-background" />
                </div>
                <span className="text-xs font-medium">{s.label}</span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
