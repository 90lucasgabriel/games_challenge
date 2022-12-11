import styled from 'styled-components';
import SizedBoxProps from './types';

export const Container = styled.div<SizedBoxProps>`
  width: ${props => props.width ?? 0};
  height: ${props => props.height ?? 0};
`;
