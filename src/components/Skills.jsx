import { motion } from "framer-motion";
import skills from "../data/skills";

const categoryColors = {
  Languages: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Backend: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Frontend: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Databases: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Cloud: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Testing: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Tools: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "Core CS": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-6"
        >
          Skills
        </motion.h2>

        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 text-[13px] font-medium rounded-md border ${
                      categoryColors[category]
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
