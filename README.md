## Présentation du projet

Application de gestion de collection de films.

Les utilisateurs peuvent :

- consulter
- rechercher
- créer
- modifier
- supprimer
  des films.

## Architecture

## Stack

- Jest
- React Testing Library
- Playwright
- Lighthouse

## Stratégie QA

- Automatisation des tests à chaque push via GitHub Actions

## Couverture des tests

Liste des fonctionnalités testées :

- formulaires
- validations
- CRUD (Create, Read, Update, Delete)
- recherche
- navigation
- gestion d'erreurs

## Démarrer l'application

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

Ensuite ouvrir la page [http://localhost:3000](http://localhost:3000) sur le navigateur.

## Comment lancer les tests

Possibilité de lancer les tests manuellement :

- npm run test : lance tous les tests
- npx jest MovieForm.test.ts : lance tous les tests du fichier sélectionné
- npx playwright test : lance les tests de type e2e
- npx playwright test create-movie.spec.ts : lance tous les tests du fichier sélectionné
- npx playwright test --debug :  lance les tests en mode debug

## Liens

- Evaluation des risques : ./src/docs/risk-analysis.md
- Détails des tests mis en place dans l'app : ./src/docs/test-cases.md
- Reporting des bugs constatés et actions mises en places pour résolution : ./src/docs/bug-reports.md

## V2

Ajout des fonctionnalités Login / logout :

- redirection vers page / après login
- message d'erreur si login ou password incorrects
- message d'erreur distinct si login non reconnu
- nécessité d'être connecté pour créer / modifier un film
- nécessité d'être connecté en tant qu'admin pour supprimer un film

Validation du type de fichier (.jpg ou .png seuls autorisés) si ajout d'image.
