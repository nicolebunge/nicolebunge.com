import classNames from 'classnames';
import React from 'react';
import styles from './style.module.css';

export interface LabelProps {
  className?: string;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = (props) => {
  const { children, className, htmlFor, ...otherProps } = props;

  return (
    <label className={classNames(className, styles.label)} htmlFor={htmlFor} {...otherProps}>
      {children}
    </label>
  );
};

export default Label;
