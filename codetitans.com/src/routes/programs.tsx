import { createFileRoute } from "@tanstack/react-router";
import heroWave from "../assets/hero-wave.jpg";
import redSwirl from "../assets/red-swirl.jpg";
import { Reveal } from "../components/reveal";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Code Titans" },
      { name: "description", content: "Semester-long courses in Java, Python, JavaScript, and hands-on Arduino workshops for aspiring student coders." },
      { property: "og:title", content: "Our Programs — Code Titans" },
      { property: "og:description", content: "Java, Python, JavaScript, and Arduino programs for the next generation." },
    ],
  }),
  component: Programs,
});

const PROGRAMS = [
  {
    title: "Java Programming for Beginners",
    body: "Our Java programming course introduces students to the fundamentals of coding in a fun and engaging way. Through hands-on projects, students will learn to build their own applications and understand the importance of structured programming.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    alt: "Java logo",
  },
  {
    title: "Python for Data Science",
    body: "Dive into Python with our specialized program designed for aspiring data scientists. Students will explore data analysis techniques and machine learning concepts, equipping them with skills to tackle real-world data challenges.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    alt: "Python logo",
  },
  {
    title: "JavaScript for Web Development",
    body: "Our JavaScript course teaches students how to create interactive and dynamic web pages. They will learn about essential web technologies and gain practical experience in building responsive websites.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript logo",
  },
  {
    title: "Hands-On Arduino Workshops",
    body: "In our Arduino workshops, students will engage in exciting projects that combine coding with hardware. They will learn how to program microcontrollers and create innovative gadgets, fostering creativity and problem-solving skills.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
    alt: "Arduino logo",
  },
];

function Programs() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroWave}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70 animate-drift"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="relative mx-auto max-w-[1400px] px-6 pt-40 pb-16 md:px-10">
          <Reveal direction="blur">
            <h1 className="font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Empowering the Next
              <br />
              Generation of Coders
            </h1>
          </Reveal>
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 pb-20 md:px-10">
          <Reveal direction="up">
            <h2 className="font-display text-xl font-medium text-foreground/90">Our Programs</h2>
          </Reveal>
          <div className="mt-8 divide-y divide-border rounded-lg border border-border bg-card/40 backdrop-blur">
            {PROGRAMS.map((p, i) => (
              <Reveal
                key={p.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 140}
                className="grid items-center gap-6 p-6 md:grid-cols-[140px_1fr] md:gap-10 md:p-8"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center md:mx-0">
                  <img
                    src={p.icon}
                    alt={p.alt}
                    width={88}
                    height={88}
                    className="h-20 w-20 object-contain transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background pb-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid overflow-hidden rounded-lg border border-border lg:grid-cols-2">
            <Reveal direction="left" as="div" className="relative flex min-h-[300px] items-center justify-center overflow-hidden p-10">
              <img
                src={redSwirl}
                alt=""
                className="absolute inset-0 h-full w-full object-cover animate-drift"
              />
              <div className="absolute inset-0 bg-background/30" />
              <h2 className="font-display relative z-10 text-center text-2xl font-semibold text-foreground md:text-3xl">
                Building Community
                <br />
                and Connections
              </h2>
            </Reveal>
            <Reveal direction="right" as="div" className="flex items-center bg-card/30 p-10 md:p-14">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                By partnering with local businesses, we not only provide students with real-world experience but also help strengthen our community. Our mission is to inspire youth to pursue careers in technology and foster collaboration within Cupertino.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}