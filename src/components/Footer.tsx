import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/3 to-transparent pointer-events-none" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col items-center gap-6">
        <a href="#" className="text-xl font-heading font-bold gradient-text">
          Hemadevi R
        </a>
        <div className="flex gap-4">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:hemadevi@example.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          © {new Date().getFullYear()} Hemadevi R. Made with <Heart size={13} className="text-primary fill-primary" /> and passion.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
