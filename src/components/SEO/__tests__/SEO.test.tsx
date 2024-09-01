import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import SEO from '..';

vi.mock('../../../hooks/site');

describe('SEO component', () => {
  it('should render correctly', async () => {
    render(<SEO title="Page Title" />);

    await waitFor(() => expect(document.title).toStrictEqual('Page Title | Nicole Bunge'));
  });
});
