import React, { useEffect } from 'react';

import { render } from '@testing-library/react';

import { booleon, useTheme } from '.';
import '@testing-library/jest-dom';

test('useTheme', () => {
  const MyComponent = booleon.div([
    {
      flex: () => 'display:flex;',
    },
  ]);

  const WrappedComponent = () => {
    const { toggleTheme } = useTheme();
    useEffect(() => {
      toggleTheme();
    }, []);
    return <MyComponent data-testid="useTheme" dark__flex />;
  };

  const { getByTestId } = render(<WrappedComponent />);

  expect(getByTestId('useTheme')).toHaveStyle('display:flex;');
});
