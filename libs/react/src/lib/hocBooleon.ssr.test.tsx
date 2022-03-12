/**
 * @jest-environment node
 */
import ReactDOM from 'react-dom/server';

import '@testing-library/jest-dom';

import { hocBooleon } from './hocBooleon';

describe('hocBooleon', () => {
  test('html element', () => {
    const MyComponent = hocBooleon('div', {
      flex: () => 'display:flex;',
    });

    const string = ReactDOM.renderToString(
      <MyComponent data-testid="hocBooleon" flex />,
    );
    expect(string).toMatchInlineSnapshot(
      '"<style data-booleon=\\"bl--1802589470\\">.bl--1802589470{display:flex;}</style><div class=\\"bl--1802589470\\" data-testid=\\"hocBooleon\\"></div>"',
    );
  });

  test('as with html element', () => {
    const MyComponent = hocBooleon('div', {
      flex: () => 'display:flex;',
    });

    const string = ReactDOM.renderToString(
      <MyComponent data-testid="hocBooleon" as="section" flex />,
    );
    expect(string).toMatchInlineSnapshot(
      '"<style data-booleon=\\"bl--1802589470\\">.bl--1802589470{display:flex;}</style><section class=\\"bl--1802589470\\" data-testid=\\"hocBooleon\\"></section>"',
    );
  });

  test('att element', () => {
    const MyComponent = hocBooleon(
      'div',
      {
        flex: () => 'display:flex;',
      },
      {
        selectors: {
          att: ({ className }) => `.${className}{display:grid;}`,
        },
      },
    );

    const string = ReactDOM.renderToString(
      <MyComponent data-testid="hocBooleon" as="section" att__flex />,
    );
    expect(string).toMatchInlineSnapshot(
      '"<style data-booleon=\\"bl--1584053823\\">.bl--1584053823{display:grid;}</style><section class=\\"bl--1584053823\\" data-testid=\\"hocBooleon\\"></section>"',
    );
  });

  test('as with component', () => {
    const MyComponent = hocBooleon(
      (props) => {
        return (
          <div {...props}>
            <span>AAA</span>
          </div>
        );
      },
      {
        flex: () => 'display:flex;',
      },
    );

    const string = ReactDOM.renderToString(
      <MyComponent data-testid="hocBooleon" flex as="button" />,
    );
    expect(string).toMatchInlineSnapshot(
      '"<style data-booleon=\\"bl--1802589470\\">.bl--1802589470{display:flex;}</style><button class=\\"bl--1802589470\\" data-testid=\\"hocBooleon\\"><div><span>AAA</span></div></button>"',
    );
  });

  test('token', () => {
    const MyComponent = hocBooleon(
      'div',
      {
        ft_color_ruby: (_, t) => `color:${t?.colors.ruby};`,
      },
      {
        tokens: {
          colors: { ruby: '#f00' },
        },
      },
    );

    const string = ReactDOM.renderToString(
      <MyComponent data-testid="hocBooleon" as="section" ft_color_ruby />,
    );
    expect(string).toMatchInlineSnapshot(
      '"<style data-booleon=\\"bl--1084937644\\">.bl--1084937644{color:#f00;}</style><section class=\\"bl--1084937644\\" data-testid=\\"hocBooleon\\"></section>"',
    );
  });
});
