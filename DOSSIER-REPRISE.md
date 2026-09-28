# 5 SENS COLLECTION — landing page
## Dossier de reprise (version du 27 septembre 2026)

## 1. Le projet

Landing page B2B pour 5 SENS COLLECTION, label d'excellence sensorielle pour l'hospitalité
d'exception (hôtels, spas, tables), fondé par Nina Vienney.
Objectif unique de conversion : réserver un échange confidentiel de 30 minutes avec Nina.
Pas de réservation de séjour, pas de catalogue d'établissements.

## 2. Les fichiers

- `deploy/index.html` — la page, médias en fichiers séparés (environ 195 Ko). C'est la version à mettre en ligne.
- `deploy/assets/` — vidéo du hero (3 définitions + webm), images WebP (grand format + version `-sm` pour mobile ; photos des 5 sens nettes en fond de la séquence 3D, `img-<sens>` 1200 px et `img-<sens>-sm` 700 px), plaque, photo de Nina, favicon, image de partage.
- `deploy/vercel.json` — cache des médias et en-têtes de sécurité (hébergement retenu : Vercel).
- `deploy/netlify.toml` — même configuration, en réserve si passage sur Netlify.
- `deploy/404.html`, `deploy/sitemap.xml`, `deploy/robots.txt`.
- `5sens-landing.html` — la même page en un seul fichier (médias encodés à l'intérieur). Pour visionner hors ligne ou envoyer par message. À ne pas mettre en ligne : trop lourde.

## 3. Structure de la page, dans l'ordre

1. Navigation en capsule de verre (Les 5 sens, Simulateur ICS, La méthode, Qui sommes-nous, FAQ, bascule FR/EN, bouton Réserver)
2. Hero : vidéo de la villa, plaque, titre, deux boutons (Réserver un échange / Tester mon ICS en 2 minutes), ligne de réassurance
3. Les chiffres : « Les sens décident avant vous », citation signée de Nina, quatre preuves chiffrées qui montent au scroll
4. L'indice ICS : définition + jauge animée de 35 à 88 sur 100 (seuil du label)
5. Le constat : phrase révélée mot par mot au scroll + trois colonnes
6. Grande image pleine largeur (salon méditerranéen)
7. L'angle mort : « Depuis quand n'avez-vous pas été client de votre propre établissement ? » + quatre cartes
8. Les 5 sens : séquence 3D (Three.js), plaque en laiton pilotée par le scroll, cinq perles en orbite, photos d'ambiance nettes en fond (voile clair pour la lisibilité), et pour chaque sens ses trois critères d'audit
9. La méthode : six étapes avec ligne dorée qui se dessine, livrables rattachés aux étapes 3, 4 et 5, radar avant/après, photo des livrables imprimés
10. Simulateur de pré-audit ICS : typologie + cinq curseurs + verdict + capture d'email pour le pré-diagnostic
11. Le label : photo de la plaque en situation, « À la clé » (plaque, promotion fondatrice, visibilité)
12. (Formats et tarifs : section retirée, aucun prix n'est affiché sur le site)
13. Cercle pionnier 2026
14. Qui sommes-nous : texte de Nina + sa photo
15. Témoignages
16. FAQ en accordéon
17. Prise de rendez-vous : formulaire (étape 1) puis calendrier Cal.com pré-rempli (étape 2)
18. Pied de page : plaque, réseaux sociaux, mentions légales et confidentialité en fenêtre

## 4. Direction artistique

- Aucun noir nulle part, ni fond, ni bouton, ni texte.
- Fonds : blanc #FFFFFF, pierre #F8F7F4, lin #F5F3EF, sable #EFEAE1
- Texte : brun profond #3B3328, secondaire #66635C
- Laiton #C9B99A, laiton foncé #9E8963, bronze #8A7652 (boutons pleins)
- Typographies : Fraunces (titres, réglage SOFT 20, graisse 340 sur le hero), Plus Jakarta Sans (texte). Validé par Nina, y compris sur la page 404.
- Mise en page éditoriale sur filets de laiton plutôt que sur cartes encadrées, grain photographique léger sur toute la page.

## 5. Technique

Un seul fichier HTML, sans framework. Bibliothèques par CDN : Three.js r128 (3D), GSAP + ScrollTrigger,
Lenis (défilement fluide). Bilingue FR/EN par dictionnaire JavaScript, choix mémorisé dans le navigateur.
Apparitions au scroll par vérification en rAF (ne pas repasser par IntersectionObserver : cela a déjà causé
des sections invisibles). Images en WebP avec dimensions inscrites, vidéo en pause hors écran, 3D allégée
sur mobile. Accessibilité : lien d'évitement, mode sans JavaScript. Données structurées ProfessionalService
et FAQPage. Suivi des conversions via `window.track` (Plausible), sans cookie.

## 6. À compléter avant la mise en ligne

En haut du dernier bloc `<script>` de `index.html` :
- `CAL_LINK` : lien Cal.com de Nina sans le domaine (ex. `nina-vienney/30min`), et `CAL_ORIGIN`
  (`https://cal.com`, ou `https://cal.eu` si le compte est hébergé en Europe).
  L'établissement et le téléphone arrivent dans le champ « Notes » de la réservation.
- `FORM_ENDPOINT` : Formspree, reçoit les demandes d'échange (seul endroit à renseigner, le formulaire le lit ici)
- `CAPTURE_ENDPOINT` : Formspree, reçoit les demandes de pré-diagnostic

Dans le contenu :
- Les sources des deux premiers chiffres (+37 à +43 % et +11,2 %) : actuellement « Source à préciser avant mise en ligne »
- Deux témoignages supplémentaires attendus par Nina, idéalement avec nom d'établissement et résultat chiffré
- Mentions légales : forme juridique, capital, RCS, SIREN, adresse, TVA, téléphone (chercher `legal` dans le script) — en attente des informations
- Réseaux sociaux : Instagram en place (@5.sens.collection) ; LinkedIn = profil de Nina, URL à renseigner
- Trancher ICS ou ISC : le site dit ICS partout (Indice de Cohérence Sensorielle)
- Remplacer 5senscollection.com par le vrai domaine dans index.html, sitemap.xml et robots.txt
- Décommenter la ligne Plausible dans le `<head>` après création du compte

## 7. Mise en ligne

Vercel (offre Pro) relié à un dépôt GitHub privé, DNS conservés chez OVH (détail dans DEPLOIEMENT.md).
Raisons : offre gratuite compatible usage commercial, emails non touchés, historique et retour arrière.
Vercel reste possible en offre Pro (`vercel.json` tenu à jour).

## 8. Historique des décisions de Nina (à ne pas défaire)

- Aucun fond noir
- Bannière aux cinq panneaux dorés supprimée (univers Ritz, incohérent avec le reste)
- Les cinq sens ne sont racontés qu'une fois : dans la séquence 3D (la section à onglets a été supprimée)
- Les livrables sont rattachés aux étapes de la méthode (la section livrables a été supprimée)
- Les deux voies d'accès au label ont été supprimées : l'audit est le seul chemin
- Le bloc court / moyen / long terme a été supprimé
- Pas d'argument technique sur la plaque (ni kilos ni millimètres)
- Tarifs : uniquement le prix fondateur
- Le propos sur les sens est signé par Nina, pas par le site
- Typographie des titres : Fraunces (et non Marcellus)
- Prise de rendez-vous : Cal.com à la place de Calendly

## 9. Journal des modifications

27 septembre 2026
- Formulaire : la configuration `FORM_ENDPOINT` était déclarée deux fois et celle documentée n'était pas lue. Une seule déclaration désormais, en haut du dernier script.
- Calendly remplacé par Cal.com (intégration officielle, pré-remplissage nom / email / notes, suivi `rdv_confirme`, lien direct en secours). CSP mise à jour aux trois endroits, mentions légales et confidentialité mises à jour.
- Page 404 : chemins absolus (`/assets/...`), passage en Fraunces, `noindex`.
- Instagram renseigné dans le pied de page et les données structurées.
- Documentation réalignée (hébergement Netlify, poids du fichier, noms de fichiers).
- Assets : fonds floutés des 5 sens ramenés à une seule définition (900 px), les doublons 1600 px sont supprimés.

27 septembre 2026 — performance et séquence 3D
- Three.js (600 Ko) n'est plus chargé au démarrage : il arrive en arrière-plan après l'affichage, la scène est construite à l'approche de la section. Le blocage au chargement passe d'environ 5 s à 0,7 s (mesuré sur mobile simulé, réseau 4G lent).
- Vidéo du hero chargée après l'affichage (l'image fixe s'affiche d'abord) ; polices Google non bloquantes ; plaque du hero dimensionnée (plus de décalage de mise en page).
- Suppression d'une copie complète de la feuille de style (31 Ko) restée dans le bloc noscript.
- Apparitions et compteurs calculés au défilement, plus en boucle permanente.
- Séquence 3D : même horloge que le défilement fluide (fin des tremblements), un seul lissage au lieu de deux (la plaque ne traîne plus derrière les textes), hauteur calée sur la zone collante (plus de plaque écrasée ni de sauts sur mobile quand la barre d'adresse bouge), perles en couronne autour de la plaque (elles ne passent plus devant le logo, la perle du sens actif monte au sommet), plaque finale remontée pour ne plus couvrir « Attribution du label », résolution plafonnée pour les écrans Retina.
- Ne pas remettre Three.js en balise script classique en bas de page : c'était la principale cause de lenteur.

27 septembre 2026 — plaque 3D « vide » et blancs au premier défilement
- Cause de la plaque vide (seul l'anneau doré visible) : tant que la texture de la face n'est pas chargée, ou si le navigateur la bloque (page ouverte en local depuis l'ordinateur), la face est dessinée transparente. Désormais la texture est chargée avant la construction de la scène ; la 3D n'apparaît qu'une fois complète, sinon la plaque fixe prend le relais.
- `assets/plaque-texture.js` : copie intégrée de la texture, utilisée uniquement quand la page est ouverte en local (double-clic sur index.html), pour que l'aperçu fonctionne aussi hors ligne.
- Les photos floutées des 5 sens s'affichent même avant que la 3D soit prête.
- Images du bas de page préchargées en arrière-plan après l'affichage ; fond sable pendant leur chargement ; apparitions plus rapides et décalages plafonnés.

27 septembre 2026 — retours de Nina
- Fonds de la séquence 3D : les photos floutées (`bg-*`) sont remplacées par les photos nettes (`img-*`, 1200 px, version 700 px sur mobile). Décision de Nina : ne pas revenir aux fonds floutés.
- Jauge ICS : l'étiquette « Seuil de labellisation » était coupée (l'animation d'apparition rognait tout ce qui dépasse du bloc). Le chiffre reste au-dessus du repère, la légende complète « Seuil de labellisation : 88 sur 100 » est placée sous l'échelle, sur tous les écrans.
- Témoignages : guillemet fermant » ajouté à la fin de chaque citation.

27 septembre 2026 — test sur iPhone
- Séquence 3D sur mobile : la plaque se place et se dimensionne d'après la place réellement libre entre le menu et le texte du sens affiché. Elle ne chevauche plus le texte, quelle que soit la hauteur de l'écran.
- Face de la plaque moins délavée (reflets atténués, lumière d'ambiance qui suit la plaque).
- Menu mobile : le panneau replié dépassait au-dessus de la barre (bande blanche en haut de l'écran). Corrigé.
- Hero mobile : ne passe plus sous la barre de navigation sur les écrans courts (plaque, titre et boutons resserrés).
- Chiffres et jauge : suivent le défilement même quand l'iPhone a « Réduire les animations » activé (avant : jauge bloquée à 35, chiffres figés).
- Logos : chargés normalement (le chargement différé pouvait ne jamais se déclencher dans le bandeau défilant sur Safari), un peu plus grands sur mobile ; grille propre si les animations sont réduites.

27 septembre 2026 — prix
- Aucun prix n'est affiché sur le site. Les anciens tarifs (2 200 / 3 400 / 4 900 € HT) restaient dans les données structurées lues par Google : retirés, pour qu'ils n'apparaissent pas dans les résultats de recherche.

28 septembre 2026 — version « élite », première étape
- Signature sonore : cinq notes de cloche (une par sens), jouées à l'activation du son, puis à chaque sens dans la séquence 3D. Uniquement si le visiteur a activé le son.
- La lumière suit l'heure de la visite : aube, plein jour, heure dorée, nuit. Voile lumineux discret, lumière de la plaque 3D orientée selon l'heure, mention dans l'introduction des cinq sens.
- Plaque 3D : relief de gravure calculé depuis l'image, laiton brossé, vernis (clearcoat).
- Anglais entièrement relu : 217 textes réécrits en anglais britannique, registre luxe.
- Accessibilité : zéro erreur au contrôle axe (FR et EN). Contrastes corrigés, phrase-manifeste lisible par les lecteurs d'écran, bouton flottant dans un repère, dimensions des images.
- Tests : 8 largeurs d'écran sans débordement, clavier, formulaires, son, 4 heures de la journée, sans JavaScript, animations réduites, Lighthouse (SEO 100, accessibilité 100 visée, bonnes pratiques 96).
- Ne pas remettre de règle globale img[width][height]{height:auto} : elle écrase la hauteur des photos de la séquence 3D.

28 septembre 2026 — hébergement
- Choix de Nina : Vercel. Mentions légales et politique de confidentialité mises à jour (FR et EN), DEPLOIEMENT.md réécrit pour Vercel, Netlify gardé en alternative.

28 septembre 2026 — lumière selon l'heure, version 2
- Ambiances nettement plus présentes : aube rosée, heure dorée ambrée, nuit feutrée comme sous une lampe. Deux voiles séparés (teinte en soft-light, ombre en multiply) : les textes restent aussi foncés et lisibles.
- Correctif : les voiles ne se mélangeaient pas réellement à la page (ils étaient isolés dans leur propre calque) et délavaient le texte.
- L'heure affichée se met à jour chaque minute.
- Aperçu d'une ambiance à toute heure : ajouter ?lumiere=aube, ?lumiere=jour, ?lumiere=doree ou ?lumiere=nuit à l'adresse.
