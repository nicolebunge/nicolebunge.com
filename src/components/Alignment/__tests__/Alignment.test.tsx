/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Alignment from '..';

describe('Alignment component', () => {
  it('should render correctly', () => {
    const { container } = render(<Alignment>Alignment</Alignment>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render align `center` correctly', () => {
    const { container } = render(<Alignment align="center">Alignment</Alignment>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render align `end` correctly', () => {
    const { container } = render(<Alignment align="end">Alignment</Alignment>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render align `start` correctly', () => {
    const { container } = render(<Alignment align="start">Alignment</Alignment>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render justify `center` correctly', () => {
    const { container } = render(<Alignment justify="center">Alignment</Alignment>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render justify `end` correctly', () => {
    const { container } = render(<Alignment justify="end">Alignment</Alignment>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render justify `space-between` correctly', () => {
    const { container } = render(<Alignment justify="space-between">Alignment</Alignment>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render justify `start` correctly', () => {
    const { container } = render(<Alignment justify="start">Alignment</Alignment>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
