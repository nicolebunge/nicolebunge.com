import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { INSTAGRAM, LINKED_IN, XING } from '../../constants/social';
import * as styles from './Icons.module.css';

export type IconsProps = HTMLAttributes<HTMLUListElement>;

function Icons(props: IconsProps): JSX.Element {
  const { className, ...otherProps } = props;

  return (
    <ul className={classNames(className, styles.icons)} {...otherProps}>
      {[INSTAGRAM, LINKED_IN, XING].map((platform) => {
        const { id } = platform;

        return (
          <li key={id}>
            <a href={platform.url} itemProp="sameAs" rel="noopener noreferrer" target="_blank">
              <img src={platform.icon.src} alt={`Nicole Bunge auf ${platform.title}`} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Icons;
