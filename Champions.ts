import { Player } from "./models/Types";


function findChampions(players: Player[]): Player[] {

  if (players.length < 2) return players;


  const championsList: Player[] = [];
  const maxEloRatingByAge: number[] = [];

  for (const player of players) 
    maxEloRatingByAge[player.age] = Math.max(maxEloRatingByAge[player.age] || -1, player.eloRating);
 
  for (const player of players){
    let isChampion = true;

    if(player.eloRating  === maxEloRatingByAge[player.age] ){
      for(let i=0; i < player.age; i++ ){
        if(player.eloRating <= maxEloRatingByAge[i]){
          isChampion = false;
          break;
        }    
      }

      if(isChampion)
        championsList.push(player);
    }
  }

  return championsList;
}


export default findChampions;