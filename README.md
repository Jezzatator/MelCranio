# melissa-cranio.com

Site vitrine de Mélissa Patot, kinésithérapeute spécialisée en thérapie craniosacrale à Zurich.
Une seule page, en 5 langues (fr, en, de, es, ca), générée en statique avec Next.js et hébergée sur Vercel.

## Modifier un texte

Tous les textes sont dans `content/<langue>.json` (`fr.json`, `en.json`, `de.json`, `es.json`, `ca.json`).
Les 5 fichiers ont la même structure : modifier la même clé dans chaque langue.

| Section du site | Clé JSON |
|---|---|
| Titre et description (Google, aperçus de partage) | `meta` |
| Sous-titre d'accueil | `home` |
| La thérapie, bénéfices | `cranio` |
| Mon parcours, formations | `about` |
| Lieu, prise de rendez-vous | `places` |
| Tarifs, assurances | `prices` |
| Contact, téléphone, formulaire | `contact` |

Les intitulés du menu sont dans `app/[lang]/components/NavBar.tsx`.
Les photos sont dans `public/static/` (elles sont redimensionnées et compressées automatiquement).

## Lancer le site en local

Prérequis : Node 24 (`nvm use` lit le fichier `.nvmrc`).

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000. Pour tester la version de production : `npm run build && npm start`.

## Vérifier avant de pousser

```bash
npm run check
```

Lance ESLint, TypeScript puis le build. La même vérification tourne automatiquement sur GitHub à chaque push
(onglet Actions) ; Dependabot propose une fois par mois les mises à jour de dépendances.

## Mettre en ligne

Pousser sur `main` : Vercel construit et déploie automatiquement (projet `mel-cranio`).

## Fonctionnement

- `app/[lang]/page.tsx` : la page, composée des sections de `app/[lang]/_sections/`.
- `proxy.ts` : `/` redirige vers la langue du navigateur.
- `app/api/contact` : relaie le formulaire de contact au formulaire Jotform existant
  (les messages arrivent dans le compte Jotform).
- `app/api/log` : reçoit les erreurs des navigateurs des visiteurs.
- `app/sitemap.ts`, `app/robots.ts`, métadonnées dans `app/[lang]/layout.tsx` : référencement.

## Logs et erreurs

Dans Vercel → Logs, filtrer avec :

- `client.error` : erreur JavaScript chez un visiteur
- `server.error` : erreur dans une route `/api`
- `contact.` : envois du formulaire (`contact.sent`, `contact.jotform_rejected`, …)

Les logs ne contiennent ni nom, ni e-mail, ni contenu des messages.
