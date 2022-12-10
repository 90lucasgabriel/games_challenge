import React from 'react';

import GameListProps from './types';

import { GameItem } from '..';
import { Container, GameItemContainer } from './styles';

const GameList = ({ data }: GameListProps): JSX.Element | null => {
  if (!data) {
    return null;
  }

  return (
    <Container>
      {data.map(item => {
        return (
          <GameItemContainer key={item.id}>
            <GameItem data={item} />
          </GameItemContainer>
        );
      })}
    </Container>
  );
};

export default GameList;
