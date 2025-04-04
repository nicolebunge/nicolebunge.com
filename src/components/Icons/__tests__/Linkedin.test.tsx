import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Linkedin4 } from '..';

describe('Linkedin icon component', () => {
  it('renders correctly', () => {
    const { container } = render(<Linkedin4 width={24} height={24} fill="#000" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
