import { formatDate } from '../../../../shared/helpers';
import { Game, GameRaw } from '../../types';
import { parseScreenshots, parseMinimumSystemRequirements } from './';

const parseGame = (valueRaw: GameRaw) => {
  const parsedScreenshots = parseScreenshots(valueRaw.screenshots);
  const parsedMinimumSystemRequirements = parseMinimumSystemRequirements(
    valueRaw.minimum_system_requirements,
  );

  const response = {
    id: valueRaw.id,
    title: valueRaw.title,
    thumbnail: valueRaw.thumbnail,
    status: valueRaw.status,
    shortDescription: valueRaw.short_description,
    description: valueRaw.description,
    gameUrl: valueRaw.game_url,
    genre: valueRaw.genre,
    platform: valueRaw.platform,
    publisher: valueRaw.publisher,
    developer: valueRaw.developer,
    freetogameProfileUrl: valueRaw.freetogame_profile_url,

    releaseDateRaw: valueRaw.release_date,
    releaseDate: formatDate({ value: valueRaw.release_date }),

    screenshots: parsedScreenshots,
    minimumSystemRequirements: parsedMinimumSystemRequirements,
  } as Game;

  return response;
};

export default parseGame;
