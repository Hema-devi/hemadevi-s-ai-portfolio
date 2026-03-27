import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Brain, Lightbulb, Rocket, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Brain, title: "AI & ML", desc: "Deep expertise in machine learning algorithms and neural networks" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Analytical thinker who thrives on tackling complex challenges" },
  { icon: Rocket, title: "Innovator", desc: "Driven to create technology that makes a meaningful impact" },
  { icon: GraduationCap, title: "Lifelong Learner", desc: "Constantly exploring new research papers and emerging tech" },
];

const stats = [
  { value: 5, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "+", label: "Certifications" },
  { value: 1, suffix: "", label: "Internship" },
  { value: 10, suffix: "+", label: "Skills" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.ceil(target / 30);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-heading font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => (
  <SectionWrapper id="about" title="About Me" subtitle="Get to know me better">
    <div className="grid lg:grid-cols-2 gap-12 items-start">
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
        <p className="text-muted-foreground leading-relaxed mb-8">
          When I'm not training models or writing code, you'll find me exploring new research papers,
          participating in hackathons, or brainstorming my next entrepreneurial venture.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass rounded-xl p-5 group cursor-default"
          >
            <div className="gradient-bg p-3 rounded-lg shrink-0 w-fit mb-3 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
              <item.icon size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
