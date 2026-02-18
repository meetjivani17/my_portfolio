import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Code } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Finalist",
    description: "Finalist of Gujarat Azadi Ka Amrit Mahotsav (SSIP) Hackathon 2022",
  },
  {
    icon: Code,
    title: "500+ DSA Problems",
    description: "Solved 500+ Data Structures & Algorithms problems across various competitive programming platforms",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="glow-text">Achievements</span>
          </h2>
          <p className="section-subtitle">Milestones along the way</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-2xl p-6 text-center hover:border-primary/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
