import { motion } from "framer-motion";
import experience from "../data/experience";

const typeStyles = {
  education: { dot: "bg-blue-400", badge: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
  role: { dot: "bg-purple-400", badge: "text-purple-400 border-purple-500/20 bg-purple-500/10" },
  achievement: { dot: "bg-emerald-400", badge: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  project: { dot: "bg-orange-400", badge: "text-orange-400 border-orange-500/20 bg-orange-500/10" },
};

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8"
        >
          Journey
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-slate-800" />

          <div className="space-y-8">
            {experience.map((item, idx) => {
              const style = typeStyles[item.type] || typeStyles.project;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative flex gap-4"
                >
                  <div className="relative z-10 mt-1">
                    <div
                      className={`w-[10px] h-[10px] rounded-full ring-4 ring-slate-950 ${style.dot}`}
                    />
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 flex-1 hover:border-slate-700 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-slate-500">
                        {item.year}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-[10px] font-medium rounded-full border ${style.badge}`}
                      >
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-2">{item.org}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
