# Modifier le site sans développeur : l'outil d'édition

Adresse : **5senscollection.com/admin** (ou l'adresse Vercel suivie de /admin).
Tous les textes des pièces, en français et en anglais, les réglages du calendrier et les mentions légales s'y modifient. Chaque enregistrement publie le site en une à deux minutes.

## Mise en place (une seule fois, 10 minutes)

1. **GitHub** : Settings (du compte) → Developer settings → OAuth Apps → New OAuth App.
   - Application name : 5 Sens Collection · édition
   - Homepage URL : https://5senscollection.com (ou l'adresse Vercel)
   - Authorization callback URL : https://5senscollection.com/api/callback
   - Créer, puis « Generate a new client secret ». Noter le Client ID et le Client secret.
2. **Vercel** : projet → Settings → Environment Variables, ajouter :
   - `GITHUB_CLIENT_ID` et `GITHUB_CLIENT_SECRET` (valeurs de l'étape 1)
   - `BREVO_API_KEY` (Brevo → SMTP & API → Clés API) pour les formulaires
   - `EMAIL_NINA` (adresse qui reçoit les demandes) et `EMAIL_EXPEDITEUR` (adresse d'envoi authentifiée dans Brevo)
3. Dans `public/admin/config.yml`, remplacer `VOTRE-COMPTE/5-sens-maison` par le nom réel du dépôt, et `base_url` par l'adresse du site.
4. Redéployer. Ouvrir /admin → « Se connecter avec GitHub ».

## Où est quoi

- **Pièces** : un fichier par pièce, avec la version française et la version anglaise côte à côte.
- **Réglages** : `cal_link` (lien Cal.com sans le domaine, par ex. `nina-vienney/30min`) ; dès qu'il est rempli, le calendrier apparaît dans la pièce Rendez-vous.
- Les passages entre crochets [ ] sont affichés surlignés en laiton : à confirmer, puis retirer les crochets.
