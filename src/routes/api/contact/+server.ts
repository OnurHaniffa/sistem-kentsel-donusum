import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY, CONTACT_EMAIL } from '$env/static/private';
import type { RequestHandler } from './$types';

const resend = new Resend(RESEND_API_KEY);

// Validation functions
function isValidPhone(phone: string): boolean {
	const cleaned = phone.replace(/\s/g, '').replace(/-/g, '');
	return /^(\+90|0)?5\d{9}$/.test(cleaned);
}

function isValidEmail(email: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, phone, email, message } = await request.json();

		// Validate required fields
		if (!name || !phone || !email) {
			return json({ error: 'Ad, telefon ve e-posta alanları zorunludur.' }, { status: 400 });
		}

		// Validate phone format
		if (!isValidPhone(phone)) {
			return json({ error: 'Geçerli bir telefon numarası girin.' }, { status: 400 });
		}

		// Validate email format
		if (!isValidEmail(email)) {
			return json({ error: 'Geçerli bir e-posta adresi girin.' }, { status: 400 });
		}

		// Send email to the business
		// Note: Domain must be verified in Resend for production use
		const { data, error } = await resend.emails.send({
			from: 'Sistem Kentsel Dönüşüm <noreply@sistemkentseldonusum.com>',
			to: CONTACT_EMAIL,
			subject: `Yeni İletişim Formu: ${name}`,
			html: `
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
				</head>
				<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
					<div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
						<!-- Header -->
						<div style="background: linear-gradient(135deg, #4a2c2c 0%, #6b4a4a 100%); border-radius: 16px 16px 0 0; padding: 32px; text-align: center;">
							<h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Yeni İletişim Talebi</h1>
							<p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0; font-size: 14px;">Sistem Kentsel Dönüşüm</p>
						</div>

						<!-- Content -->
						<div style="background: #ffffff; padding: 32px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
							<!-- Contact Info -->
							<div style="margin-bottom: 24px;">
								<h2 style="color: #4a2c2c; font-size: 18px; margin: 0 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #f0f0f0;">İletişim Bilgileri</h2>

								<table style="width: 100%; border-collapse: collapse;">
									<tr>
										<td style="padding: 12px 0; color: #666; font-size: 14px; width: 100px;">Ad Soyad:</td>
										<td style="padding: 12px 0; color: #333; font-size: 14px; font-weight: 600;">${name}</td>
									</tr>
									<tr>
										<td style="padding: 12px 0; color: #666; font-size: 14px;">Telefon:</td>
										<td style="padding: 12px 0; color: #333; font-size: 14px; font-weight: 600;">
											<a href="tel:${phone}" style="color: #4a2c2c; text-decoration: none;">${phone}</a>
										</td>
									</tr>
									${email ? `
									<tr>
										<td style="padding: 12px 0; color: #666; font-size: 14px;">E-posta:</td>
										<td style="padding: 12px 0; color: #333; font-size: 14px; font-weight: 600;">
											<a href="mailto:${email}" style="color: #4a2c2c; text-decoration: none;">${email}</a>
										</td>
									</tr>
									` : ''}
								</table>
							</div>

							<!-- Message -->
							${message ? `
							<div style="margin-bottom: 24px;">
								<h2 style="color: #4a2c2c; font-size: 18px; margin: 0 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #f0f0f0;">Mesaj</h2>
								<div style="background: #fafafa; padding: 16px; border-radius: 8px; color: #333; font-size: 14px; line-height: 1.6;">
									${message.replace(/\n/g, '<br>')}
								</div>
							</div>
							` : ''}

							<!-- Action Button -->
							<div style="text-align: center; margin-top: 32px;">
								<a href="tel:${phone}" style="display: inline-block; background: linear-gradient(135deg, #4a2c2c 0%, #6b4a4a 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">
									Hemen Ara
								</a>
							</div>
						</div>

						<!-- Footer -->
						<div style="text-align: center; padding: 24px; color: #999; font-size: 12px;">
							<p style="margin: 0;">Bu e-posta sistemkentseldonusum.com üzerinden gönderilmiştir.</p>
						</div>
					</div>
				</body>
				</html>
			`
		});

		if (error) {
			console.error('Resend error:', error);
			return json({ error: 'E-posta gönderilemedi.' }, { status: 500 });
		}

		return json({ success: true, id: data?.id });
	} catch (err) {
		console.error('Contact form error:', err);
		return json({ error: 'Bir hata oluştu.' }, { status: 500 });
	}
};
