import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body as Record<string, string>;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Log every submission for visibility
    console.log(`[Contact Form] name="${name}" email="${email}" phone="${phone}" service="${service}" message="${message?.slice(0, 60)}..."`);

    // Send email only when SMTP credentials are present
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      // Dynamic import so nodemailer is optional in dev without credentials
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });

      const info = await transporter.sendMail({
        from: `"Dr. Sharon Lavin Website" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL ?? 'speris8809@aol.com',
        replyTo: email,
        subject: `New Appointment Request from ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#334155">
            <h2 style="color:#1E293B;border-bottom:3px solid #D5A187;padding-bottom:0.5rem">
              New Contact Form Submission
            </h2>
            <table style="width:100%;border-collapse:collapse;margin-top:1rem">
              <tr><td style="padding:10px 8px;font-weight:700;width:120px">Name</td><td style="padding:10px 8px">${name}</td></tr>
              <tr style="background:#f9fafb"><td style="padding:10px 8px;font-weight:700">Email</td><td style="padding:10px 8px"><a href="mailto:${email}" style="color:#D5A187">${email}</a></td></tr>
              <tr><td style="padding:10px 8px;font-weight:700">Phone</td><td style="padding:10px 8px">${phone || '—'}</td></tr>
              ${service ? `<tr style="background:#f9fafb"><td style="padding:10px 8px;font-weight:700">Service</td><td style="padding:10px 8px">${service}</td></tr>` : ''}
              <tr ${service ? '' : 'style="background:#f9fafb"'}><td style="padding:10px 8px;font-weight:700;vertical-align:top">Message</td><td style="padding:10px 8px;line-height:1.6">${message.replace(/\n/g, '<br>')}</td></tr>
            </table>
            <p style="color:#64748b;font-size:0.85rem;margin-top:2rem">
              Sent from the Dr. Sharon Lavin website contact form.
            </p>
          </div>
        `,
      });
      console.log(`[Email Sent] messageId=${info.messageId} to=${process.env.CONTACT_EMAIL}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact Form Error]', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
