import classNames from 'classnames';
import React from 'react';
import styles from './style.module.css';

function capitalize(string = ''): string {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

type GridColumnSpanClass =
  | 'grid__columnColumnSpan1'
  | 'grid__columnColumnSpan2'
  | 'grid__columnColumnSpan3'
  | 'grid__columnColumnSpan4'
  | 'grid__columnColumnSpan5'
  | 'grid__columnColumnSpan6'
  | 'grid__columnColumnSpan7'
  | 'grid__columnColumnSpan8'
  | 'grid__columnColumnSpan9'
  | 'grid__columnColumnSpan10'
  | 'grid__columnColumnSpan11'
  | 'grid__columnColumnSpan12';

type GridColumnStartClass =
  | 'grid__columnColumnStart1'
  | 'grid__columnColumnStart2'
  | 'grid__columnColumnStart3'
  | 'grid__columnColumnStart4'
  | 'grid__columnColumnStart5'
  | 'grid__columnColumnStart6'
  | 'grid__columnColumnStart7'
  | 'grid__columnColumnStart8'
  | 'grid__columnColumnStart9'
  | 'grid__columnColumnStart10'
  | 'grid__columnColumnStart11'
  | 'grid__columnColumnStart12';

type GridColumnAlignClass =
  | 'grid__columnColumnAlignCenter'
  | 'grid__columnColumnAlignEnd'
  | 'grid__columnColumnAlignStart';

type GridRowAlignClass =
  | 'grid__columnRowAlignCenter'
  | 'grid__columnRowAlignEnd'
  | 'grid__columnRowAlignStart';

export interface GridColumnProps {
  className?: string;
  columnAlign?: string;
  columnSpan?: number;
  columnStart?: number;
  rowAlign?: string;
}

const GridColumn: React.FC<GridColumnProps> = (props) => {
  const {
    children,
    className,
    columnAlign,
    columnSpan,
    columnStart,
    rowAlign,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(className, styles.grid__column, {
        [styles[`grid__columnColumnSpan${columnSpan}` as GridColumnSpanClass]]: columnSpan,
        [styles[`grid__columnColumnStart${columnStart}` as GridColumnStartClass]]: columnStart,
        [styles[
          `grid__columnColumnAlign${capitalize(columnAlign)}` as GridColumnAlignClass
        ]]: columnAlign,
        [styles[`grid__columnRowAlign${capitalize(rowAlign)}` as GridRowAlignClass]]: rowAlign,
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
};

GridColumn.defaultProps = {
  columnSpan: 1,
  columnStart: 1,
};

export default GridColumn;
