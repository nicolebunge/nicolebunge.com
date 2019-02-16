import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class GridRow extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <div className={styles.grid__row}>
        {children}
      </div>
    );
  }
}

export default GridRow;
