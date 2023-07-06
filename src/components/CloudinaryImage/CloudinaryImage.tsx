/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { buildQuery } from '../../utils/cloudinary';

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

interface CloudinaryImageProps {
  alt: string;
  height: number;
  src: Images;
  width: number;
}

function CloudinaryImage(props: CloudinaryImageProps): JSX.Element {
  const { height, src, width, ...otherProps } = props;
  const query = buildQuery({ height, width });

  return (
    <img
      height={height}
      loading="lazy"
      src={`https://res.cloudinary.com/nicolebunge/image/upload/${query}/v1627923793/nicolebunge.com/${src}`}
      width={width}
      {...otherProps}
    />
  );
}

export type { CloudinaryImageProps };
export default CloudinaryImage;
