import React from 'react';

import Theme from '../../../../../shared/styles/Theme';
import { SizedBox } from '../../../../../components';
import {
  SummaryBoxContainer,
  FeaturedImageContainer,
  FeaturedImage,
  SummaryContainer,
  NameContainer,
  NameLabel,
  PublisherLabel,
  ButtonContainer,
  ButtonLink,
  SubtitleContainer,
  ShortDescriptionLabel100,
  ShortDescriptionLabel50,
} from './styles';

const GameSummaryLoading = (): JSX.Element => {
  return (
    <SummaryBoxContainer>
      <SummaryContainer>
        <NameContainer>
          <NameLabel />
        </NameContainer>

        <SizedBox height={Theme.Size.XSmall} />
        <SubtitleContainer>
          <PublisherLabel />
        </SubtitleContainer>

        <SizedBox height={Theme.Size.XSmall} />

        <ShortDescriptionLabel100 />
        <SizedBox height={Theme.Size.Min} />
        <ShortDescriptionLabel50 />

        <SizedBox height={Theme.Size.Default} />

        <ButtonContainer>
          <ButtonLink />
        </ButtonContainer>
      </SummaryContainer>

      <FeaturedImageContainer>
        <FeaturedImage />
      </FeaturedImageContainer>
    </SummaryBoxContainer>
  );
};

export default GameSummaryLoading;
