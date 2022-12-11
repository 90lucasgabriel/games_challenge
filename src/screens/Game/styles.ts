import styled from 'styled-components';

import Theme from '../../shared/styles/Theme';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${Theme.ScreenSize.lg};
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
  z-index: -1;
`;

export const FeaturedImageContainer = styled.div`
  width: ${Theme.PosterWidth.Large};
  height: ${Theme.PosterHeight.Large};
  overflow: hidden;
  border-radius: ${Theme.Size.Default};
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const GameListContainer = styled.div`
  margin: 0 auto;
  max-width: ${Theme.ScreenSize.lg};
`;
