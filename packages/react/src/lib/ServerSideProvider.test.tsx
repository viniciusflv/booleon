/**
 * @jest-environment node
 */
import React from 'react';
import ReactDOM from 'react-dom/server';

import { booleon } from './booleon';
import { ServerSideSheet, ServerSideProvider } from './ServerSideProvider';

const MyComponent = booleon.section({ flex: () => 'display:flex;' });

describe('ServerSideProvider', () => {
  describe('Without Provider', () => {
    test('Without Provider - renderToString', () => {
      const string = ReactDOM.renderToString(<MyComponent flex />);
      expect(string).toMatchInlineSnapshot(
        '"<style data-booleon=\\"bl--1802589470\\">.bl--1802589470{display:flex;}</style><section class=\\"bl--1802589470\\"></section>"',
      );
    });

    test('Without Provider - renderToStaticMarkup', () => {
      const string = ReactDOM.renderToStaticMarkup(<MyComponent flex />);
      expect(string).toMatchInlineSnapshot(
        '"<style data-booleon=\\"bl--1802589470\\">.bl--1802589470{display:flex;}</style><section class=\\"bl--1802589470\\"></section>"',
      );
    });

    test('Without Provider - renderToNodeStream', async (done) => {
      const stream = ReactDOM.renderToNodeStream(<MyComponent flex />);
      const string = await new Promise((resolve, reject) => {
        let received = '';
        stream.on('data', (chunk) => (received += chunk));
        stream.on('end', () => resolve(received));
        stream.on('error', reject);
      });

      expect(string).toMatchInlineSnapshot(
        '"<style data-booleon=\\"bl--1802589470\\">.bl--1802589470{display:flex;}</style><section class=\\"bl--1802589470\\"></section>"',
      );

      done();
    });

    test('Without Provider - renderToStaticNodeStream', async (done) => {
      const staticStream = ReactDOM.renderToStaticNodeStream(
        <MyComponent flex />,
      );
      const string = await new Promise((resolve, reject) => {
        let received = '';
        staticStream.on('data', (chunk) => (received += chunk));
        staticStream.on('end', () => resolve(received));
        staticStream.on('error', reject);
      });

      expect(string).toMatchInlineSnapshot(
        '"<style data-booleon=\\"bl--1802589470\\">.bl--1802589470{display:flex;}</style><section class=\\"bl--1802589470\\"></section>"',
      );

      done();
    });
  });

  describe('With Provider', () => {
    test('With Provider - renderToString', () => {
      const ssrSheet = new ServerSideSheet();
      const string = ReactDOM.renderToString(
        <ServerSideProvider ssrSheet={ssrSheet}>
          <MyComponent flex />
        </ServerSideProvider>,
      );
      const sheet = ReactDOM.renderToString(ssrSheet.getSheet);
      expect(sheet).toMatchInlineSnapshot(
        '"<style data-booleon=\\"bl--1802589470\\" data-reactroot=\\"\\">.bl--1802589470{display:flex;}</style>"',
      );
      expect(string).toMatchInlineSnapshot(
        '"<section class=\\"bl--1802589470\\"></section>"',
      );
    });

    test('With Provider - renderToStaticMarkup', () => {
      const ssrSheet = new ServerSideSheet();
      const string = ReactDOM.renderToString(
        <ServerSideProvider ssrSheet={ssrSheet}>
          <MyComponent flex />
        </ServerSideProvider>,
      );
      const sheet = ReactDOM.renderToString(ssrSheet.getSheet);
      expect(sheet).toMatchInlineSnapshot(
        '"<style data-booleon=\\"bl--1802589470\\" data-reactroot=\\"\\">.bl--1802589470{display:flex;}</style>"',
      );
      expect(string).toMatchInlineSnapshot(
        '"<section class=\\"bl--1802589470\\"></section>"',
      );
    });

    test('With Provider - renderToNodeStream', async (done) => {
      const ssrSheet = new ServerSideSheet();
      const stream = ReactDOM.renderToNodeStream(
        <ServerSideProvider ssrSheet={ssrSheet}>
          <MyComponent flex />
        </ServerSideProvider>,
      );
      const string = await new Promise((resolve, reject) => {
        let received = '';
        stream.on('data', (chunk) => (received += chunk));
        stream.on('end', () => resolve(received));
        stream.on('error', reject);
      });
      const sheet = ReactDOM.renderToString(ssrSheet.getSheet);

      expect(sheet).toMatchInlineSnapshot(
        '"<style data-booleon=\\"bl--1802589470\\" data-reactroot=\\"\\">.bl--1802589470{display:flex;}</style>"',
      );
      expect(string).toMatchInlineSnapshot(
        '"<section class=\\"bl--1802589470\\"></section>"',
      );

      done();
    });

    test('With Provider - renderToStaticNodeStream', async (done) => {
      const ssrSheet = new ServerSideSheet();
      const stream = ReactDOM.renderToStaticNodeStream(
        <ServerSideProvider ssrSheet={ssrSheet}>
          <MyComponent flex />
        </ServerSideProvider>,
      );
      const string = await new Promise((resolve, reject) => {
        let received = '';
        stream.on('data', (chunk) => (received += chunk));
        stream.on('end', () => resolve(received));
        stream.on('error', reject);
      });
      const sheet = ReactDOM.renderToString(ssrSheet.getSheet);

      expect(sheet).toMatchInlineSnapshot(
        '"<style data-booleon=\\"bl--1802589470\\" data-reactroot=\\"\\">.bl--1802589470{display:flex;}</style>"',
      );
      expect(string).toMatchInlineSnapshot(
        '"<section class=\\"bl--1802589470\\"></section>"',
      );

      done();
    });
  });
});
