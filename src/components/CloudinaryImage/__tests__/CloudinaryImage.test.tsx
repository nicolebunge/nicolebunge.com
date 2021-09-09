/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import CloudinaryImage from '..';

describe('Cloudinary image component', () => {
  it('renders correctly', () => {
    const { container } = render(<CloudinaryImage alt="Image alt text" src="path/to/image.jpg" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
