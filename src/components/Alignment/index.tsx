import classNames from 'classnames';
import capitalize from 'lodash/capitalize';
import React from 'react';
import styles from './style.module.css';

type Align = 'center' | 'end' | 'start';
type AlignClass = 'alignmentAlignCenter' | 'alignmentAlignEnd' | 'alignmentAlignStart';
type Justify = 'center' | 'end' | 'space-between' | 'start';
type JustifyClass =
  | 'alignmentJustifyCenter'
  | 'alignmentJustifyEnd'
  | 'alignmentJustifySpaceBetween'
  | 'alignmentJustifyStart';

export interface AlignmentProps {
  align?: Align;
  className?: string;
  justify?: Justify;
}

const Alignment: React.FC<AlignmentProps> = (props) => {
  const { align, className, children, justify } = props;

  return (
    <div
      className={classNames(className, {
        [styles.alignment]: align || justify,
        [styles[`alignmentAlign${capitalize(align)}` as AlignClass]]: align,
        [styles[`alignmentJustify${capitalize(justify)}` as JustifyClass]]: justify,
      })}
    >
      {children}
    </div>
  );
};

export default Alignment;
