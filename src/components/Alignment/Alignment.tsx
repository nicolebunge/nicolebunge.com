import classNames from 'classnames';
import capitalize from 'lodash/capitalize';
import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './Alignment.module.css';

type Align = 'center' | 'end' | 'start';
type AlignClass = 'alignmentAlignCenter' | 'alignmentAlignEnd' | 'alignmentAlignStart';
type Justify = 'center' | 'end' | 'space-between' | 'start';
type JustifyClass =
  | 'alignmentJustifyCenter'
  | 'alignmentJustifyEnd'
  | 'alignmentJustifySpaceBetween'
  | 'alignmentJustifyStart';

export interface AlignmentProps extends HTMLAttributes<HTMLDivElement> {
  align?: Align;
  children: ReactNode;
  justify?: Justify;
}

function Alignment(props: AlignmentProps): JSX.Element {
  const { align, className, justify, ...otherProps } = props;

  return (
    <div
      className={classNames(className, {
        [styles.alignment]: align || justify,
        [styles[`alignmentAlign${capitalize(align)}` as AlignClass]]: align,
        [styles[`alignmentJustify${capitalize(justify)}` as JustifyClass]]: justify,
      })}
      {...otherProps}
    />
  );
}

export default Alignment;
