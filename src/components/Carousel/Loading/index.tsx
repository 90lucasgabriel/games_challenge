import React from 'react';

import { Container, BackdropSkeleton } from './styles';

const CarouselLoading = (): JSX.Element => {
  return (
    <Container>
      <BackdropSkeleton />
    </Container>
  );
};

export default CarouselLoading;
