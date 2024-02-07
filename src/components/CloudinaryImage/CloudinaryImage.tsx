/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { buildQuery } from '../../utils/cloudinary';

interface CloudinaryImageProps {
  // alt: string;
  height: number;
  public_id: string;
  width: number;
}

function CloudinaryImage(props: CloudinaryImageProps): JSX.Element {
  const { height, public_id, width, ...otherProps } = props;
  const query = buildQuery({ height, width });

  return (
    <img
      height={height}
      loading="lazy"
      src={`http://res.cloudinary.com/nicolebunge/image/upload/${query}/v1627923793/${public_id}`}
      // src={`https://res.cloudinary.com/nicolebunge/image/upload/${query}/v1627923793/nicolebunge.com/${src}`}
      width={width}
      {...otherProps}
    />
  );
}

export type { CloudinaryImageProps };
export default CloudinaryImage;
