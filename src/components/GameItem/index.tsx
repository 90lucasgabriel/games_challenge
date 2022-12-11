import React from 'react';

import Theme from '../../shared/styles/Theme';
import Route from '../../routes/enums';
import GameItemProps from './types';

import { Pill, SizedBox } from '..';
import {
  Touchable,
  Container,
  PosterContainer,
  PosterImage,
  InfoContainer,
  NameContainer,
  NameLabel,
  SubtitleContainer,
  GenreContainer,
  PublisherLabel,
  DescriptionLabel,
} from './styles';

const GameItem = ({ data }: GameItemProps): JSX.Element | null => {
  if (!data) {
    return null;
  }

  return (
    <Touchable to={`${Route.GAME}/${data.id}`}>
      <Container>
        <PosterContainer>
          <PosterImage src={data.thumbnail} />
        </PosterContainer>

        <InfoContainer>
          <NameContainer>
            <NameLabel>{data.title}</NameLabel>
          </NameContainer>

          <SizedBox height={Theme.Size.XSmall} />

          <SubtitleContainer>
            <PublisherLabel>{data.publisher}</PublisherLabel>
            <GenreContainer>
              <Pill>{data.genre}</Pill>
            </GenreContainer>
          </SubtitleContainer>

          <SizedBox height={Theme.Size.Small} />

          <DescriptionLabel>{data.shortDescription}</DescriptionLabel>
        </InfoContainer>
      </Container>
    </Touchable>
  );
};

export default GameItem;
