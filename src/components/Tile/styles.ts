import styled, { css } from 'styled-components';
import Theme from '../../shared/styles/Theme';

export const InlineItemContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-bottom: ${Theme.Size.Small};
  margin-bottom: ${Theme.Size.Small};
  border-bottom: 1px solid ${Theme.Color.WhiteAplha};
`;

export const InlineItemTitle = styled.h5`
  display: flex;
`;

export const InlineItemLabel = styled.p`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;

  ${props =>
    props.onClick &&
    css`
      text-decoration: underline;
      cursor: pointer;
    `}
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${Theme.Size.Medium};
`;

export const ItemTitle = styled.h5`
  display: flex;
`;

export const ItemLabel = styled.p`
  display: flex;
  ${props =>
    props.onClick &&
    css`
      text-decoration: underline;
      cursor: pointer;
    `}
`;
