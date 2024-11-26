import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
	try {
		const { email, subject, message } = await req.json();
		const data = await resend.emails.send({
			from: 'Portfolio Contact <onboarding@resend.dev>',
			to: ['mujeebsulayman@gmail.com'],
			subject: subject,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>From:</strong> ${email}</p>
				<p><strong>Subject:</strong> ${subject}</p>
				<p><strong>Message:</strong></p>
				<p>${message}</p>
			`,
		});

		return NextResponse.json({ message: "Email sent successfully" });
	} catch (error) {
		return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
	}
}
