import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const socials = [
  { icon: Mail, label: "Email", value: "hemadevi@example.com", href: "mailto:hemadevi@example.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/hemadevi", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "github.com/hemadevi", href: "https://github.com" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" title="Contact" subtitle="Let's connect and create something amazing">
      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of something exciting. Feel free to reach out!
          </p>
          <div className="space-y-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-lg p-4 flex items-center gap-4 hover:scale-[1.02] transition-transform block"
              >
                <div className="gradient-bg p-2.5 rounded-lg">
                  <s.icon size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-medium">{s.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-xl p-8 space-y-5"
        >
          <div>
            <label className="text-sm font-medium mb-1.5 block">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
              placeholder="Tell me about your project or idea..."
            />
          </div>
          <button
            type="submit"
            className="gradient-bg w-full py-3 rounded-lg font-medium text-sm text-primary-foreground flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow-effect"
          >
            <Send size={16} /> Send Message
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
