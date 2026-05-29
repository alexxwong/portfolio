import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '#home', href: '#home' },
    { name: '#about-me', href: '#about' },
    { name: '#projects', href: '#projects' },
    { name: '#skills', href: '#skills' },
    { name: '#contact', href: '#contact' },
  ];

  return (
    // 1. THE FIXED ANCHOR
    <nav className="fixed top-0 w-full border-b border-zinc-800 bg-[#050505] z-50">
      
      {/* 2. MAIN NAV BAR (We added relative and z-20 so it stays above the sliding menu) */}
      <div className="flex justify-between items-center px-8 py-5 mx-auto relative z-20 bg-[#050505]">
        
        {/* 3. SCROLL-TO-TOP LOGO */}
        {/* Wrapped in an <a> tag pointing to #home. Added a hover:opacity-70 effect so it feels clickable */}
        <a href="#home" className="flex items-center gap-2 font-mono text-xl font-bold tracking-tight hover:opacity-70 transition-opacity">
          <span className="text-primary-500">{"{ "}</span>
          <span className="text-gray-100">Alex</span>
          <span className="text-primary-500">{" }"}</span>
        </a>
        
        <div className="flex items-center gap-6">
          <ThemeToggle />
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-400 hover:text-primary-400 transition-colors text-xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 4. THE ANIMATED DROPDOWN MENU */}
      {/* We use max-h-0 when closed, and max-h-96 (384px) when open. 
          The duration-300 makes it take 300 milliseconds to slide open/closed! */}
      <div 
        className={`absolute top-full right-0 w-full md:w-64 bg-[#0a0a0a] border-zinc-800 overflow-hidden transition-all duration-300 ease-in-out z-10 ${
          isOpen ? 'max-h-96 opacity-100 border-b' : 'max-h-0 opacity-0 border-b-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="font-mono text-sm text-zinc-400 hover:text-primary-400 hover:translate-x-2 transition-all w-fit"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      
    </nav>
  );
}