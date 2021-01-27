import '@testing-library/jest-dom';
import React from 'react';

import { render } from '@testing-library/react';

import { flex } from '../../packages/modules/src';
import { useBooleon } from '../../packages/react/src';

test('useBooleon', () => {
  const MyComponent = (props: any) => {
    const [className, htmlProps] = useBooleon(props, flex);
    return <div className={className} {...htmlProps} />;
  };
  const { getByTestId } = render(<MyComponent data-testid="useBooleon" flex />);
  expect(getByTestId('useBooleon')).toHaveStyle('display: flex;');
});
