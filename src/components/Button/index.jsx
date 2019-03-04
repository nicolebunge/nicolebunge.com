import classNames from 'classnames';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
  };

  static defaultProps = {
    children: null,
    className: '',
  };

  render() {
    const { children, className, to, ...otherProps } = this.props;

    return (
      <Link className={classNames(className, styles.button)} to={to} {...otherProps}>
        {children}
      </Link>
    );
  }
}

export default Button;
