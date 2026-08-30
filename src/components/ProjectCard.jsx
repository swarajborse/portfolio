import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`group rounded-xl border bg-slate-900/50 transition-all duration-300 ${
        project.featured
          ? "border-blue-500/30 hover:border-blue-400/50"
          : "border-slate-800 hover:border-slate-700"
      }`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <span className="px-2 py-0.5 text-[11px] font-mono font-medium rounded bg-blue-500/15 text-blue-400 border border-blue-500/20">
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="text-slate-500 hover:text-white transition-colors"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="text-slate-500 hover:text-white transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono text-blue-400 bg-blue-500/10 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-slate-800 text-slate-400 border border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-400 transition-colors"
            >
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              {expanded ? "Hide details" : "View key highlights"}
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-3 space-y-1.5">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <span className="text-blue-400 mt-1 shrink-0">&#9656;</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {project.caseStudy && (
                    <div className="mt-4 pt-4 border-t border-slate-800 space-y-3">
                      <h4 className="text-sm font-semibold text-white">
                        Case Study
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-blue-400 font-medium">Problem: </span>
                          <span className="text-slate-400">{project.caseStudy.problem}</span>
                        </div>
                        <div>
                          <span className="text-blue-400 font-medium">Architecture: </span>
                          <span className="text-slate-400">{project.caseStudy.architecture}</span>
                        </div>
                        <div>
                          <span className="text-blue-400 font-medium">Implementation: </span>
                          <span className="text-slate-400">{project.caseStudy.implementation}</span>
                        </div>
                        <div>
                          <span className="text-blue-400 font-medium">Performance: </span>
                          <span className="text-slate-400">{project.caseStudy.performance}</span>
                        </div>
                        {project.caseStudy.challenges && (
                          <div>
                            <span className="text-blue-400 font-medium">Challenges:</span>
                            <ul className="mt-1 space-y-1 ml-1">
                              {project.caseStudy.challenges.map((c, i) => (
                                <li key={i} className="text-slate-400 flex items-start gap-2">
                                  <span className="text-blue-400 mt-1 shrink-0">-</span>
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.article>
  );
}
