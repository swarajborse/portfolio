import { motion } from "framer-motion";
import personal from "../data/personal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-800 bg-slate-900/80">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-slate-500 font-mono">about.sh</span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed space-y-3">
              <p>
                <span className="text-emerald-400">$</span> <span className="text-slate-300">cat intro.txt</span>
              </p>
              <p className="text-slate-400">
                Hi, I&apos;m <span className="text-white font-semibold">{personal.name}</span>, a
                software engineering student passionate about building real-world
                applications. I enjoy working across the stack and am always looking
                for opportunities to learn and grow.
              </p>
              <p>
                <span className="text-emerald-400">$</span> <span className="text-slate-300">cat interest.txt</span>
              </p>
              <p className="text-slate-400">
                Started with C++ and problem-solving, now building full-stack web
                apps with React, Node.js &amp; modern databases. Currently exploring
                AI/ML and expanding my skill set every day.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                Education
              </h3>
              <p className="text-slate-300 font-medium">
                {personal.degree}
              </p>
              <p className="text-slate-500 text-sm">
                {personal.college}
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                Current Focus
              </h3>
              <ul className="text-slate-400 text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">&#9656;</span> C++ / Data Structures &amp; Algorithms
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">&#9656;</span> React &amp; Frontend Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">&#9656;</span> Node.js &amp; Backend Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">&#9656;</span> FastAPI &amp; Flask
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">&#9656;</span> AI/ML fundamentals
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
