import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Theme from '../../shared/styles/Theme';

export const Container = styled.div`
  padding: ${Theme.Size.Default};
  top: 0;
  left: 0;
  right: 0;
`;

export const LeftContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  svg {
    height: ${Theme.Size.Large};
    width: ${Theme.Size.Large};
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  }
`;
