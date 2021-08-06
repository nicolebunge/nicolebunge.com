/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import { Xing } from '..';

describe('Xing icon component', () => {
  it('renders correctly', () => {
    const { container } = render(<Xing width={24} height={24} fill="#000" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
