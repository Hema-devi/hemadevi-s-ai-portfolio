import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, Trophy, BadgeCheck, Star } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "FAER Project Selection",
    desc: "Selected for the prestigious FAER (Foundation for Academic Excellence and Research) project for innovative AI research.",
    highlight: "Research",
  },
  {
    icon: Trophy,
    title: "Hackathon Participant",
    desc: "Active participation in multiple hackathons, developing innovative solutions under pressure and tight deadlines.",
    highlight: "Competition",
  },
  {
    icon: BadgeCheck,
    title: "AI/ML Certifications",
    desc: "Earned certifications in Artificial Intelligence and Machine Learning from recognized industry platforms.",
    highlight: "Certified",
  },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements" title="Achievements" subtitle="Milestones along the way">
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {achievements.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="glass rounded-2xl p-7 text-center group relative overflow-hidden"
        >
          {/* Background glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="gradient-bg w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
              <item.icon size={26} className="text-primary-foreground" />
            </div>
            <span className="text-xs font-medium text-primary uppercase tracking-wider">{item.highlight}</span>
            <h3 className="font-heading font-semibold mt-2 mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(3)].map((_, j) => (
                <Star key={j} size={12} className="text-primary fill-primary" />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
