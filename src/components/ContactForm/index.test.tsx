/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import ContactForm from '.';

describe('ContactForm component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  });
});
