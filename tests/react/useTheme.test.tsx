import React, { useEffect } from 'react';

import { render } from '@testing-library/react';

import modules from '../../packages/modules/src/lib';
import { booleon, useTheme } from '../../packages/react/src';
import '@testing-library/jest-dom';

test('useTheme', () => {
  const MyComponent = booleon.div(modules);

  const WrappedComponent = () => {
    const { toggleTheme } = useTheme();
    useEffect(() => {
      toggleTheme();
    }, []);
    return <MyComponent data-testid="useTheme" dark__bg_color_000 />;
  };

  const { getByTestId } = render(<WrappedComponent />);

  expect(getByTestId('useTheme')).toHaveStyle('background-color:#000;');
});
