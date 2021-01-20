import React from 'react';

import { render } from '@testing-library/react';

import { hocBooleon } from '../../packages/react/src';
import '@testing-library/jest-dom';

test('hocBooleon', () => {
  const MyComponent = hocBooleon((props) => <div {...props} />, [
    ['flex', () => 'display:flex;'],
  ] as const);
  const { getByTestId } = render(<MyComponent data-testid="hocBooleon" flex />);
  expect(getByTestId('hocBooleon')).toHaveStyle('display: flex;');
});
