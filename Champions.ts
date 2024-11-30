import SegmentTree from "./models/SegmentTree";
import { Player } from "./models/Types";

function getMaxAge(players: Player[]): number {
  return players.reduce((maxAge, player) => Math.max(maxAge, player.age), 0);
}

function sortPlayers(players: Player[]): Player[] {
  const playersWithoutDuplicates = Array.from(new Set(players));
  return playersWithoutDuplicates.sort((a, b) => a.age - b.age || b.eloRating - a.eloRating);
}

function isChampion(player: Player, players: Player[]): boolean {
  return !players.some(other =>
    (other.eloRating > player.eloRating && other.age <= player.age) ||
    (other.age < player.age && other.eloRating >= player.eloRating)
  );
}



function findChampions(players: Player[]): Player[] {

  if(players.length < 2 ) return players;

  const sortedPlayers = sortPlayers(players);
  const championsList: Player[] = [];

  for (const player of sortedPlayers) {
    if (isChampion(player, sortedPlayers)) 
      championsList.push(player);
  }
  return championsList;
}

export default findChampions;