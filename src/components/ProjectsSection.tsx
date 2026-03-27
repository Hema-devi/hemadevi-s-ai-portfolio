import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Medication Safety App",
    desc: "An intelligent application featuring tablet recognition using computer vision, comprehensive dosage information lookup, and an AI-powered chatbot for medication queries.",
    tech: ["Python", "TensorFlow", "OpenCV", "NLP"],
    color: "from-primary/20 to-secondary/20",
  },
  {
    title: "AI Farming Advisor System",
    desc: "Smart agricultural platform that combines real-time weather analysis with plant disease detection to provide actionable farming recommendations.",
    tech: ["Python", "Keras", "Weather API", "CNN"],
    color: "from-secondary/20 to-primary/20",
  },
  {
    title: "Portfolio Website",
    desc: "A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and a professional dark theme.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    color: "from-primary/20 to-secondary/20",
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects" title="Projects" subtitle="Some things I've built">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="glass rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform"
        >
          <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
            <span className="text-4xl font-heading font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="p-6">
            <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center gap-1.5 text-sm text-primary hover:text-foreground transition-colors"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 text-sm text-primary hover:text-foreground transition-colors"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
