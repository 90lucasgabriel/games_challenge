import React from 'react';

import InfoTableProps from './types';

import { Tile } from '../../../../components';
import { Container } from './styles';

const InfoTable = ({
  game,
  onClick,
  isLoading,
}: InfoTableProps): JSX.Element => {
  return (
    <Container>
      <Tile
        title="Developer"
        description={game?.developer}
        onClick={() => onClick(game?.developer)}
        inline
        isLoading={isLoading}
      />
      <Tile
        title="Publisher"
        description={game?.publisher}
        onClick={() => onClick(game?.publisher)}
        inline
        isLoading={isLoading}
      />
      <Tile
        title="Release Date"
        description={game?.releaseDate}
        inline
        isLoading={isLoading}
      />
      <Tile
        title="Genre"
        description={game?.genre}
        onClick={() => onClick(game?.genre)}
        inline
        isLoading={isLoading}
      />
      <Tile
        title="Platform"
        description={game?.platform}
        onClick={() => onClick(game?.platform)}
        inline
        isLoading={isLoading}
      />
    </Container>
  );
};

export default InfoTable;
