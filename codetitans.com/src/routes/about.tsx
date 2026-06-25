import { createFileRoute } from "@tanstack/react-router";
import blueWave from "../assets/blue-wave.jpg";
import redWave from "../assets/red-wave.jpg";
import { Reveal } from "../components/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Code Titans" },
      { name: "description", content: "Founded by passionate students, Code Titans empowers youth in Cupertino through accessible computer science education." },
      { property: "og:title", content: "About Us — Code Titans" },
      { property: "og:description", content: "Our mission, story, and team of empowered educators." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={redWave}
          alt=""
          className="absolute right-0 top-0 hidden h-full w-2/3 object-cover opacity-60 animate-drift md:block"
          width={1280}
          height={960}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative mx-auto max-w-[1400px] px-6 pt-40 pb-24 md:px-10">
          <Reveal direction="blur">
            <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
              Our Mission
            </h1>
          </Reveal>
          <Reveal direction="left" delay={250}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/90">
              At Code Titans, we are dedicated to empowering youth through computer science education. Our mission is to unlock the potential of the next generation by providing accessible and engaging programming courses, fostering a passion for technology, and preparing students for future success.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-4">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid overflow-hidden rounded-lg border border-border lg:grid-cols-2">
            <Reveal as="div" direction="left" className="relative flex min-h-[360px] items-center justify-center overflow-hidden p-10">
              <div
                className="absolute inset-0 bg-cover bg-center animate-drift"
                style={{ backgroundImage: `url(${blueWave})` }}
              />
              <div className="absolute inset-0 bg-background/30" />
              <h2 className="font-display relative z-10 text-3xl font-semibold text-foreground">
                Our Story
              </h2>
            </Reveal>
            <Reveal as="div" direction="right" delay={150} className="flex items-center bg-card/30 p-10 md:p-14">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Founded by a group of passionate students, Code Titans emerged from a desire to share knowledge and inspire others in the field of technology. Our organization offers semester-long programs in Java, Python, JavaScript, and Arduino, equipping young minds with vital skills. We collaborate with local businesses in Cupertino, helping them establish their online presence through website creation and digital products, making a real impact in our community.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-lg border border-border lg:grid-cols-2">
            <Reveal as="div" direction="left" className="flex items-center bg-card/30 p-10 md:p-14 lg:order-1">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Our team at Code Titans is composed of experienced instructors who are committed to nurturing young talent. We believe in a hands-on approach to learning, where students can develop their skills through practical projects. With a diverse group of mentors, we strive to create an inclusive environment that encourages creativity and collaboration.
              </p>
            </Reveal>
            <Reveal as="div" direction="scale" delay={150} className="relative flex min-h-[360px] items-center justify-center overflow-hidden p-10 lg:order-2">
              <div
                className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
                style={{ backgroundImage: `url(${redWave})` }}
              />
              <div className="absolute inset-0 bg-background/30" />
              <h2 className="font-display relative z-10 text-center text-3xl font-semibold text-foreground">
                Empowered Educators
              </h2>
            </Reveal>
          </div>
        </div>
        <div className="h-16" />
      </section>
    </>
  );
}