import classNames from 'classnames';
import React from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import * as styles from './style.module.css';

export type RowProps = AlignmentProps;

const Row: React.FC<RowProps> = (props) => {
  const { className, ...otherProps } = props;

  return <Alignment className={classNames(className, styles.row)} {...otherProps} />;
};

export default Row;
