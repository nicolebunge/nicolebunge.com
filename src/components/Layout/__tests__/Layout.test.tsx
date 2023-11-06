import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import * as stories from '../Layout.stories';

const { Default } = composeStories(stories);

vi.mock('../../../constants/dates');
vi.mock('../../../hooks/site');

describe('layout component', () => {
  it('should render correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
