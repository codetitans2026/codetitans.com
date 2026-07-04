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

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {

    return Response.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });

  }

  const body = await request.json().catch(() => null);

  if (!body?.email || !body?.message) {

    return Response.json({ error: "Invalid input" }, { status: 400 });

  }

  const fullName = `${body.firstName ?? ""} ${body.lastName ?? ""}`.trim();

  const res = await fetch("https://api.resend.com/emails", {

    method: "POST",

    headers: {

      "Authorization": `Bearer ${resendApiKey}`,

      "Content-Type": "application/json",

    },

    body: JSON.stringify({

      from: "Code Titans <onboarding@resend.dev>",

      to: "codetitans2026@gmail.com",

      subject: `New contact form message from ${fullName || "Visitor"}`,

      text: `

Name: ${fullName}

Email: ${body.email}

Message:

${body.message}

      `,

    }),

  });

  if (!res.ok) {

    const err = await res.text();

    console.error("Resend error:", err);

    return Response.json(

      { error: "Failed to send email" },

      { status: 500 }

    );

  }

  return Response.json({ ok: true });

}
  },
});
