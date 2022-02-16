/**
 * @jest-environment jsdom
 */
import { useEffect } from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { booleon } from './booleon';
import { useTheme } from './useTheme';

test('useTheme', () => {
  const MyComponent = booleon.div({
    flex: () => 'display:flex;',
  });

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
