/**
 * @jest-environment jsdom
 */
import { useEffect, useRef } from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { booleon } from './booleon';

describe('booleon', () => {
  test('html element', () => {
    const MyComponent = booleon.div({
      flex: () => 'display:flex;',
    });

    const { getByTestId } = render(<MyComponent data-testid="booleon" flex />);
    expect(getByTestId('booleon')).toHaveStyle('display: flex;');
  });

  test('component', () => {
    const MyComponent = booleon((props) => <div {...props} />, {
      flex: () => 'display:flex;',
    });

    const { getByTestId } = render(<MyComponent data-testid="booleon" flex />);
    expect(getByTestId('booleon')).toHaveStyle('display: flex;');
  });

  test('att element', () => {
    const MyComponent = booleon.div(
      {
        flex: () => 'display:flex;',
      },
      {
        selectors: {
          att: ({ className }) => `.${className}{display:grid;}`,
        },
      },
    );

    const { getByTestId } = render(
      <MyComponent data-testid="booleon" att__flex />,
    );
    expect(getByTestId('booleon')).toHaveStyle('display: grid;');
  });

  test('ref element', () => {
    const MyComponent = booleon.div({
      flex: () => 'display:flex;',
    });

    const RefComponent = () => {
      const ref = useRef<HTMLElement>();

      useEffect(() => {
        ref.current?.setAttribute('data-testid', 'booleon');
      }, []);

      return <MyComponent ref={ref} flex />;
    };

    const { getByTestId } = render(<RefComponent />);

    expect(getByTestId('booleon')).toBeDefined();
  });

  test('tokens', () => {
    const MyComponent = booleon.div(
      {
        ft_color_ruby: (_, t) => `color:${t?.colors.ruby};`,
      },
      {
        tokens: {
          colors: { ruby: '#f00' },
        },
      },
    );

    const { getByTestId } = render(
      <MyComponent data-testid="booleon" ft_color_ruby />,
    );
    expect(getByTestId('booleon')).toHaveStyle('color:#f00;');
  });
});