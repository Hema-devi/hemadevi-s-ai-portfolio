import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github, Pill, Leaf, Globe, FlaskConical } from "lucide-react";

const projects = [
  {
    title: "AI Medication Safety App",
    desc: "An intelligent application featuring tablet recognition using computer vision, comprehensive dosage information lookup, and an AI-powered chatbot for medication queries.",
    tech: ["Python", "TensorFlow", "OpenCV", "NLP"],
    icon: Pill,
    color: "from-primary to-secondary",
  },
  {
    title: "AI Farming Advisor System",
    desc: "Smart agricultural platform that combines real-time weather analysis with plant disease detection to provide actionable farming recommendations.",
    tech: ["Python", "Keras", "Weather API", "CNN"],
    icon: Leaf,
    color: "from-secondary to-primary",
  },
  {
    title: "FAER Research Project",
    desc: "Selected for the Foundation for Academic Excellence and Research (FAER) project — working on cutting-edge AI research with industry mentors.",
    tech: ["Research", "AI", "Machine Learning", "Data Science"],
    icon: FlaskConical,
    color: "from-accent to-primary",
  },
  {
    title: "Portfolio Website",
    desc: "A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations, particle effects, and a professional dark theme.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    icon: Globe,
    color: "from-primary to-accent",
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects" title="Projects" subtitle="Some things I've built">
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          whileHover={{ y: -8 }}
          className="glass rounded-2xl overflow-hidden group"
        >
          <div className={`h-44 bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20" />
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="relative z-10 bg-white/10 backdrop-blur-sm p-5 rounded-2xl"
            >
              <project.icon size={36} className="text-primary-foreground" />
            </motion.div>
            <div className="absolute top-4 right-4 text-6xl font-heading font-bold text-white/10">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ x: 3 }}
                href="#"
                className="flex items-center gap-1.5 text-sm text-primary hover:text-foreground transition-colors"
              >
                <Github size={15} /> GitHub
              </motion.a>
              <motion.a
                whileHover={{ x: 3 }}
                href="#"
                className="flex items-center gap-1.5 text-sm text-primary hover:text-foreground transition-colors"
              >
                <ExternalLink size={15} /> Live Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
