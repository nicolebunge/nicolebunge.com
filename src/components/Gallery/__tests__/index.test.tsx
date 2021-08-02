/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Gallery from '..';

describe('Gallery component', () => {
  it('renders correctly', () => {
    const images = [
      {
        src: 'path/to/image.jpg',
        alt: 'Image alt tag',
      },
    ];
    const { container } = render(<Gallery images={images} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
