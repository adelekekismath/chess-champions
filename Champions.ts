import SegmentTree from "./models/SegmentTree";
import {Player} from "./models/Types";


function findChampions(players: Player[]): Player[] {
  const maxAge = players.reduce((max, player) => Math.max(max, player.age), 0);

  // Sort players by age ascending, and by elo descending if ages are equal
  players.sort((a, b) => a.age - b.age || b.elo - a.elo);

  const segmentTree = new SegmentTree(maxAge);
  const champions: Player[] = [];

  for (const player of players) {
    const maxEloOfYoungerPlayers = segmentTree.query(0, player.age);
    if (maxEloOfYoungerPlayers <= player.elo) {
      !champions.find((champion) => champion.age < player.age && champion.elo === player.elo) && champions.push(player); 
    }
    segmentTree.update(player.age, player.elo);
  }

  return champions;
}


export default findChampions;



