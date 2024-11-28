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
    ```
    npx tsc
  ```

2. Lancez les tests :
    ```
    node dist/test.js
    ```

## Explication de l'algorithme

### Classe `SegmentTree`

La classe `SegmentTree` (reference https://cp-algorithms.com/data_structures/segment_tree.html) implémente une structure d'arbre segmenté, permettant de :
- **Mettre à jour** le score maximum pour un âge donné en \(O(\log n)\).
- **Rechercher** efficacement le score maximum sur une plage d'âges en \(O(\log n)\).

Cette structure est idéale pour des problèmes impliquant des requêtes sur des plages d'index (ici, les âges) tout en garantissant des performances élevées.

---

### Fonction `findChampions`

L'algorithme principal suit trois étapes :

1. **Tri des joueurs** :
   - Les joueurs sont triés par **âge croissant**.
   - Si deux joueurs ont le même âge, ils sont triés par **score (eloRating) décroissant**.

2. **Vérification des dominations** :
   - Pour chaque joueur, on utilise le `SegmentTree` pour vérifier si un joueur strictement plus jeune ou du même âge a un score supérieur ou égal.
   - Si aucun joueur ne le domine, ce joueur est considéré comme un **champion**.

3. **Mise à jour du Segment Tree** :
   - Une fois qu'un joueur est traité, son âge et son score sont ajoutés au `SegmentTree`.
   - Cela permet de maintenir à jour les scores maximaux pour chaque plage d'âges.

Approche simple sans `SegmentTree`

1. **Tri des joueurs** :
   - Les joueurs sont triés par âge croissant et, à âge égal, par score décroissant.
   - **Complexité** : \(O(n \log n)\).

2. **Vérification des conditions pour chaque joueur** :
   - Pour chaque joueur, il faut vérifier s'il est dominé par tous les autres joueurs.
   - Cela nécessite une comparaison entre chaque paire de joueurs.
   - **Complexité** : \(O(n^2)\).

3. **Complexité totale** :
   - \(O(n \log n)\) pour le tri + \(O(n^2)\) pour les comparaisons.
   - Résultat final : \(O(n^2)\).
---

### Performance de l'algorithme

1. **Tri des joueurs** :
   - Effectué en \(O(n \log n)\) (fonction: Array.Prototype.Sort() de javascript).

2. **Parcours des joueurs avec le Segment Tree** :
   - Chaque mise à jour ou requête prend \(O(\log n)\).
   - Pour \(n\) joueurs, cela donne \(O(n \log n)\).

**Complexité globale** : \(O(n \log n)\).  
L'algorithme est donc scalable, même pour des listes de joueurs très grandes.

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





