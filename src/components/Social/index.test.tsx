/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Social from '.';

describe('Social component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Social />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
