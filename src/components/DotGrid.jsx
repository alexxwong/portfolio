export default function DotGrid() {
  return (
    // We use an SVG pattern. It draws one single 2px circle, and then repeats it 
    // every 20 pixels to create a grid. 
    // We use 'text-zinc-800' so the dots are very faint against the black background.
    <svg width="150" height="150" className="text-zinc-400">
    
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle fill="currentColor" cx="2" cy="2" r="2"></circle>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
    </svg>
  );
}