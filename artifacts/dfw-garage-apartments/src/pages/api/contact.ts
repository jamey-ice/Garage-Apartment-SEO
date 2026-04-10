import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, city, projectType, useCase, timeline, address, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required.' });
  }

  const apiKey = process.env.RESEND_API_KEY;

  const emailBody = `
    <h2 style="color:#1e3a5f;font-family:sans-serif;">New Lead — DFW Garage Apartments</h2>
    <table style="font-family:sans-serif;font-size:14px;line-height:1.8;border-collapse:collapse;">
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Name</td><td>${name}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Phone</td><td>${phone}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email</td><td>${email}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">City</td><td>${city || '—'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Project Type</td><td>${projectType || '—'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Use Case</td><td>${useCase || '—'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Timeline</td><td>${timeline || '—'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Property Address</td><td>${address || 'Not provided'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Message</td><td>${message || 'None'}</td></tr>
    </table>
    <p style="font-family:sans-serif;font-size:12px;color:#888;margin-top:24px;">Submitted via dfwgarageapartments.com</p>
  `;

  if (!apiKey) {
    console.log('[LEAD - no email service configured]', JSON.stringify(req.body));
    return res.status(200).json({ success: true });
  }

  try {
    const toEmail = process.env.LEAD_EMAIL || 'info@6thavehomes.com';

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'DFW Garage Apartments <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: email,
        subject: `New Lead — ${city || 'DFW'} — ${name}`,
        html: emailBody,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Email delivery failed.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ error: 'Server error.' });
  }
}
