/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Grid from '.';

describe('Grid component', () => {
  it('renders correctly', () => {
    const { container } = render(<Grid />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
