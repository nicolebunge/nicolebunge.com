import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import styles from './style.module.css';

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  full?: boolean;
}

const Section: React.FC<SectionProps> = (props) => {
  const { className, full, ...otherProps } = props;

  return (
    <section
      className={classNames(className, styles.section, {
        [styles.sectionFull]: full,
      })}
      {...otherProps}
    />
  );
};

export default Section;
