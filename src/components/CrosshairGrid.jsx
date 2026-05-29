export default function CrosshairGrid() {
  return (
    // Changed width/height to 100% so it fills the parent, and brightened it slightly
    <svg width="150" height="150" className="text-zinc-400">
      <pattern id="crosshair" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 20 15 L 20 25 M 15 20 L 25 20" stroke="currentColor" strokeWidth="1" fill="none" />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#crosshair)"></rect>
    </svg>
  );
}