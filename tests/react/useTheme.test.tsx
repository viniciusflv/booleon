import React, { useEffect } from 'react';

import { booleon, useTheme } from '../../packages/react/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('useTheme', () => {
  const MyComponent = booleon.div([
    ['bg_black', () => 'background-color:black;'],
  ] as const);

  const WrappedComponent = () => {
    const { toggleTheme } = useTheme();
    useEffect(() => {
      toggleTheme();
    }, []);
    return <MyComponent data-testid="useTheme" dark__bg_black />;
  };

  const { getByTestId } = render(<WrappedComponent />);

  expect(getByTestId('useTheme')).toHaveStyle('background-color:black;');
});
