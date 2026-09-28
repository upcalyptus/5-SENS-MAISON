import { envoyer, esc, gabarit, valide } from './_brevo.js';
// Pré-diagnostic du simulateur : le score au visiteur, une alerte à Nina
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  let d = req.body || {};
  if (typeof d === 'string') { try { d = JSON.parse(d); } catch { d = Object.fromEntries(new URLSearchParams(d)); } }
  if (!valide(d.email)) return res.status(400).json({ ok: false });
  const score = esc(d.score || d.ics || '—'), type = esc(d.typologie || d.type || '');
  try {
    await envoyer({ to: [{ email: d.email }], subject: 'Votre pré-diagnostic ICS · 5 Sens Collection',
      html: gabarit(`Votre pré-score : ${score} sur 100`, `Établi à partir de votre auto-évaluation${type ? ' (' + type + ')' : ''}. Le Label est attribué à partir de 88.<br><br>Un pré-diagnostic ne remplace pas une immersion. Si vous le souhaitez, nous pouvons en parler trente minutes : <a href="https://5senscollection.com/rendez-vous" style="color:#6E5A3A">réserver un échange</a>.<br><br>Nina Vienney`) });
    await envoyer({ to: [{ email: process.env.EMAIL_NINA || 'contact@5senscollection.com' }], subject: `Pré-diagnostic · ${score}/100`, html: gabarit('Nouveau pré-diagnostic', `${esc(d.email)} · ${score}/100 · ${type}`) });
    return res.status(200).json({ ok: true });
  } catch (e) { console.error(e); return res.status(502).json({ ok: false }); }
}
