import clsx from 'clsx';
import { ReactNode } from 'react';
import Link from '../Link';
import { button } from './Button.module.css';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  to: string;
}

function Button(props: ButtonProps) {
  const { className, ...otherProps } = props;

  return <Link className={clsx(className, button)} {...otherProps} />;
}

export type { ButtonProps };
export default Button;
