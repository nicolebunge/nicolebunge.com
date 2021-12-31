import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';
import * as stories from '../default.stories';

const { Default } = composeStories(stories);

jest.mock('../../hooks/site');

describe('DefaultTemplate component', () => {
  it('should render correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
