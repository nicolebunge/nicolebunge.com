import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Header extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    className: '',
  };

  render() {
    const { children, className, ...otherProps } = this.props;

    return (
      <header className={classNames(className, styles.header)} role="banner" {...otherProps}>
        {children}
      </header>
    );
  }
}

export default Header;
