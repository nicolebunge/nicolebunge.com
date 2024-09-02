import { render } from '@testing-library/react';
import type { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { wrapPageElement } from '../gatsby-ssr';

vi.mock('../src/constants/dates');
vi.mock('../src/hooks/site');

describe('wrapPageElement', () => {
  function Page(): JSX.Element {
    return <>Page</>;
  }

  it('should wrap each page in layout', () => {
    const { container } = render(
      wrapPageElement({
        element: <Page />,
      } as WrapPageElementBrowserArgs),
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
