## Structure

Titre avec ID (TC-XXX)
Priorité
Type
Précondition
Données de test
Étapes
Résultat attendu

<!-- -------------------------------------------------------------------------------------------------- -->

## Validation des données (Create)

# TC-001

Titre : création d'un film avec des données valides
Priorité : critique
Type : fonctionnel
Précondition :

- L'utilisateur est sur la page movie/new
- Le formulaire est affiché
- Le titre de film "Test" n'existe pas déjà

Données de test :

- Titre : Test
- Réalisateur : Pops
- Année de sortie : 2026

Étapes :

1. Saisir le Titre "Test"
2. Saisir "Pops" comme Réalisateur
3. Saisir "2026" en Année de sortie
4. Cliquer sur Enregistrer

Résultat attendu :

- Aucun message d'erreur n'est affiché
- Le film est créé
- Un identifiant unique est généré
- L'utilisateur est redirigé vers la page prévue
- Le film apparaît dans la liste
- La page /movies/[id] du film est accessible
- Les informations affichées correspondent aux données saisies

# TC-002

Titre : tentative de création d'un film sans titre
Priorité : critique
Type : fonctionnel
Précondition :

- L'utilisateur est sur la page movie/new
- Le formulaire est affiché

Données de test :

- Titre : (vide / empty)
- Réalisateur : Paps
- Année de sortie : 2000

Étapes :

1. Laisser le champ Titre vide
2. Saisir "Paps" comme Réalisateur
3. Saisir "2000" en Année de sortie
4. Cliquer sur Enregistrer

Résultat attendu :

- ULe message "Le titre est obligatoire." apparaît.
- Le formulaire n'est pas soumis
- Aucun film n'est créé
- L'utilisateur reste sur la page de création

<!-- -------------------------------------------------------------------------------------------------- -->

## Afficher les données d'un ou plusieurs films (Read)

# TC-003

Titre : afficher la liste des films
Priorité : critique
Précondition : se trouver sur la page /

Étapes :

1. En principe aucune démarche n'est nécessaire, l'affichage est automatique.

Résultat attendu : les films apparaissent sous forme de liste et leur page dédiée /movies/[id] est accessible via un lien

# TC-004

Titre : afficher le détail des informations relatives à un film
Priorité : critique
Précondition : se trouver sur la page /movies/[id]

Étapes :

1. En principe aucune démarche n'est nécessaire, l'affichage est automatique.

Résultat attendu : les données du film (titre, réalisateur, année etc.) apparaissent sur la page.

<!-- -------------------------------------------------------------------------------------------------- -->

## Mettre à jour les données d'un film (Update)

# TC-005

Titre : mettre à jour tout ou partie des informations relatives à un film
Priorité : moyenne
Précondition : se trouver sur la page /movies/[id]

Étapes :

1. Appuyer sur le bouton "Mettre à jour" qui redirige vers la page /movies/[id]/edit
2. Afficher le formulaire avec données actuelles pré-remplies
3. Modifier la ou les donnée(s) nécessaires

Résultat attendu :

- Le film est mis à jour et un message d'information apparaît (ex. : "Les données relatives au film ont bien été mises à jour.").
- Le film apparaît dans la liste et sa page dédiée /movies/[id] est accessible avec les données mises à jour.

<!-- -------------------------------------------------------------------------------------------------- -->

## Supprimer un film (Delete)

# TC-006

Titre : supprimer les informations relatives à un film et sa page dédiée
Priorité : moyenne
Précondition : se trouver sur la page /movies/[id]

Étapes :

1. Utiliser le bouton "Supprimer" présent sur la page.
2. Appuyer sur le bouton "Confirmer" de la modale qui s'est ouverte.

Résultat attendu : les données du film (titre, réalisateur, année etc.) sont supprimées et la page dédiée inaccessible, l'utilisateur est redirigé automatiquement vers la page d'accueil après affichage d'un message de succès.

<!-- -------------------------------------------------------------------------------------------------- -->

## Vérifier la présence d'éléments

# TC-007

Titre : vérifier la présence du bouton skiplink
Priorité : moyen
Précondition : se trouver sur n'importe quelle page du site

Étapes :

1. Après être arrivé sur une page ou l'avoir rechargée, appuyer sur la touche "Tab"

Résultat attendu : le bouton skiplink doit apparaître et être désormais utilisable.

# TC-008

Titre : vérifier la présence du bouton "Créer un film"
Priorité : critique
Précondition : se trouver sur n'importe quelle page du site

Étapes :

1. En principe aucune démarche n'est nécessaire, l'affichage du bouton est automatique sur toutes les pages.

Résultat attendu : le bouton "Créer un film" doit apparaître et être utilisable.

# TC-009

Titre : vérifier la présence du bouton "Supprimer"
Priorité : moyen
Précondition : se trouver sur la page dédiée au film /movies/[id]

Étapes :

1. En principe aucune démarche n'est nécessaire, l'affichage du bouton est automatique sur la page du film.

Résultat attendu : le bouton "Supprimer" doit apparaître et être utilisable.

# TC-010

Titre : vérifier la présence du bouton "Mettre à jour"
Priorité : moyen
Précondition : se trouver sur la page dédiée au film /movies/[id]

Étapes :

1. En principe aucune démarche n'est nécessaire, l'affichage du bouton est automatique sur la page du film.

Résultat attendu : le bouton "Mettre à jour" doit apparaître et être utilisable.

<!-- -------------------------------------------------------------------------------------------------- -->

## Recherche d'un film

# TC-011

Titre : recherche d'un film existant
Priorité : faible
Précondition : disposer d'au moins un film enregistré

Étapes :

1. Saisir trois lettres d'un film figurant sur la page d'accueil
2. Lancer la recherche

Résultat attendu : le film recherché apparaît et sa page dédiée /movies/[id] est accessible via un lien

<!-- -------------------------------------------------------------------------------------------------- -->

## Accessibilité

<!-- -------------------------------------------------------------------------------------------------- -->

## Navigation

<!-- -------------------------------------------------------------------------------------------------- -->

## To do

# Tests unitaires

- validation de formulaires : isValidEmail() / formatDate()
- accessibilité des éléments : expect(button).toBeVisible() / alt

# Tests E2E Playwright

- parcours complet de connexion : page / --> navigation page /login --> redirection automatique vers page /mon-compte
- redirection automatique vers page d'accueil / après logout

# Accessibilité

- aria labels
- alt renseignés dans balises img
- navigation clavier

# Lighthouse

- mesure de la performance
- diagnostic accessibilité
- diagnostic SEO
