/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import { Instagram } from '..';

describe('Instagram icon component', () => {
  it('renders correctly', () => {
    const { container } = render(<Instagram width={24} height={24} fill="#000" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
