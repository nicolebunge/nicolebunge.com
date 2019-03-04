import React from 'react';
import renderer from 'react-test-renderer';
import Label from '.';

describe('Label component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Label htmlFor="name" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
