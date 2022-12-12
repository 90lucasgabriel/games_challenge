import styled from 'styled-components';

import Theme from '../../shared/styles/Theme';

export const BoxContainer = styled.div`
  margin: 0 auto;
  max-width: ${Theme.ScreenSize.lg};
`;

export const RowBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: ${Theme.ScreenSize.lg};
  align-items: center;
  justify-content: space-between;
`;
