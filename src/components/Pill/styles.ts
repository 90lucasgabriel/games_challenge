import styled from 'styled-components';
import Theme from '../../shared/styles/Theme';

export const Label = styled.span`
  padding: 0.6rem;
  border-radius: ${Theme.Size.Default};
  background: ${Theme.Color.Primary};
  font-size: ${Theme.Size.Min};
  color: ${Theme.Color.Fill};
  font-weight: 400;
`;
