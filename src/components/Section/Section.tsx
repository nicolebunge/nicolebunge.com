import classNames from 'classnames';
import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './Section.module.css';

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  full?: boolean;
}

function Section(props: SectionProps): JSX.Element {
  const { className, full, ...otherProps } = props;

  return (
    <section
      className={classNames(className, styles.section, {
        [styles.sectionFull]: full,
      })}
      {...otherProps}
    />
  );
}

export default Section;
