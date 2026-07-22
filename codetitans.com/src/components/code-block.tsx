import { Code2 } from "lucide-react";

interface CodeBlockProps {
  className?: string;
  children?: React.ReactNode;
}

export function CodeBlock({ className = "", children }: CodeBlockProps) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-lg bg-card/80 border border-border px-4 py-2 ${className}`}>
      <Code2 className="animate-code-typing text-primary" size={20} strokeWidth={2} />
      <span className="font-mono text-sm text-foreground/90">{children || "&lt;code&gt;"}</span>
    </div>
  );
}
