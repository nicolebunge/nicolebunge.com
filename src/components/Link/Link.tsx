import NextLink from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import { isExternalUrl } from '../../utils/string';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  activeClassName?: string;
  children: ReactNode;
  external?: boolean;
  to: string;
}

/**
 * @link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links
 */

function Link(props: LinkProps) {
  const { to, external = false, ...otherProps } = props;

  if (external || isExternalUrl(to)) {
    return <a href={to} target="_blank" rel="noopener noreferrer" {...otherProps} />;
  }

  return <NextLink href={to} {...otherProps} />;
}

export type { LinkProps };
export default Link;
