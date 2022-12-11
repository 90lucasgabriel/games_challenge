import styled from 'styled-components';
import Theme from '../../shared/styles/Theme';

export const Container = styled.div`
  border: 2px solid ${Theme.Color.WhiteAplhaSelected};
  padding: ${Theme.Size.XSmall};
  border-radius: ${Theme.Size.Large};
  background: ${Theme.Color.FillAlpha};
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  background: ${Theme.Color.Transparent};
  border: 0;
  color: ${Theme.Color.Text};
  font-size: 16px;
`;
