/**
 * @jest-environment node
 */
import React from 'react';
import ReactDOM from 'react-dom/server';

import { booleon } from '../../packages/react/src';

describe('SSR', () => {
  test('renderToString', () => {
    const MyComponent = booleon.section([
      ['flex', () => 'display:flex;'],
    ] as const);
    const string = ReactDOM.renderToString(
      <MyComponent data-testid="renderToString" flex />,
    );
    expect(string).toBe(
      '<style data-booleon="bl--1587999785">.bl--1587999785{display:flex;}</style><section class="bl--1587999785" data-testid="renderToString"></section>',
    );
  });
});
