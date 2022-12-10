import { formatDate } from '../../../../shared/helpers';
import freetogame from '../../../../services/api/freetogame';

import { Response, ResponseRaw, Params } from './types';
import {
  parseMinimumSystemRequirements,
  parseScreenshots,
} from '../../helpers/parse';

const parseResponse = (responseRaw: ResponseRaw): Response => {
  const parsedScreenshots = parseScreenshots(responseRaw.screenshots);
  const parsedMinimumSystemRequirements = parseMinimumSystemRequirements(
    responseRaw.minimum_system_requirements,
  );

  const response = {
    id: responseRaw.id,
    title: responseRaw.title,
    thumbnail: responseRaw.thumbnail,
    status: responseRaw.status,
    shortDescription: responseRaw.short_description,
    description: responseRaw.description,
    gameUrl: responseRaw.game_url,
    genre: responseRaw.genre,
    platform: responseRaw.platform,
    publisher: responseRaw.publisher,
    developer: responseRaw.developer,
    freetogameProfileUrl: responseRaw.freetogame_profile_url,

    releaseDateRaw: responseRaw.release_date,
    releaseDate: formatDate({ value: responseRaw.release_date }),

    screenshots: parsedScreenshots,
    minimumSystemRequirements: parsedMinimumSystemRequirements,
  } as Response;

  return response;
};

export const requestRaw = async (params?: Params): Promise<ResponseRaw> => {
  // const response = await freetogame.get('/games', {
  //   // params: { page: paramßs?.page },
  // });

  // return response.data;

  return {
    id: 452,
    title: 'Call Of Duty: Warzone',
    thumbnail: 'https://www.freetogame.com/g/452/thumbnail.jpg',
    status: 'Live',
    short_description:
      'A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.',
    description:
      'Call of Duty: Warzone is both a standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare. Warzone features two modes — the general 150-player battle royle, and “Plunder”. The latter mode is described as a “race to deposit the most Cash”. In both modes players can both earn and loot cash to be used when purchasing in-match equipment, field upgrades, and more. Both cash and XP are earned in a variety of ways, including completing contracts.\r\n\r\nAn interesting feature of the game is one that allows players who have been killed in a match to rejoin it by winning a 1v1 match against other felled players in the Gulag.\r\n\r\nOf course, being a battle royale, the game does offer a battle pass. The pass offers players new weapons, playable characters, Call of Duty points, blueprints, and more. Players can also earn plenty of new items by completing objectives offered with the pass.',
    game_url: 'https://www.freetogame.com/open/call-of-duty-warzone',
    genre: 'Shooter',
    platform: 'Windows',
    publisher: 'Activision',
    developer: 'Infinity Ward',
    release_date: '2020-03-10',
    freetogame_profile_url: 'https://www.freetogame.com/call-of-duty-warzone',
    minimum_system_requirements: {
      os: 'Windows 7 64-Bit (SP1) or Windows 10 64-Bit',
      processor: 'Intel Core i3-4340 or AMD FX-6300',
      memory: '8GB RAM',
      graphics: 'NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950',
      storage: '175GB HD space',
    },
    screenshots: [
      {
        id: 1124,
        image: 'https://www.freetogame.com/g/452/Call-of-Duty-Warzone-1.jpg',
      },
      {
        id: 1125,
        image: 'https://www.freetogame.com/g/452/Call-of-Duty-Warzone-2.jpg',
      },
      {
        id: 1126,
        image: 'https://www.freetogame.com/g/452/Call-of-Duty-Warzone-3.jpg',
      },
      {
        id: 1127,
        image: 'https://www.freetogame.com/g/452/Call-of-Duty-Warzone-4.jpg',
      },
    ],
  };
};

const request = async (params?: Params): Promise<Response> => {
  const response = await requestRaw(params);

  return parseResponse(response);
};

export default request;
