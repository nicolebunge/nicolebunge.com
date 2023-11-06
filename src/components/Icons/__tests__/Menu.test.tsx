import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Menu1 } from '..';

describe('Xing icon component', () => {
  it('renders correctly', async () => {
    const { container } = render(<Menu1 width={24} height={24} fill="#000" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
