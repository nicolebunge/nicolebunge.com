import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icons from '../Icons';
import styles from './style.module.css';

const Social = (props) => {
  const { className, ...otherProps } = props;

  return (
    <div className={classNames(className, styles.social)} {...otherProps}>
      <Icons />
    </div>
  );
};

Social.propTypes = {
  className: PropTypes.string,
};

Social.defaultProps = {
  className: '',
};

export default Social;
