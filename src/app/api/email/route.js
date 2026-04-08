import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toAddress = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"Vaqtrix Website" <${process.env.SMTP_USER}>`,
      to: toAddress,
      subject: `New Newsletter Subscription`,
      replyTo: email,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>This user subscribed via the footer newsletter form on vaqtrix.com</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
