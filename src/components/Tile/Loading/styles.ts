import styled from 'styled-components';

import { SkeletonLabel25, SkeletonLabel50 } from '../../Skeleton';
import {
  InlineItemContainer as InlineItemContainerDefault,
  ItemContainer as ItemContainerDefault,
} from '../styles';

export const InlineItemContainer = styled(InlineItemContainerDefault)`
  justify-content: space-between;
  height: 47px;
`;

export const InlineItemTitle = styled(SkeletonLabel25)``;

export const InlineItemLabel = styled(SkeletonLabel25)``;

export const ItemContainer = styled(ItemContainerDefault)`
  height: 49px;
`;

export const ItemTitle = styled(SkeletonLabel25)`
  margin-bottom: 8px;
`;

export const ItemLabel = styled(SkeletonLabel50)``;
