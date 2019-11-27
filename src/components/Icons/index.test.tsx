/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Icons from '.';

describe('Icons component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Icons />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
