import logoImg from "../assets/logo.png";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoImg}
      alt="Code Titans Logo"
      className={className}
    />
  );
}
