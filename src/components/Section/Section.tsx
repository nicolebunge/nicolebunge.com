import classNames from 'classnames';
import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './Section.module.css';

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isFull?: boolean;
}

function Section(props: SectionProps): JSX.Element {
  const { className, isFull = false, ...otherProps } = props;

  return (
    <section
      className={classNames(className, styles.section, {
        [styles.sectionFull]: isFull,
      })}
      {...otherProps}
    />
  );
}

export default Section;
