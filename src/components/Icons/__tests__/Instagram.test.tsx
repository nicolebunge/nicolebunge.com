import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Instagram14 } from '..';

describe('Instagram icon component', () => {
  it('renders correctly', async () => {
    const { container } = render(<Instagram14 width={24} height={24} fill="#000" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
