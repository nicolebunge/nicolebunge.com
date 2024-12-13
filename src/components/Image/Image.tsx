import NextImage, { ImageProps as NextImageProps } from 'next/image';

type ImageProps = NextImageProps;

function Image(props: ImageProps) {
  return <NextImage {...props} height={100} />;
}

export type { ImageProps };
export default Image;
