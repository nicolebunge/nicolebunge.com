/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import ContactForm from '.';

describe('ContactForm component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ContactForm />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
