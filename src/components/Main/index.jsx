import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Main = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <main className={classNames(className, styles.main)} role="main" {...otherProps}>
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  className: '',
};

export default Main;
