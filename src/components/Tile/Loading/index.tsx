import React from 'react';

import TileLoadingProps from './types';
import {
  InlineItemContainer,
  InlineItemTitle,
  InlineItemLabel,
  ItemContainer,
  ItemTitle,
  ItemLabel,
} from './styles';

const TileLoading = ({ inline }: TileLoadingProps): JSX.Element => {
  if (inline) {
    return (
      <InlineItemContainer>
        <InlineItemTitle />
        <InlineItemLabel />
      </InlineItemContainer>
    );
  }

  return (
    <ItemContainer>
      <ItemTitle />
      <ItemLabel />
    </ItemContainer>
  );
};

export default TileLoading;
