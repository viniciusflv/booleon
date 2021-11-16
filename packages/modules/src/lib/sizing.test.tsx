import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { booleon } from '../../../react/src';
import { sizing } from './sizing';

const BooleonComponent = booleon.div(sizing);
describe('Sizing', () => {
  describe('Height', () => {
    test('h_100px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_100px" h_100px />,
      );
      expect(getByTestId('h_100px')).toHaveStyle('height: 100px;');
    });

    test('max_h_100px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="max_h_100px" max_h_100px />,
      );
      expect(getByTestId('max_h_100px')).toHaveStyle('max-height: 100px;');
    });

    test('min_h_100px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="min_h_100px" min_h_100px />,
      );
      expect(getByTestId('min_h_100px')).toHaveStyle('min-height: 100px;');
    });

    test('h_30vh', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_30vh" h_30vh />,
      );
      expect(getByTestId('h_30vh')).toHaveStyle('height: 30vh;');
    });

    test('max_h_30vh', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="max_h_30vh" max_h_30vh />,
      );
      expect(getByTestId('max_h_30vh')).toHaveStyle('max-height: 30vh;');
    });

    test('min_h_30vh', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="min_h_30vh" min_h_30vh />,
      );
      expect(getByTestId('min_h_30vh')).toHaveStyle('min-height: 30vh;');
    });

    test('h_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_100$" h_100$ />,
      );
      expect(getByTestId('h_100$')).toHaveStyle('height: 100%;');
    });

    test('max_h_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="max_h_100$" max_h_100$ />,
      );
      expect(getByTestId('max_h_100$')).toHaveStyle('max-height: 100%;');
    });

    test('min_h_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="min_h_100$" min_h_100$ />,
      );
      expect(getByTestId('min_h_100$')).toHaveStyle('min-height: 100%;');
    });

    test('h_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_auto" h_auto />,
      );
      expect(getByTestId('h_auto')).toHaveStyle('height: auto;');
    });

    test('max_h_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="max_h_auto" max_h_auto />,
      );
      expect(getByTestId('max_h_auto')).toHaveStyle('max-height: auto;');
    });

    test('min_h_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="min_h_auto" min_h_auto />,
      );
      expect(getByTestId('min_h_auto')).toHaveStyle('min-height: auto;');
    });

    test('h_100vh', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_100vh" h_100vh />,
      );
      expect(getByTestId('h_100vh')).toHaveStyle('height: 100vh;');
    });

    test('max_h_100vh', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="max_h_100vh" max_h_100vh />,
      );
      expect(getByTestId('max_h_100vh')).toHaveStyle('max-height: 100vh;');
    });

    test('min_h_100vh', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="min_h_100vh" min_h_100vh />,
      );
      expect(getByTestId('min_h_100vh')).toHaveStyle('min-height: 100vh;');
    });
  });

  describe('Width', () => {
    test('w_100px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_100px" w_100px />,
      );
      expect(getByTestId('w_100px')).toHaveStyle('width: 100px;');
    });

    test('max_w_100px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="max_w_100px" max_w_100px />,
      );
      expect(getByTestId('max_w_100px')).toHaveStyle('max-width: 100px;');
    });

    test('min_w_100px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="min_w_100px" min_w_100px />,
      );
      expect(getByTestId('min_w_100px')).toHaveStyle('min-width: 100px;');
    });

    test('w_30vw', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_30vw" w_30vw />,
      );
      expect(getByTestId('w_30vw')).toHaveStyle('width: 30vw;');
    });

    test('max_w_30vw', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="max_w_30vw" max_w_30vw />,
      );
      expect(getByTestId('max_w_30vw')).toHaveStyle('max-width: 30vw;');
    });

    test('min_w_30vw', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="min_w_30vw" min_w_30vw />,
      );
      expect(getByTestId('min_w_30vw')).toHaveStyle('min-width: 30vw;');
    });

    test('w_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_100$" w_100$ />,
      );
      expect(getByTestId('w_100$')).toHaveStyle('width: 100%;');
    });

    test('max_w_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="max_w_100$" max_w_100$ />,
      );
      expect(getByTestId('max_w_100$')).toHaveStyle('max-width: 100%;');
    });

    test('min_w_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="min_w_100$" min_w_100$ />,
      );
      expect(getByTestId('min_w_100$')).toHaveStyle('min-width: 100%;');
    });

    test('w_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_auto" w_auto />,
      );
      expect(getByTestId('w_auto')).toHaveStyle('width: auto;');
    });

    test('max_w_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="max_w_auto" max_w_auto />,
      );
      expect(getByTestId('max_w_auto')).toHaveStyle('max-width: auto;');
    });

    test('min_w_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="min_w_auto" min_w_auto />,
      );
      expect(getByTestId('min_w_auto')).toHaveStyle('min-width: auto;');
    });

    test('w_100vw', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_100vw" w_100vw />,
      );
      expect(getByTestId('w_100vw')).toHaveStyle('width: 100vw;');
    });

    test('max_w_100vw', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="max_w_100vw" max_w_100vw />,
      );
      expect(getByTestId('max_w_100vw')).toHaveStyle('max-width: 100vw;');
    });

    test('min_w_100vw', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="min_w_100vw" min_w_100vw />,
      );
      expect(getByTestId('min_w_100vw')).toHaveStyle('min-width: 100vw;');
    });
  });
});
