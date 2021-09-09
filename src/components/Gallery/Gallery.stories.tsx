import Gallery from '.';

export default {
  component: Gallery,
};

export const Default = {
  args: {
    images: [
      {
        src: 'path/to/image.jpg',
        alt: 'Image alt tag',
      },
    ],
  },
};
