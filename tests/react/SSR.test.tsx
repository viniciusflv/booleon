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
    const string = ReactDOM.renderToString(<MyComponent flex />);
    expect(string).toMatchSnapshot();
  });

  test('renderToStaticMarkup', () => {
    const MyComponent = booleon.section([
      ['flex', () => 'display:flex;'],
    ] as const);
    const string = ReactDOM.renderToStaticMarkup(<MyComponent flex />);
    expect(string).toMatchSnapshot();
  });

  test('renderToNodeStream', async (done) => {
    const MyComponent = booleon.section([
      ['flex', () => 'display:flex;'],
    ] as const);
    const stream = ReactDOM.renderToNodeStream(<MyComponent flex />);
    const string = await new Promise((resolve, reject) => {
      let received = '';
      stream.on('data', (chunk) => (received += chunk));
      stream.on('end', () => resolve(received));
      stream.on('error', reject);
    });

    expect(string).toMatchSnapshot();

    done();
  });

  test('renderToStaticNodeStream', async (done) => {
    const MyComponent = booleon.section([
      ['flex', () => 'display:flex;'],
    ] as const);
    const staticStream = ReactDOM.renderToStaticNodeStream(
      <MyComponent flex />,
    );
    const string = await new Promise((resolve, reject) => {
      let received = '';
      staticStream.on('data', (chunk) => (received += chunk));
      staticStream.on('end', () => resolve(received));
      staticStream.on('error', reject);
    });

    expect(string).toMatchSnapshot();

    done();
  });
});
