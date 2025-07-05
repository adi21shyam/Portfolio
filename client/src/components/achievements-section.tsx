import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Code, Medal } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const iconMap = {
  Trophy: Trophy,
  Code: Code,
  Medal: Medal,
};

const gradientMap = {
  yellow: "from-yellow-500 to-orange-500",
  green: "from-green-500 to-emerald-500",
  blue: "from-blue-500 to-indigo-500",
};

export default function AchievementsSection() {
  const { achievements } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Recognition and milestones in competitive programming
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
            const gradientClass = gradientMap[achievement.color as keyof typeof gradientMap];

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 100, scale: 0.5, rotateY: 180 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.3, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  style={{
                    animationDelay: `${index * 0.5}s`
                  }}
                  className={`bg-gradient-to-br ${gradientClass} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow animate-pulse-slow`}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  {achievement.value}
                </motion.div>
                
                <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
