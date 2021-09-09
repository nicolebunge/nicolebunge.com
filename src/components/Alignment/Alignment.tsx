import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode } from 'react';
import {
  alignment,
  alignmentAlignCenter,
  alignmentJustifyCenter,
  alignmentAlignEnd,
  alignmentAlignStart,
  alignmentJustifyEnd,
  alignmentJustifySpaceBetween,
  alignmentJustifyStart,
} from './Alignment.module.css';

type Align = 'center' | 'end' | 'start';
type Justify = 'center' | 'end' | 'space-between' | 'start';

export interface AlignmentProps extends HTMLAttributes<HTMLDivElement> {
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

function Alignment(props: AlignmentProps): JSX.Element {
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

export default Alignment;
