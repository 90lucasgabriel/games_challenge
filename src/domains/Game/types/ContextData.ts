import {
  Params as GameParams,
  Response as GameResponse,
} from '../api/getGame/types';
import { Response as GameListResponse } from '../api/getList/types';

export default interface ContextData {
  getGame(params: GameParams): Promise<GameResponse>;
  getGameList(): Promise<GameListResponse>;
}
