import { GameItem } from '../../../domains/Game/types';

type GameListProps = {
  data: GameItem[];
  isLoading?: boolean;
};

export default GameListProps;
