import classNames from 'classnames';
import React, { FC } from 'react';
import CloudinaryImage, { CloudinaryImageProps } from '../CloudinaryImage';
import * as styles from './style.module.css';

export interface GalleryProps {
  className?: string;
  images: CloudinaryImageProps[];
}

const Gallery: FC<GalleryProps> = (props) => {
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
};

export default Gallery;
