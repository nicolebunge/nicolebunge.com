/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Cookie from '.';

describe('Cookie component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Cookie />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
