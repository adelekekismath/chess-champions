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
#### Fonction `findChampions`

1. **Initialisation** :
   - Vérifie si le nombre de joueurs est inférieur à 2.
   - Trie les joueurs par âge et Elo à l'aide de `sortPlayers`.
   - Initialise :
     - `championsList` : Liste des champions.
     - `maxEloRatingByAge` : Tableau des Elo maximaux par tranche d'âge.

2. **Boucle principale** :
   - Pour chaque joueur trié :
     - **Étape 1 : Vérification des jeunes joueurs** :
       - Vérifie si le joueur n'est pas éliminé par des joueurs plus jeunes via `maxEloRatingByAge`.
       - Complexité : \( O(1) \).
     - **Étape 2 : Vérification avec les champions existants** :
       - Vérifie si le joueur est éliminé via `isEliminatedByChampion` (recherche binaire).
       - Complexité : \( O(log m) \), où \( m \) est la taille de `championsList`.
     - **Étape 3 : Mise à jour de la liste des champions** :
       - Si le joueur est un champion, il est ajouté à la liste.
     - **Étape 4 : Mise à jour des Elo maximaux par âge** :
       - Parcourt les tranches d'âge jusqu'à l'âge du joueur et met à jour `maxEloRatingByAge`.
       - Complexité : \( O(a) \), où \( a \) est l'intervalle des âges.

---

### Complexité

#### 1. **Tri des joueurs (`sortPlayers`)**
   - Complexité : \( O(n log n) \), où \( n \) est le nombre de joueurs.

#### 2. **Boucle principale**
   - Pour chaque joueur (\( n \)) :
     - Appels à `isEliminatedByChampion` :
       - Recherche binaire dans la liste des champions (\( O(log m) \), où \( m ≤ n \)).
     - Mise à jour de `maxEloRatingByAge` :
       - \( O(a) \), où \( a \) est l'intervalle des âges (constant dans un contexte réel).

   Complexité par joueur : \( O(log m + a) \).

   Total : \( O(n log m + a . n) \).

#### 3. **Complexité totale**
   - En combinant le tri et la boucle principale :
     \[O(n log n) + O(n log m + a . n)\]
   - Si \( m ≈ n \) et \( a \) est une constante :
     \[O(n log n + n log n) = O(n log n)\]

### Cas particuliers gérés

1. **Joueurs avec le même âge et même score** :
   - L'algorithme considère que ces joueurs ne se "dominent" pas mutuellement. Donc, ils peuvent tous être des champions.

2. **Aucun joueur dans la liste** :
   - Si la liste est vide, la fonction retourne une liste vide, sans erreur.

3. **Un seul joueur dans la liste** :
   - Ce joueur est automatiquement considéré comme champion.

4. **Doublons dans la liste** :
   - Les doublons sont éliminés avant le tri. Cela garantit que les joueurs uniques sont traités. Les noms des joueurs sont utilisés pour distinguer les doublons.





