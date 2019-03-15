import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from '.';

describe('Gallery component', () => {
  it('renders correctly', () => {
    const images = [
      {
        fluid: {
          aspectRatio: 1,
          sizes: '',
          src: '',
          srcSet: '',
        },
      },
    ];
    const tree = renderer.create(<Gallery images={images} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
