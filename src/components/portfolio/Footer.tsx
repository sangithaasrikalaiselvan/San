import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 px-6 py-10">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.65 0.27 300), transparent)" }}
      />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
          © 2026 SANGITHAA SRI K · BUILT WITH <Heart className="inline h-3 w-3 text-[oklch(0.7_0.25_340)]" /> &amp; AI
        </div>
        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "https://github.com" },
            { Icon: Linkedin, href: "https://linkedin.com" },
            { Icon: Mail, href: "mailto:sangithaa@example.com" },
            { Icon: Code2, href: "https://leetcode.com" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full glass transition-transform hover:scale-110 hover:glow-cyan"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
