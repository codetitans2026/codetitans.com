import { createFileRoute, Link } from "@tanstack/react-router";
import { Cloud, Layers, Hexagon, Users } from "lucide-react";
import heroWave from "../assets/hero-wave.jpg";
import blueWave from "../assets/blue-wave.jpg";
import { Reveal } from "../components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Code Titans — Empowering Youth Through Technology" },
      { name: "description", content: "Cupertino non-profit inspiring the next generation of coders through semester-long programs in Java, Python, JavaScript, and Arduino." },
      { property: "og:title", content: "Code Titans — Empowering Youth Through Technology" },
      { property: "og:description", content: "Cupertino non-profit inspiring the next generation of coders." },
    ],
  }),
  component: Index,
});

const FEATURES = [
  {
    icon: Cloud,
    title: "Diverse Programming Languages",
    body: "Our semester-long programs cover various programming languages including Java, Python, JavaScript, and Arduino, ensuring that students gain valuable skills relevant to the tech industry.",
  },
  {
    icon: Hexagon,
    title: "Community Engagement",
    body: "We collaborate with local businesses in Cupertino to create impactful digital products while offering students hands-on experience in real-world projects.",
  },
  {
    icon: Layers,
    title: "Mentorship and Support",
    body: "Code Titans emphasizes mentorship, pairing students with experienced instructors who guide them through their learning journey.",
  },
  {
    icon: Users,
    title: "Building a Tech-Savvy Future",
    body: "By investing in youth education today, we inspire young minds to explore the world of Computer Science, where technology can be leveraged to solve real-world problems in the future.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] w-full overflow-hidden">
        <img
          src={heroWave}
          alt=""
          className="absolute inset-0 h-full w-full object-cover animate-drift"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-[1400px] flex-col justify-center px-6 pt-32 pb-20 md:px-10">
          <Reveal direction="left">
            <h1 className="font-display max-w-2xl text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl md:text-6xl">
              Empowering Youth Through Technology
            </h1>
          </Reveal>
          <Reveal direction="left" delay={150}>
            <p className="mt-6 max-w-md text-base text-foreground/85 md:text-lg">
              Inspiring the Next Generation of Coders
            </p>
          </Reveal>
          <Reveal direction="up" delay={300} className="mt-10">
            <Link
              to="/programs"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              See Programs
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TRANSFORMING LIVES + FEATURE GRID */}
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <img
          src={blueWave}
          alt=""
          loading="lazy"
          className="pointer-events-none absolute left-0 top-1/2 hidden h-[60%] w-1/2 -translate-y-1/2 object-cover opacity-50 md:block animate-drift"
          width={1280}
          height={960}
        />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 md:px-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex items-center">
            <div className="max-w-md">
              <h2 className="font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                Transforming Lives with Computer Science Education
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                Code Titans is dedicated to providing comprehensive computer science education to youth, fostering creativity and technological skills that are essential in today's digital world.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURES.map((f, i) => (
              <Reveal
                key={f.title}
                direction={(["blur", "left", "right", "rotate"] as const)[i % 4]}
                delay={i * 160}
                className="rounded-lg border border-border bg-card/60 p-7 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <f.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-base font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
                <div className="mt-6 h-px w-12 bg-primary/60" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATIVE PROGRAMS */}
      <section className="bg-background pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid overflow-hidden rounded-lg border border-border lg:grid-cols-2">
            <div
              className="relative flex min-h-[360px] items-center justify-center overflow-hidden p-10"
            >
              <img
                src={ripple()}
                alt=""
                className="absolute inset-0 h-full w-full object-cover animate-spin-slow"
                style={{ transformOrigin: "center" }}
              />
              <div className="absolute inset-0 bg-background/30" />
              <h3 className="font-display relative z-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
                Innovative Programs for
                <br />
                Aspiring Coders
              </h3>
            </div>
            <div className="flex items-center bg-card/30 p-10 md:p-14">
              <div className="max-w-md">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  At Code Titans, we offer engaging and interactive coding programs that ignite passion for technology in young minds. From foundational coding skills to advanced programming techniques, our curriculum is designed to adapt to the needs of every student. Our commitment to education extends beyond the classroom through community projects and partnerships.
                </p>
                <Link
                  to="/programs"
                  className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* INTERESTED IN SIGNING UP */}
          <div className="mt-10 grid overflow-hidden rounded-lg border border-border lg:grid-cols-2">
            <div
              className="relative flex min-h-[320px] items-center justify-center overflow-hidden p-10"
            >
              <img
                src={sphere()}
                alt=""
                className="absolute inset-0 h-full w-full object-cover animate-pulse-slow"
              />
              <div className="absolute inset-0 bg-background/20" />
              <h3 className="font-display relative z-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
                Interested in signing up for a program?
              </h3>
            </div>
            <div className="flex items-center bg-card/30 p-10 md:p-14">
              <div className="max-w-md">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  Sign up today to participate in a fun, hands-on coding program and learn from our instructors!
                </p>
                <Link
                  to="/registration"
                  className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Helpers to lazily resolve the asset URLs (avoid top-of-file clutter).
import redRipple from "../assets/red-ripple.jpg";
import redSphere from "../assets/red-sphere.jpg";
function ripple() { return redRipple; }
function sphere() { return redSphere; }
