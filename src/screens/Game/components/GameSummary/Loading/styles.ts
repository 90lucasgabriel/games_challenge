import styled from 'styled-components';

import Theme from '../../../../../shared/styles/Theme';
import {
  SkeletonLabel25,
  SkeletonLabel50,
  SkeletonLabel100,
  Skeleton,
} from '../../../../../components/Skeleton';
import {
  SummaryBoxContainer as SummaryBoxContainerDefault,
  FeaturedImageContainer as FeaturedImageContainerDefault,
  SummaryContainer as SummaryContainerDefault,
  NameContainer as NameContainerDefault,
  ButtonContainer as ButtonContainerDefault,
  SubtitleContainer as SubtitleContainerDefault,
} from '../styles';

export const SummaryBoxContainer = styled(SummaryBoxContainerDefault)``;

export const FeaturedImageContainer = styled(FeaturedImageContainerDefault)`
  display: flex;
  flex: 1;
  height: 359px;

  @media only screen and (max-width: ${Theme.ScreenSize.sm}) {
    flex: none;
  }
`;

export const FeaturedImage = styled(Skeleton)`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

export const SummaryContainer = styled(SummaryContainerDefault)``;

export const NameContainer = styled(NameContainerDefault)`
  height: 42px;
`;

export const NameLabel = styled(SkeletonLabel50)`
  height: 36px;
`;

export const PublisherLabel = styled(SkeletonLabel25)``;

export const ButtonContainer = styled(ButtonContainerDefault)`
  height: 50px;
`;

export const ButtonLink = styled(Skeleton)`
  width: 100%;
  height: 100%;

  @media only screen and (min-width: ${Theme.ScreenSize.sm}) {
    width: 30%;
  }
`;

export const SubtitleContainer = styled(SubtitleContainerDefault)`
  height: 32px;
`;

export const ShortDescriptionLabel100 = styled(SkeletonLabel100)``;

export const ShortDescriptionLabel50 = styled(SkeletonLabel50)``;
