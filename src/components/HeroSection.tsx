import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
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
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]"
        />
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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 text-sm font-body tracking-widest uppercase text-primary mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
            >
              <Sparkles size={14} />
              Welcome to my portfolio
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Hemadevi R</span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-muted-foreground mb-6 h-10">
              <span>{text}</span>
              <span className="typing-cursor" />
            </div>
            <p className="text-base text-muted-foreground max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
              Passionate about building intelligent solutions for real-world problems.
              3rd year AI & ML student turning ideas into impactful technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="gradient-bg px-7 py-3.5 rounded-xl font-medium text-sm text-primary-foreground hover:opacity-90 transition-opacity glow-effect"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm border border-border text-foreground hover:bg-muted transition-colors backdrop-blur-sm"
              >
                <Download size={16} /> Download Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm border border-border text-foreground hover:bg-muted transition-colors backdrop-blur-sm"
              >
                <Mail size={16} /> Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden gradient-border animate-pulse-glow">
              <img
                src={profileImg}
                alt="Hemadevi R - AI & ML Student"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Orbiting dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-[-20px]"
            >
              <div className="absolute top-0 left-1/2 w-2.5 h-2.5 rounded-full bg-primary/60" />
              <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-secondary/60" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="absolute inset-[-40px]"
            >
              <div className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full bg-primary/40" />
              <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-accent/50" />
            </motion.div>
            <div className="absolute -z-10 inset-0 rounded-full bg-primary/20 blur-3xl" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-wider uppercase">Scroll</span>
          <ArrowDown size={18} className="text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
