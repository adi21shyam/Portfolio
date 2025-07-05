import { motion } from "framer-motion";
import { Github, Linkedin, Code, Trophy } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function Footer() {
  const { personal, social } = portfolioData;

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-2xl font-bold mb-4">{personal.name}</div>
          <p className="text-slate-400 mb-6">
            {personal.title} passionate about creating innovative solutions
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Code className="w-6 h-6" />
            </a>
            <a
              href={social.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Trophy className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400">
              &copy; 2024 {personal.name}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
