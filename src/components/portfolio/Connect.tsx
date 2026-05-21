import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Phone, Send, Code2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Connect() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  const socials = [
    { Icon: Mail, label: "sangithaa@example.com", href: "mailto:sangithaa@example.com" },
    { Icon: Github, label: "github.com/sangithaa", href: "https://github.com" },
    { Icon: Linkedin, label: "linkedin.com/in/sangithaa", href: "https://linkedin.com" },
    { Icon: Phone, label: "+91 XXXXX XXXXX", href: "tel:+91" },
    { Icon: Code2, label: "leetcode.com/sangithaa", href: "https://leetcode.com" },
  ];

  return (
    <section id="connect" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Let's talk" title="Connect" subtitle="Have an idea, role, or collaboration in mind? Drop a line." />
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 6 }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center gap-4 rounded-2xl glass neon-border p-4 transition-shadow hover:glow-purple"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-neon)" }}
                >
                  <s.Icon className="h-5 w-5 text-background" />
                </div>
                <span className="font-mono text-sm">{s.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 rounded-2xl glass-strong neon-border p-6"
          >
            {[
              { name: "name", placeholder: "Your name", type: "text" },
              { name: "email", placeholder: "Your email", type: "email" },
            ].map((f) => (
              <input
                key={f.name}
                required
                type={f.type}
                placeholder={f.placeholder}
                className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-all focus:border-[oklch(0.85_0.18_195)] focus:glow-cyan"
              />
            ))}
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project…"
              className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-all focus:border-[oklch(0.85_0.18_195)] focus:glow-cyan"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={sent}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-primary-foreground transition-all glow-cyan"
              style={{ background: "var(--gradient-neon)" }}
            >
              <Send className={`h-4 w-4 transition-transform ${sent ? "translate-x-2" : "group-hover:translate-x-1"}`} />
              {sent ? "Message launched →" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
