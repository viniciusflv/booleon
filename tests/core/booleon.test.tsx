import React from 'react';

import { render } from '@testing-library/react';

import { booleon } from '../../packages/core/src';
import '@testing-library/jest-dom';

test('booleon', () => {
  const MyComponent = (props: any) => (
    <div {...booleon(props, [['flex', () => 'display:flex;']])} />
  );
  const { getByTestId } = render(<MyComponent data-testid="useBooleon" flex />);
  expect(getByTestId('useBooleon')).toHaveStyle('display: flex;');
});
