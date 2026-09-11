import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import personal from "../data/personal";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 font-mono text-sm mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
        >
          {personal.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-400 mb-6"
        >
          {personal.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-slate-950 font-medium rounded-lg transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 font-medium rounded-lg transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 font-medium rounded-lg transition-all duration-200 inline-flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 font-medium rounded-lg transition-all duration-200"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-slate-500 hover:text-white transition-colors duration-200"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-slate-500 hover:text-white transition-colors duration-200"
          >
            <LinkedinIcon size={22} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="text-slate-600 hover:text-slate-400 transition-colors"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
