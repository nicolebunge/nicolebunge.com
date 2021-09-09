import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode } from 'react';
import { header } from './Header.module.css';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Header(props: HeaderProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <header className={clsx(className, header)} role="banner" {...otherProps} />;
}

export default Header;
