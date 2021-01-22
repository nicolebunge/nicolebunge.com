/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Row from '.';

describe('Row component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Row />);

    expect(asFragment()).toMatchSnapshot();
  });
});
