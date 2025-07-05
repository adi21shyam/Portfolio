import { motion } from "framer-motion";
import { Download, FileText, Calendar, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function ResumeSection() {
  const ref = useRef<HTMLDivElement>(null);

  const handleDownloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/attached_assets/Aditya_s_Resume_1751736159792.pdf';
    link.download = 'Aditya_Singh_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-slate-50 dark:bg-slate-900" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
          >
            <FileText className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Download Resume
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get a comprehensive overview of my professional experience, skills, and achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Aditya Singh
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>Lucknow, India</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>Updated January 2025</span>
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                  What's Included:
                </h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Professional Experience
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Technical Skills & Technologies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Education & Achievements
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Projects & Certifications
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary/20 rounded-full blur-sm"
            />
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl font-semibold text-slate-900 dark:text-white mb-4"
            >
              Ready to Learn More?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
            >
              Download my complete resume to explore my full professional journey, 
              detailed project descriptions, and comprehensive skill set. Perfect for 
              recruiters, hiring managers, and potential collaborators.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleDownloadResume}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium group"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mr-3"
                  >
                    <Download className="w-6 h-6" />
                  </motion.div>
                  Download Resume
                  <motion.div
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-sm text-slate-500 dark:text-slate-500"
              >
                PDF Format • 2 Pages • Last Updated Jan 2025
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-700"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl font-bold text-primary mb-1"
                >
                  2+
                </motion.div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl font-bold text-secondary mb-1"
                >
                  10+
                </motion.div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Technologies
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl font-bold text-accent mb-1"
                >
                  5+
                </motion.div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Projects
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
