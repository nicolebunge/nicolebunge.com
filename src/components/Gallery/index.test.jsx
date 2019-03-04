import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from '.';

describe('Gallery component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Gallery images={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
