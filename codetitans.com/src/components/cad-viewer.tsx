interface CadViewerProps {
  className?: string;
  title?: string;
}

export function CadViewer({ className = "", title = "CAD Design Showcase" }: CadViewerProps) {
  return (
    <div className={`rounded-lg border border-border bg-card/40 backdrop-blur p-6 ${className}`}>
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">{title}</h3>
      <div className="relative bg-background/50 rounded-lg overflow-hidden" style={{ minHeight: "300px" }}>
        {/* CAD Grid Background */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-20"
          width="100%" 
          height="100%"
        >
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)"/>
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* CAD Drawing */}
        <svg 
          className="relative z-10 w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
        >
          {/* Main shape - technical drawing style */}
          <rect x="50" y="50" width="300" height="200" stroke="currentColor" strokeWidth="2" className="animate-cad-draw" />
          
          {/* Inner details */}
          <rect x="80" y="80" width="100" height="60" stroke="currentColor" strokeWidth="1.5" className="animate-cad-draw" style={{ animationDelay: "0.3s" }} />
          <rect x="220" y="80" width="100" height="60" stroke="currentColor" strokeWidth="1.5" className="animate-cad-draw" style={{ animationDelay: "0.6s" }} />
          <rect x="80" y="160" width="240" height="70" stroke="currentColor" strokeWidth="1.5" className="animate-cad-draw" style={{ animationDelay: "0.9s" }} />
          
          {/* Dimension lines */}
          <line x1="50" y1="270" x2="350" y2="270" stroke="currentColor" strokeWidth="1" className="animate-cad-draw" style={{ animationDelay: "1.2s" }} />
          <line x1="50" y1="265" x2="50" y2="275" stroke="currentColor" strokeWidth="1" className="animate-cad-draw" style={{ animationDelay: "1.2s" }} />
          <line x1="350" y1="265" x2="350" y2="275" stroke="currentColor" strokeWidth="1" className="animate-cad-draw" style={{ animationDelay: "1.2s" }} />
          
          <line x1="370" y1="50" x2="370" y2="250" stroke="currentColor" strokeWidth="1" className="animate-cad-draw" style={{ animationDelay: "1.5s" }} />
          <line x1="365" y1="50" x2="375" y2="50" stroke="currentColor" strokeWidth="1" className="animate-cad-draw" style={{ animationDelay: "1.5s" }} />
          <line x1="365" y1="250" x2="375" y2="250" stroke="currentColor" strokeWidth="1" className="animate-cad-draw" style={{ animationDelay: "1.5s" }} />
          
          {/* Circles for mechanical parts */}
          <circle cx="130" cy="110" r="15" stroke="currentColor" strokeWidth="1.5" className="animate-cad-draw" style={{ animationDelay: "1.8s" }} />
          <circle cx="270" cy="110" r="15" stroke="currentColor" strokeWidth="1.5" className="animate-cad-draw" style={{ animationDelay: "2.1s" }} />
          <circle cx="200" cy="195" r="25" stroke="currentColor" strokeWidth="1.5" className="animate-cad-draw" style={{ animationDelay: "2.4s" }} />
          
          {/* Center lines */}
          <line x1="115" y1="110" x2="145" y2="110" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,3" className="animate-cad-draw" style={{ animationDelay: "2.7s" }} />
          <line x1="130" y1="95" x2="130" y2="125" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,3" className="animate-cad-draw" style={{ animationDelay: "2.7s" }} />
          
          <line x1="255" y1="110" x2="285" y2="110" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,3" className="animate-cad-draw" style={{ animationDelay: "3.0s" }} />
          <line x1="270" y1="95" x2="270" y2="125" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,3" className="animate-cad-draw" style={{ animationDelay: "3.0s" }} />
        </svg>

        {/* Overlay info */}
        <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-3 py-2 rounded text-xs text-muted-foreground">
          <div>DWG: PROJECT_001</div>
          <div>SCALE: 1:10</div>
          <div>UNITS: MM</div>
        </div>
      </div>
      
      <div className="mt-4 flex gap-2">
        <button className="px-3 py-1 rounded bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          Download .DWG
        </button>
        <button className="px-3 py-1 rounded bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          View 3D
        </button>
        <button className="px-3 py-1 rounded bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          Print
        </button>
      </div>
    </div>
  );
}
