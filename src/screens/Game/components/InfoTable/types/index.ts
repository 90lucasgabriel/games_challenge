import { Game } from 'domains/Game/types';

type InfoTableProps = {
  game: Game;
  onClick(value: string): void;
  isLoading?: boolean;
};

export default InfoTableProps;
