import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children, to } = this.props;

    return (
      <Link
        className={styles.button}
        to={to}
      >
        {children}
      </Link>
    );
  }
}

export default Button;
