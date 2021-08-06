import clsx from 'clsx';
import { Link } from 'gatsby';
import React, { ReactNode } from 'react';
import * as styles from './Button.module.css';

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  to: string;
}

function Button(props: ButtonProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <Link className={clsx(className, styles.button)} {...otherProps} />;
}

export default Button;
