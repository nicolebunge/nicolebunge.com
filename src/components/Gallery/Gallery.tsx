import clsx from 'clsx';
import Image, { ImageProps } from '../Image';
import { gallery, gallery__item } from './Gallery.module.css';

interface GalleryProps {
  className?: string;
  images: ImageProps[];
}

function Gallery(props: GalleryProps) {
  const { className, images, ...otherProps } = props;

  return (
    <ul className={clsx(className, gallery)} {...otherProps}>
      {images.map((image, index) => (
        <li className={gallery__item} key={index}>
          <figure>
            <Image {...image} />
          </figure>
        </li>
      ))}
    </ul>
  );
}

export type { GalleryProps };
export default Gallery;
