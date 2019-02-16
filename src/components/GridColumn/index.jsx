import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

class GridColumn extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    columnAlign: PropTypes.string,
    columnSpan: PropTypes.number,
    columnStart: PropTypes.number,
    rowAlign: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    columnAlign: '',
    columnSpan: 1,
    columnStart: 1,
    rowAlign: '',
  };

  render() {
    const { children, columnAlign, columnSpan, columnStart, rowAlign } = this.props;

    return (
      <div
        className={classNames(styles.grid__column, {
          [styles[`grid__columnColumnSpan${columnSpan}`]]: columnSpan,
          [styles[`grid__columnColumnStart${columnStart}`]]: columnStart,
          [styles[`grid__columnColumnAlign${capitalize(columnAlign)}`]]: columnAlign,
          [styles[`grid__columnRowAlign${capitalize(rowAlign)}`]]: rowAlign,
        })}
      >
        {children}
      </div>
    );
  }
}

export default GridColumn;
