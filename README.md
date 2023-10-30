
# Documentation de l'Application React "GnomesTown"

L'application "GnomesTown" est une application React qui permet aux utilisateurs de rechercher et d'afficher des informations sur les gnomes de la ville de Brastlewark. Elle se compose de deux principaux composants : `NavBar` et `Search`.

## Composant `NavBar`

Le composant `NavBar` est responsable de l'affichage de l'en-tête de la page, qui accueille les utilisateurs avec le message "Welcome to Brastlewark Town". Voici comment il fonctionne :

### Propriétés

Le composant `NavBar` ne prend pas de propriétés externes.

### Utilisation

Pour utiliser le composant `NavBar`, il vous suffit de l'ajouter à votre application React en important et en l'intégrant dans votre arborescence de composants. Il sert principalement de barre d'entête et n'a pas de fonctionnalités interactives.

## Composant `Search`

Le composant `Search` est le cœur de l'application, permettant aux utilisateurs de rechercher et d'afficher des informations sur les gnomes de Brastlewark en fonction de différents critères de recherche. Voici comment il fonctionne :

### Propriétés

Le composant `Search` ne prend pas de propriétés externes.

### Fonctionnalités

1. **Récupération des données des gnomes** : Lorsque le composant est monté, il effectue une requête HTTP pour récupérer les données des gnomes depuis une source de données externe (fournie par l'URL "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json").

2. **Affichage de la barre de recherche** : Le composant affiche une barre de recherche dans laquelle les utilisateurs peuvent saisir des termes de recherche.

3. **Filtrage des gnomes** : Le composant permet aux utilisateurs de rechercher des gnomes en fonction de plusieurs critères, notamment le nom, l'âge, la couleur des cheveux, la profession et les amis.

4. **Affichage des résultats** : Les résultats de la recherche sont affichés sous forme de cartes de gnome contenant des informations détaillées, y compris une image, l'âge, le nom, les professions, le poids, la taille, la couleur des cheveux et les amis.

5. **Réactivité en temps réel** : Les résultats de la recherche sont mis à jour en temps réel à mesure que les utilisateurs saisissent leurs critères de recherche.

### Utilisation

Pour utiliser le composant `Search`, vous pouvez l'importer et l'intégrer dans votre application React. Assurez-vous qu'il est correctement configuré pour effectuer des requêtes HTTP vers la source de données externe.

L'application "GnomesTown" permet aux utilisateurs de découvrir et d'explorer la ville de Brastlewark en recherchant des gnomes en fonction de divers critères. C'est une application simple mais interactive qui rend l'exploration amusante et facile.


# Comment lancer l'Application React

Ce projet est une application React qui permet de rechercher et afficher des informations sur les gnomes de Brastlewark.

## Installation

1. Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre système.

2. Clonez ce référentiel sur votre ordinateur :
   ```sh
   git clone https://github.com/votre-utilisateur/mon-projet.git
   ```

3. Accédez au répertoire du projet :
   ```sh
   cd mon-projet
   ```

4. Installez les dépendances nécessaires en exécutant la commande :
   ```sh
   npm install
   ```

## Lancer l'Application

Pour lancer l'application en mode développement, utilisez la commande suivante :
   ```sh
   npm start
   ```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000) dans votre navigateur.

##  Pour Effectuer des Tests

Pour exécuter les tests unitaires, vous pouvez utiliser la commande :
   ```sh
   npm test
   ```

Cela lancera les tests et affichera les résultats dans votre terminal.
NB : J'ai fait 2 suites de tests : une pour tester l'affichage de l'application (App.test.js) et l'autre pour tester la fonctionnalité de recherche par nom, age, couleur des cheveux, professions et amis (Search.test.js)
les deux suites de tests sont réussies.

