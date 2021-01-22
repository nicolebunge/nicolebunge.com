/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Social from '.';

describe('Social component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Social />);

    expect(asFragment()).toMatchSnapshot();
  });
});
