import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import ActingPage, { Head } from '../schauspiel';

vi.mock('../../hooks/directors');
vi.mock('../../hooks/organizations');
vi.mock('../../hooks/productions');
vi.mock('../../hooks/publications');
vi.mock('../../hooks/site');

describe('ActingPage', () => {
  it('should render correctly', () => {
    render(<ActingPage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Schauspiel');
  });
});

describe('Head', () => {
  it('should set the document title', async () => {
    render(<Head />);

    await waitFor(() => expect(document.title).toBe('Schauspiel | Nicole Bunge'));
  });
});
