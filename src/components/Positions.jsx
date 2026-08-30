import { motion } from "framer-motion";
import positions from "../data/positions";

export default function Positions() {
  return (
    <section id="positions" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8"
        >
          Positions of Responsibility
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {positions.map((pos, idx) => (
            <motion.div
              key={pos.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-slate-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-sm font-semibold text-white">
                  {pos.title}
                </h3>
              </div>
              <p className="text-xs text-blue-400 mb-1">{pos.org}</p>
              <p className="text-xs text-slate-500 mb-3">{pos.period}</p>
              <ul className="space-y-1.5">
                {pos.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <span className="text-blue-400 mt-1 shrink-0">&#9656;</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
