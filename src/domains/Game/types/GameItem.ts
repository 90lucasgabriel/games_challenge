type GameItem = {
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

type GameItemRaw = {
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

export type { GameItem, GameItemRaw };
