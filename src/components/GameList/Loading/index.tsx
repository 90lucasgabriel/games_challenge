import React from 'react';

import { Container } from './styles';
import { GameItemLoading } from '../..';

const GameListLoading = (): JSX.Element => {
  const items = new Array(10).fill([]);

  return (
    <Container>
      {items.map((_, index) => (
        <GameItemLoading key={`GameItemLoading${index}`} />
      ))}
    </Container>
  );
};

export default GameListLoading;
