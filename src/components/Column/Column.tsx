import clsx from 'clsx';
import Alignment, { AlignmentProps } from '../Alignment';
import {
  'column--span-1' as columnSpan1,
  'column--span-10' as columnSpan10,
  'column--span-11' as columnSpan11,
  'column--span-12' as columnSpan12,
  'column--span-2' as columnSpan2,
  'column--span-3' as columnSpan3,
  'column--span-4' as columnSpan4,
  'column--span-5' as columnSpan5,
  'column--span-6' as columnSpan6,
  'column--span-7' as columnSpan7,
  'column--span-8' as columnSpan8,
  'column--span-9' as columnSpan9,
  'column--start-1' as columnStart1,
  'column--start-10' as columnStart10,
  'column--start-11' as columnStart11,
  'column--start-12' as columnStart12,
  'column--start-2' as columnStart2,
  'column--start-3' as columnStart3,
  'column--start-4' as columnStart4,
  'column--start-5' as columnStart5,
  'column--start-6' as columnStart6,
  'column--start-7' as columnStart7,
  'column--start-8' as columnStart8,
  'column--start-9' as columnStart9,
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

function Column(props: ColumnProps) {
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
