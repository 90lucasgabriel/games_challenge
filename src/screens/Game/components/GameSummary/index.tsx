import React from 'react';

import GameSummaryProps from './types';

import Theme from '../../../../shared/styles/Theme';
import GameSummaryLoading from './Loading';
import { Pill, SizedBox, ButtonLink } from '../../../../components';
import {
  SummaryBoxContainer,
  FeaturedImageContainer,
  FeaturedImage,
  SummaryContainer,
  NameContainer,
  NameLabel,
  PublisherLabel,
  ButtonContainer,
  SubtitleContainer,
  ShortDescriptionLabel,
} from './styles';

const GameSummary = ({ game, isLoading }: GameSummaryProps): JSX.Element => {
  if (isLoading) {
    return <GameSummaryLoading />;
  }

  return (
    <SummaryBoxContainer>
      <SummaryContainer>
        <NameContainer>
          <NameLabel>{game?.title}</NameLabel>
        </NameContainer>

        <SizedBox height={Theme.Size.XSmall} />
        <SubtitleContainer>
          <PublisherLabel>{game.publisher}</PublisherLabel>
          <Pill>{game.genre}</Pill>
        </SubtitleContainer>

        <SizedBox height={Theme.Size.XSmall} />

        <ShortDescriptionLabel>{game?.shortDescription}</ShortDescriptionLabel>

        <SizedBox height={Theme.Size.Default} />

        <ButtonContainer>
          <ButtonLink
            title="PLAY GAME"
            to={game?.freetogameProfileUrl}
            target="_blank"
            native
          />
        </ButtonContainer>
      </SummaryContainer>

      <FeaturedImageContainer>
        <FeaturedImage src={game?.thumbnail} />
      </FeaturedImageContainer>
    </SummaryBoxContainer>
  );
};

export default GameSummary;
