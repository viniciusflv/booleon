/**
 * @jest-environment node
 */
import ReactDOM from 'react-dom/server';

import '@testing-library/jest-dom';

import { changeChildrenTag } from './changeChildrenTag';

describe('changeChildrenTag', () => {
  test('typeof component string', () => {
    const MyComponent = changeChildrenTag(null, 'div', {
      'data-testid': 'changeChildrenTag',
    });

    const string = ReactDOM.renderToString(MyComponent);
    expect(string).toMatchInlineSnapshot(
      '"<div data-testid=\\"changeChildrenTag\\" data-reactroot=\\"\\"></div>"',
    );
  });

  test('tag and typeof component object', () => {
    const MyComponent = changeChildrenTag('section', 'div', {
      'data-testid': 'changeChildrenTag',
    });

    const string = ReactDOM.renderToString(MyComponent);
    expect(string).toMatchInlineSnapshot(
      '"<section data-testid=\\"changeChildrenTag\\" data-reactroot=\\"\\"></section>"',
    );
  });

  test('tag and typeof component object', () => {
    const MyComponent = changeChildrenTag('section', () => <span>AAA</span>, {
      'data-testid': 'changeChildrenTag',
    });

    const string = ReactDOM.renderToString(MyComponent);
    expect(string).toMatchInlineSnapshot(
      '"<section data-testid=\\"changeChildrenTag\\" data-reactroot=\\"\\"><span>AAA</span></section>"',
    );
  });
});
