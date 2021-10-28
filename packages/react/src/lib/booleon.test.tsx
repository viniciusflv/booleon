import '@testing-library/jest-dom';

import { useRef, useEffect } from 'react';

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
        att: ({ className }) => `.${className}{display:grid;}`,
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
});
