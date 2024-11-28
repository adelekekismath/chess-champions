import SegmentTree from "./models/SegmentTree";
import { Player } from "./models/Types";

function getMaxAge(players: Player[]): number {
  return players.reduce((maxAge, player) => Math.max(maxAge, player.age), 0);
}

function sortPlayers(players: Player[]): Player[] {
  return players.sort((a, b) => a.age - b.age || b.elo - a.elo);
}

function isChampion(player: Player, segmentTree: SegmentTree, champions: Player[]): boolean {
  const maxEloOfYoungerPlayers = segmentTree.query(0, player.age);
  return maxEloOfYoungerPlayers <= player.elo &&
    !champions.some(champion => champion.age < player.age && champion.elo === player.elo);
}

function findChampions(players: Player[]): Player[] {
  const maxAge = getMaxAge(players);
  const sortedPlayers = sortPlayers(players);
  const playersSegmentTree = new SegmentTree(maxAge);
  const championsList: Player[] = [];

  for (const player of sortedPlayers) {
    if (isChampion(player, playersSegmentTree, championsList)) {
      championsList.push(player);
    }
    playersSegmentTree.update(player.age, player.elo);
  }

  return championsList;
}

export default findChampions;