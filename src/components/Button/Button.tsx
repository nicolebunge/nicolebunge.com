import clsx from 'clsx';
import { Link } from 'gatsby';
import React, { ReactNode } from 'react';
import { button } from './Button.module.css';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  to: string;
}

function Button(props: ButtonProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <Link className={clsx(className, button)} {...otherProps} />;
}

export type { ButtonProps };
export default Button;
