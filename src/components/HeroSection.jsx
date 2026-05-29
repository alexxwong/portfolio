import DotGrid from './DotGrid';
import CrosshairGrid from './CrosshairGrid'; // <-- 1. Import the new grid
import shots from '../assets/shots.png';


export default function HeroSection() {
  return (
    // Removed overflow-hidden so the DotGrid doesn't get cropped when pushed left!
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-8 max-w-6xl mx-auto">

      {/* The Ambient Plasma Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-900/20 rounded-full blur-[100px] z-[-10]"></div>

      {/* grid layout: 1 column on mobile, 2 columns on desktop */}
      <div className="relative isolate grid grid-cols-1 md:grid-cols-2 gap-12 w-full z-10">

        {/* Fixed: Changed -left-76 to -left-[76px] to correctly position the grid */}
        <div className="absolute -top-10 -left-[315px] z-[-1] bg-[#050505] shadow-[0_0_0_10px_#050505]">
          <DotGrid />
        </div>

        {/* Fixed: Expanded to 800x800, changed to z-0, and added pointer-events-none so it doesn't block text highlighting */}
        <div className="absolute top-280 left-285 right-0 z-0 pointer-events-none opacity-100">
          <CrosshairGrid />
        </div>

        {/* LEFT COLUMN: The Text */}
        <div className="flex flex-col justify-center">
          <p className="font-mono text-primary-500 mb-4 tracking-widest text-sm">
            &gt; SYSTEM_READY
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm a Alex, a <span className="text-primary-400 glow-text">Software Engineering</span> <br />
            student.
          </h1>

          <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
            I'm currently focused on building responsive cross-platform interfaces with Flutter and React, and connecting them to robust NoSQL/MySQL architectures.
          </p>

          <div>
            {/* The hard-bordered button from your inspiration */}
            <a href="#projects" className="inline-block border border-gray-600 px-6 py-3 font-mono text-sm hover:border-primary-500 hover:text-primary-400 transition-colors">
              Scroll Down ↓
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: The Graphic (Placeholder for your photo or a cool geometric shape) */}
        <div className="relative flex justify-center items-center">

          <div className="absolute top-10 -left-12 w-16 h-[1px] bg-zinc-600"></div>
          <div className="absolute -bottom-12 -right-0 w-[1px] h-16 bg-zinc-600"></div>

          {/* We use a box with dashed borders to mimic the inspiration's technical frame */}
          <div className="relative w-72 h-80 border-2 border-dashed border-zinc-700 rounded-lg flex items-center justify-center group hover:border-primary-500 transition-colors duration-500">

            {/* 4. THE CORNER BRACKET: Added to the top left of the image box */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary-500/50 rounded-tl-lg z-[-1] transition-colors group-hover:border-primary-400"></div>

            {/* A subtle glowing orb in the center that pulses */}
            <div className="absolute w-32 h-32 bg-primary-500/20 rounded-full blur-2xl animate-pulse"></div>

            <img
              src={shots}
              alt="Alex Profile"
              className="w-full h-full object-cover object-bottom rounded-lg z-10 relative drop-shadow-2xl"
            />

            {/* The small status badge from the inspiration image */}
            <div className="absolute -bottom-4 -left-4 border border-zinc-700 bg-[#050505] px-4 py-2 font-mono text-xs flex items-center gap-2 z-20">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-ping"></span>
              Currently working on Portfolio
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}