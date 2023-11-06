import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Xing4 } from '..';

describe('Xing icon component', () => {
  it('renders correctly', () => {
    const { container } = render(<Xing4 width={24} height={24} fill="#000" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
