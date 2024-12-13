import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';
import { footer } from './Footer.module.css';

interface FooterProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

function Footer(props: FooterProps) {
  const { className, ...otherProps } = props;

  return <footer className={clsx(className, footer)} role="contentinfo" {...otherProps} />;
}

export type { FooterProps };
export default Footer;
