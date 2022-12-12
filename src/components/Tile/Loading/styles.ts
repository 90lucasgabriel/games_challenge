import styled from 'styled-components';

import Theme from '../../../shared/styles/Theme';
import { Skeleton, SkeletonLabel25 } from '../../Skeleton';
import {
  InlineItemContainer as InlineItemContainerDefault,
  InlineItemTitle as InlineItemTitleDefault,
  InlineItemLabel as InlineItemLabelDefault,
  ItemContainer as ItemContainerDefault,
  ItemTitle as ItemTitleDefault,
  ItemLabel as ItemLabelDefault,
} from '../styles';

export const InlineItemContainer = styled(InlineItemContainerDefault)`
  justify-content: space-between;
  height: 47px;
`;

export const InlineItemTitle = styled(SkeletonLabel25)``;

export const InlineItemLabel = styled(SkeletonLabel25)``;

export const ItemContainer = styled(ItemContainerDefault)``;

export const ItemTitle = styled(SkeletonLabel25)``;

export const ItemLabel = styled(SkeletonLabel25)``;
