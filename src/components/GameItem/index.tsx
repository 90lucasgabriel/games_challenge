import React from 'react';

import Theme from '../../shared/styles/Theme';
import GameItemProps from './types';

import { Pill, SizedBox } from '..';
import {
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
  );
};

export default GameItem;
