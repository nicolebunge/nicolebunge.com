/* eslint-disable react/no-array-index-key */

import classNames from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import React, { FC } from 'react';
import * as styles from './style.module.css';

export interface GalleryProps {
  className?: string;
  isLoading?: boolean;
}

const Gallery: FC<GalleryProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <ul className={classNames(className, styles.gallery)} {...otherProps}>
      <li className={styles.gallery__item}>
        <figure>
          <StaticImage
            src="../../images/alice.jpg"
            alt="Rolle: Alice"
            formats={['auto', 'webp', 'avif']}
          />
        </figure>
      </li>
      <li className={styles.gallery__item}>
        <figure>
          <StaticImage
            src="../../images/berliner.jpg"
            alt="Rolle: Berliner"
            formats={['auto', 'webp', 'avif']}
          />
        </figure>
      </li>
      <li className={styles.gallery__item}>
        <figure>
          <StaticImage src="../../images/goth.jpg" alt="foo" formats={['auto', 'webp', 'avif']} />
        </figure>
      </li>
      <li className={styles.gallery__item}>
        <figure>
          <StaticImage
            src="../../images/kompagnie-1.jpg"
            alt="Theater Kompagnie Stuttgart"
            formats={['auto', 'webp', 'avif']}
          />
        </figure>
      </li>
      <li className={styles.gallery__item}>
        <figure>
          <StaticImage
            src="../../images/kompagnie-2.jpg"
            alt="Theater Kompagnie Stuttgart"
            formats={['auto', 'webp', 'avif']}
          />
        </figure>
      </li>
      <li className={styles.gallery__item}>
        <figure>
          <StaticImage
            src="../../images/das-tote-maedchen.jpg"
            alt="Rolle: Das tote Mädchen"
            formats={['auto', 'webp', 'avif']}
          />
        </figure>
      </li>
    </ul>
  );
};

export default Gallery;
