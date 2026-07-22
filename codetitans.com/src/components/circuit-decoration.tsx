interface CircuitDecorationProps {
  className?: string;
  style?: React.CSSProperties;
}

export function CircuitDecoration({ className = "", style }: CircuitDecorationProps) {
  return (
    <svg 
      className={`absolute pointer-events-none opacity-20 ${className}`}
      width="200" 
      height="200" 
      viewBox="0 0 200 200"
      fill="none"
      style={style}
    >
      <path 
        d="M10 100 L50 100 L70 60 L130 60 L150 100 L190 100" 
        stroke="currentColor" 
        strokeWidth="2"
        className="animate-circuit"
        style={{ strokeDasharray: 1000 }}
      />
      <circle cx="10" cy="100" r="4" fill="currentColor" className="animate-led" style={{ color: "#4ade80" }} />
      <circle cx="50" cy="100" r="4" fill="currentColor" className="animate-led" style={{ color: "#f87171", animationDelay: "0.2s" }} />
      <circle cx="70" cy="60" r="4" fill="currentColor" className="animate-led" style={{ color: "#60a5fa", animationDelay: "0.4s" }} />
      <circle cx="130" cy="60" r="4" fill="currentColor" className="animate-led" style={{ color: "#fbbf24", animationDelay: "0.6s" }} />
      <circle cx="150" cy="100" r="4" fill="currentColor" className="animate-led" style={{ color: "#a78bfa", animationDelay: "0.8s" }} />
      <circle cx="190" cy="100" r="4" fill="currentColor" className="animate-led" style={{ color: "#4ade80", animationDelay: "1s" }} />
    </svg>
  );
}
