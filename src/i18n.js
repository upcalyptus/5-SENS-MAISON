import commun from './content/commun.json';
import pieces from './content/pieces.json';
// Correspondance des adresses françaises et anglaises de chaque pièce
export const routes = {
  '/': '/?lang=en', '/label': '/en/label', '/cinq-sens': '/en/five-senses', '/methode': '/en/method', '/rapport': '/en/report',
  '/independance': '/en/independence', '/rendez-vous': '/en/private-call', '/mentions-legales': '/en/legal-notice', '/confidentialite': '/en/privacy'
};
export const fr = (en) => Object.keys(routes).find(k => routes[k] === en) || '/';
export const t = (lang) => commun[lang];
export const plan = (lang) => pieces[lang].map(([n, href, titre, note]) => ({ n, href, titre, note }));
export const suivante = (lang, href) => { const p = plan(lang); const i = p.findIndex(x => x.href === href); return p[(i + 1) % p.length]; };
