import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Building2, Users, HandHeart } from "lucide-react";
import heroWave from "../assets/hero-wave.jpg";
import { Reveal } from "../components/reveal";
import { Gear } from "../components/gear";
import { Sparkle } from "../components/sparkle";
import { Led } from "../components/led";
import { CodeBlock } from "../components/code-block";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: " Our Sponsors — Code Titans" },
      { name: "description", content: "Partner with Code Titans to empower the next generation of coders. Join our community of sponsors supporting youth STEM education." },
      { property: "og:title", content: "Our Sponsors — Code Titans" },
      { property: "og:description", content: "Support youth coding education in Cupertino." },
    ],
  }),
  component: Sponsors,
});

const SPONSOR_TIERS = [
  {
    name: "Titan Sponsor",
    description: "Premium partnership with maximum visibility and impact",
    benefits: [
      "Logo featured on all materials",
      "Speaking opportunities at events",
      "Priority student project access",
      "Annual impact report",
      "Exclusive networking events"
    ],
    color: "#f97316",
    icon: "🏆",
  },
  {
    name: "Code Sponsor",
    description: "Major partnership with significant visibility",
    benefits: [
      "Logo on website and event materials",
      "Event sponsorship opportunities",
      "Student mentorship program",
      "Quarterly updates",
      "Networking access"
    ],
    color: "#3b82f6",
    icon: "💻",
  },
  {
    name: "Spark Sponsor",
    description: "Support emerging coders with foundational impact",
    benefits: [
      "Logo on website",
      "Event acknowledgment",
      "Newsletter features",
      "Volunteer opportunities",
      "Community recognition"
    ],
    color: "#22c55e",
    icon: "⚡",
  },
];

const CURRENT_SPONSORS = [
  {
    name: "TechCorp Solutions",
    tier: "Titan Sponsor",
    logo: "🏢",
    description: "Leading technology company supporting STEM education",
  },
  {
    name: "InnovateLabs",
    tier: "Code Sponsor", 
    logo: "🔬",
    description: "Research and development company focused on youth education",
  },
  {
    name: "CodeFirst Academy",
    tier: "Spark Sponsor",
    logo: "📚",
    description: "Educational platform dedicated to coding literacy",
  },
];

function Sponsors() {
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
              Partner With Us to
              <br />
              Empower Future Coders
            </h1>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <p className="mt-6 max-w-2xl text-base text-foreground/85 md:text-lg">
              Join our community of sponsors who are making a real difference in youth STEM education. Your support helps us provide quality coding programs to students in Cupertino.
            </p>
          </Reveal>
          <div className="flex gap-3 mt-6">
            <CodeBlock>Support Education</CodeBlock>
            <CodeBlock>Build Future</CodeBlock>
            <CodeBlock>Join Community</CodeBlock>
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal direction="up">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-12">Sponsorship Tiers</h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {SPONSOR_TIERS.map((tier, i) => (
              <div key={tier.name} style={{ borderColor: tier.color }} className="rounded-lg border-2 bg-card/60 backdrop-blur hover:scale-105 transition-transform duration-300">
                <Reveal
                  direction={i % 2 === 0 ? "left" : "right"}
                  delay={i * 150}
                  className="p-8"
                >
                  <div className="text-5xl mb-4 animate-bounce-fun">{tier.icon}</div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Led size={16} color={tier.color} />
                        <span className="text-foreground/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:opacity-90 animate-bounce-fun"
                    style={{ backgroundColor: tier.color, color: "white" }}
                  >
                    Become a {tier.name}
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal direction="up">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-12">Our Current Sponsors</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {CURRENT_SPONSORS.map((sponsor, i) => (
              <Reveal
                key={sponsor.name}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 120}
                className="rounded-lg border border-border bg-card/40 backdrop-blur p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{sponsor.logo}</div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{sponsor.name}</h3>
                    <span className="text-xs font-medium text-primary">{sponsor.tier}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{sponsor.description}</p>
                <div className="flex gap-2 mt-4">
                  <Sparkle size={14} delay={i * 0.1} className="text-yellow-400" />
                  <Sparkle size={12} delay={i * 0.1 + 0.2} className="text-blue-400" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid overflow-hidden rounded-lg border border-border lg:grid-cols-2">
            <Reveal direction="left" as="div" className="relative flex min-h-[300px] items-center justify-center overflow-hidden p-10 bg-primary/10">
              <div className="flex gap-8">
                <Heart size={64} className="text-primary animate-pulse-slow" />
                <HandHeart size={64} className="text-primary animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
              </div>
              <h2 className="font-display relative z-10 mt-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
                Why Sponsor Code Titans?
              </h2>
            </Reveal>
            <Reveal direction="right" as="div" className="flex items-center bg-card/30 p-10 md:p-14">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Users className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground">Impact 500+ Students</h3>
                    <p className="text-sm text-muted-foreground mt-1">Reach hundreds of aspiring young coders in our community</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building2 className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground">Community Recognition</h3>
                    <p className="text-sm text-muted-foreground mt-1">Be recognized as a leader in supporting STEM education</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Gear className="text-primary flex-shrink-0 animate-gear" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground">Future Talent Pipeline</h3>
                    <p className="text-sm text-muted-foreground mt-1">Connect with the next generation of tech talent</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background pb-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal direction="up" as="div" className="rounded-lg border border-border bg-card/40 backdrop-blur p-10 text-center">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Ready to Make a Difference?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us today to learn more about sponsorship opportunities and how you can help empower the next generation of coders.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 animate-bounce-fun"
              >
                Contact Us
              </Link>
              <Link
                to="/registration"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border px-8 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Register Interest
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
