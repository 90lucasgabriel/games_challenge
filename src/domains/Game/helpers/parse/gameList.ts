import { formatDate } from '../../../../shared/helpers';
import { GameItem, GameItemRaw } from '../../types';

const parseGameList = (valueRaw: GameItemRaw[]) => {
  let response = [] as GameItem[];

  valueRaw.forEach(game => {
    const parsedGame = {
      id: game.id,
      title: game.title,
      thumbnail: game.thumbnail,
      shortDescription: game.short_description,
      gameUrl: game.game_url,
      genre: game.genre,
      platform: game.platform,
      publisher: game.publisher,
      developer: game.developer,
      releaseDateRaw: game.release_date,
      releaseDate: formatDate({ value: game.release_date }),
      freetogameProfileUrl: game.freetogame_profile_url,
    };

    response = [...response, parsedGame];
  });

  return response;
};

export default parseGameList;
