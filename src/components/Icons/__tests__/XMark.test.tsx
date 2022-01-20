/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import { XMark1 } from '..';

describe('Xing icon component', () => {
  it('renders correctly', () => {
    const { container } = render(<XMark1 width={24} height={24} fill="#000" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
