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
      from: `"Your Website Name" <${process.env.EMAIL_USER}>`, // Sender address
      to: process.env.RECEIVER_EMAIL, // Your email address where you want to receive messages
      subject: `New Contact Form Submission: ${name}`,
      html: `
        <h3>New Message from Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}
