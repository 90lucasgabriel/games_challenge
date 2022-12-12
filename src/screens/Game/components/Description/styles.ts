import styled from 'styled-components';

import Theme from '../../../../shared/styles/Theme';
import { BoxContainer } from '../../../../components';

export const Container = styled(BoxContainer)`
  display: flex;
  flex: 1;
  padding: ${Theme.Size.XLarge} ${Theme.Size.Default} ${Theme.Size.Large}
    ${Theme.Size.Default};
`;

export const Label = styled.p``;
