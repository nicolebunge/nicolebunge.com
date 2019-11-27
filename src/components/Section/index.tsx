import classNames from 'classnames';
import React from 'react';
import styles from './style.module.css';

export interface SectionProps {
  className?: string;
  full?: boolean;
}

const Section: React.FC<SectionProps> = (props) => {
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

export default Section;
