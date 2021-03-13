import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import * as styles from './style.module.css';

export interface ButtonProps {
  className?: string;
  to: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className, ...otherProps } = props;

  return <Link className={classNames(className, styles.button)} {...otherProps} />;
};

export default Button;
