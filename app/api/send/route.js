import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
	try {
		const { email, subject, message } = await req.json();
		const data = await resend.emails.send({
			from: 'Portfolio Contact <Admin@holdispay.xyz>',
			to: ['sulaymanmujeeb6@gmail.com'],
			reply_to: email,
			subject: `[Portfolio] ${subject}`,
			html: `
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<title>New Contact Message</title>
				</head>
				<body style="margin:0;padding:0;background-color:#0f1117;font-family:'Segoe UI',Arial,sans-serif;">
					<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f1117;padding:40px 16px;">
						<tr>
							<td align="center">
								<table width="100%" style="max-width:580px;background-color:#1a1a2e;border-radius:16px;overflow:hidden;border:1px solid #2a2a3e;">
									<!-- Header -->
									<tr>
										<td style="background-color:#1e3a5f;padding:32px 40px;text-align:center;">
											<p style="margin:0;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#60a5fa;font-weight:600;">Portfolio Contact</p>
											<h1 style="margin:8px 0 0;font-size:26px;font-weight:700;color:#ffffff;">New Message Received</h1>
										</td>
									</tr>

									<!-- Body -->
									<tr>
										<td style="padding:36px 40px;">
											<!-- Sender info card -->
											<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#111827;border-radius:12px;border:1px solid #2a2a3e;margin-bottom:24px;">
												<tr>
													<td style="padding:20px 24px;">
														<p style="margin:0 0 12px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6b7280;font-weight:600;">Sender Details</p>
														<table cellpadding="0" cellspacing="0">
															<tr>
																<td style="padding:4px 0;">
																	<span style="color:#9ca3af;font-size:13px;display:inline-block;width:70px;">From:</span>
																	<a href="mailto:${email}" style="color:#60a5fa;font-size:13px;text-decoration:none;font-weight:500;">${email}</a>
																</td>
															</tr>
															<tr>
																<td style="padding:4px 0;">
																	<span style="color:#9ca3af;font-size:13px;display:inline-block;width:70px;">Subject:</span>
																	<span style="color:#e5e7eb;font-size:13px;font-weight:500;">${subject}</span>
																</td>
															</tr>
														</table>
													</td>
												</tr>
											</table>

											<!-- Message -->
											<p style="margin:0 0 10px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6b7280;font-weight:600;">Message</p>
											<div style="background-color:#111827;border-radius:12px;border:1px solid #2a2a3e;padding:20px 24px;">
												<p style="margin:0;color:#d1d5db;font-size:15px;line-height:1.7;white-space:pre-wrap;">${message}</p>
											</div>

											<!-- CTA -->
											<div style="margin-top:28px;text-align:center;">
												<a href="mailto:${email}" style="display:inline-block;background-color:#2563eb;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 32px;border-radius:8px;letter-spacing:0.5px;">Reply to ${email}</a>
											</div>
										</td>
									</tr>

									<!-- Footer -->
									<tr>
										<td style="padding:20px 40px;border-top:1px solid #2a2a3e;text-align:center;">
											<p style="margin:0;color:#4b5563;font-size:12px;">This message was sent via your portfolio contact form.</p>
											<p style="margin:6px 0 0;color:#374151;font-size:11px;">Sulayman Abdul-Mujeeb • Portfolio</p>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</body>
				</html>
			`,
		});

		return NextResponse.json({ message: "Email sent successfully" });
	} catch (error) {
		return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
	}
}
