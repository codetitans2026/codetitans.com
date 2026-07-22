import { Gear as GearIcon } from "./gear";

interface GearClusterProps {
  className?: string;
}

export function GearCluster({ className = "" }: GearClusterProps) {
  return (
    <div className={`relative ${className}`}>
      <GearIcon size={60} color="#f97316" className="absolute top-0 left-0 animate-gear" />
      <GearIcon size={45} color="#3b82f6" reverse className="absolute top-8 left-12 animate-gear-reverse" />
      <GearIcon size={35} color="#22c55e" fast className="absolute top-16 left-24 animate-gear-fast" />
      <GearIcon size={28} color="#a855f7" className="absolute top-24 left-8 animate-gear" />
      <GearIcon size={22} color="#f59e0b" reverse className="absolute top-20 left-32 animate-gear-reverse" />
    </div>
  );
}
