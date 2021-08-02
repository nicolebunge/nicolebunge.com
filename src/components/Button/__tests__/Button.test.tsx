/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Button from '..';

describe('Button component', () => {
  it('renders correctly', () => {
    const { container } = render(<Button to="/">Button</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
