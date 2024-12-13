import type { ImageLoaderProps } from 'next/image';

function cloudinaryLoader(props: ImageLoaderProps): string {
  const { src, quality = 'auto', width } = props;
  const params = {
    c: 'limit',
    f: 'auto',
    q: quality,
    w: width,
  };
  const query = Object.entries(params)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');

  return `https://res.cloudinary.com/nicolebunge/image/upload/${query}/v1627923793/${src}`;
}

export default cloudinaryLoader;
