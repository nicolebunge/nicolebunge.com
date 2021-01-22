/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Label from '.';

describe('Label component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Label htmlFor="name" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
