import React from 'react';

import RequirementsTableProps from './types';

import { Tile } from '../../../../components';
import { Container, Title } from './styles';

const RequirementsTable = ({
  game,
  isLoading,
}: RequirementsTableProps): JSX.Element => {
  return (
    <Container>
      <Title>Minimum System Requirements</Title>
      <Tile
        title="Graphics"
        description={game?.minimumSystemRequirements?.graphics}
        isLoading={isLoading}
      />
      <Tile
        title="Memory"
        description={game?.minimumSystemRequirements?.memory}
        isLoading={isLoading}
      />
      <Tile
        title="OS"
        description={game?.minimumSystemRequirements?.os}
        isLoading={isLoading}
      />
      <Tile
        title="Processor"
        description={game?.minimumSystemRequirements?.processor}
        isLoading={isLoading}
      />
      <Tile
        title="Storage"
        description={game?.minimumSystemRequirements?.storage}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default RequirementsTable;
