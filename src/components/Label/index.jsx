import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Label extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    htmlFor: PropTypes.string.isRequired,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children, htmlFor } = this.props;

    return (
      <label
        className={styles.label}
        htmlFor={htmlFor}
      >
        {children}
      </label>
    );
  }
}

export default Label;
