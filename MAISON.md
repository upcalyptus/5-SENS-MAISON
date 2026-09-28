# La Maison — architecture du site 5 Sens Collection (version 2)

Le site est pensé comme une maison que l'on visite : chaque page est une pièce, auditée comme Nina auditerait un palace.

## Les quatre moments de chaque pièce

1. **Le seuil** : une photo qui respire lentement, le numéro de la pièce, une promesse en une phrase. Le visiteur sait en trois secondes où il est.
2. **Le parcours** : des salles séparées par des filets, jamais de cartes. Une idée par salle, aucune impasse.
3. **L'attention** : un détail propre à la pièce (le 88 monumental du Label, l'immersion heure par heure de la Méthode, la Charte signée, les trois questions du Rendez-vous).
4. **Le départ** : une phrase d'au revoir, puis la pièce suivante en grand. On ne quitte jamais une page sur une impasse.

## Le plan de la maison

Le menu est un plan : chaque pièce a son numéro, son nom et ce qu'on y trouve. Une pièce n'apparaît que lorsque son contenu est réel (`src/data/pieces.js`, champ `ouverte`).

| N° | Pièce | Adresse | État |
|----|-------|---------|------|
| 00 | Le Seuil | / | accueil (public/index.html) : navigation vers les pièces et section « Plan de la maison » |
| 01 | Le Label | /label | ouverte |
| 02 | Les cinq sens | /cinq-sens | ouverte |
| 03 | La Méthode | /methode | ouverte |
| 04 | La Charte | /independance | ouverte, textes à valider |
| 05 | Le Rendez-vous | /rendez-vous | ouverte, calendrier à brancher |
| 06–09 | Comité, Maisons, Journal, Presse | — | fermées jusqu'à contenu réel |

## Version 3 : ce qui fait la différence

- **Le cartel** : chaque seuil montre la photo entière, et le titre est posé sur un cartel clair, comme dans un musée.
- **Les transitions entre pièces** : l'image de la pièce suivante devient le seuil de la page d'après (View Transitions, Chrome et Safari récents ; sinon, passage normal).
- **Un défilement fluide** (Lenis), des photos qui se dévoilent et glissent en léger parallaxe, des titres qui apparaissent mot à mot.
- **Une attention par pièce** : la plaque qui tourne sur elle-même (Label), les cinq salons en galerie horizontale (Cinq sens), l'horloge de l'immersion qui avance au fil du défilement (Méthode), l'engagement signé (Charte), le portrait de Nina qui accompagne la lecture (Rendez-vous).
- Tout reste fixe avec « Réduire les animations », et la galerie redevient verticale sur téléphone.

## Technique

- Astro 5, pages statiques. `npm install` puis `npm run build` (sortie dans `dist/`). Vercel lit `vercel.json` : aucun réglage à faire.
- Styles : `src/styles/maison.css`. Mise en page commune : `src/layouts/Maison.astro`.
- Polices hébergées sur le site (`public/fonts`).
- La lumière suit l'heure de la visite sur toutes les pages (`?lumiere=aube|jour|doree|nuit` pour prévisualiser).
- Passages surlignés en laiton (classe `a-valider`) : à confirmer par Nina avant la mise en ligne.

## À venir

Version anglaise (/en/…), outil d'édition (/admin), accueil reconstruit dans la même architecture, pièces 06 à 09.

## Performance (version 4)

- Plus de calques de fusion plein écran pour la lumière selon l'heure (ils recalculaient toute la page à chaque image) : les fonds sont légèrement teintés à la place, sur l'accueil comme dans les pièces.
- Défilement natif dans les pièces (plus de défilement « lissé » qui donnait une impression de lenteur), calculs uniquement pendant le défilement.
- Animations raccourcies (0,5 s au lieu de 0,8 à 2 s), sections moins hautes, images en deux tailles (téléphone et grand écran).
- Mesure sur processeur ralenti ×4 : images de plus de 50 ms pendant le défilement, de 103–216 à 1–3 par page.
- Ne pas réintroduire de `mix-blend-mode` sur un élément plein écran fixe.

## Mouvement (version 5)

Règles appliquées partout (`src/styles/maison.css`, fin du fichier) :
- courbes « ease-out » franches (`--out`), courbe de tiroir pour le plan (`--tiroir`), jamais de linéaire ;
- 160–240 ms pour l'interface, 450–600 ms pour les apparitions, sortie plus rapide que l'entrée ;
- uniquement transform, opacity, filter et clip-path ; rien ne part de scale(0) ;
- retour tactile au clic (scale .97), aucun effet de survol sur écran tactile ;
- plan de la maison : voile qui se lève, pièces en cascade de 30 ms ; fermeture en 260 ms sans cascade ;
- « Réduire les animations » : fondus conservés, déplacements supprimés.

## Emblème vectoriel

`public/assets/embleme/` : version laiton (écran), versions monochromes laiton-texte, blanc et noir (pour le graveur). Lettres vectorisées depuis Fraunces : nettes à toute taille, prêtes pour l'impression et la gravure.

## Version 6 : une photo, une seule place

- Chaque photo n'apparaît qu'une fois dans toute la maison : accueil (vidéo, salon, les cinq sens de la séquence 3D), Label (la plaque au mur), Méthode (les livrables), Rendez-vous (portrait de Nina).
- Les pièces sans photo ont un seuil typographique (grand numéro de pièce en laiton) : Les cinq sens, Le Rapport, La Charte, pages légales.
- Le départ de chaque pièce et le plan de la maison sont typographiques : plus aucune image répétée.
- Les cinq sens deviennent le référentiel : pour chaque sens, trois critères et une mesure visuelle (température de couleur, niveau sonore de nuit, densité du linge…).
- Nouvelle pièce 04 · Le Rapport : un exemple de rapport d'audit pour une maison fictive, clairement signalée comme telle.
- Pages /mentions-legales et /confidentialite.
- Accueil : les sections Méthode, Label, FAQ et formulaire sont désormais dans leurs pièces ; les boutons « Réserver » mènent au Rendez-vous ; polices hébergées sur le site.

## Version 7 : bilingue, éditable, fonctionnel

- **Textes hors du code** : chaque pièce lit son contenu dans `src/content/*.json` (français et anglais côte à côte). C'est là que l'outil d'édition écrit.
- **Version anglaise** complète : /en/label, /en/five-senses, /en/method, /en/report, /en/independence, /en/private-call, /en/legal-notice, /en/privacy. Bouton FR / EN dans l'en-tête, balises hreflang, accueil bilingue (?lang=en) dont les liens suivent la langue.
- **Outil d'édition** : /admin (Decap CMS, hébergé sur le site). Mise en place : voir `EDITION.md`.
- **Formulaires qui fonctionnent** : `/api/demande` (pièce Rendez-vous) et `/api/prediagnostic` (simulateur de l'accueil) envoient les emails par Brevo : un à Nina, une confirmation au visiteur. Protection anti-robots. Clé à renseigner dans Vercel (`BREVO_API_KEY`).
- **Calendrier** : renseigner `cal_link` dans les Réglages de l'outil d'édition, le calendrier Cal.com apparaît dans la pièce Rendez-vous.
- **Aucune ressource tierce** hors Cal.com et Plausible : bibliothèques (GSAP, Lenis, Three.js) et polices hébergées sur le site, politique de sécurité resserrée, cache d'un an sur /assets, /fonts, /lib.
- **Contrôle automatique d'accessibilité (axe)** sur les 18 pages FR et EN : aucune erreur, hors les mots de la phrase-manifeste de l'accueil pendant leur animation.
- **Aucun lien interne cassé** (vérifié sur toutes les pages).
