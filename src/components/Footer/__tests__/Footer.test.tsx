import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';
import { axe } from 'jest-axe';
import * as stories from '../Footer.stories';

const { Default } = composeStories(stories);

describe('Footer component', () => {
  it('renders correctly', async () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });
});
