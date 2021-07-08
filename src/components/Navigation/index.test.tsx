/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Navigation from '.';

describe('Navigation component', () => {
  it('renders correctly', () => {
    const routes = [
      {
        name: 'Index',
        path: '/',
      },
    ];
    const { container } = render(<Navigation routes={routes} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
