import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Mail, Github, Linkedin, Phone, Send, Code2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import emailjs from "@emailjs/browser";

export function Connect() {
  const [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);

    if (form.current) {
      emailjs
        .sendForm("service_f8afu3o", "template_95i7vnl", form.current, "sEe9TBYsjqzoAhra9")
        .then(
          () => {
            console.log("SUCCESS!");
            setTimeout(() => {
              setSent(false);
              form.current?.reset();
            }, 2500);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setSent(false);
          },
        );
    }
  };

  const socials = [
    { name: "Gmail", Icon: Mail, label: "sangithaasrik7@gmail.com", href: "mailto:sangithaasrik7@gmail.com" },
    { name: "GitHub", Icon: Github, label: "github.com/sangithaasrikalaiselvan", href: "https://github.com/sangithaasrikalaiselvan" },
    { name: "LinkedIn", Icon: Linkedin, label: "linkedin.com/in/sangithaa-sri-k-6b53562ab", href: "https://www.linkedin.com/in/sangithaa-sri-k-6b53562ab/" },
    { name: "Phone", Icon: Phone, label: "+91 9361528364", href: "tel:+919361528364" },
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
            <p className="text-muted-foreground mb-4">Find me on:</p>
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
                <div className="flex flex-col">
                  <span className="font-semibold">{s.name}</span>
                  <span className="font-mono text-sm text-muted-foreground">{s.label}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 rounded-2xl glass-strong neon-border p-6"
          >
            {[
              { name: "user_name", placeholder: "Your name", type: "text" },
              { name: "user_email", placeholder: "Your email", type: "email" },
            ].map((f) => (
              <input
                key={f.name}
                required
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
                className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-all focus:border-[oklch(0.85_0.18_195)] focus:glow-cyan"
              />
            ))}
            <textarea
              required
              rows={5}
              name="message"
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
