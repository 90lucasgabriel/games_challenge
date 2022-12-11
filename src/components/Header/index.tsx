import React, { useState } from 'react';

import { RowBoxContainer, SearchInput } from '..';
import { Container, MenuContainer, Label } from './styles';

const Header = (): JSX.Element => {
  const [gameValue, setGameValue] = useState('');

  return (
    <Container>
      <RowBoxContainer>
        <SearchInput />
        <MenuContainer>
          <Label>Home</Label>
          <Label>Explore</Label>
          <Label>Profile</Label>
        </MenuContainer>
      </RowBoxContainer>
    </Container>
  );
};

export default Header;
