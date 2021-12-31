import { render, waitFor } from '@testing-library/react';
import React from 'react';
import SEO from '..';

jest.mock('../../../hooks/site');

describe('SEO component', () => {
  it('should render correctly', async () => {
    render(<SEO title="Page Title" />);

    await waitFor(() => expect(document.title).toStrictEqual('Page Title | Site Title'));
  });
});
