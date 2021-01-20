import React from 'react';

import { render } from '@testing-library/react';

import { useBooleon } from '../../packages/react/src';
import '@testing-library/jest-dom';

test('useBooleon', () => {
  const MyComponent = (props: any) => {
    const [className, htmlProps] = useBooleon(props, [
      ['flex', () => 'display:flex;'],
    ]);
    return <div className={className} {...htmlProps} />;
  };
  const { getByTestId } = render(<MyComponent data-testid="useBooleon" flex />);
  expect(getByTestId('useBooleon')).toHaveStyle('display: flex;');
});
