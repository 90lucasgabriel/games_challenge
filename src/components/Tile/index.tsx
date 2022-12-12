import React from 'react';

import TileLoading from './Loading';
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
  isLoading,
}: TileProps): JSX.Element => {
  if (isLoading) {
    return <TileLoading inline={inline} />;
  }

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
