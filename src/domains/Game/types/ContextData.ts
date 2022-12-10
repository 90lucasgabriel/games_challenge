import { Response as GameResponse } from '../api/getGame/types';
import { Response as GameListResponse } from '../api/getList/types';

export default interface ContextData {
  getGame(): Promise<GameResponse>;
  getGameList(): Promise<GameListResponse>;
}
