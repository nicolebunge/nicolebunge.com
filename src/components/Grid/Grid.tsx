import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './Grid.module.css';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Grid(props: GridProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <div className={clsx(className, styles.grid)} {...otherProps} />;
}

export default Grid;
