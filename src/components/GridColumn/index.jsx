import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

const GridColumn = (props) => {
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
        [styles[`grid__columnColumnSpan${columnSpan}`]]: columnSpan,
        [styles[`grid__columnColumnStart${columnStart}`]]: columnStart,
        [styles[`grid__columnColumnAlign${capitalize(columnAlign)}`]]: columnAlign,
        [styles[`grid__columnRowAlign${capitalize(rowAlign)}`]]: rowAlign,
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
};

GridColumn.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columnAlign: PropTypes.string,
  columnSpan: PropTypes.number,
  columnStart: PropTypes.number,
  rowAlign: PropTypes.string,
};

GridColumn.defaultProps = {
  children: null,
  className: '',
  columnAlign: '',
  columnSpan: 1,
  columnStart: 1,
  rowAlign: '',
};

export default GridColumn;
