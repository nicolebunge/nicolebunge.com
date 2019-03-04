import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Label extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    htmlFor: PropTypes.string.isRequired,
  };

  static defaultProps = {
    children: null,
    className: '',
  };

  render() {
    const { children, className, htmlFor, ...otherProps } = this.props;

    return (
      <label className={classNames(className, styles.label)} htmlFor={htmlFor} {...otherProps}>
        {children}
      </label>
    );
  }
}

export default Label;
