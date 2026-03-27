import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "AI Intern",
    company: "Codsoft",
    period: "2024",
    desc: "Artificial Intelligence Internship",
    tasks: [
      "Developed and trained machine learning models for classification and regression tasks",
      "Performed data analysis and preprocessing on large-scale datasets",
      "Implemented deep learning architectures using TensorFlow and Keras",
      "Collaborated with the team on end-to-end AI project pipelines",
    ],
  },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience" title="Experience" subtitle="My professional journey">
    <div className="max-w-3xl mx-auto relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent hidden sm:block" />

      {experiences.map((exp, i) => (
        <motion.div
          key={exp.role}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="relative sm:pl-20 mb-8"
        >
          {/* Timeline dot */}
          <div className="hidden sm:flex absolute left-[22px] top-8 w-[14px] h-[14px] rounded-full gradient-bg items-center justify-center ring-4 ring-background">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
          </div>

          <div className="glass rounded-2xl p-8 hover:border-primary/20 transition-colors group">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="gradient-bg p-2.5 rounded-lg group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
                  <Briefcase size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
                  <span className="text-sm text-primary font-medium">{exp.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-2 sm:mt-0">
                <Calendar size={14} />
                {exp.period}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{exp.desc}</p>
            <ul className="space-y-3">
              {exp.tasks.map((task, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + j * 0.1 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full gradient-bg shrink-0" />
                  {task}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
