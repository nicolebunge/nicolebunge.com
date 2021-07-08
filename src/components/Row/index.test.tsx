/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Row from '.';

describe('Row component', () => {
  it('renders correctly', () => {
    const { container } = render(<Row />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
