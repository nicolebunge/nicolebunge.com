import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Section extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    full: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    className: '',
    full: false,
  };

  render() {
    const { children, className, full } = this.props;

    return (
      <section
        className={classNames(className, styles.section, {
          [styles.sectionFull]: full,
        })}
      >
        {children}
      </section>
    );
  }
}

export default Section;
