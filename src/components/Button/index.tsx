import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import styles from './style.module.css';

export interface ButtonProps {
  className?: string;
  to: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, to, ...otherProps } = props;

  return (
    <Link className={classNames(className, styles.button)} to={to} {...otherProps}>
      {children}
    </Link>
  );
};

export default Button;
