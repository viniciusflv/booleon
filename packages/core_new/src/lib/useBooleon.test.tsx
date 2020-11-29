import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { useBooleon } from './useBooleon';

test('useBooleon', () => {
  const MyComponent = (props: any) => (
    <div {...useBooleon(props, [['flex', () => 'display:flex;']])} />
  );
  const { getByTestId } = render(<MyComponent data-testid="useBooleon" flex />);
  expect(getByTestId('useBooleon')).toHaveStyle('display: flex;');
});
