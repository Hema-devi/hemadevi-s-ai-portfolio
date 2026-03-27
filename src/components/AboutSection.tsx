import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Brain, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: Brain, title: "AI & ML", desc: "Deep expertise in machine learning algorithms and neural networks" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Analytical thinker who thrives on tackling complex challenges" },
  { icon: Rocket, title: "Innovator", desc: "Driven to create technology that makes a meaningful impact" },
];

const AboutSection = () => (
  <SectionWrapper id="about" title="About Me" subtitle="Get to know me better">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-muted-foreground leading-relaxed mb-6">
          I'm a 3rd year Artificial Intelligence and Machine Learning student with an insatiable
          curiosity for how intelligent systems can transform our world. My journey in tech began
          with a simple fascination for how machines learn, and has since evolved into a deep
          passion for building practical AI solutions.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          With a strong foundation in Python, Java, and modern ML frameworks, I specialize in
          developing applications that bridge the gap between cutting-edge research and real-world
          impact. From healthcare AI to agricultural technology, I believe in using innovation
          to solve problems that matter.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          When I'm not training models or writing code, you'll find me exploring new research papers,
          participating in hackathons, or brainstorming my next entrepreneurial venture.
        </p>
      </motion.div>

      <div className="grid gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass rounded-xl p-6 flex items-start gap-4 hover:scale-[1.02] transition-transform"
          >
            <div className="gradient-bg p-3 rounded-lg shrink-0">
              <item.icon size={22} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
