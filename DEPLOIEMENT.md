# Mise en ligne — 5 Sens Collection

## Méthode retenue : Vercel, relié à GitHub

- Chaque modification déposée sur GitHub est publiée automatiquement en une minute.
- L'historique est conservé : l'onglet Deployments permet de revenir à une version précédente.
- `vercel.json` (cache des médias et en-têtes de sécurité) et `404.html` sont pris en compte automatiquement.
- Les DNS restent chez OVH : les emails ne sont pas touchés.

**Offre :** l'offre gratuite Hobby est réservée aux usages non commerciaux. Pour 5 Sens Collection, prendre
l'offre Pro. Vérifier le tarif en vigueur sur vercel.com/pricing.

## 1. Mettre les fichiers sur GitHub

1. Créer un compte sur github.com, puis New repository → nom `5sens-site` → Private → Create
2. Sur la page du dépôt : Add file → Upload files
3. Glisser **le contenu du dossier** depuis le Finder (index.html à la racine, avec le dossier `assets/` et `vercel.json`) → Commit changes

Mises à jour suivantes : même opération, les fichiers remplacés sont versionnés.

## 2. Brancher Vercel

1. Créer un compte sur vercel.com avec le compte GitHub (Sign Up → Continue with GitHub)
2. Add New → Project → Import à côté de `5sens-site`
3. Framework Preset : Other · Build Command : vide · Output Directory : vide → Deploy
4. Noter l'adresse fournie, du type `5sens-site.vercel.app`, et vérifier images, vidéo et plaque 3D

## 3. Adresse de test sur le vrai domaine (sans rien casser)

Dans Vercel : Settings → Domains → Add → `new.5senscollection.com`
Chez OVH : Noms de domaine → 5senscollection.com → Zone DNS → Ajouter une entrée

| Type | Sous-domaine | Cible |
|------|--------------|-------|
| CNAME | new | valeur affichée par Vercel (en général `cname.vercel-dns.com.`) |

Le site est visible sur https://new.5senscollection.com, l'ancien site continue de tourner.

## 4. Bascule du domaine principal (plus tard)

Prérequis : migration des emails terminée, DNSSEC désactivé quelques heures avant.

Dans Vercel : Settings → Domains → ajouter `5senscollection.com` et `www.5senscollection.com`.
Chez OVH, remplacer l'enregistrement A de la racine (89.42.221.3) et celui de `www` par les valeurs que
Vercel affiche (en général un enregistrement A pour la racine et un CNAME pour `www`). Toujours recopier
les valeurs exactes indiquées par Vercel.

**Ne jamais toucher** : les 3 lignes MX, la ligne SPF, les lignes TXT de vérification Google.

## 5. À renseigner dans index.html (dernier bloc `<script>`, tout en haut)

```js
const CAL_LINK = "";               // lien Cal.com sans le domaine, ex. "nina-vienney/30min"
const CAL_ORIGIN = "https://cal.com";  // "https://cal.eu" si le compte Cal.com est en Europe
const FORM_ENDPOINT = "";          // réception des demandes d'échange
const CAPTURE_ENDPOINT = "";       // réception des pré-diagnostics du simulateur
```

C'est le seul endroit à modifier : le formulaire lit sa configuration ici.
Tant que `CAL_LINK` est vide, le formulaire affiche un message de confirmation au lieu du calendrier.
Voir le document « Architecture du futur site », section Formulaires, pour la mise en place de Cal.com et de Brevo.

Puis remplacer `5senscollection.com` par le domaine définitif dans index.html (canonical, og:url, hreflang,
données structurées), sitemap.xml et robots.txt si le domaine change.

Mesure d'audience : décommenter la ligne Plausible dans le `<head>`.

## 6. Sécurité en place

- HTTPS automatique
- Empreintes de sécurité (SRI) sur les 4 bibliothèques externes
- Politique de contenu (CSP) limitant les domaines autorisés
- En-têtes HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy, COOP
- Aucune donnée traitée par le site lui-même

La CSP est écrite à **trois endroits** qui doivent rester identiques : la balise meta de `index.html`,
`vercel.json` et `netlify.toml`. Elle autorise Formspree, Cal.com (cal.com et cal.eu) et Plausible.
Tout autre outil (Brevo, chat, pixel publicitaire…) sera bloqué tant qu'il n'y est pas ajouté.

## Alternative : Netlify

`netlify.toml` est maintenu à jour. Même démarche depuis GitHub (Add new site → Import an existing project).
L'offre gratuite de Netlify autorise un usage commercial. DNS : racine en A vers la valeur indiquée par Netlify,
`www` en CNAME vers l'adresse `.netlify.app` du site. Penser alors à remettre Netlify dans les mentions légales.
