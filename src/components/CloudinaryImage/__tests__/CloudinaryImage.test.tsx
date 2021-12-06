import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';
import * as stories from '../CloudinaryImage.stories';

const { Default } = composeStories(stories);

describe('Cloudinary image component', () => {
  it('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
