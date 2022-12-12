import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Theme from '../../shared/styles/Theme';

export const Touchable = styled(Link)`
  @media only screen and (max-width: ${Theme.ScreenSize.sm}) {
    width: 100%;
  }
`;

export const NativeLink = styled.a`
  @media only screen and (max-width: ${Theme.ScreenSize.sm}) {
    width: 100%;
  }
`;

export const Container = styled.div`
  justify-content: center;
  padding: ${Theme.Size.Min};
  border: 2px solid ${Theme.Color.WhiteAplhaSelected};
  background: ${Theme.Color.WhiteAplha};
  text-align: center;
  transition: all 0.5s ease;

  &:hover {
    background: ${Theme.Color.WhiteAplhaSelected};
  }
`;

export const Title = styled.p``;
