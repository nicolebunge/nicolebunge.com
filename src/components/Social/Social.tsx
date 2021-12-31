/* eslint-disable camelcase */

import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { INSTAGRAM, LINKED_IN, XING } from '../../constants/social';
import Link from '../Link';
import { social, social__icon, social__icons } from './Social.module.css';

export type SocialProps = HTMLAttributes<HTMLDivElement>;

function Social(props: SocialProps): JSX.Element {
  const { className, ...otherProps } = props;

  return (
    <div className={clsx(className, social)} {...otherProps}>
      <ul className={social__icons}>
        {[INSTAGRAM, LINKED_IN, XING].map((platform) => {
          const { id, Component, url } = platform;

          return (
            <li key={id}>
              <Link to={url} className={social__icon} itemProp="sameAs">
                <Component />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Social;
