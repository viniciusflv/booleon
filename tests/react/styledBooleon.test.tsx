import React from 'react';

import { styledBooleon } from '../../packages/react/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('styledBooleon', () => {
  test('dom', () => {
    const MyComponent = styledBooleon.div([
      ['flex', () => 'display:flex;'],
    ] as const);
    const { getByTestId } = render(
      <MyComponent data-testid="styledBooleon" flex />,
    );
    expect(getByTestId('styledBooleon')).toHaveStyle('display: flex;');
  });

  test('hoc', () => {
    const MyComponent = styledBooleon((props) => <div {...props} />, [
      ['flex', () => 'display:flex;'],
    ] as const);
    const { getByTestId } = render(
      <MyComponent data-testid="styledBooleon" flex />,
    );
    expect(getByTestId('styledBooleon')).toHaveStyle('display: flex;');
  });
});
