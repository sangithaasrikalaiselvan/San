import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, Github, Linkedin, Code2 } from "lucide-react";
import profileImg from "@/assets/san.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ROLES = [
  "AI & Data Science Engineer",
  "Machine Learning Developer",
  "Full Stack AI Innovator",
  "Hackathon Enthusiast",
  "Agentic AI Developer",
];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDel(true), 1400);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((p) => (p + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
}

export function Hero() {
  const typed = useTyping();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const resumeUrl = "/assets/Sangithaa Sri K - Resume.pdf";

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Floating blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl animate-blob"
        style={{ background: "oklch(0.65 0.27 300 / 0.7)" }} />
      <div className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-[460px] w-[460px] rounded-full opacity-40 blur-3xl animate-blob"
        style={{ background: "oklch(0.78 0.18 200 / 0.7)", animationDelay: "3s" }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "oklch(0.65 0.22 260 / 0.7)" }} />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        {/* Left: image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] opacity-50 blur-2xl"
              style={{ background: "var(--gradient-hero)" }} />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] glass-strong neon-border"
            >
              <img src={profileImg} alt="Sangithaa Sri K" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center rounded-xl glass px-4 py-2 text-xs font-mono">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to work
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-mono tracking-[0.3em] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.85_0.18_195)] animate-pulse" />
            <span className="text-gradient-neon">Agentic AI Engineer</span>
          </div>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            I'm <span className="text-gradient">Sangithaa Sri K</span>
          </h1>
          <div className="mt-5 flex items-baseline gap-2 font-mono text-xl md:text-2xl">
            <span className="text-muted-foreground">{">"}</span>
            <span className="text-gradient-neon">{typed}</span>
            <span className="inline-block h-6 w-[2px] animate-pulse bg-[oklch(0.85_0.18_195)]" />
          </div>
          <p className="mt-6 max-w-xl text-muted-foreground">
            I engineer intelligent systems that think, adapt, and evolve — transforming AI research
            into scalable real-world innovation through agentic intelligence, machine learning, and
            human-centric engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground glow-cyan transition-transform hover:scale-105"
                  style={{ background: "var(--gradient-neon)" }}
                >
                  Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[95vw] max-w-[95vw] h-[95vh]">
                <DialogHeader>
                  <DialogTitle>Sangithaa Sri K - Resume</DialogTitle>
                </DialogHeader>
                <div className="h-full w-full rounded-lg overflow-hidden">
                  <iframe src={resumeUrl} className="h-full w-full" />
                </div>
                <div className="absolute bottom-4 right-4">
                  <Button size="sm" asChild>
                    <a href={resumeUrl} download="Sangithaa Sri K - Resume.pdf">
                      <Download className="mr-2 h-3 w-3" />
                      Download
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <button
              onClick={() => scrollTo("connect")}
              className="inline-flex items-center gap-2 rounded-full glass neon-border px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com/sangithaasrikalaiselvan", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/sangithaa-sri-k-6b53562ab/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:sangithaasrik7@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group relative flex h-11 w-11 items-center justify-center rounded-full glass transition-all hover:scale-110 hover:glow-purple"
              >
                <Icon className="h-4 w-4 transition-colors group-hover:text-[oklch(0.85_0.18_195)]" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
