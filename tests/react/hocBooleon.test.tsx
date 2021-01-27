import React from 'react';

import { render } from '@testing-library/react';

import { flex } from '../../packages/modules/src/lib/flex';
import { hocBooleon } from '../../packages/react/src';
import '@testing-library/jest-dom';

test('hocBooleon', () => {
  const MyComponent = hocBooleon((props) => <div {...props} />, flex);
  const { getByTestId } = render(<MyComponent data-testid="hocBooleon" flex />);
  expect(getByTestId('hocBooleon')).toHaveStyle('display: flex;');
});
