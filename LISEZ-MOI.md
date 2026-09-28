# 5 Sens Collection — landing page

## Contenu

- `index.html` — la page, médias en fichiers séparés (environ 195 Ko)
- `assets/` — vidéos, images, plaque, favicon, image de partage
- `vercel.json` — mise en cache des médias et en-têtes de sécurité (hébergement retenu : Vercel)
- `netlify.toml` — la même configuration, si l'hébergement passe un jour sur Netlify
- `404.html`, `sitemap.xml`, `robots.txt`
- `DEPLOIEMENT.md` — mise en ligne pas à pas
- `DOSSIER-REPRISE.md` — historique du projet et décisions

## Mise en ligne

Voir `DEPLOIEMENT.md` : GitHub + Vercel (offre Pro), DNS conservés chez OVH.

## À compléter avant la mise en ligne

Tout se trouve en haut du dernier bloc `<script>` de `index.html` :

```js
const CAL_LINK = "";               // Cal.com, ex. "nina-vienney/30min"
const CAL_ORIGIN = "https://cal.com";  // ou "https://cal.eu"
const FORM_ENDPOINT = "";          // Formspree : demandes d'échange
const CAPTURE_ENDPOINT = "";       // Formspree : pré-diagnostics du simulateur
```

Dans le contenu :

- Les sources des deux premiers chiffres, actuellement « Source à préciser avant mise en ligne »
- Les mentions légales : forme juridique, capital, RCS, SIREN, adresse, TVA, téléphone (chercher `legal` dans le script)
- ICS ou ISC : vérifier le sigle partout

Mesure d'audience : décommenter la ligne Plausible dans le `<head>` après avoir créé le compte.

## Réseaux sociaux

Pied de page (chercher `class="social"`) :
- Instagram : https://www.instagram.com/5.sens.collection/ (en place)
- LinkedIn : profil de Nina, **à renseigner** (repère `À remplacer` dans le code)

## Langues

La page bascule FR/EN avec le bouton de la navigation. Les traductions sont dans l'objet `EN` du dernier script.
Le choix est mémorisé dans le navigateur du visiteur ; `?lang=en` ouvre directement la version anglaise.
