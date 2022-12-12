import styled from 'styled-components';
import Theme from '../../../../shared/styles/Theme';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${Theme.Size.Default};
  margin: ${Theme.Size.Default};
  border-radius: ${Theme.Size.Default};
  border: 1px solid ${Theme.Color.WhiteAplha};
  background: ${Theme.Color.WhiteAplha};
  box-shadow: 0px 5px 10px 0px ${Theme.Color.BlackAplhaSelected};
`;

export const Title = styled.h4`
  display: flex;
  flex: 1;
`;
