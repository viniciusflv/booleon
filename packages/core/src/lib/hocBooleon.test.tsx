import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { hocBooleon } from './hocBooleon';

test('hocBooleon', () => {
  const MyComponent = hocBooleon((props) => <div {...props} />, [
    ['flex', () => 'display:flex;'],
  ] as const);
  const { getByTestId } = render(<MyComponent data-testid="hocBooleon" flex />);
  expect(getByTestId('hocBooleon')).toHaveStyle('display: flex;');
});
