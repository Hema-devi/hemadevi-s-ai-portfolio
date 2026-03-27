import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

const titles = [
  "AI & ML Enthusiast",
  "Future Entrepreneur",
  "Problem Solver",
  "Tech Innovator",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-sm font-body tracking-widest uppercase text-primary mb-4">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Hemadevi R</span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-muted-foreground mb-6 h-10">
              <span>{text}</span>
              <span className="typing-cursor" />
            </div>
            <p className="text-base text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Passionate about building intelligent solutions for real-world problems.
              3rd year AI & ML student turning ideas into impactful technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="gradient-bg px-6 py-3 rounded-lg font-medium text-sm text-primary-foreground hover:opacity-90 transition-opacity glow-effect"
              >
                View Projects
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border border-border text-foreground hover:bg-muted transition-colors"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border border-border text-foreground hover:bg-muted transition-colors"
              >
                <Mail size={16} /> Contact Me
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden gradient-border animate-pulse-glow">
              <img
                src={profileImg}
                alt="Hemadevi R"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 inset-0 rounded-full bg-primary/20 blur-3xl" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
