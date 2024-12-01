import { Player } from "./models/Types";


function sortPlayers(players: Player[]): Player[] {
  const playersWithoutDuplicates = Array.from(new Set(players));
  return playersWithoutDuplicates.sort((a, b) => a.age - b.age || b.eloRating - a.eloRating);
}

function isEliminatedByChampion(champions: Player[], player: Player): boolean {
  let start = 0;
  let end = champions.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const champion = champions[middle];

    if ((champion.eloRating > player.eloRating && champion.age <= player.age) ||
      (champion.age < player.age && champion.eloRating >= player.eloRating)) {
      return true;
    }

    if (champion.age < player.age || (champion.age === player.age && champion.eloRating <= player.eloRating)) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return false;
}

function findChampions(players: Player[]): Player[] {

  if (players.length < 2) return players;

  const sortedPlayers = sortPlayers(players);
  const championsList: Player[] = [];
  const maxEloRatingByAge: number[] = [];

  for (const player of sortedPlayers) {
    const maxEloOfYoungerPlayers =
      maxEloRatingByAge[player.age - 1] || -Infinity;

    const isChampion =
      maxEloOfYoungerPlayers <= player.eloRating &&
      (!championsList.length || !isEliminatedByChampion(championsList, player));

    if (isChampion)
      championsList.push(player);

    maxEloRatingByAge[player.age] = Math.max(
      maxEloRatingByAge[player.age] || -Infinity,
      player.eloRating
    );

  }
  return championsList;
}



export default findChampions;