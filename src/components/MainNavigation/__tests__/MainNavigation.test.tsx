/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import MainNavigation from '..';

describe('MainNavigation component', () => {
  it('renders correctly', () => {
    const routes = [
      {
        name: 'Index',
        path: '/',
      },
    ];
    const { container } = render(<MainNavigation routes={routes} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
