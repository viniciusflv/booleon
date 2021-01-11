import React from 'react';

import { createBooleon } from '../../packages/react/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('createBooleon', () => {
  const MyComponent = createBooleon('div', [
    ['flex', () => 'display:flex;'],
  ] as const);
  const { getByTestId } = render(
    <MyComponent data-testid="createBooleon" flex />,
  );
  expect(getByTestId('createBooleon')).toHaveStyle('display: flex;');
});
