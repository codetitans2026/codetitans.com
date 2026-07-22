import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, ThumbsUp, Instagram, Youtube } from "lucide-react";
import { Reveal } from "../components/reveal";
import { Gear } from "../components/gear";
import { Sparkle } from "../components/sparkle";
import { Sensor } from "../components/sensor";
import { Led } from "../components/led";
import { CodeBlock } from "../components/code-block";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Code Titans" },
      { name: "description", content: "Get in touch with Code Titans — questions about our programs, partnership requests, or general inquiries." },
      { property: "og:title", content: "Contact — Code Titans" },
      { property: "og:description", content: "Reach the Code Titans team by email, social media, or message form." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <>
      <section className="bg-background pt-32 pb-12">
        <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Gear size={48} color="#f97316" className="animate-gear" />
            <Gear size={36} color="#3b82f6" reverse className="animate-gear-reverse" />
            <Sparkle size={24} delay={0} className="text-yellow-400" />
            <Sparkle size={20} delay={0.3} className="text-purple-400" />
          </div>
          <Reveal direction="up">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-foreground/90">
              Let's Connect
            </p>
            <h1 className="font-display mt-3 text-4xl font-semibold text-foreground md:text-5xl">
              Contact Us
            </h1>
            <div className="flex gap-3 mt-6 justify-center">
              <CodeBlock>Email</CodeBlock>
              <CodeBlock>Social</CodeBlock>
              <CodeBlock>Form</CodeBlock>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Have a question for our team? Want to request a website for your business? Want to know more about our programs? Reach out to us via email, social media, or fill out the form below!
            </p>
          </Reveal>
          <div className="flex gap-4 mt-6 justify-center">
            <Sensor size={32} color="#ef4444" />
            <Led size={28} color="#22c55e" />
            <Sensor size={28} color="#3b82f6" />
            <Led size={24} color="#f59e0b" />
          </div>
        </div>
      </section>

      <section className="bg-background pb-12">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-y border-border px-6 py-14 md:grid-cols-2 md:px-10">
          <div className="flex flex-col items-center justify-center gap-10 text-center">
            <div>
              <Mail className="mx-auto h-6 w-6 text-foreground/90" />
              <p className="mt-3 font-display text-base font-semibold">Email</p>
              <a href="mailto:codetitans2026@gmail.com" className="mt-1 inline-block text-sm text-muted-foreground hover:text-primary">
                codetitans2026@gmail.com
              </a>
            </div>
            <div>
              <ThumbsUp className="mx-auto h-6 w-6 text-foreground/90" />
              <p className="mt-3 font-display text-base font-semibold">Social Media</p>
              <div className="mt-3 flex justify-center gap-4 text-foreground/80">
                <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-4 w-4" /></a>
                <a href="#" aria-label="YouTube" className="hover:text-primary"><Youtube className="h-4 w-4" /></a>
              </div>
            </div>
          </div>

          <form
            className="space-y-5"
            onSubmit={async (e) => {
              e.preventDefault();
              if (status === "sending") return;
              setStatus("sending");
              setErrorMsg("");
              const fd = new FormData(e.currentTarget);
              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    firstName: fd.get("firstName"),
                    lastName: fd.get("lastName"),
                    email: fd.get("email"),
                    message: fd.get("message"),
                  }),
                });
                if (!res.ok) {
                  const data = await res.json().catch(() => ({}));
                  setErrorMsg(data.error || "Something went wrong. Please try again.");
                  setStatus("error");
                  return;
                }
                setStatus("sent");
                (e.target as HTMLFormElement).reset();
              } catch {
                setErrorMsg("Network error. Please try again.");
                setStatus("error");
              }
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <Field label="First Name" name="firstName" />
              <Field label="Last Name" name="lastName" />
            </div>
            <Field label="Email *" name="email" type="email" required />
            <div>
              <label className="text-xs font-medium text-foreground/80" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60 animate-bounce-fun"
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Thanks — we'll be in touch!"
                  : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-destructive">{errorMsg}</p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-background pb-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              title="Code Titans location — Cupertino, CA"
              src="https://www.google.com/maps?q=Cupertino,+CA+95014&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-foreground/80" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 h-10 w-full rounded-md border border-border bg-input/40 px-3 text-sm text-foreground outline-none focus:border-primary"
      />
    </div>
  );
}
