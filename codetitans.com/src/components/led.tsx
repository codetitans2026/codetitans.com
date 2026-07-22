import { Lightbulb } from "lucide-react";

interface LedProps {
  size?: number;
  className?: string;
  color?: string;
  on?: boolean;
}

export function Led({ size = 24, className = "", color = "#4ade80", on = true }: LedProps) {
  return (
    <div 
      className={`inline-flex ${on ? "animate-led" : ""} ${className}`}
      style={{ color, opacity: on ? 1 : 0.3 }}
    >
      <Lightbulb size={size} strokeWidth={2} fill={on ? color : "none"} />
    </div>
  );
}
