import clsx from 'clsx';
import React from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import {
  columnSpan1,
  columnSpan10,
  columnSpan11,
  columnSpan12,
  columnSpan2,
  columnSpan3,
  columnSpan4,
  columnSpan5,
  columnSpan6,
  columnSpan7,
  columnSpan8,
  columnSpan9,
  columnStart1,
  columnStart10,
  columnStart11,
  columnStart12,
  columnStart2,
  columnStart3,
  columnStart4,
  columnStart5,
  columnStart6,
  columnStart7,
  columnStart8,
  columnStart9,
} from './Column.module.css';

type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Start = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const spanClassNames = {
  1: columnSpan1,
  2: columnSpan2,
  3: columnSpan3,
  4: columnSpan4,
  5: columnSpan5,
  6: columnSpan6,
  7: columnSpan7,
  8: columnSpan8,
  9: columnSpan9,
  10: columnSpan10,
  11: columnSpan11,
  12: columnSpan12,
};

const startClassNames = {
  1: columnStart1,
  2: columnStart2,
  3: columnStart3,
  4: columnStart4,
  5: columnStart5,
  6: columnStart6,
  7: columnStart7,
  8: columnStart8,
  9: columnStart9,
  10: columnStart10,
  11: columnStart11,
  12: columnStart12,
};

interface ColumnProps extends AlignmentProps {
  span?: Span;
  start?: Start;
}

function Column(props: ColumnProps): JSX.Element {
  const { className, span = 1, start = 1, ...otherProps } = props;

  return (
    <Alignment
      className={clsx(className, {
        [spanClassNames[span]]: span,
        [startClassNames[start]]: start,
      })}
      {...otherProps}
    />
  );
}

export type { ColumnProps };
export default Column;
