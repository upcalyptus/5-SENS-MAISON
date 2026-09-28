// Envoi d'emails par l'API Brevo (clé à renseigner dans Vercel : Settings → Environment Variables → BREVO_API_KEY)
export async function envoyer({ to, subject, html, replyTo }) {
  const cle = process.env.BREVO_API_KEY;
  if (!cle) throw new Error('BREVO_API_KEY manquante');
  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': cle, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({ sender: { name: '5 Sens Collection', email: process.env.EMAIL_EXPEDITEUR || 'contact@5senscollection.com' }, to, subject, htmlContent: html, replyTo })
  });
  if (!r.ok) throw new Error('Brevo ' + r.status + ' ' + (await r.text()));
}
export const esc = (s = '') => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const gabarit = (titre, corps) => `<!doctype html><html><body style="margin:0;background:#F8F7F4;font-family:Georgia,serif;color:#3B3328">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 16px"><table width="560" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-top:1px solid #C9B99A">
<tr><td style="padding:40px 44px 8px;font:600 10px/1 Arial,sans-serif;letter-spacing:3px;text-transform:uppercase;color:#6E5A3A">5 Sens Collection</td></tr>
<tr><td style="padding:14px 44px 0;font:400 26px/1.25 Georgia,serif">${titre}</td></tr>
<tr><td style="padding:18px 44px 40px;font:15px/1.7 Arial,sans-serif;color:#66635C">${corps}</td></tr>
<tr><td style="padding:22px 44px;border-top:1px solid #EFEAE1;font:12px/1.6 Arial,sans-serif;color:#66635C">Nina Vienney · Fondatrice · contact@5senscollection.com</td></tr></table></td></tr></table></body></html>`;
export const valide = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e || '');
