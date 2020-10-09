import { render } from '@testing-library/react';
import React from 'react';

import { View } from '../../packages/core/src';
import '@testing-library/jest-dom';

describe('Padding', () => {
  test('p_12', () => {
    const { getByTestId } = render(<View.div data-testid="p_12" p_12 />);
    expect(getByTestId('p_12')).toHaveStyle('padding: 0.75rem;');
  });

  test('pt_12', () => {
    const { getByTestId } = render(<View.div data-testid="pt_12" pt_12 />);
    expect(getByTestId('pt_12')).toHaveStyle('padding-top: 0.75rem;');
  });

  test('pb_12', () => {
    const { getByTestId } = render(<View.div data-testid="pb_12" pb_12 />);
    expect(getByTestId('pb_12')).toHaveStyle('padding-bottom: 0.75rem;');
  });

  test('pl_12', () => {
    const { getByTestId } = render(<View.div data-testid="pl_12" pl_12 />);
    expect(getByTestId('pl_12')).toHaveStyle('padding-left: 0.75rem;');
  });

  test('pr_12', () => {
    const { getByTestId } = render(<View.div data-testid="pr_12" pr_12 />);
    expect(getByTestId('pr_12')).toHaveStyle('padding-right: 0.75rem;');
  });

  test('px_12', () => {
    const { getByTestId } = render(<View.div data-testid="px_12" px_12 />);
    expect(getByTestId('px_12')).toHaveStyle('padding-right: 0.75rem;');
    expect(getByTestId('px_12')).toHaveStyle('padding-left: 0.75rem;');
  });

  test('py_12', () => {
    const { getByTestId } = render(<View.div data-testid="py_12" py_12 />);
    expect(getByTestId('py_12')).toHaveStyle('padding-top: 0.75rem;');
    expect(getByTestId('py_12')).toHaveStyle('padding-bottom: 0.75rem;');
  });
});
