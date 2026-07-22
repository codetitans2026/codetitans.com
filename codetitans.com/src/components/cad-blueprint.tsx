interface CadBlueprintProps {
  className?: string;
}

export function CadBlueprint({ className = "" }: CadBlueprintProps) {
  return (
    <svg 
      className={`absolute pointer-events-none opacity-30 ${className}`}
      width="300" 
      height="300" 
      viewBox="0 0 300 300"
      fill="none"
    >
      {/* Grid lines */}
      <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="300" height="300" fill="url(#grid)" />
      
      {/* CAD-style drawing lines */}
      <rect x="50" y="50" width="200" height="150" stroke="currentColor" strokeWidth="2" className="animate-cad-draw" />
      <line x1="50" y1="125" x2="250" y2="125" stroke="currentColor" strokeWidth="1" className="animate-cad-draw" style={{ animationDelay: "0.3s" }} />
      <line x1="150" y1="50" x2="150" y2="200" stroke="currentColor" strokeWidth="1" className="animate-cad-draw" style={{ animationDelay: "0.6s" }} />
      
      {/* Dimension lines */}
      <line x1="50" y1="210" x2="250" y2="210" stroke="currentColor" strokeWidth="1" className="animate-cad-draw" style={{ animationDelay: "0.9s" }} />
      <line x1="50" y1="205" x2="50" y2="215" stroke="currentColor" strokeWidth="1" className="animate-cad-draw" style={{ animationDelay: "0.9s" }} />
      <line x1="250" y1="205" x2="250" y2="215" stroke="currentColor" strokeWidth="1" className="animate-cad-draw" style={{ animationDelay: "0.9s" }} />
      
      {/* Circle */}
      <circle cx="150" cy="125" r="30" stroke="currentColor" strokeWidth="2" className="animate-cad-draw" style={{ animationDelay: "1.2s" }} />
    </svg>
  );
}
