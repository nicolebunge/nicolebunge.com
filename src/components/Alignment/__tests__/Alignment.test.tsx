import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import * as stories from '../Alignment.stories';

const { Default, AlignCenter, Center, JustifyCenter } = composeStories(stories);

describe('Alignment component', () => {
  it('should render correctly', async () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should align content to center', () => {
    const { container } = render(<AlignCenter />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should justify content to center', () => {
    const { container } = render(<JustifyCenter />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should center content', () => {
    const { container } = render(<Center />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
