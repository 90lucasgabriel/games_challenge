import React from 'react';

import Theme from '../../../shared/styles/Theme';

import { Pill, SizedBox } from '../..';
import {
  Container,
  PosterContainer,
  PosterImage,
  InfoContainer,
  NameContainer,
  NameLabel,
  SubtitleContainer,
  PublisherLabel,
  DescriptionLabel100,
  DescriptionLabel75,
  DescriptionLabel50,
} from './styles';

const GameItem = (): JSX.Element | null => {
  return (
    <Container>
      <PosterContainer>
        <PosterImage />
      </PosterContainer>

      <InfoContainer>
        <NameContainer>
          <NameLabel />
        </NameContainer>

        <SizedBox height={Theme.Size.Default} />

        <SubtitleContainer>
          <PublisherLabel />
        </SubtitleContainer>

        <SizedBox height={Theme.Size.Default} />

        <DescriptionLabel75 />
        <DescriptionLabel100 />
        <DescriptionLabel50 />
      </InfoContainer>
    </Container>
  );
};

export default GameItem;
