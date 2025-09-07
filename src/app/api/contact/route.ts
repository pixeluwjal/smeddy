import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
  }

  // Configure your email transporter
  // Use environment variables for security!
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like 'Outlook', 'Yahoo', etc.
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_APP_PASSWORD, // Your generated app password
    },
  });

  try {
    await transporter.sendMail({
  from: `"SmartEddy Website" <${process.env.EMAIL_USER}>`, // Sender
  to: process.env.RECEIVER_EMAIL, // Receiver
  replyTo: email, // reply directly to user
  subject: `📩 New Contact Form Submission from ${name}`,
  html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); padding: 20px;">
        
        <h2 style="color: #2b2d42; margin-bottom: 16px; text-align: center;">
          📬 New Contact Form Submission
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #333;">Name:</td>
            <td style="padding: 8px; color: #555;">${name}</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold; color: #333;">Email:</td>
            <td style="padding: 8px; color: #555;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
            <td style="padding: 8px; color: #555; white-space: pre-line;">${message}</td>
          </tr>
        </table>

        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />

        <p style="font-size: 13px; color: #999; text-align: center;">
          This message was sent from the <strong>SmartEddy Website</strong> contact form.
        </p>
      </div>
    </div>
  `,
});


    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}
