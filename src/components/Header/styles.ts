import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Theme from '../../shared/styles/Theme';

export const Container = styled.div`
  padding: ${Theme.Size.Default};
  top: 0;
  left: 0;
  right: 0;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  cursor: pointer;

  svg {
    height: ${Theme.Size.Large};
    width: ${Theme.Size.Large};
    color: ${Theme.Color.Primary};
  }
`;

export const MenuContainer = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${Theme.ScreenSize.sm}) {
    display: flex;
  }
`;

export const MenuItem = styled(Link)`
  display: flex;
  margin-left: ${Theme.Size.XLarge};
  justify-content: center;
`;

export const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  svg {
    height: ${Theme.Size.Medium};
    width: ${Theme.Size.Medium};
    color: ${Theme.Color.Primary};
  }
`;
