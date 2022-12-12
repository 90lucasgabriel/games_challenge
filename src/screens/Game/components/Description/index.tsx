import React from 'react';

import DescriptionProps from './types';
import DescriptionLoading from './Loading';
import { Container, Label } from './styles';

const Description = ({ game, isLoading }: DescriptionProps): JSX.Element => {
  if (isLoading) {
    return <DescriptionLoading />;
  }

  return (
    <Container>
      <Label>{game?.description}</Label>
    </Container>
  );
};

export default Description;
