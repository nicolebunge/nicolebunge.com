import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import * as styles from './Grid.module.css';

export type GridProps = HTMLAttributes<HTMLDivElement>;

const Grid: React.FC<GridProps> = (props) => {
  const { className, ...otherProps } = props;

  return <div className={classNames(className, styles.grid)} {...otherProps} />;
};

export default Grid;
