import classNames from 'classnames';
import React from 'react';
import Icons from '../Icons';
import styles from './style.module.css';

export interface SocialProps {
  className?: string;
}

const Social: React.FC<SocialProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <div className={classNames(className, styles.social)} {...otherProps}>
      <Icons />
    </div>
  );
};

export default Social;
