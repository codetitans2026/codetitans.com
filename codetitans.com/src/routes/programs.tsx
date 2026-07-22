import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroWave from "../assets/hero-wave.jpg";
import redSwirl from "../assets/red-swirl.jpg";
import { Reveal } from "../components/reveal";
import { Gear } from "../components/gear";
import { Sensor } from "../components/sensor";
import { Led } from "../components/led";
import { Sparkle } from "../components/sparkle";
import { CodeBlock } from "../components/code-block";

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
    color: "#f89820",
    duration: "12 weeks",
    age: "10-13",
  },
  {
    title: "Python for Data Science",
    body: "Dive into Python with our specialized program designed for aspiring data scientists. Students will explore data analysis techniques and machine learning concepts, equipping them with skills to tackle real-world data challenges.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    alt: "Python logo",
    color: "#3776ab",
    duration: "10 weeks",
    age: "11-14",
  },
  {
    title: "JavaScript for Web Development",
    body: "Our JavaScript course teaches students how to create interactive and dynamic web pages. They will learn about essential web technologies and gain practical experience in building responsive websites.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript logo",
    color: "#f7df1e",
    duration: "8 weeks",
    age: "10-13",
  },
  {
    title: "Hands-On Arduino Workshops",
    body: "In our Arduino workshops, students will engage in exciting projects that combine coding with hardware. They will learn how to program microcontrollers and create innovative gadgets, fostering creativity and problem-solving skills.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
    alt: "Arduino logo",
    color: "#00979d",
    duration: "6 weeks",
    age: "8-12",
  },
];

function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);
  const [symbolPositions, setSymbolPositions] = useState<{ [key: number]: { x: number; y: number } }>({});

  const handleSymbolClick = (index: number) => {
    setSelectedProgram(index);
    setSymbolPositions(prev => ({
      ...prev,
      [index]: {
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100
      }
    }));
  };

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
          <div className="flex items-center gap-4 mb-4">
            <Gear size={48} color="#f97316" className="animate-gear" />
            <Gear size={36} color="#3b82f6" reverse className="animate-gear-reverse" />
            <Sparkle size={24} delay={0} className="text-yellow-400" />
            <Sparkle size={20} delay={0.3} className="text-purple-400" />
          </div>
          <Reveal direction="blur">
            <h1 className="font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Empowering the Next
              <br />
              Generation of Coders
            </h1>
          </Reveal>
          <div className="flex gap-3 mt-6">
            <CodeBlock>Java</CodeBlock>
            <CodeBlock>Python</CodeBlock>
            <CodeBlock>Arduino</CodeBlock>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 pb-20 md:px-10">
          <Reveal direction="up">
            <h2 className="font-display text-xl font-medium text-foreground/90">Our Programs</h2>
          </Reveal>
          
          {/* Customizable Programs Table */}
          <div className="mt-8 rounded-lg border border-border bg-card/60 backdrop-blur overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 bg-primary/10 border-b border-border font-semibold text-sm">
              <div className="col-span-1">Icon</div>
              <div className="col-span-3">Program</div>
              <div className="col-span-2">Duration</div>
              <div className="col-span-2">Age Group</div>
              <div className="col-span-3">Description</div>
              <div className="col-span-1">Actions</div>
            </div>
            
            {PROGRAMS.map((p, i) => (
              <Reveal
                key={p.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 140}
                className="grid grid-cols-12 gap-4 p-4 border-b border-border items-center hover:bg-card/80 transition-colors"
              >
                <div className="col-span-1">
                  <div 
                    className="relative cursor-pointer inline-block"
                    onClick={() => handleSymbolClick(i)}
                    style={{
                      transform: symbolPositions[i] ? `translate(${symbolPositions[i].x}px, ${symbolPositions[i].y}px)` : 'translate(0, 0)',
                      transition: 'transform 0.5s ease-out'
                    }}
                  >
                    <img
                      src={p.icon}
                      alt={p.alt}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-125"
                      loading="lazy"
                    />
                    {selectedProgram === i && (
                      <div className="absolute -top-2 -right-2">
                        <Sparkle size={16} delay={0} className="text-yellow-400" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-span-3">
                  <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
                  <div className="flex gap-2 mt-1">
                    <Sensor size={16} color={p.color} />
                    <Led size={14} color={p.color} />
                  </div>
                </div>
                <div className="col-span-2 text-sm text-muted-foreground">{p.duration}</div>
                <div className="col-span-2 text-sm text-muted-foreground">{p.age} years</div>
                <div className="col-span-3 text-sm text-muted-foreground line-clamp-2">{p.body}</div>
                <div className="col-span-1">
                  <button 
                    className="px-3 py-1 rounded bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors animate-bounce-fun"
                    onClick={() => setSelectedProgram(i)}
                  >
                    {selectedProgram === i ? 'Selected' : 'Select'}
                  </button>
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