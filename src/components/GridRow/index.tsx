import classNames from 'classnames';
import React from 'react';
import styles from './style.module.css';

export interface GridRowProps {
  className?: string;
}

const GridRow: React.FC<GridRowProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <div className={classNames(className, styles.grid__row)} {...otherProps}>
      {children}
    </div>
  );
};

export default GridRow;
