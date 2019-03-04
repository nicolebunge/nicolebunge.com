import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Footer extends PureComponent {
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
      <footer className={classNames(className, styles.footer)} role="contentinfo" {...otherProps}>
        {children}
      </footer>
    );
  }
}

export default Footer;
