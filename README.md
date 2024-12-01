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

2. **Boucle externe** : \( O(n) \).
3. **Appels à `isEliminatedByChampion`** :
  - En moyenne \( O(\log m) \) par joueur.
  - Total : \( O(n \log m) \).
4. **Mise à jour de `maxEloRatingByAge`** : 
  - \( O(a \cdot n) \), où \( a \) est une constante liée à l'intervalle des âges.

### La partie dominante est donc \( O(n \log m) \).

---

### Résultat final :
\[
O(n \log n + n \log m) \approx O(n \log n)
\]

où :
- \( n \) est le nombre de joueurs.
- \( m \) (taille de `championsList`) est au plus \( n \).

   
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





