type GameList = {
  id: number;
  title: string;
  thumbnail: string;
  shortDescription: string;
  gameUrl: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  freetogameProfileUrl: string;

  releaseDateRaw: string;
  releaseDate: string;
};

type GameListRaw = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export type { GameList, GameListRaw };
