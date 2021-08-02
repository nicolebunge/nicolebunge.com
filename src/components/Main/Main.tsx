import classNames from 'classnames';
import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './Main.module.css';

export interface MainProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Main(props: MainProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <main className={classNames(className, styles.main)} role="main" {...otherProps} />;
}

export default Main;
