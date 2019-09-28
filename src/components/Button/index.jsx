import classNames from 'classnames';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Button = (props) => {
  const { children, className, to, ...otherProps } = props;

  return (
    <Link className={classNames(className, styles.button)} to={to} {...otherProps}>
      {children}
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
};

Button.defaultProps = {
  children: null,
  className: '',
};

export default Button;
