/**
 * @jest-environment node
 */
import '@testing-library/jest-dom';

import ReactDOM from 'react-dom/server';

import { changeChildrenTag } from './changeChildrenTag';

describe('hocBooleon', () => {
  test('typeof component string', () => {
    const MyComponent = changeChildrenTag(null, 'div', {
      'data-testid': 'hocBooleon',
    });

    const string = ReactDOM.renderToString(MyComponent);
    expect(string).toMatchInlineSnapshot(
      '"<div data-testid=\\"hocBooleon\\" data-reactroot=\\"\\"></div>"',
    );
  });

  test('tag and typeof component object', () => {
    const MyComponent = changeChildrenTag('section', 'div', {
      'data-testid': 'hocBooleon',
    });

    const string = ReactDOM.renderToString(MyComponent);
    expect(string).toMatchInlineSnapshot(
      '"<section data-testid=\\"hocBooleon\\" data-reactroot=\\"\\"></section>"',
    );
  });

  test('tag and typeof component object', () => {
    const MyComponent = changeChildrenTag('section', () => <span>AAA</span>, {
      'data-testid': 'hocBooleon',
    });

    const string = ReactDOM.renderToString(MyComponent);
    expect(string).toMatchInlineSnapshot(
      '"<section data-testid=\\"hocBooleon\\" data-reactroot=\\"\\"><span>AAA</span></section>"',
    );
  });
});
