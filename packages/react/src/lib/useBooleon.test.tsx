import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { useBooleon } from './useBooleon';

describe('useBooleon', () => {
  test('module', () => {
    const MyComponent = (props: any) => {
      const [className, htmlProps] = useBooleon(props, {
        flex: () => 'display:flex;',
      });
      return <div className={className} {...htmlProps} />;
    };
    const { getByTestId } = render(
      <MyComponent data-testid="useBooleon" flex />,
    );
    expect(getByTestId('useBooleon')).toHaveStyle('display: flex;');
  });

  test('att', () => {
    const MyComponent = (props: any) => {
      const [className, htmlProps] = useBooleon(
        props,
        {
          flex: () => 'display:flex;',
        },
        {
          selectors: {
            att: ({ className }) => `.${className}{display:grid;}`,
          },
        },
      );
      return <div className={className} {...htmlProps} />;
    };
    const { getByTestId } = render(
      <MyComponent data-testid="useBooleon" att__flex />,
    );

    expect(getByTestId('useBooleon')).toHaveStyle('display: grid;');
  });

  test('tokens', () => {
    const MyComponent = (props: any) => {
      const [className, htmlProps] = useBooleon(
        props,
        {
          ft_color_ruby: (_, t) => `color:${t?.colors.ruby};`,
        },
        {
          tokens: {
            colors: { ruby: '#f00' },
          },
        },
      );
      return <div className={className} {...htmlProps} />;
    };
    const { getByTestId } = render(
      <MyComponent data-testid="useBooleon" ft_color_ruby />,
    );

    expect(getByTestId('useBooleon')).toHaveStyle('color:#f00;');
  });
});
