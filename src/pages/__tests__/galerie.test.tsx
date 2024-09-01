import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Head } from '../galerie';

vi.mock('../../hooks/site');

describe('Head', () => {
  it('should set the document title', async () => {
    render(<Head />);

    await waitFor(() => expect(document.title).toBe('Galerie | Nicole Bunge'));
  });
});
