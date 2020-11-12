import classNames from 'classnames';
import React from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import styles from './style.module.css';

type spanClass =
  | 'span1'
  | 'span2'
  | 'span3'
  | 'span4'
  | 'span5'
  | 'span6'
  | 'span7'
  | 'span8'
  | 'span9'
  | 'span10'
  | 'span11'
  | 'span12';

type startClass =
  | 'start1'
  | 'start2'
  | 'start3'
  | 'start4'
  | 'start5'
  | 'start6'
  | 'start7'
  | 'start8'
  | 'start9'
  | 'start10'
  | 'start11'
  | 'start12';

export interface ColumnProps extends AlignmentProps {
  span?: number;
  start?: number;
}

const Column: React.FC<ColumnProps> = (props) => {
  const { className, span, start, ...otherProps } = props;

  return (
    <Alignment
      className={classNames(className, styles.column, {
        [styles[`columnSpan${span}` as spanClass]]: span,
        [styles[`columnStart${start}` as startClass]]: start,
      })}
      {...otherProps}
    />
  );
};

Column.defaultProps = {
  span: 1,
  start: 1,
};

export default Column;
