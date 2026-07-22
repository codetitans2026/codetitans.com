import { Settings } from "lucide-react";

interface GearProps {
  size?: number;
  className?: string;
  reverse?: boolean;
  fast?: boolean;
  color?: string;
}

export function Gear({ size = 48, className = "", reverse = false, fast = false, color = "currentColor" }: GearProps) {
  const animationClass = fast ? "animate-gear-fast" : reverse ? "animate-gear-reverse" : "animate-gear";
  
  return (
    <div className={`inline-flex ${animationClass} ${className}`}>
      <Settings size={size} color={color} strokeWidth={1.5} />
    </div>
  );
}
