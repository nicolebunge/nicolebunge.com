import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Section extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <section className={styles.section}>
        {children}
      </section>
    );
  }
}

export default Section;
