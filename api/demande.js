import { envoyer, esc, gabarit, valide } from './_brevo.js';
// Demande d'échange : un email à Nina, une confirmation au visiteur
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const d = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  if (d.site) return res.status(200).json({ ok: true });            // piège à robots
  if (!d.nom || !d.etablissement || !valide(d.email) || !d.consent) return res.status(400).json({ ok: false, erreur: 'champs' });
  const en = d.langue === 'en';
  try {
    await envoyer({ to: [{ email: process.env.EMAIL_NINA || 'contact@5senscollection.com', name: 'Nina Vienney' }], replyTo: { email: d.email, name: d.nom },
      subject: `Demande d'échange · ${d.etablissement}`,
      html: gabarit(`Nouvelle demande : ${esc(d.etablissement)}`, `<b>${esc(d.nom)}</b><br>${esc(d.email)}${d.telephone ? '<br>' + esc(d.telephone) : ''}<br><br>${esc(d.message || '—')}<br><br>Langue : ${en ? 'anglais' : 'français'}`) });
    await envoyer({ to: [{ email: d.email, name: d.nom }],
      subject: en ? 'Your request · 5 Sens Collection' : 'Votre demande · 5 Sens Collection',
      html: en ? gabarit(`Thank you, ${esc(d.nom)}.`, `Your request for ${esc(d.etablissement)} has been received. I will reply personally within 48 hours to arrange our thirty-minute conversation.<br><br>Nina Vienney`)
               : gabarit(`Merci, ${esc(d.nom)}.`, `Votre demande pour ${esc(d.etablissement)} est bien reçue. Je vous réponds personnellement sous 48 heures pour convenir de notre échange de trente minutes.<br><br>Nina Vienney`) });
    return res.status(200).json({ ok: true });
  } catch (e) { console.error(e); return res.status(502).json({ ok: false }); }
}
