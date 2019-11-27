/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Main from '.';

describe('Main component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Main />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
