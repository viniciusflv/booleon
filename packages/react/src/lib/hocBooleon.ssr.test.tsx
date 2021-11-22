/**
 * @jest-environment node
 */
import '@testing-library/jest-dom';

import ReactDOM from 'react-dom/server';

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
      <MyComponent data-testid="hocBooleon" tag="section" flex />,
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
        att: ({ className }) => `.${className}{display:grid;}`,
      },
    );

    const string = ReactDOM.renderToString(
      <MyComponent data-testid="hocBooleon" tag="section" att__flex />,
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
      <MyComponent data-testid="hocBooleon" flex tag="button" />,
    );
    expect(string).toMatchInlineSnapshot(
      '"<style data-booleon=\\"bl--1802589470\\">.bl--1802589470{display:flex;}</style><button class=\\"bl--1802589470\\" data-testid=\\"hocBooleon\\"><div><span>AAA</span></div></button>"',
    );
  });
});
