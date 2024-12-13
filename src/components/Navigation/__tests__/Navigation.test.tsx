import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Navigation from '..';

describe('Navigation component', () => {
  it('renders correctly', () => {
    const routes = [
      {
        name: 'Index',
        path: '/',
      },
    ];
    const { container } = render(<Navigation routes={routes} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
