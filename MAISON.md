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

## Technique

- Astro 5, pages statiques. `npm install` puis `npm run build` (sortie dans `dist/`). Vercel lit `vercel.json` : aucun réglage à faire.
- Styles : `src/styles/maison.css`. Mise en page commune : `src/layouts/Maison.astro`.
- Polices hébergées sur le site (`public/fonts`).
- La lumière suit l'heure de la visite sur toutes les pages (`?lumiere=aube|jour|doree|nuit` pour prévisualiser).
- Passages surlignés en laiton (classe `a-valider`) : à confirmer par Nina avant la mise en ligne.

## À venir

Version anglaise (/en/…), outil d'édition (/admin), accueil reconstruit dans la même architecture, pièces 06 à 09.
