import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import TheatrePedagogyPage, { Head } from '../theaterpaedagogik';

vi.mock('../../hooks/organizations');
vi.mock('../../hooks/site');

describe('TheatrePedagogyPage', () => {
  it('should render correctly', () => {
    render(<TheatrePedagogyPage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Theaterpädagogik');
  });
});

describe('Head', () => {
  it('should set the document title', async () => {
    render(<Head />);

    await waitFor(() => expect(document.title).toBe('Theaterpädagogik | Nicole Bunge'));
  });
});
