/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';

describe('Button component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button to="/">Button</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
