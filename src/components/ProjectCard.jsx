export default function ProjectCard({ title, description, tags, link }) {
  return (
    // Glassmorphism background, softer translucent border, and a subtle permanent ambient glow.
    <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-zinc-700/50 shadow-[0_0_5px_rgba(255,255,255,0.01)] p-6 hover:border-primary-500 hover:shadow-[0_0_20px_5px_var(--color-primary-900)] transition-all duration-300 flex flex-col justify-between group h-full">
      
      <div>
        {/* Using font-mono for the technical heading */}
        <h3 className="font-mono text-xl font-bold mb-3 text-gray-100 group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            // Sharp, boxy tech tags with a slight purple tint
            <span key={index} className="font-mono text-xs text-primary-400 bg-primary-500/10 border border-primary-500/20 px-2 py-1 hover:tracking-widest transition-all duration-300 cursor-default">
              {tag}
            </span>
          ))}
        </div>

        <a href={link} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-zinc-500 hover:text-primary-400 inline-flex items-center gap-2 transition-colors">
          [ View Repository ]
        </a>
      </div>
      
    </div>
  );
}