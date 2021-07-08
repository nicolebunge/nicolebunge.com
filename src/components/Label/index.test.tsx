/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Label from '.';

describe('Label component', () => {
  it('renders correctly', () => {
    const { container } = render(<Label htmlFor="name" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
