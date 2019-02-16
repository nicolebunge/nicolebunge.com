import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Section extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    full: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    full: false,
  };

  render() {
    const { children, full } = this.props;

    return (
      <section
        className={classNames(styles.section, {
          [styles.sectionFull]: full,
        })}
      >
        {children}
      </section>
    );
  }
}

export default Section;
