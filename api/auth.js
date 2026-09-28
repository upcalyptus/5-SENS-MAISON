// Connexion à l'outil d'édition (/admin) : étape 1, redirection vers GitHub
export default function handler(req, res) {
  const id = process.env.GITHUB_CLIENT_ID;
  if (!id) return res.status(500).send('GITHUB_CLIENT_ID manquant');
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', id); url.searchParams.set('scope', 'repo,user');
  url.searchParams.set('redirect_uri', `https://${host}/api/callback`);
  res.writeHead(302, { Location: url.toString() }); res.end();
}
