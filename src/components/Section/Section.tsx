import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode } from 'react';
import { section, sectionFull } from './Section.module.css';

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isFull?: boolean;
}

function Section(props: SectionProps): JSX.Element {
  const { className, isFull = false, ...otherProps } = props;

  return (
    <section
      className={clsx(className, section, {
        [sectionFull]: isFull,
      })}
      {...otherProps}
    />
  );
}

export default Section;
