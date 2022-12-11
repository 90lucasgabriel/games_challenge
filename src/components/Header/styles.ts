import styled from 'styled-components';
import Theme from '../../shared/styles/Theme';

export const Container = styled.div`
  padding: ${Theme.Size.Default};
  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;
  /* background: ${Theme.Color.BlackAplhaSelected}; */
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.p`
  margin-left: ${Theme.Size.XLarge};
`;
