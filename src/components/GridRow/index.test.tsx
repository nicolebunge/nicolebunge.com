/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import GridRow from '.';

describe('GridRow component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<GridRow />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
