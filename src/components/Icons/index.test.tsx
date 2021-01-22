/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Icons from '.';

describe('Icons component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Icons />);

    expect(asFragment()).toMatchSnapshot();
  });
});
