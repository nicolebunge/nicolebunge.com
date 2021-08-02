import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import * as styles from './Main.module.css';

export type MainProps = HTMLAttributes<HTMLDivElement>;

const Main: React.FC<MainProps> = (props) => {
  const { className, ...otherProps } = props;

  return <main className={classNames(className, styles.main)} role="main" {...otherProps} />;
};

export default Main;
