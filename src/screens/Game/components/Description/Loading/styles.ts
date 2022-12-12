import styled from 'styled-components';

import {
  SkeletonLabel25,
  SkeletonLabel75,
  SkeletonLabel100,
} from '../../../../../components/Skeleton';
import { Container as ContainerDefault } from '../styles';

export const Container = styled(ContainerDefault)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label100 = styled(SkeletonLabel100)`
  margin-bottom: 18px;
`;

export const Label75 = styled(SkeletonLabel75)`
  margin-bottom: 18px;
`;

export const Label25 = styled(SkeletonLabel25)`
  margin-bottom: 18px;
`;
