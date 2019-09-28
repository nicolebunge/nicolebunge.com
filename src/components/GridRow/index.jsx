import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const GridRow = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <div className={classNames(className, styles.grid__row)} {...otherProps}>
      {children}
    </div>
  );
};

GridRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

GridRow.defaultProps = {
  children: null,
  className: '',
};

export default GridRow;
