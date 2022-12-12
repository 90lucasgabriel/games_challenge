import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ClearButtonProps } from './types/StyleProps';
import Theme from '../../shared/styles/Theme';

export const Container = styled.div`
  border: 2px solid ${Theme.Color.WhiteAplhaSelected};
  border-radius: ${Theme.Size.Large};
  background: ${Theme.Color.FillAlpha};
  display: flex;
  align-items: center;
  transition: all 0.5s ease;

  @media only screen and (max-width: ${Theme.ScreenSize.sm}) {
    flex: 1;
  }
`;

export const Input = styled.input`
  margin-left: ${Theme.Size.Default};
  background: ${Theme.Color.Transparent};
  border: 0;
  color: ${Theme.Color.Text};
  font-size: 16px;

  @media only screen and (max-width: ${Theme.ScreenSize.sm}) {
    flex: 1;
  }
`;

export const ClearButton = styled.button<ClearButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Theme.Color.Transparent};
  border: 0;
  padding: ${Theme.Size.Min};

  color: ${props =>
    props.show ? Theme.Color.WhiteAplhaSelected : Theme.Color.Transparent};
`;

export const IconButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: ${Theme.Size.Default};
  padding-top: ${Theme.Size.Min};
  padding-bottom: ${Theme.Size.Min};
`;
