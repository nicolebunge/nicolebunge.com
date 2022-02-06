import { render } from '@testing-library/react';
import React from 'react';
import { Xing4 } from '..';
import { axe } from 'jest-axe';

describe('Xing icon component', () => {
  it('renders correctly', async () => {
    const { container } = render(<Xing4 width={24} height={24} fill="#000" />);

    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });
});
