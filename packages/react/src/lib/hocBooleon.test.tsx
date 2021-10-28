import '@testing-library/jest-dom';

import { useEffect, useRef } from 'react';

import { render } from '@testing-library/react';

import { hocBooleon } from './hocBooleon';

describe('hocBooleon', () => {
  test('html element', () => {
    const MyComponent = hocBooleon('div', {
      flex: () => 'display:flex;',
    });

    const { getByTestId } = render(
      <MyComponent data-testid="hocBooleon" flex />,
    );
    expect(getByTestId('hocBooleon')).toHaveStyle('display: flex;');
  });

  test('component', () => {
    const MyComponent = hocBooleon(
      (props) => (
        <div {...props}>
          <span>AAA</span>
        </div>
      ),
      {
        flex: () => 'display:flex;',
      },
    );

    const { getByTestId } = render(
      <MyComponent data-testid="hocBooleon" flex />,
    );
    expect(getByTestId('hocBooleon')).toHaveStyle('display: flex;');
  });

  test('att element', () => {
    const MyComponent = hocBooleon(
      'div',
      {
        flex: () => 'display:flex;',
      },
      {
        att: ({ className }) => `.${className}{display:grid;}`,
      },
    );

    const { getByTestId } = render(
      <MyComponent data-testid="hocBooleon" att__flex />,
    );
    expect(getByTestId('hocBooleon')).toHaveStyle('display: grid;');
  });

  test('ref element', () => {
    const MyComponent = hocBooleon('section', {
      flex: () => 'display:flex;',
    });

    const RefComponent = () => {
      const ref = useRef<HTMLElement>();

      useEffect(() => {
        ref.current?.setAttribute('data-testid', 'hocBooleon');
      }, []);

      return <MyComponent ref={ref} />;
    };

    const { getByTestId } = render(<RefComponent />);

    expect(getByTestId('hocBooleon')).toBeDefined();
  });
});
