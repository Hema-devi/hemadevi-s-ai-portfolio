import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <SectionWrapper id="experience" title="Experience" subtitle="My professional journey">
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-xl p-8 relative"
      >
        <div className="absolute top-8 left-8 gradient-bg p-3 rounded-lg">
          <Briefcase size={22} className="text-primary-foreground" />
        </div>
        <div className="ml-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="font-heading font-semibold text-lg">AI Intern</h3>
            <span className="text-sm text-primary font-medium">Codsoft</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Artificial Intelligence Internship</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full gradient-bg shrink-0" />
              Developed and trained machine learning models for classification and regression tasks
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full gradient-bg shrink-0" />
              Performed data analysis and preprocessing on large-scale datasets
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full gradient-bg shrink-0" />
              Implemented deep learning architectures using TensorFlow and Keras
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full gradient-bg shrink-0" />
              Collaborated with the team on end-to-end AI project pipelines
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
