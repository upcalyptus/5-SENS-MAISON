// Connexion à l'outil d'édition : étape 2, GitHub renvoie un code, échangé contre un jeton transmis à Decap CMS
export default async function handler(req, res) {
  const code = new URL(req.url, 'https://x').searchParams.get('code');
  const r = await fetch('https://github.com/login/oauth/access_token', { method: 'POST', headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify({ client_id: process.env.GITHUB_CLIENT_ID, client_secret: process.env.GITHUB_CLIENT_SECRET, code }) });
  const j = await r.json();
  const statut = j.access_token ? 'success' : 'error';
  const contenu = JSON.stringify(j.access_token ? { token: j.access_token, provider: 'github' } : { error: j.error || 'échec' });
  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.end(`<!doctype html><script>(function(){function r(e){window.opener.postMessage('authorization:github:${statut}:'+${JSON.stringify(contenu)},e.origin)}window.addEventListener('message',r,false);window.opener.postMessage('authorizing:github','*')})()</script>`);
}
