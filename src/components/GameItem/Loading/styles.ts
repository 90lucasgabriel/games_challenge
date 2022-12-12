import styled from 'styled-components';

import {
  Skeleton,
  SkeletonLabel25,
  SkeletonLabel75,
  SkeletonLabel50,
  SkeletonLabel100,
} from '../../Skeleton';
import {
  Container as ContainerDefault,
  PosterContainer as PosterContainerDefault,
  InfoContainer as InfoContainerDefault,
  NameContainer as NameContainerDefault,
  SubtitleContainer as SubtitleContainerDefault,
  GenreContainer as GenreContainerDefault,
} from '../styles';

export const Container = styled(ContainerDefault)`
  * {
    cursor: default;
  }
`;

export const PosterContainer = styled(PosterContainerDefault)`
  border: 0;
`;

export const PosterImage = styled(Skeleton)`
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled(InfoContainerDefault)``;

export const NameContainer = styled(NameContainerDefault)``;

export const NameLabel = styled(SkeletonLabel75)`
  height: 25px;
`;

export const SubtitleContainer = styled(SubtitleContainerDefault)``;

export const GenreContainer = styled(GenreContainerDefault)``;

export const PublisherLabel = styled(SkeletonLabel25)``;

export const DescriptionLabel100 = styled(SkeletonLabel100)`
  margin-bottom: 16px;
`;

export const DescriptionLabel75 = styled(SkeletonLabel75)`
  margin-bottom: 16px;
`;

export const DescriptionLabel50 = styled(SkeletonLabel50)``;
