import React from 'react';

import TileProps from './types';
import {
  InlineItemContainer,
  InlineItemTitle,
  InlineItemLabel,
  ItemContainer,
  ItemTitle,
  ItemLabel,
} from './styles';

const Tile = ({ title, description, inline }: TileProps): JSX.Element => {
  if (inline) {
    return (
      <InlineItemContainer>
        <InlineItemTitle>{title}</InlineItemTitle>
        <InlineItemLabel>{description}</InlineItemLabel>
      </InlineItemContainer>
    );
  }

  return (
    <ItemContainer>
      <ItemTitle>{title}</ItemTitle>
      <ItemLabel>{description}</ItemLabel>
    </ItemContainer>
  );
};

export default Tile;
