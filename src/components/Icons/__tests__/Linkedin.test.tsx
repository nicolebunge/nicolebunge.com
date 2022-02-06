import { render } from '@testing-library/react';
import React from 'react';
import { Linkedin4 } from '..';
import { axe } from 'jest-axe';

describe('Linkedin icon component', () => {
  it('renders correctly', async () => {
    const { container } = render(<Linkedin4 width={24} height={24} fill="#000" />);

    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });
});
