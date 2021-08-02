import classNames from 'classnames';
import React from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import * as styles from './Column.module.css';

type spanClass =
  | 'columnSpan1'
  | 'columnSpan2'
  | 'columnSpan3'
  | 'columnSpan4'
  | 'columnSpan5'
  | 'columnSpan6'
  | 'columnSpan7'
  | 'columnSpan8'
  | 'columnSpan9'
  | 'columnSpan10'
  | 'columnSpan11'
  | 'columnSpan12';

type startClass =
  | 'columnStart1'
  | 'columnStart2'
  | 'columnStart3'
  | 'columnStart4'
  | 'columnStart5'
  | 'columnStart6'
  | 'columnStart7'
  | 'columnStart8'
  | 'columnStart9'
  | 'columnStart10'
  | 'columnStart11'
  | 'columnStart12';

export interface ColumnProps extends AlignmentProps {
  span?: number;
  start?: number;
}

function Column(props: ColumnProps): JSX.Element {
  const { className, span, start, ...otherProps } = props;

  return (
    <Alignment
      className={classNames(className, {
        [styles[`columnSpan${span}` as spanClass]]: span,
        [styles[`columnStart${start}` as startClass]]: start,
      })}
      {...otherProps}
    />
  );
}

Column.defaultProps = {
  span: 1,
  start: 1,
};

export default Column;
