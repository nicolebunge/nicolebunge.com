/* eslint-disable jsx-a11y/anchor-has-content */

import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactNode } from 'react';
import { isExternalUrl } from '../../utils/string';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  activeClassName?: string;
  children: ReactNode;
  external?: boolean;
  to: string;
}

/**
 * @link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links
 */

function Link(props: LinkProps): JSX.Element {
  const { to, external = false, ...otherProps } = props;

  if (external || isExternalUrl(to)) {
    return <OutboundLink href={to} target="_blank" rel="noopener noreferrer" {...otherProps} />;
  }

  return <GatsbyLink to={to} {...otherProps} />;
}

export type { LinkProps };
export default Link;
