import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../Row.stories';

const { Default } = composeStories(stories);

describe('Row component', () => {
  it('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
