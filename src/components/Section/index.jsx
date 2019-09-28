import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Section = (props) => {
  const { children, className, full, ...otherProps } = props;

  return (
    <section
      className={classNames(className, styles.section, {
        [styles.sectionFull]: full,
      })}
      {...otherProps}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  full: PropTypes.bool,
};

Section.defaultProps = {
  children: null,
  className: '',
  full: false,
};

export default Section;
