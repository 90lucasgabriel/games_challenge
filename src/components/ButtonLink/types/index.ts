import { HTMLAttributeAnchorTarget } from 'react';
import { LinkProps } from 'react-router-dom';

type ButtonLinkPropsLocal = {
  title: string;
  native?: boolean;
};

type ButtonLinkProps = ButtonLinkPropsLocal & LinkProps;

export default ButtonLinkProps;
