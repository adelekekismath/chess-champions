import SegmentTree from "./models/SegmentTree";
import { Player } from "./models/Types";

function getMaxAge(players: Player[]): number {
  return players.reduce((maxAge, player) => Math.max(maxAge, player.age), 0);
}

function sortPlayers(players: Player[]): Player[] {
  const playersWithoutDuplicates = Array.from(new Set(players));
  return playersWithoutDuplicates.sort((a, b) => a.age - b.age || b.eloRating - a.eloRating);
}

function isChampion(player: Player, segmentTree: SegmentTree, champions: Player[]): boolean {
  const maxEloRatingOfYoungerPlayers = segmentTree.getMaxEloInRange(0, player.age);
  return (maxEloRatingOfYoungerPlayers <= player.eloRating) && !hasYoungerChampionWithSameScore(player, champions);
}

function hasYoungerChampionWithSameScore(player: Player, champions: Player[]): boolean {
  return champions.some(champion => champion.age < player.age && champion.eloRating === player.eloRating);
}

function findChampions(players: Player[]): Player[] {

  if(players.length < 2 ) return players;

  const maxAge = getMaxAge(players);
  const sortedPlayers = sortPlayers(players);
  const playersSegmentTree = new SegmentTree(maxAge);
  const championsList: Player[] = [];

  for (const player of sortedPlayers) {
    if (isChampion(player, playersSegmentTree, championsList)) {
      championsList.push(player);
    }
    playersSegmentTree.update(player.age, player.eloRating);
  }

  return championsList;
}

export default findChampions;