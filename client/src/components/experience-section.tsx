import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function ExperienceSection() {
  const { experience } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            My professional journey in software development
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline Line - Desktop */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-slate-200 dark:bg-slate-700 hidden lg:block"></div>
          
          {/* Timeline Line - Mobile */}
          <div className="absolute left-6 h-full w-0.5 bg-slate-200 dark:bg-slate-700 lg:hidden"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center">
                  {index % 2 === 0 ? (
                    // Left side - Desktop
                    <>
                      <div className="flex-1 pr-8 text-right">
                        <motion.div
                          whileHover={{ 
                            scale: 1.05, 
                            x: -10,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                            transition: { duration: 0.3 }
                          }}
                          className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20"
                        >
                          <div className="flex items-center justify-end gap-2 text-sm text-primary font-medium mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{job.duration}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{job.position}</h3>
                          <div className="flex items-center justify-end gap-2 text-slate-600 dark:text-slate-400 mb-3">
                            <MapPin className="w-4 h-4" />
                            <span>{job.company} • {job.location}</span>
                          </div>
                          <div className="text-slate-600 dark:text-slate-400 mb-4">
                            {job.responsibilities.map((responsibility: string, idx: number) => (
                              <div key={idx} className="flex items-start gap-2 mb-1">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{responsibility}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      {/* Timeline dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-slate-800 z-10"
                      />

                      <div className="flex-1 pl-8">
                        <div className="h-full"></div>
                      </div>
                    </>
                  ) : (
                    // Right side - Desktop
                    <>
                      <div className="flex-1 pr-8">
                        <div className="h-full"></div>
                      </div>

                      {/* Timeline dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white dark:border-slate-800 z-10"
                      />

                      <div className="flex-1 pl-8">
                        <motion.div
                          whileHover={{ 
                            scale: 1.05, 
                            x: 10,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                            transition: { duration: 0.3 }
                          }}
                          className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-secondary/20"
                        >
                          <div className="flex items-center gap-2 text-sm text-secondary font-medium mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{job.duration}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{job.position}</h3>
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-3">
                            <MapPin className="w-4 h-4" />
                            <span>{job.company} • {job.location}</span>
                          </div>
                          <div className="text-slate-600 dark:text-slate-400 mb-4">
                            {job.responsibilities.map((responsibility: string, idx: number) => (
                              <div key={idx} className="flex items-start gap-2 mb-1">
                                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{responsibility}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden flex items-start pl-12">
                  {/* Timeline dot - Mobile */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="absolute left-6 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-white dark:border-slate-800 z-10"
                  />

                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 }
                    }}
                    className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl shadow-md border border-transparent hover:border-primary/20 w-full"
                  >
                    <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{job.duration}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{job.position}</h3>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{job.company} • {job.location}</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 mb-4">
                      {job.responsibilities.map((responsibility: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 mb-1">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}