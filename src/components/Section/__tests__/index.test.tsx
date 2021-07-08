/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Section from '..';

describe('Section component', () => {
  it('renders correctly', () => {
    const { container } = render(<Section />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
