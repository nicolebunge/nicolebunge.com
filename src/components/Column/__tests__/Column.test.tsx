/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Column from '..';

describe('Column component', () => {
  it('renders correctly', () => {
    const { container } = render(<Column>Column</Column>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
