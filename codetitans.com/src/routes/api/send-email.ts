import { json } from '@tanstack/start';
import { createAPIFileRoute } from '@tanstack/start/api';

export const Route = createAPIFileRoute('/api/send-email')({
  POST: async ({ request }) => {
    try {
      const data = await request.json();
      const apiKey = process.env.RESEND_API_KEY;

      if (!apiKey) {
        console.error("Missing RESEND_API_KEY inside Cloudflare variables");
        return json({ error: 'Server configuration error' }, { status: 500 });
      }

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Contact Form <onboarding@resend.dev>',
          to: 'codetitans2026@gmail.com',
          subject: `🔥 New Contact Message from ${data.firstName} ${data.lastName}`,
          html: `
            <h3>New Website Contact Form Submission</h3>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f4f4f4; padding: 10px; border-radius: 5px;">${data.message}</p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const errorText = await resendResponse.text();
        console.error("Resend API layout error:", errorText);
        return json({ error: 'Failed sending email to Resend' }, { status: 400 });
      }

      return json({ success: true });
    } catch (err: any) {
      return json({ error: err.message }, { status: 500 });
    }
  },
});
