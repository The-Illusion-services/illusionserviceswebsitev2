import { Resend } from 'resend';
import { createClient } from 'next-sanity';

const resend = new Resend(process.env.RESEND_API_KEY);

// Client with write access
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

export async function POST(request: Request) {
  try {
    const { name, email, projectType, budget, message } = await request.json();

    // 1. Persist to Sanity
    try {
      await sanityClient.create({
        _type: 'inquiry',
        name,
        email,
        projectType,
        budget,
        message,
        receivedAt: new Date().toISOString(),
      });
    } catch (dbError) {
      console.error('Failed to save to Sanity:', dbError);
      // We continue even if DB fails, so the email still goes out
    }

    // 2. Send via Resend
    const { data, error } = await resend.emails.send({
      from: 'Illusion Services <onboarding@resend.dev>',
      to: ['theillusionservices@gmail.com'],
      replyTo: email,
      subject: `New Inquiry from ${name}${projectType ? `: ${projectType}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; line-height: 1.6; color: #1c1917;">
          <h2 style="font-size: 24px; border-bottom: 1px solid #e7e5e4; padding-bottom: 12px;">New Brief Received</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          </div>

          <div style="background: #f5f5f4; padding: 20px; border-radius: 8px;">
            <p style="margin-top: 0; font-weight: bold; color: #44403c; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="font-size: 12px; color: #a8a29e; margin-top: 40px; border-top: 1px solid #e7e5e4; padding-top: 12px;">
            Sent from Illusion Services Contact Form.
          </p>
        </div>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
