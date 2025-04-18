import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';
import { grid } from './Grid.module.css';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Grid(props: GridProps) {
  const { className, ...otherProps } = props;

  return <div className={clsx(className, grid)} {...otherProps} />;
}

export type { GridProps };
export default Grid;
