import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Code, BrainCircuit, Wrench } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI / ML",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "Data Analysis", level: 82 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Frameworks",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "Keras", level: 78 },
      { name: "Scikit-learn", level: 85 },
      { name: "Git", level: 75 },
      { name: "VS Code", level: 90 },
    ],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Skills" subtitle="Technologies I work with">
    <div className="grid md:grid-cols-3 gap-8">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: ci * 0.15 }}
          className="glass rounded-xl p-6 hover:scale-[1.02] transition-transform"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="gradient-bg p-2.5 rounded-lg">
              <cat.icon size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg">{cat.title}</h3>
          </div>
          <div className="space-y-4">
            {cat.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full gradient-bg"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
