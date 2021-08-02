import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import * as styles from './Header.module.css';

export type HeaderProps = HTMLAttributes<HTMLDivElement>;

const Header: React.FC<HeaderProps> = (props) => {
  const { className, ...otherProps } = props;

  return <header className={classNames(className, styles.header)} role="banner" {...otherProps} />;
};

export default Header;
