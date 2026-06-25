import { createFileRoute, Link } from "@tanstack/react-router";
import blueCode from "../assets/blue-code.jpg";
import { Reveal } from "../components/reveal";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration — Code Titans" },
      { name: "description", content: "Registration for Code Titans programs — coming soon. Reach out for any inquiries about our coding courses." },
      { property: "og:title", content: "Registration — Code Titans" },
      { property: "og:description", content: "Registration information coming soon — contact us for details." },
    ],
  }),
  component: Registration,
});

function Registration() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <img
        src={blueCode}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover opacity-60 mix-blend-screen animate-drift md:w-3/4"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-2 md:px-10 md:ml-auto">
        <div className="md:col-start-2 flex flex-col items-center justify-center text-center md:items-start md:text-left">
          <Reveal direction="right">
            <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
              Registration
            </h1>
          </Reveal>
          <Reveal direction="blur" delay={200}>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              More information for registration coming soon! Stay tuned! For any inquiries, feel free to reach out to us via email. We appreciate your interest in supporting our mission.
            </p>
          </Reveal>
          <Reveal direction="up" delay={450}>
            <Link
              to="/contact"
              className="mt-10 inline-flex h-11 items-center justify-center rounded-md bg-primary px-10 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}