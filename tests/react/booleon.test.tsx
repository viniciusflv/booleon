import React from 'react';

import { render } from '@testing-library/react';

import { flex } from '../../packages/modules/src';
import { booleon } from '../../packages/react/src';
import '@testing-library/jest-dom';

describe('booleon', () => {
  test('dom', () => {
    const MyComponent = booleon.div(flex);
    const { getByTestId } = render(<MyComponent data-testid="booleon" flex />);
    expect(getByTestId('booleon')).toHaveStyle('display: flex;');
  });

  test('hoc', () => {
    const MyComponent = booleon((props) => <div {...props} />, flex);
    const { getByTestId } = render(<MyComponent data-testid="booleon" flex />);
    expect(getByTestId('booleon')).toHaveStyle('display: flex;');
  });
});
