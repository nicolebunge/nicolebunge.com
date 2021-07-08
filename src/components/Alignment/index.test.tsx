/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import Alignment from '.';

describe('Alignment component', () => {
  it('should render correctly', () => {
    const { container } = render(<Alignment />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render content correctly', () => {
    const { container } = render(<Alignment>Content</Alignment>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render align `center` correctly', () => {
    const { container } = render(<Alignment align="center" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render align `end` correctly', () => {
    const { container } = render(<Alignment align="end" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render align `start` correctly', () => {
    const { container } = render(<Alignment align="start" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render justify `center` correctly', () => {
    const { container } = render(<Alignment justify="center" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render justify `end` correctly', () => {
    const { container } = render(<Alignment justify="end" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render justify `space-between` correctly', () => {
    const { container } = render(<Alignment justify="space-between" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render justify `start` correctly', () => {
    const { container } = render(<Alignment justify="start" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
