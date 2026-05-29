import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  // 1. STATE: We set the default theme to empty (which defaults to our Fuchsia variables)
  const [theme, setTheme] = useState('theme-fuchsia');

  // 2. THE ENGINE: Every time the 'theme' state changes, this useEffect runs 
  // and physically attaches the class to the <body> tag of your entire website.
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    // A sleek, pill-shaped container
    <div className="flex items-center gap-3 border border-zinc-800 bg-[#0a0a0a] px-3 py-1.5 rounded-full">
      <span className="font-mono text-xs text-zinc-500 hidden sm:block">Theme:</span>
      
      {/* The Fuchsia Button */}
      <button
        onClick={() => setTheme('theme-fuchsia')}
        className={`w-4 h-4 rounded-full bg-[#d946ef] transition-all ${
          theme === 'theme-fuchsia' 
            ? 'ring-2 ring-[#e879f9] ring-offset-2 ring-offset-[#050505]' 
            : 'opacity-40 hover:opacity-100 hover:scale-110'
        }`}
        aria-label="Set theme to Fuchsia"
      />
      
      {/* The Sapphire Button */}
      <button
        onClick={() => setTheme('theme-sapphire')}
        className={`w-4 h-4 rounded-full bg-[#0F52BA] transition-all ${
          theme === 'theme-sapphire' 
            ? 'ring-2 ring-[#2A75E6] ring-offset-2 ring-offset-[#050505]' 
            : 'opacity-40 hover:opacity-100 hover:scale-110'
        }`}
        aria-label="Set theme to Sapphire"
      />
    </div>
  );
}