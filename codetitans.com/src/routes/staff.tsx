import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/reveal";
import valanSebastian from "../assets/valan-sebastian.png";
import palashAgrawal from "../assets/palash-agrawal.jpg";
import shreeanshBharadwaj from "../assets/shreeansh-bharadwaj.jpg";
import minjaeKim from "../assets/minjae-kim.jpg";
import judeAlSakka from "../assets/jude-al-sakka.jpg";

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Meet Our Staff — Code Titans" },
      { name: "description", content: "Meet the passionate team behind Code Titans." },
      { property: "og:title", content: "Meet Our Staff — Code Titans" },
      { property: "og:description", content: "Our dedicated team of educators and mentors." },
    ],
  }),
  component: Members,
});

function Members() {
  const members = [
    { name: "Daniil Kupriianov", role: "Arduino and CAD Mentor", image: null },
    { name: "Palash Agrawal", role: "Java Mentor", image: palashAgrawal },
    { name: "Valan Sebastian", role: "JavaScript Mentor", image: valanSebastian },
    { name: "Shreeansh Bharadwaj", role: "Python Mentor", image: shreeanshBharadwaj },
    { name: "Jeevesh Kandasamy", role: "Java Mentor", image: null },
    { name: "Minjae Kim", role: "JavaScript Mentor", image: minjaeKim },
    { name: "Jude Al Sakka", role: "Python Mentor", image: judeAlSakka },
    { name: "Aashman", role: "Arduino and CAD Mentor", image: null },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative mx-auto max-w-[1400px] px-6 pt-40 pb-24 md:px-10">
          <Reveal direction="blur">
            <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
              Meet Our Staff
            </h1>
          </Reveal>
          <Reveal direction="left" delay={250}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/90">
              Our dedicated team of educators and mentors who are passionate about empowering youth through computer science education.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {members.map((member, index) => (
              <Reveal
                key={member.name}
                as="div"
                direction="scale"
                delay={index * 100}
                className="flex flex-col items-center"
              >
                <div className="h-48 w-48 rounded-full border-4 border-[#000080] bg-[#000080]/20 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`h-full w-full object-cover ${member.name === "Palash Agrawal" ? "object-[30%_20%] scale-125" : member.name === "Shreeansh Bharadwaj" ? "object-[50%_25%] scale-110" : member.name === "Minjae Kim" ? "object-[50%_10%]" : member.name === "Jude Al Sakka" ? "object-[60%_30%]" : ""}`}
                    />
                  ) : (
                    <span className="text-foreground/30 text-sm">Photo</span>
                  )}
                </div>
                <p className="mt-4 text-sm font-medium text-foreground">{member.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="h-16" />
      </section>
    </>
  );
}
