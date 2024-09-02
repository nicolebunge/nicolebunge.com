import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import IndexPage, { Head } from '..';

vi.mock('../../hooks/organizations');
vi.mock('../../hooks/site');

describe('IndexPage', () => {
  it('should render correctly', () => {
    render(<IndexPage />);

    const headings = screen.getAllByRole('heading', { level: 2 });

    expect(headings.at(0)).toHaveTextContent('Über mich');
    expect(headings.at(1)).toHaveTextContent('Schauspiel');
    expect(headings.at(2)).toHaveTextContent('Theaterpädagogik');
  });
});

describe('Head', () => {
  it('should set the document title', async () => {
    render(<Head />);

    await waitFor(() => expect(document.title).toBe('Home | Nicole Bunge'));
  });
});
