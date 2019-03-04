import React from 'react';
import renderer from 'react-test-renderer';
import GridColumn from '.';

describe('GridColumn component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<GridColumn />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
