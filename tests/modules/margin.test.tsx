import { render } from '@testing-library/react';
import React from 'react';

import { View } from '../../packages/base/src';
import '@testing-library/jest-dom';

describe('Margin', () => {
  test('m_12', () => {
    const { getByTestId } = render(<View.div data-testid="m_12" m_12 />);
    expect(getByTestId('m_12')).toHaveStyle('margin: 0.75rem;');
  });

  test('m_auto', () => {
    const { getByTestId } = render(<View.div data-testid="m_auto" m_auto />);
    expect(getByTestId('m_auto')).toHaveStyle('margin: auto;');
  });

  test('mt_12', () => {
    const { getByTestId } = render(<View.div data-testid="mt_12" mt_12 />);
    expect(getByTestId('mt_12')).toHaveStyle('margin-top: 0.75rem;');
  });

  test('mt_auto', () => {
    const { getByTestId } = render(<View.div data-testid="mt_auto" mt_auto />);
    expect(getByTestId('mt_auto')).toHaveStyle('margin-top: auto;');
  });

  test('mb_12', () => {
    const { getByTestId } = render(<View.div data-testid="mb_12" mb_12 />);
    expect(getByTestId('mb_12')).toHaveStyle('margin-bottom: 0.75rem;');
  });

  test('mb_auto', () => {
    const { getByTestId } = render(<View.div data-testid="mb_auto" mb_auto />);
    expect(getByTestId('mb_auto')).toHaveStyle('margin-bottom: auto;');
  });

  test('ml_12', () => {
    const { getByTestId } = render(<View.div data-testid="ml_12" ml_12 />);
    expect(getByTestId('ml_12')).toHaveStyle('margin-left: 0.75rem;');
  });

  test('ml_auto', () => {
    const { getByTestId } = render(<View.div data-testid="ml_auto" ml_auto />);
    expect(getByTestId('ml_auto')).toHaveStyle('margin-left: auto;');
  });

  test('mr_12', () => {
    const { getByTestId } = render(<View.div data-testid="mr_12" mr_12 />);
    expect(getByTestId('mr_12')).toHaveStyle('margin-right: 0.75rem;');
  });

  test('mr_auto', () => {
    const { getByTestId } = render(<View.div data-testid="mr_auto" mr_auto />);
    expect(getByTestId('mr_auto')).toHaveStyle('margin-right: auto;');
  });

  test('mx_12', () => {
    const { getByTestId } = render(<View.div data-testid="mx_12" mx_12 />);
    expect(getByTestId('mx_12')).toHaveStyle('margin-right: 0.75rem;');
    expect(getByTestId('mx_12')).toHaveStyle('margin-left: 0.75rem;');
  });

  test('mx_auto', () => {
    const { getByTestId } = render(<View.div data-testid="mx_auto" mx_auto />);
    expect(getByTestId('mx_auto')).toHaveStyle('margin-right: auto;');
    expect(getByTestId('mx_auto')).toHaveStyle('margin-left: auto;');
  });

  test('my_12', () => {
    const { getByTestId } = render(<View.div data-testid="my_12" my_12 />);
    expect(getByTestId('my_12')).toHaveStyle('margin-top: 0.75rem;');
    expect(getByTestId('my_12')).toHaveStyle('margin-bottom: 0.75rem;');
  });

  test('my_auto', () => {
    const { getByTestId } = render(<View.div data-testid="my_auto" my_auto />);
    expect(getByTestId('my_auto')).toHaveStyle('margin-top: auto;');
    expect(getByTestId('my_auto')).toHaveStyle('margin-bottom: auto;');
  });
});
