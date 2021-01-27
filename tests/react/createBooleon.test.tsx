import React from 'react';

import { render } from '@testing-library/react';

import { flex } from '../../packages/modules/src/';
import { createBooleon } from '../../packages/react/src';
import '@testing-library/jest-dom';

test('createBooleon', () => {
  const MyComponent = createBooleon('div', flex);
  const { getByTestId } = render(
    <MyComponent data-testid="createBooleon" flex />,
  );
  expect(getByTestId('createBooleon')).toHaveStyle('display: flex;');
});
