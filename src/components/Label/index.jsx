import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Label = (props) => {
  const { children, className, htmlFor, ...otherProps } = props;

  return (
    <label className={classNames(className, styles.label)} htmlFor={htmlFor} {...otherProps}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};

Label.defaultProps = {
  children: null,
  className: '',
};

export default Label;
