import { MailIcon, GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";
import personal from "../data/personal";

export default function Footer() {
  return (
    <footer className="py-8 px-6">
      <div
        aria-hidden
        className="mx-auto mb-8 h-[2px] max-w-4xl bg-slate-600"
      />
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <p className="text-slate-500 text-xs uppercase tracking-widest">Quick Links</p>
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-600 hover:text-white transition-colors"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-600 hover:text-white transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="text-slate-600 hover:text-white transition-colors"
          >
            <LeetcodeIcon size={16} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-slate-600 hover:text-white transition-colors"
          >
            <MailIcon size={16} />
          </a>
        </div>
        <p className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
