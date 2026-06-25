import { createFileRoute, Link } from "@tanstack/react-router";
import blueCode from "../assets/blue-code.jpg";
import { Reveal } from "../components/reveal";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Code Titans" },
      { name: "description", content: "Upcoming Code Titans events and workshops — more information coming soon." },
      { property: "og:title", content: "Events — Code Titans" },
      { property: "og:description", content: "Upcoming events and workshops — coming soon." },
    ],
  }),
  component: Events,
});

function Events() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <img
        src={blueCode}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60 blur-sm animate-pulse-slow"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/60 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-2 md:px-10">
        <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
          <Reveal direction="rotate">
            <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
              Events
            </h1>
          </Reveal>
          <Reveal direction="up" delay={250}>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              More information for events coming soon! Stay tuned! For any inquiries, feel free to reach out to us via email. We appreciate your interest in supporting our mission.
            </p>
          </Reveal>
          <Reveal direction="scale" delay={500}>
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