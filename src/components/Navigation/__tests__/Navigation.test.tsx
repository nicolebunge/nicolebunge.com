import { render } from '@testing-library/react';
import React from 'react';
import { axe } from 'jest-axe';
import Navigation from '..';

describe('Navigation component', () => {
  it('renders correctly', async () => {
    const routes = [
      {
        name: 'Index',
        path: '/',
      },
    ];
    const { container } = render(<Navigation routes={routes} />);

    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });
});
