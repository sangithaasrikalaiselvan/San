import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { hackathons } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

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
              <Dialog key={h.name}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-2xl glass neon-border p-6 cursor-pointer"
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
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gradient">{h.name}</DialogTitle>
                    <p className="text-sm text-muted-foreground">{h.project}</p>
                    {h.details.award && <p className="text-sm font-semibold text-amber-400">{h.details.award}</p>}
                  </DialogHeader>
                  <div className="mt-4 space-y-4">
                    <p className="text-muted-foreground">{h.details.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {h.details.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    {h.details.linkedin && (
                      <Button asChild variant="outline">
                        <a href={h.details.linkedin} target="_blank" rel="noreferrer">
                          <Linkedin className="mr-2 h-4 w-4" />
                          View on LinkedIn
                        </a>
                      </Button>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
