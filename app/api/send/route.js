import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'Portfolio Contact <Admin@holdispay.xyz>';
const TO_EMAIL = 'sulaymanmujeeb6@gmail.com';

export async function POST(req) {
	try {
		const { email, subject, message } = await req.json();

		if (!email || !subject || !message) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

		const { data, error } = await resend.emails.send({
			from: FROM_EMAIL,
			to: [TO_EMAIL],
			reply_to: email,
			subject: `[Portfolio] ${subject}`,
			html: `
				<!DOCTYPE html>
				<html>
					<head>
						<meta charset="utf-8">
						<meta name="viewport" content="width=device-width, initial-scale=1.0">
						<title>New Inquiry from Portfolio</title>
					</head>
					<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; background-color: #f4f7fa; margin: 0; padding: 0;">
						<table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 40px 20px;">
							<tr>
								<td align="center">
									<div style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); border: 1px solid #eef2f6; text-align: left;">
										<!-- Header -->
										<div style="background: #2563eb; padding: 40px 30px; text-align: center; color: #ffffff;">
											<p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; opacity: 0.9;">Portfolio Notification</p>
											<h1 style="margin: 8px 0 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">New Message Received</h1>
										</div>
										
										<!-- Content -->
										<div style="padding: 40px 30px;">
											<div style="margin-bottom: 25px;">
												<span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 1px; margin-bottom: 8px; display: block;">From</span>
												<div style="font-size: 15px; color: #1e293b; background: #f8fafc; padding: 12px 16px; border-radius: 8px; border: 1px solid #f1f5f9; font-weight: 500;">
													${email}
												</div>
											</div>
											
											<div style="margin-bottom: 25px;">
												<span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 1px; margin-bottom: 8px; display: block;">Subject</span>
												<div style="font-size: 15px; color: #1e293b; background: #f8fafc; padding: 12px 16px; border-radius: 8px; border: 1px solid #f1f5f9; font-weight: 500;">
													${subject}
												</div>
											</div>
											
											<div style="margin-bottom: 30px;">
												<span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 1px; margin-bottom: 8px; display: block;">Message</span>
												<div style="font-size: 15px; color: #334155; line-height: 1.8; background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #f1f5f9; white-space: pre-wrap;">${message}</div>
											</div>
											
											<div style="text-align: center; margin-top: 20px;">
												<a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px;">Reply to Message</a>
											</div>
										</div>
										
										<!-- Footer -->
										<div style="padding: 30px; text-align: center; background: #f8fafc; border-top: 1px solid #f1f5f9;">
											<p style="margin: 0; font-size: 13px; color: #94a3b8;">&copy; ${new Date().getFullYear()} Sulayman Abdul-Mujeeb. All rights reserved.</p>
											<p style="margin: 8px 0 0; font-size: 11px; color: #cbd5e1;">Sent via Portfolio Contact Form</p>
										</div>
									</div>
								</td>
							</tr>
						</table>
					</body>
				</html>
			`,


		});

		if (error) {
			console.error("Resend Error:", error);
			return NextResponse.json({ error }, { status: 500 });
		}

		return NextResponse.json({ message: "Email sent successfully", data });
	} catch (error) {
		console.error("Internal Server Error:", error);
		return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
	}
}
