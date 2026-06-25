import { createFileRoute } from "@tanstack/react-router";

const GATEWAY = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";
const TO_EMAIL = "codetitans2026@gmail.com";

function b64url(s: string): string {
  return Buffer.from(s, "utf-8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function escapeHeader(s: string): string {
  return s.replace(/[\r\n]/g, " ").slice(0, 200);
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const lovableKey = process.env.LOVABLE_API_KEY;
        const gmailKey = process.env.GOOGLE_MAIL_API_KEY;
        if (!lovableKey || !gmailKey) {
          return Response.json({ error: "Email service not configured" }, { status: 500 });
        }

        let body: { firstName?: string; lastName?: string; email?: string; message?: string };
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid request" }, { status: 400 });
        }

        const firstName = (body.firstName || "").trim().slice(0, 100);
        const lastName = (body.lastName || "").trim().slice(0, 100);
        const email = (body.email || "").trim().slice(0, 200);
        const message = (body.message || "").trim().slice(0, 5000);

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return Response.json({ error: "Valid email is required" }, { status: 400 });
        }
        if (!message) {
          return Response.json({ error: "Message is required" }, { status: 400 });
        }

        const fullName = [firstName, lastName].filter(Boolean).join(" ") || "Website visitor";
        const subject = `New contact form message from ${fullName}`;
        const text = [
          `Name: ${fullName}`,
          `Email: ${email}`,
          ``,
          `Message:`,
          message,
        ].join("\r\n");

        const rfc822 = [
          `To: ${TO_EMAIL}`,
          `Reply-To: ${escapeHeader(email)}`,
          `Subject: ${escapeHeader(subject)}`,
          `Content-Type: text/plain; charset="UTF-8"`,
          `MIME-Version: 1.0`,
          ``,
          text,
        ].join("\r\n");

        const raw = b64url(rfc822);

        const res = await fetch(`${GATEWAY}/users/me/messages/send`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${lovableKey}`,
            "X-Connection-Api-Key": gmailKey,
          },
          body: JSON.stringify({ raw }),
        });

        if (!res.ok) {
          const errBody = await res.text();
          console.error("Gmail send failed", res.status, errBody);
          return Response.json(
            { error: "Failed to send message. Please try again or email us directly." },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});