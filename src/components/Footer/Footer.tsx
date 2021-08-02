import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import * as styles from './Footer.module.css';

export type FooterProps = HTMLAttributes<HTMLElement>;

const Footer: React.FC<FooterProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <footer className={classNames(className, styles.footer)} role="contentinfo" {...otherProps} />
  );
};

export default Footer;
