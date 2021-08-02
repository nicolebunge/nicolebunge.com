/* eslint-disable jsx-a11y/label-has-associated-control */

import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import * as styles from './Label.module.css';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
}

const Label: React.FC<LabelProps> = (props) => {
  const { className, ...otherProps } = props;

  return <label className={classNames(className, styles.label)} {...otherProps} />;
};

export default Label;
