import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode } from 'react';
import { main } from './Main.module.css';

export interface MainProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Main(props: MainProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <main className={clsx(className, main)} role="main" {...otherProps} />;
}

export default Main;
