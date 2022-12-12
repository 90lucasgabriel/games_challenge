import { Dispatch, SetStateAction } from 'react';

import {
  Params as GameParams,
  Response as GameResponse,
} from '../api/getGame/types';
import { Response as GameListResponse } from '../api/getList/types';

export default interface ContextData {
  isGameLoading: boolean;
  gameList: GameListResponse;
  setGameList: Dispatch<SetStateAction<GameListResponse>>;
  getGame(params: GameParams): Promise<GameResponse | undefined>;
  getGameList(): Promise<GameListResponse | undefined>;
}
