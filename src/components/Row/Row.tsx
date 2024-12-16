import clsx from 'clsx';
import { ReactNode } from 'react';
import Alignment, { AlignmentProps } from '../Alignment';
import { row } from './Row.module.css';

interface RowProps extends AlignmentProps {
  children: ReactNode;
}

function Row(props: RowProps) {
  const { className, ...otherProps } = props;

  return <Alignment className={clsx(className, row)} {...otherProps} />;
}

export type { RowProps };
export default Row;
