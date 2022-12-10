import { MinimumSystemRequirements, MinimumSystemRequirementsRaw } from "domains/Game/types/MinimumSystemRequirements";
import { Screenshot, ScreenshotRaw } from "domains/Game/types/Screenshot";

type Game = {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  shortDescription: string;
  description: string;
  gameUrl: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  freetogameProfileUrl: string;
  minimumSystemRequirements: MinimumSystemRequirements;
  screenshots: Screenshot[];

  releaseDate: string;
  releaseDateRaw: string;
};

type GameRaw = {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: MinimumSystemRequirementsRaw;
  screenshots: ScreenshotRaw[];
};

export type { Game, GameRaw };
