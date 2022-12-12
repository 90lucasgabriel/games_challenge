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

const Tile = ({
  title,
  description,
  inline,
  onClick,
}: TileProps): JSX.Element => {
  if (inline) {
    return (
      <InlineItemContainer>
        <InlineItemTitle>{title}</InlineItemTitle>
        <InlineItemLabel onClick={onClick}>{description}</InlineItemLabel>
      </InlineItemContainer>
    );
  }

  return (
    <ItemContainer>
      <ItemTitle>{title}</ItemTitle>
      <ItemLabel onClick={onClick}>{description}</ItemLabel>
    </ItemContainer>
  );
};

export default Tile;
