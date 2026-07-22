import { CircleDot } from "lucide-react";

interface SensorProps {
  size?: number;
  className?: string;
  color?: string;
  active?: boolean;
}

export function Sensor({ size = 32, className = "", color = "#72c", active = true }: SensorProps) {
  return (
    <div 
      className={`inline-flex ${active ? "animate-sensor" : ""} ${className}`}
      style={{ color }}
    >
      <CircleDot size={size} strokeWidth={2} fill={active ? color : "none"} />
    </div>
  );
}
