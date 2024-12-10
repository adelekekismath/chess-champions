import { Player } from "./models/Types";

function computeMaxEloRatingByAge(players: Player[]): number[] | undefined {
  const maxEloRatingByAge: number[] = [];

  for (const player of players) 
    maxEloRatingByAge[player.age] = Math.max(maxEloRatingByAge[player.age] || -1, player.eloRating);

  return maxEloRatingByAge;
}

function isChampion(player: Player, maxEloRatingByAge: number[]): boolean {
  let isChampion = true;

  if(player.eloRating  === maxEloRatingByAge[player.age] ){
    for(let i=0; i < player.age; i++ ){
      if(player.eloRating <= maxEloRatingByAge[i]){
        isChampion = false;
        break;
      }    
    }
  }
  else
    isChampion = false;

  return isChampion;
}

function findChampions(players: Player[]): Player[] {

  const championsList: Player[] = [];
  const maxEloRatingByAge = computeMaxEloRatingByAge(players);

  if(!maxEloRatingByAge || maxEloRatingByAge.length === 0){
    return [];
  }

  for (const player of players)
      if(isChampion(player, maxEloRatingByAge))
        championsList.push(player);


  return championsList;
}


export default findChampions;