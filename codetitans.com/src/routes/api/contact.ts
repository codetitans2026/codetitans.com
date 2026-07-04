import { createFileRoute } from "@tanstack/react-router";

const TO_EMAIL = "codetitans2026@gmail.com";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const resendApiKey = process.env.RESEND_API_KEY;

        if (!resendApiKey) {
          return Response.json({ error: "Email service not configured" }, { status: 500 });
        }

        const body = await request.json().catch(() => null);

        const firstName = (body?.firstName || "").trim().slice(0, 100);
        const lastName = (body?.lastName || "").trim().slice(0, 100);
        const email = (body?.email || "").trim().slice(0, 200);
        const message = (body?.message || "").trim().slice(0, 5000);

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return Response.json({ error: "Valid email is required" }, { status: 400 });
        }

        if (!message) {
          return Response.json({ error: "Message is required" }, { status: 400 });
        }

        const fullName = [firstName, lastName].filter(Boolean).join(" ") || "Website visitor";

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Code Titans <onboarding@resend.dev>",
            to: TO_EMAIL,
            reply_to: email,
            subject: `New contact form message from ${fullName}`,
            text: [
              `Name: ${fullName}`,
              `Email: ${email}`,
              "",
              "Message:",
              message,
            ].join("\n"),
          }),
        });

        if (!res.ok) {
          const err = await res.text();
          console.error("Resend failed", res.status, err);
          return Response.json(
            { error: "Failed to send message. Please email us directly." },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
