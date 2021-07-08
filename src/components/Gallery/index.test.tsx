/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
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
    const { container } = render(<Gallery images={images} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
