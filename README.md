# Chess Champions

## Description
Ce projet est une application qui permet d'identifier les "champions" parmi une liste de joueurs d'échecs. Un joueur est dit "champion" si et seulement si il n'y a personne d'autre dans la liste qui "l'élimine", c'est-à-dire :
- Personne d'autre n'est à la fois strictement plus fort (eloRating) et plus jeune ou du même âge.
- Personne d'autre n'est à la fois strictement plus jeune et plus fort ou du même score.



## Prérequis
- Node.js
- npm


## Utilisation
1. Compilez le code TypeScript :
   ```bash
    npx tsc
    ```

2. Lancez les tests :
    ```bash
    node dist/test.js
    ```

## Explication de l'algorithme

---

### Fonction `findChampions`

1. **Tri des joueurs** :
   - Les joueurs sont triés par âge croissant et, à âge égal, par score décroissant.
   - **Complexité** : \(O(n \log n)\).

2. **Vérification des conditions pour chaque joueur** :
   - Pour chaque joueur, il faut vérifier s'il est dominé par au moins les autres joueurs.
   - Cela nécessite une comparaison entre chaque paire de joueurs.
   - **Complexité** : \(O(n^2)\).

3. **Complexité totale** :
   - \(O(n \log n)\) pour le tri + \(O(n^2)\) pour les comparaisons.
   - Résultat final : \(O(n^2)\).
---


### Cas particuliers gérés

1. **Joueurs avec le même âge et même score** :
   - L'algorithme considère que ces joueurs ne se "dominent" pas mutuellement. Donc, ils peuvent tous être des champions.

2. **Aucun joueur dans la liste** :
   - Si la liste est vide, la fonction retourne une liste vide, sans erreur.

3. **Un seul joueur dans la liste** :
   - Ce joueur est automatiquement considéré comme champion.

4. **Doublons dans la liste** :
   - Les doublons sont éliminés avant le tri. Cela garantit que les joueurs uniques sont traités. Les noms des joueurs sont utilisés pour distinguer les doublons.





