import { motion } from "framer-motion";
import personal from "../data/personal";
import { MapPinIcon, GraduationIcon } from "./Icons";

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
                <span className="text-blue-400">$</span> <span className="text-slate-300">cat intro.txt</span>
              </p>
              <p className="text-slate-400">
                Hi, I&apos;m <span className="text-white font-semibold">{personal.name}</span>, a
                B.Tech IT student at Walchand College of Engineering, Sangli. I focus on
                backend engineering and building production-oriented distributed systems
                with Java and Spring Boot.
              </p>
              <p>
                <span className="text-blue-400">$</span> <span className="text-slate-300">cat interest.txt</span>
              </p>
              <p className="text-slate-400">
                I work with Redis, Kafka, PostgreSQL, Docker, and cloud technologies to
                build scalable backend services. I&apos;m passionate about DSA, problem solving,
                and creating systems that go beyond tutorial-level projects.
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
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <GraduationIcon size={16} />
                Education
              </h3>
              <p className="text-slate-300 font-medium">
                {personal.degree}
              </p>
              <p className="text-slate-500 text-sm">
                {personal.college}
              </p>
              <p className="text-slate-500 text-sm">
                {personal.educationYear} &middot; CGPA: {personal.cgpa}
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <MapPinIcon size={16} />
                Location
              </h3>
              <p className="text-slate-400 text-sm">
                {personal.location}
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                Current Focus
              </h3>
              <ul className="text-slate-400 text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">&#9656;</span> Java &amp; Spring Boot Backend Engineering
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">&#9656;</span> Distributed Systems &amp; Event-Driven Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">&#9656;</span> Redis, Kafka, PostgreSQL, Docker
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">&#9656;</span> REST APIs &amp; Scalable Backend Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">&#9656;</span> Data Structures &amp; Algorithms
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
