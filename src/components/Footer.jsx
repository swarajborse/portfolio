import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, CodolioIcon } from "./Icons";
import personal from "../data/personal";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6">
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
            href={personal.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-slate-600 hover:text-white transition-colors"
          >
            <XIcon size={16} />
          </a>
          <a
            href={personal.codolio}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Codolio"
            className="text-slate-600 hover:text-white transition-colors"
          >
            <CodolioIcon size={16} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-slate-600 hover:text-white transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
