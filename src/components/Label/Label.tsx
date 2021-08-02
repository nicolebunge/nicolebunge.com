/* eslint-disable jsx-a11y/label-has-associated-control */

import classNames from 'classnames';
import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './Label.module.css';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor: string;
}

function Label(props: LabelProps): JSX.Element {
  const { className, ...otherProps } = props;

  return <label className={classNames(className, styles.label)} {...otherProps} />;
}

export default Label;
