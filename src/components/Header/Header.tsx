import classNames from 'classnames';
import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './Header.module.css';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Header(props: HeaderProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <header className={classNames(className, styles.header)} role="banner" {...otherProps} />;
}

export default Header;
