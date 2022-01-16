/* eslint-disable jsx-a11y/anchor-has-content */

import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactNode } from 'react';
import { isExternalUrl } from '../../utils/string';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  activeClassName?: string;
  children: ReactNode;
  external?: boolean;
  to: string;
}

function Link(props: LinkProps): JSX.Element {
  const { to, external = false, ...otherProps } = props;

  if (external || isExternalUrl(to)) {
    return <OutboundLink href={to} target="_blank" rel="noopener noreferrer" {...otherProps} />;
  }

  return <GatsbyLink to={to} {...otherProps} />;
}

export default Link;
