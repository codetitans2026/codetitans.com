import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Info } from "lucide-react";
import donateHeart from "../assets/donate-support.jpg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Code Titans" },
      { name: "description", content: "Your donation helps Code Titans bring computer science education to youth in Cupertino. Make a difference today." },
      { property: "og:title", content: "Donate — Code Titans" },
      { property: "og:description", content: "Make a difference — support youth coding education in Cupertino." },
    ],
  }),
  component: Donate,
});

const FREQUENCIES = ["One time", "Monthly", "Yearly"] as const;
const AMOUNTS = [50, 100, 200, 1000] as const;

function Donate() {
  const [frequency, setFrequency] = useState<(typeof FREQUENCIES)[number]>("One time");
  const [amount, setAmount] = useState<number>(50);

  return (
    <section className="bg-background pt-28 pb-24">
      <div className="mx-auto grid max-w-[1400px] gap-0 px-0 md:grid-cols-2 md:px-10">
        <div className="overflow-hidden md:rounded-l-lg">
          <img
            src={donateHeart}
            alt="Two glowing hands of light reaching toward each other through streams of code"
            width={1280}
            height={960}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center bg-card/30 p-8 md:p-14">
          <div className="w-full max-w-md">
            <h1 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
              Make a difference
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Change starts with people like you. Your donation helps make a real impact, one action at a time. Together, we can do more.
            </p>

            <fieldset className="mt-8">
              <legend className="text-xs font-medium uppercase tracking-wide text-foreground/80">
                Frequency
              </legend>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {FREQUENCIES.map((f) => (
                  <button
                    type="button"
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={`h-10 rounded-md border text-sm transition-colors ${
                      frequency === f
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-input/40 text-foreground/80 hover:border-primary/60"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-xs font-medium uppercase tracking-wide text-foreground/80">
                Amount
              </legend>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {AMOUNTS.map((a) => (
                  <button
                    type="button"
                    key={a}
                    onClick={() => setAmount(a)}
                    className={`h-10 rounded-md border text-sm transition-colors ${
                      amount === a
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-input/40 text-foreground/80 hover:border-primary/60"
                    }`}
                  >
                    ${a.toLocaleString()}
                  </button>
                ))}
              </div>
            </fieldset>

            <button
              type="button"
              disabled
              className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-90"
            >
              Donate ${amount.toLocaleString()} {frequency !== "One time" && `· ${frequency}`}
            </button>

            <div className="mt-3 flex items-start gap-2 text-xs text-primary/90">
              <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
              <span>
                This site can't accept donations right now. Please reach out via the contact page to support our mission.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}