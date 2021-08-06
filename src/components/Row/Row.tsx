import clsx from 'clsx';
import React, { ReactNode } from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import * as styles from './Row.module.css';

export interface RowProps extends AlignmentProps {
  children: ReactNode;
}

function Row(props: RowProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <Alignment className={clsx(className, styles.row)} {...otherProps} />;
}

export default Row;
