/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Button from '.';

describe('Button component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Button to="/">Button</Button>);

    expect(asFragment()).toMatchSnapshot();
  });
});
