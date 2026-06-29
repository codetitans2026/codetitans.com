import logoSvg from "../assets/logo.svg";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoSvg}
      alt="Code Titans Logo"
      className={className}
    />
  );
}
