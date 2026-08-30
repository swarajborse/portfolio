import { motion } from "framer-motion";
import { LeetcodeIcon, TrophyIcon, CodeIcon } from "./Icons";

const profiles = [
  {
    platform: "LeetCode",
    stats: [
      { label: "Problems Solved", value: "300+" },
      { label: "Peak Rating", value: "1500+" },
    ],
    icon: LeetcodeIcon,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    platform: "CodeChef",
    stats: [
      { label: "Peak Rating", value: "1400+" },
      { label: "Stars", value: "2 Star" },
    ],
    icon: TrophyIcon,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    platform: "Competitive Programming",
    stats: [
      { label: "Problems Solved", value: "500+" },
      { label: "Platforms", value: "3+" },
    ],
    icon: CodeIcon,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
];

export default function CodingProfiles() {
  return (
    <section id="coding" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8"
        >
          Problem Solving
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-4">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center hover:border-slate-700 transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-xl border ${profile.bgColor} ${profile.borderColor} mb-4`}
                >
                  <Icon size={24} className={profile.color} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-4">
                  {profile.platform}
                </h3>
                <div className="flex justify-center gap-6">
                  {profile.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-[11px] text-slate-500 uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
