import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class GridRow extends PureComponent {
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
      <div className={classNames(className, styles.grid__row)} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default GridRow;
