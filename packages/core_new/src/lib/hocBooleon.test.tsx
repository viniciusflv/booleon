import React from 'react';

import { render } from '@testing-library/react';

import { hocBooleon } from './hocBooleon';

import '@testing-library/jest-dom';

test('hocBooleon', () => {
  const MyComponent = hocBooleon((props) => <div {...props} />, [
    ['flex', () => 'display:flex;'],
  ]);
  const { getByTestId } = render(<MyComponent data-testid="hocBooleon" flex />);
  expect(getByTestId('hocBooleon')).toHaveStyle('display: flex;');
});
