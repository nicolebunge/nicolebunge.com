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
  | 'nicole-bunge.svg'
  | 'gallery/portrait/1_ww2edw.jpg'
  | 'gallery/portrait/2_jqk1et.jpg'
  | 'gallery/portrait/3_xsaoiy.jpg'
  | 'gallery/portrait/4_gooylu.jpg'
  | 'gallery/portrait/5_sydsip.jpg'
  | 'gallery/portrait/6_rcczgv.jpg'
  | 'gallery/portrait/7_otjpy9.jpg'
  | 'gallery/portrait/8_mjtebh.jpg'
  | 'gallery/portrait/1_ww2edw.jpg'
  | 'gallery/portrait/9_o8tbtk.jpg'
  | 'gallery/portrait/10_kqpbxw.jpg'
  | 'gallery/portrait/11_chxwyb.jpg'
  | 'gallery/portrait/12_uoupiq.jpg'
  | 'gallery/portrait/13_ly8lae.jpg'
  | 'gallery/portrait/14_yap2bu.jpg'
  | 'gallery/portrait/15_hv22xi.jpg';

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
