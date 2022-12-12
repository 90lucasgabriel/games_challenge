import React from 'react';

import { Container, Label100, Label75, Label25 } from './styles';

const DescriptionLoading = (): JSX.Element => {
  return (
    <Container>
      <Label100 />
      <Label75 />
      <Label100 />
      <Label75 />
      <Label25 />
    </Container>
  );
};

export default DescriptionLoading;
