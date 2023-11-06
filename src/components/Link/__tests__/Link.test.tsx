import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import * as stories from '../Link.stories';

const { Default, External } = composeStories(stories);

describe('Link component', () => {
  it('renders correctly', async () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render external link correctly', async () => {
    const { container } = render(<External />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
