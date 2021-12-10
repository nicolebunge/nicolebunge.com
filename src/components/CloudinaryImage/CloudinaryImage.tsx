/* eslint-disable jsx-a11y/alt-text */

import React from 'react';

type Images =
  | 'gallery/alice.jpg'
  | 'gallery/berliner.jpg'
  | 'gallery/das-tote-maedchen.jpg'
  | 'gallery/goth.jpg'
  | 'gallery/image-01-large.jpg'
  | 'gallery/image-01.jpg'
  | 'gallery/image-02-large.jpg'
  | 'gallery/image-02.jpg'
  | 'gallery/image-03-large.jpg'
  | 'gallery/image-03.jpg'
  | 'gallery/kompagnie-1.jpg'
  | 'gallery/kompagnie-2.jpg'
  | 'nicole-bunge.svg';

export interface CloudinaryImageProps {
  alt: string;
  height?: number;
  src: Images;
  width?: number;
}

function CloudinaryImage(props: CloudinaryImageProps): JSX.Element {
  const { src, ...otherProps } = props;

  return (
    <img
      loading="lazy"
      src={`https://res.cloudinary.com/nicolebunge/image/upload/f_auto,q_auto/v1627923793/nicolebunge.com/${src}`}
      {...otherProps}
    />
  );
}

export default CloudinaryImage;
