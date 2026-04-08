import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const {
      fullName,
      email,
      projectType,
      companyName,
      companyUrl,
      message,
      phone,
      country,
      region,
    } = await request.json();

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
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: toAddress,
      subject: `New contact from ${fullName || 'Unknown'} - ${projectType || 'No service selected'}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName || '-'}</p>
        <p><strong>Email:</strong> ${email || '-'}</p>
        <p><strong>Phone:</strong> ${phone || '-'}</p>
        <p><strong>Service / Project Type:</strong> ${projectType || '-'}</p>
        <p><strong>Company Name:</strong> ${companyName || '-'}</p>
        <p><strong>Company URL:</strong> ${companyUrl || '-'}</p>
        <p><strong>Country:</strong> ${country || '-'}</p>
        <p><strong>Region:</strong> ${region || '-'}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || '').replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 },
    );
  }
}

