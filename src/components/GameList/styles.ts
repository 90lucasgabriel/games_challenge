import styled from 'styled-components';
import Theme from '../../shared/styles/Theme';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-gap: ${Theme.Size.Default};
  grid-template-columns: 1fr;

  @media only screen and (min-width: ${Theme.ScreenSize.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: ${Theme.ScreenSize.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (min-width: ${Theme.ScreenSize.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const GameItemContainer = styled.div``;
