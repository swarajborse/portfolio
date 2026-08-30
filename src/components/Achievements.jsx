import { motion } from "framer-motion";
import { TrophyIcon, CodeIcon } from "./Icons";
import achievements from "../data/achievements";

const iconMap = {
  hacktoberfest: CodeIcon,
  hackathon: TrophyIcon,
  opensource: CodeIcon,
};

const colorClasses = {
  emerald: { icon: "text-emerald-400", badge: "bg-emerald-500/10 border-emerald-500/20" },
  purple: { icon: "text-purple-400", badge: "bg-purple-500/10 border-purple-500/20" },
  blue: { icon: "text-blue-400", badge: "bg-blue-500/10 border-blue-500/20" },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8"
        >
          Achievements
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon] || TrophyIcon;
            const colors = colorClasses[item.color] || colorClasses.blue;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-slate-700 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg border ${colors.badge} ${colors.icon}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className={`text-xs font-medium ${colors.icon}`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
