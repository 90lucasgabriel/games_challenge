import React from 'react';

import PillProps from './types';
import { Label } from './styles';

const Pill = ({ children }: PillProps): JSX.Element => {
  return <Label>{children}</Label>;
};

export default Pill;
