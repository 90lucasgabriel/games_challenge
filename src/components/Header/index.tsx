import React from 'react';
import { FaGamepad, FaUserCircle } from 'react-icons/fa';

import Theme from '../../shared/styles/Theme';
import { RowBoxContainer, SearchInput, SizedBox, SortBy } from '..';
import {
  Container,
  LeftContainer,
  LogoContainer,
  MenuContainer,
  MenuItem,
  MenuIcon,
} from './styles';

const Header = (): JSX.Element => {
  return (
    <Container>
      <RowBoxContainer>
        <LeftContainer>
          <LogoContainer to="/">
            <FaGamepad />
          </LogoContainer>
          <SizedBox width={Theme.Size.Large} />
          <SearchInput />
          <SortBy />
        </LeftContainer>

        <MenuContainer>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/">Profile</MenuItem>
          <MenuItem to="/">Explore</MenuItem>
          <SizedBox width={Theme.Size.Large} />
          <MenuIcon>
            <FaUserCircle />
          </MenuIcon>
        </MenuContainer>
      </RowBoxContainer>
    </Container>
  );
};

export default Header;
