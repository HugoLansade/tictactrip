# Tictactrip Rest Api

[Lien vers le projet deployé](https://tictactrip-client.vercel.app/)

## Structure du projet

### Components

Le projet contient quatre composants principaux :

- Header
- ButtonMain : le button permettant de justifier le text
- Text : la zone dans laquelle l'utilisateur peut écrire ou coller du texte à justifier
- Auth : le form permettant de se login et d'obtenir un token accordant l'authorization de justifier le text

### App

L'App contient l'ensemble des composants ainsi que les fonctions permettant de fetcher des informations du back.

- handleSubmitLogin : Permet de créer un token suite à la création d'un login avec email
- handleSubmitText : Permet de poster du text en type text/plain , en passant dans les headers le token d'accès

Ces deux fonctions vont stocker les réponses de la base de donnée dans des hooks qui sont passés en paramètre pour les autres composants.

### CSS

Le css est regroupé en un fichier car très peu de styling était nécessaire (et demandé) pour ce projet. Il aurait cependant été plus approprié de le mettre dans chaque dossier de component.

### APIHandler

Permet de simplifier l'utilisation d'axios dans le projet. Il est uniquement nécessaire d'écrire la fin de la route et non pas le début qui est similaire à toutes les routes. Cela limite le nombre de correction si l'on change le port du backend.

## Lien vers le repertoire contenant le back

[Lien vers le code du back](https://github.com/HugoLansade/tictactrip-server).
