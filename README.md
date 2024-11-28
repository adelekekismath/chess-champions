# Chess Champions

## Description
Ce projet est une application qui permet d'identifier les "champions" parmi une liste de joueurs d'échecs. Un joueur est dit "champion" si et seulement si il n'y a personne d'autre dans la liste qui "l'élimine", c'est-à-dire :
- Personne d'autre n'est à la fois strictement plus fort (Elo) et plus jeune ou du même âge.
- Personne d'autre n'est à la fois strictement plus jeune et plus fort ou du même score.

## Prérequis
- Node.js
- npm


## Utilisation
1. Compilez le code TypeScript :
    ```
    npx tsc
    ```

2. Lancez les tests :
    ```
    node dist/test.js
    ```



