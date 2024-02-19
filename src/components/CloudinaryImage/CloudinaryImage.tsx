/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { buildQuery } from '../../utils/cloudinary';

type PublicIds =
  | 'nicolebunge.com/gallery/alice.jpg'
  | 'nicolebunge.com/gallery/berliner.jpg'
  | 'nicolebunge.com/gallery/das-tote-maedchen.jpg'
  | 'nicolebunge.com/gallery/goth.jpg'
  | 'nicolebunge.com/gallery/image-01-large.jpg'
  | 'nicolebunge.com/gallery/image-01.jpg'
  | 'nicolebunge.com/gallery/image-02-large.jpg'
  | 'nicolebunge.com/gallery/image-02.jpg'
  | 'nicolebunge.com/gallery/image-03-large.jpg'
  | 'nicolebunge.com/gallery/image-03.jpg'
  | 'nicolebunge.com/gallery/kompagnie-1.jpg'
  | 'nicolebunge.com/gallery/kompagnie-2.jpg'
  | 'nicolebunge.com/gallery/portrait/10_kqpbxw.jpg'
  | 'nicolebunge.com/tanz-rumba.jpg'
  | 'nicolebunge.com/home/theaterpaedagogik.jpg'
  | 'nicolebunge.com/nicole-bunge.svg';

interface CloudinaryImageProps {
  alt: string;
  height: number;
  src: PublicIds;
  width: number;
}

function CloudinaryImage(props: CloudinaryImageProps): JSX.Element {
  const { height, src, width, ...otherProps } = props;
  const query = buildQuery({ height, width });

  return (
    <img
      height={height}
      loading="lazy"
      src={`https://res.cloudinary.com/nicolebunge/image/upload/${query}/v1627923793/${src}`}
      width={width}
      {...otherProps}
    />
  );
}

export type { CloudinaryImageProps };
export default CloudinaryImage;
