## Structure

ID
Priorité
Précondition
Étapes
Résultat attendu


## Validation des données 

# TC-001

Titre : création d'un film valide
Priorité : Critique
Précondition : Utilisateur sur la page d'ajout.

Étapes :

1. Saisir un titre
2. Saisir une année
3. Cliquer sur Ajouter

Résultat attendu :

- Le film est créé.
- Le film apparaît dans la liste.

# TC-002

Titre : création d'un film avec titre manquant
Priorité : Critique
Précondition : Utilisateur sur la page d'ajout.

Étapes :

1. Ne PAS saisir de titre
2. Saisir une année
3. Cliquer sur Ajouter

Résultat attendu :

- Message d'erreur informant sur le statut et la donnée manquante.
- Process de création interrompu et sauvegarde des données empêchée.

## Recherche d'un film 
# TC-003

Titre : recherche d'un film existant
Priorité : faible
Précondition : disposer d'au moins un film enregistré.

Étapes :

1. Saisir trois lettres d'un film figurant sur la page d'accueil
2. Lancer la recherche

Résultat attendu : le film recherché apparaît et sa page dédiée /movies/[id] est accessible via un lien.

## Tests unitaires

- validation de formulaires : isValidEmail() / formatDate()
- accessibilité des éléments : expect(button).toBeVisible() / alt
- message d'erreur suffisamment explicite pour chaque situation
- redirection vers page / après suppression d'un film

## Tests React

- page / : affichage d'une liste de films
- page /movies/[id] : affichage des données du film [id]
- page movies/new/ : affichage de messages à propos du statut de l'enregistrement ("Succès / "Echec")

## Tests E2E Playwright

- parcours complet de connexion : page / --> navigation page /login --> redirection automatique vers page /mon-compte
- redirection automatique vers page d'accueil / après logout
- parcours de crééation d'un film : page /movies/new remplissage formulaire de création puis soumission --> validation des données --> sauvegarde si données correctes --> message de confirmation après création --> redirection automatique vers page du film créé ??

## Accessibilité

- présence du bouton skiplink
- aria labels
- alt renseignés dans balises img
- navigation clavier

## Lighthouse

- mesure de la performance
- diagnostic accessibilité
- diagnostic SEO
