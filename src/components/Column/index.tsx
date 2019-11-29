import classNames from 'classnames';
import React from 'react';
import styles from './style.module.css';

function capitalize(string = ''): string {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

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

type ColumnAlignClass = 'columnAlignCenter' | 'columnAlignEnd' | 'columnAlignStart';

type RowAlignClass = 'rowAlignCenter' | 'rowAlignEnd' | 'rowAlignStart';

export interface ColumnProps {
  className?: string;
  columnAlign?: string;
  span?: number;
  start?: number;
  rowAlign?: string;
}

console.log({ styles });

const Column: React.FC<ColumnProps> = (props) => {
  const { children, className, columnAlign, span, start, rowAlign, ...otherProps } = props;

  return (
    <div
      className={classNames(className, styles.column, {
        [styles[`columnSpan${span}` as spanClass]]: span,
        [styles[`columnStart${start}` as startClass]]: start,
        [styles[`columnAlign${capitalize(columnAlign)}` as ColumnAlignClass]]: columnAlign,
        [styles[`columnRowAlign${capitalize(rowAlign)}` as RowAlignClass]]: rowAlign,
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
};

Column.defaultProps = {
  span: 1,
  start: 1,
};

export default Column;
