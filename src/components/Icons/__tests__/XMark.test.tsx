import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { XMark1 } from '..';

describe('Xing icon component', () => {
  it('renders correctly', () => {
    const { container } = render(<XMark1 width={24} height={24} fill="#000" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
