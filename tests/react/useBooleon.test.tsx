import React from 'react';

import { useBooleon } from '../../packages/react/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('useBooleon', () => {
  const MyComponent = (props: any) => (
    <div {...useBooleon(props, [['flex', () => 'display:flex;']])} />
  );
  const { getByTestId } = render(<MyComponent data-testid="useBooleon" flex />);
  expect(getByTestId('useBooleon')).toHaveStyle('display: flex;');
});
