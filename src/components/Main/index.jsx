import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Main extends PureComponent {
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
      <main className={classNames(className, styles.main)} role="main" {...otherProps}>
        {children}
      </main>
    );
  }
}

export default Main;
