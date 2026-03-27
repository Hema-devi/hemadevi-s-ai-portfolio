import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, Trophy, BadgeCheck } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "FAER Project Selection",
    desc: "Selected for the prestigious FAER (Foundation for Academic Excellence and Research) project",
  },
  {
    icon: Trophy,
    title: "Hackathon Participant",
    desc: "Active participation in multiple hackathons, developing innovative solutions under pressure",
  },
  {
    icon: BadgeCheck,
    title: "AI/ML Certifications",
    desc: "Earned certifications in Artificial Intelligence and Machine Learning from recognized platforms",
  },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements" title="Achievements" subtitle="Milestones along the way">
    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {achievements.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="glass rounded-xl p-6 text-center hover:scale-[1.03] transition-transform"
        >
          <div className="gradient-bg w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
            <item.icon size={24} className="text-primary-foreground" />
          </div>
          <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
