import classNames from 'classnames';
import React from 'react';
import CloudinaryImage, { CloudinaryImageProps } from '../CloudinaryImage';
import * as styles from './Gallery.module.css';

export interface GalleryProps {
  className?: string;
  images: CloudinaryImageProps[];
}

function Gallery(props: GalleryProps): JSX.Element {
  const { className, images, ...otherProps } = props;

  return (
    <ul className={classNames(className, styles.gallery)} {...otherProps}>
      {images.map((image) => (
        <li className={styles.gallery__item} key={image.src}>
          <figure>
            <CloudinaryImage {...image} />
          </figure>
        </li>
      ))}
    </ul>
  );
}

export default Gallery;
