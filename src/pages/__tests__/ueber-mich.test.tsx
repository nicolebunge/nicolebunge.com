import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import AboutPage, { Head } from '../ueber-mich';

vi.mock('../../hooks/organizations');
vi.mock('../../hooks/site');

describe('AboutPage', () => {
  it('should render correctly', () => {
    render(<AboutPage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Über Mich');
  });
});

describe('Head', () => {
  it('should set the document title', async () => {
    render(<Head />);

    await waitFor(() => expect(document.title).toBe('Über Mich | Nicole Bunge'));
  });
});
