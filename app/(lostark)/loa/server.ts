'use server'
interface Character {
  mainCharacter: string;
  characters: {
    characterName: string;
    characterClassName: string;
    itemAvgLevel: string;
  }[];
}

const fetchUserData = async (player: string): Promise<Character> => {
  const accessToken = process.env.LOSTARK_ACCESS_TOKEN;

  const response = await fetch(`https://developer-lostark.game.onstove.com/characters/${player}/siblings`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch data for player ${player}: ${response.statusText}`);
  }

  const result = await response.json();
  
  const characters: Character = {
    mainCharacter: player,
    characters: result.map((item: any) => ({
      characterName: item.CharacterName,
      characterClassName: item.CharacterClassName,
      itemAvgLevel: item.ItemAvgLevel,
    })),
  };

  console.log(characters);
  return characters;
};

export default fetchUserData;