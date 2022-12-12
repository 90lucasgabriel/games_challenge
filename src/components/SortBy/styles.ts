import styled from 'styled-components';
import Theme from '../../shared/styles/Theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${Theme.Size.Min};
`;

export const Title = styled.h6`
  margin: 0;
  padding: 0;
`;

export const Label = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
`;

export const Icon = styled.div``;
