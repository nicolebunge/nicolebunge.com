import classNames from 'classnames';
import React from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import * as styles from './Column.module.css';

type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Start = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type SpanClass = `columnSpan${Span}`;
type StartClass = `columnStart${Start}`;

export interface ColumnProps extends AlignmentProps {
  span?: Span;
  start?: Start;
}

function Column(props: ColumnProps): JSX.Element {
  const { className, span, start, ...otherProps } = props;

  return (
    <Alignment
      className={classNames(className, {
        [styles[`columnSpan${span}` as SpanClass]]: span,
        [styles[`columnStart${start}` as StartClass]]: start,
      })}
      {...otherProps}
    />
  );
}

export default Column;
