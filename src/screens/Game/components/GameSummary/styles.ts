import styled from 'styled-components';

import Theme from '../../../../shared/styles/Theme';
import { BoxContainer } from '../../../../components';

export const SummaryBoxContainer = styled(BoxContainer)`
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: relative;

  @media only screen and (min-width: ${Theme.ScreenSize.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${Theme.Size.Default};
  min-height: 24rem;
`;

export const PillContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: ${Theme.ScreenSize.sm}) {
    width: 100%;
  }
`;

export const FeaturedImageContainer = styled.div`
  margin: ${Theme.Size.Default};
  align-items: center;
  justify-content: center;
  display: flex;

  @media only screen and (min-width: ${Theme.ScreenSize.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FeaturedImage = styled.img`
  width: ${Theme.PosterWidth.Large};
  height: ${Theme.PosterHeight.Large};
  border-radius: ${Theme.Size.Default};
  box-shadow: 0px 5px 10px 0px ${Theme.Color.BlackAplhaSelected};
  object-fit: cover;
  background: ${Theme.Color.WhiteAplha};
`;

export const GameListContainer = styled.div`
  padding: ${Theme.Size.Default};
  border: 1px solid white;
`;

export const NameContainer = styled.div``;

export const NameLabel = styled.h1``;

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PublisherLabel = styled.p`
  font-size: ${Theme.Size.Default};
`;

export const GenreContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const ShortDescriptionLabel = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 2.4rem;
  max-height: 9.6rem;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
