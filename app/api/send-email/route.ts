import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, municipality, roadMiles, message } = body;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'info@nathanreardon.com',
      to: ['info@iceshieldsolution.com', 'nathan@membershipauto.com'],
      replyTo: email,
      subject: `New Pilot Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #74A4BC;">New Pilot Request - IceShield</h2>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Municipality/Jurisdiction:</strong> ${municipality}</p>
            <p><strong>Road Miles Managed:</strong> ${roadMiles || 'Not specified'}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #030B18;">Message:</h3>
            <p style="white-space: pre-wrap;">${message || 'No message provided'}</p>
          </div>

          <hr style="border: 1px solid #e0e0e0; margin: 20px 0;">

          <p style="color: #666; font-size: 12px;">
            This email was sent from the Patchworx IceShield contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
