import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';
import {
  alignment,
  'alignment-align-center' as alignmentAlignCenter,
  'alignment-align-end' as alignmentAlignEnd,
  'alignment-align-start' as alignmentAlignStart,
  'alignment-justify-center' as alignmentJustifyCenter,
  'alignment-justify-end' as alignmentJustifyEnd,
  'alignment-justify-space-between' as alignmentJustifySpaceBetween,
  'alignment-justify-start' as alignmentJustifyStart,
} from './Alignment.module.css';

type Align = 'center' | 'end' | 'start';
type Justify = 'center' | 'end' | 'space-between' | 'start';

interface AlignmentProps extends HTMLAttributes<HTMLDivElement> {
  align?: Align;
  children: ReactNode;
  justify?: Justify;
}

const alignClassNames = {
  center: alignmentAlignCenter,
  end: alignmentAlignEnd,
  start: alignmentAlignStart,
};

const justifyClassNames = {
  center: alignmentJustifyCenter,
  end: alignmentJustifyEnd,
  'space-between': alignmentJustifySpaceBetween,
  start: alignmentJustifyStart,
};

function Alignment(props: AlignmentProps) {
  const { align, className, justify, ...otherProps } = props;

  return (
    <div
      className={clsx(className, {
        [alignment]: align || justify,
        [alignClassNames[align!]]: align,
        [justifyClassNames[justify!]]: justify,
      })}
      {...otherProps}
    />
  );
}

export type { AlignmentProps };
export default Alignment;
