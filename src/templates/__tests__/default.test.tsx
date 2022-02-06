import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';
import { axe } from 'jest-axe';
import * as stories from '../default.stories';

const { Default } = composeStories(stories);

jest.mock('../../constants/dates');
jest.mock('../../hooks/site');

describe('DefaultTemplate component', () => {
  it('should render correctly', async () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });
});
