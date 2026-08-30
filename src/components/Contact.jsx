import { motion } from "framer-motion";
import { MailIcon, GithubIcon, LinkedinIcon } from "./Icons";
import personal from "../data/personal";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    icon: MailIcon,
    external: false,
  },
  {
    label: "GitHub",
    href: personal.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-4"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 max-w-md mx-auto mb-8"
        >
          I&apos;m looking for software engineering and backend developer opportunities.
          Feel free to reach out if you&apos;d like to connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="p-3 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
