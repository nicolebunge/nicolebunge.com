import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import DancingPage, { Head } from '../tanz';

vi.mock('../../hooks/site');

describe('DancingPage', () => {
  it('should render correctly', () => {
    render(<DancingPage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tanz');
  });
});

describe('Head', () => {
  it('should set the document title', async () => {
    render(<Head />);

    await waitFor(() => expect(document.title).toBe('Tanz | Nicole Bunge'));
  });
});
