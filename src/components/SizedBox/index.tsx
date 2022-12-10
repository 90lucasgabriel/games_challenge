import React from 'react';

import SizedBoxProps from './types';
import { Container } from './styles';

const SizedBox = ({ width, height }: SizedBoxProps): JSX.Element => {
  return <Container width={width} height={height} />;
};

export default SizedBox;
