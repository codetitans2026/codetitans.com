import { createFileRoute, Link } from "@tanstack/react-router";
import greenMatrix from "../assets/green-matrix.jpg";
import { Reveal } from "../components/reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Code Titans" },
      { name: "description", content: "Just $20 per semester — 12 sessions, first 2 free. Affordable coding education for youth in Cupertino." },
      { property: "og:title", content: "Pricing — Code Titans" },
      { property: "og:description", content: "$20 per semester. 12 sessions, first 2 free." },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <img
        src={greenMatrix}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-full object-cover mix-blend-screen animate-pricing-backdrop md:w-2/3"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-2 md:px-10">
        <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
          <Reveal direction="blur">
            <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
              Pricing
            </h1>
          </Reveal>
          <Reveal direction="left" delay={150} className="mt-10 space-y-3 text-sm text-foreground/85 md:text-base">
            <p className="font-medium">Overall cost: $20</p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>1 semester consists of 12 sessions.</li>
              <li>Enjoy the first 2 sessions for free!</li>
              <li>The remaining 10 sessions will be $2 each.</li>
            </ul>
          </Reveal>
          <Reveal direction="up" delay={350}>
            <Link
              to="/registration"
              className="mt-10 inline-flex h-11 items-center justify-center rounded-md bg-primary px-10 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Register
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}