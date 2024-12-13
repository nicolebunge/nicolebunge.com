import Gallery from '.';

const meta = {
  component: Gallery,
};

const Default = {
  args: {
    images: [
      {
        src: '/path/to/image.jpg',
        alt: 'Image alt tag',
        width: 640,
      },
    ],
  },
};

export { Default };
export default meta;
