import React from 'react';

import ButtonLinkProps from './types';
import { Touchable, NativeLink, Container, Title } from './styles';

const ButtonLink = ({
  title,
  to,
  native,
  target,
}: ButtonLinkProps): JSX.Element => {
  const content = (
    <Container>
      <Title>{title}</Title>
    </Container>
  );

  if (!native) {
    return (
      <Touchable to={to} target={target}>
        {content}
      </Touchable>
    );
  }

  return (
    <NativeLink href={to?.toString()} target={target}>
      {content}
    </NativeLink>
  );
};

export default ButtonLink;
