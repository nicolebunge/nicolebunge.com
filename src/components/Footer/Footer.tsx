import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode } from 'react';
import { footer } from './Footer.module.css';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

function Footer(props: FooterProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <footer className={clsx(className, footer)} role="contentinfo" {...otherProps} />;
}

export default Footer;
