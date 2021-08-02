/* eslint-disable jsx-a11y/alt-text */

import React, { FC } from 'react';

export interface CloudinaryImageProps {
  alt: string;
  height?: number;
  src: string;
  width?: number;
}

const CloudinaryImage: FC<CloudinaryImageProps> = (props) => {
  const { src, ...otherProps } = props;

  return (
    <img
      loading="lazy"
      src={`https://res.cloudinary.com/nicolebunge/image/upload/f_auto,q_auto/v1627923793/nicolebunge.com/${src}`}
      {...otherProps}
    />
  );
};

export default CloudinaryImage;
