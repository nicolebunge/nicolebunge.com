import { render } from '@testing-library/react';
import React from 'react';
import { axe } from 'jest-axe';
import MainNavigation from '..';

describe('MainNavigation component', () => {
  it('renders correctly', async () => {
    const routes = [
      {
        name: 'Index',
        path: '/',
      },
    ];
    const { container } = render(<MainNavigation routes={routes} />);

    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });
});
