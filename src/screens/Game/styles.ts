import styled from 'styled-components';

import Theme from '../../shared/styles/Theme';
import { BoxContainer } from '../../components';

export const Container = styled.div`
  margin: 0 auto;
  padding: ${Theme.Size.XSmall} ${Theme.Size.Zero} ${Theme.Size.Zero}
    ${Theme.Size.Zero};
`;

export const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
  z-index: -1;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -${Theme.Size.XLarge};
  z-index: 1;
  background: ${Theme.Color.BlackAplhaSelected};
`;

export const DescriptionBoxContainer = styled(BoxContainer)`
  display: flex;
  flex: 1;
  padding: ${Theme.Size.XLarge} ${Theme.Size.Default} ${Theme.Size.Large}
    ${Theme.Size.Default};
`;

export const DescriptionLabel = styled.p``;

export const CarouselContainer = styled.div`
  display: flex;
`;

export const InfoBoxContainer = styled(BoxContainer)`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding: ${Theme.Size.Large} ${Theme.Size.Default};

  @media only screen and (min-width: ${Theme.ScreenSize.sm}) {
    flex-direction: row;
  }
`;
