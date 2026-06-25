import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-display text-base font-semibold">Code Titans</span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            codetitans2026@gmail.com
            <br />
            Cupertino, CA 95014
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-3 text-sm md:justify-self-center">
          <Link to="/about" className="text-foreground/85 hover:text-primary">About Us</Link>
          <Link to="/programs" className="text-foreground/85 hover:text-primary">Programs</Link>
          <Link to="/registration" className="text-foreground/85 hover:text-primary">Register</Link>
          <Link to="/contact" className="text-foreground/85 hover:text-primary">Contact Us</Link>
        </div>

        <div className="flex md:justify-end">
          <Link
            to="/donate"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </footer>
  );
}