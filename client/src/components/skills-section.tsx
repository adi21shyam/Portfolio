import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code, Server, Database, Wrench } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

interface SkillBarProps {
  skill: string;
  level: number;
  color: string;
}

function SkillBar({ skill, level, color }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setWidth(level), 200);
    }
  }, [isInView, level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

const iconMap = {
  Code: Code,
  Server: Server,
  Database: Database,
  Wrench: Wrench,
};

const colorMap = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  slate: "bg-slate-600",
};

export default function SkillsSection() {
  const { skills } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.categories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const colorClass = colorMap[category.color as keyof typeof colorMap];

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -15,
                  rotateY: 10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-transparent hover:border-primary/20"
              >
                <motion.div 
                  className={`text-${category.color} mb-4`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent className="w-8 h-8" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {category.name}
                </motion.h3>
                
                {category.type === "skills" ? (
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <SkillBar
                        key={item.name}
                        skill={item.name}
                        level={'level' in item ? item.level : 0}
                        color={colorClass}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item.name}
                        className="bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-sm"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
