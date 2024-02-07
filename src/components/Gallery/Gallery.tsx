/* eslint-disable camelcase */

import clsx from 'clsx';
import React from 'react';
import CloudinaryImage from '../CloudinaryImage';
import { gallery, gallery__item } from './Gallery.module.css';

const sizes = [
  {
    width: 336,
    height: 224,
  },
  {
    width: 459,
    height: 573,
  },
  {
    width: 336,
    height: 420,
  },
  {
    width: 213,
    height: 213,
  },
  {
    width: 581,
    height: 465,
  },
  {
    width: 459,
    height: 573,
  },
];

interface Image {
  id: string;
  public_id: string;
}

interface GalleryProps {
  className?: string;
  images: Image[];
}

function Gallery(props: GalleryProps): JSX.Element {
  const { className, images, ...otherProps } = props;

  return (
    <ul className={clsx(className, gallery)} {...otherProps}>
      {images.map((image, index) => (
        <li className={gallery__item} key={image.id}>
          <figure>
            <CloudinaryImage {...image} {...sizes[index % sizes.length]} />
          </figure>
        </li>
      ))}
    </ul>
  );
}

export type { GalleryProps };
export default Gallery;
