import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';
import { axe } from 'jest-axe';
import * as stories from '../Section.stories';

const { Default } = composeStories(stories);

describe('Section component', () => {
  it('renders correctly', async () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });
});
