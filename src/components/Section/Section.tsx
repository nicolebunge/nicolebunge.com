import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';
import { section, 'section--full' as sectionFull } from './Section.module.css';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isFull?: boolean;
}

function Section(props: SectionProps) {
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

export type { SectionProps };
export default Section;
