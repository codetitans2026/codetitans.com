import { Star } from "lucide-react";

interface SparkleProps {
  size?: number;
  className?: string;
  delay?: number;
}

export function Sparkle({ size = 16, className = "", delay = 0 }: SparkleProps) {
  return (
    <Star 
      size={size} 
      className={`animate-sparkle ${className}`}
      style={{ animationDelay: `${delay}s` }}
      fill="currentColor"
      strokeWidth={0}
    />
  );
}
