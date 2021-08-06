import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { INSTAGRAM, LINKED_IN, XING } from '../../constants/social';
import * as styles from './Social.module.css';

export type SocialProps = HTMLAttributes<HTMLDivElement>;

function Social(props: SocialProps): JSX.Element {
  const { className, ...otherProps } = props;

  return (
    <div className={classNames(className, styles.social)} {...otherProps}>
      <ul className={styles.social__icons}>
        {[INSTAGRAM, LINKED_IN, XING].map((platform) => {
          const { id, Component, url } = platform;

          return (
            <li key={id}>
              <a
                href={url}
                className={styles.social__icon}
                itemProp="sameAs"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Component />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Social;
