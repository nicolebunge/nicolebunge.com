import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '.';

describe('Navigation component', () => {
  it('renders correctly', () => {
    const routes = [
      {
        name: 'Index',
        path: '/',
      },
    ];
    const tree = renderer.create(<Navigation routes={routes} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
