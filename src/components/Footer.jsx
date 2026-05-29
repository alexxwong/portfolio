import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    // border-t creates a subtle dividing line at the very bottom of the website
    <footer className="border-t border-zinc-800 mt-20 py-8 px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500">
      
      {/* Footer Logo */}
      <div className="flex items-center gap-2 font-mono font-bold">
        <span className="text-primary-500">{"{ "}</span>
        <span className="text-gray-100">Alex</span>
        <span className="text-primary-500">{" }"}</span>
      </div>
      
      {/* Copyright text using JavaScript to auto-update the year */}
      <p className="font-mono text-xs">
        © {new Date().getFullYear()} Built by Alex. All rights reserved.
      </p>
      
      {/* MOBILE ONLY: Social Links */}
      {/* These only appear on small screens because the Sidebar hides itself */}
      <div className="flex md:hidden gap-8 text-xl">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors"><FaLinkedin /></a>
        <a href="mailto:alex@example.com" className="hover:text-primary-400 transition-colors"><FaEnvelope /></a>
      </div>

    </footer>
  );
}