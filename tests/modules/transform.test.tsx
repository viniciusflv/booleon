import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { transform } from '../../packages/modules/src/lib/transform';
import { hocBooleon } from '../../packages/react/src';

describe('Transform', () => {
  let TransformComponent;

  beforeAll(() => {
    TransformComponent = hocBooleon((props) => <div {...props} />, transform);
  });

  describe('Scale', () => {
    test('sl_1', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="sl_1" sl_1 />,
      );
      expect(getByTestId('sl_1')).toHaveStyle('transform: scale(0.01,0.01);');
    });

    test('slx_1', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="slx_1" slx_1 />,
      );
      expect(getByTestId('slx_1')).toHaveStyle('transform: scaleX(0.01);');
    });

    test('sly_1', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="sly_1" sly_1 />,
      );
      expect(getByTestId('sly_1')).toHaveStyle('transform: scaleY(0.01);');
    });

    test('sl_neg_1', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="sl_neg_1" sl_neg_1 />,
      );
      expect(getByTestId('sl_neg_1')).toHaveStyle(
        'transform: scale(-0.01,-0.01);',
      );
    });

    test('slx_neg_1', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="slx_neg_1" slx_neg_1 />,
      );
      expect(getByTestId('slx_neg_1')).toHaveStyle('transform: scaleX(-0.01);');
    });

    test('sly_neg_1', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="sly_neg_1" sly_neg_1 />,
      );
      expect(getByTestId('sly_neg_1')).toHaveStyle('transform: scaleY(-0.01);');
    });
  });

  describe('Skew', () => {
    test('sk_30deg', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="sk_30deg" sk_30deg />,
      );
      expect(getByTestId('sk_30deg')).toHaveStyle(
        'transform: skew(30deg,30deg);',
      );
    });

    test('skx_30deg', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="skx_30deg" skx_30deg />,
      );
      expect(getByTestId('skx_30deg')).toHaveStyle('transform: skewX(30deg);');
    });

    test('sky_30deg', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="sky_30deg" sky_30deg />,
      );
      expect(getByTestId('sky_30deg')).toHaveStyle('transform: skewY(30deg);');
    });

    test('sk_neg_30deg', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="sk_neg_30deg" sk_neg_30deg />,
      );
      expect(getByTestId('sk_neg_30deg')).toHaveStyle(
        'transform: skew(-30deg,-30deg);',
      );
    });

    test('skx_neg_30deg', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="skx_neg_30deg" skx_neg_30deg />,
      );
      expect(getByTestId('skx_neg_30deg')).toHaveStyle(
        'transform: skewX(-30deg);',
      );
    });

    test('sky_neg_30deg', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="sky_neg_30deg" sky_neg_30deg />,
      );
      expect(getByTestId('sky_neg_30deg')).toHaveStyle(
        'transform: skewY(-30deg);',
      );
    });
  });

  describe('Rotate', () => {
    test('rt_30deg', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="rt_30deg" rt_30deg />,
      );
      expect(getByTestId('rt_30deg')).toHaveStyle('transform: rotate(30deg);');
    });

    test('rt_neg_30deg', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="rt_neg_30deg" rt_neg_30deg />,
      );
      expect(getByTestId('rt_neg_30deg')).toHaveStyle(
        'transform: rotate(-30deg);',
      );
    });
  });

  describe('Origin', () => {
    test('ori_center', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="ori_center" ori_center />,
      );
      expect(getByTestId('ori_center')).toHaveStyle(
        'transform-origin: center;',
      );
    });

    test('ori_top', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="ori_top" ori_top />,
      );
      expect(getByTestId('ori_top')).toHaveStyle('transform-origin: top;');
    });

    test('ori_top_right', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="ori_top_right" ori_top_right />,
      );
      expect(getByTestId('ori_top_right')).toHaveStyle(
        'transform-origin: top right;',
      );
    });

    test('ori_right', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="ori_right" ori_right />,
      );
      expect(getByTestId('ori_right')).toHaveStyle('transform-origin: right;');
    });

    test('ori_bottom_right', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="ori_bottom_right" ori_bottom_right />,
      );
      expect(getByTestId('ori_bottom_right')).toHaveStyle(
        'transform-origin: bottom right;',
      );
    });

    test('ori_bottom', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="ori_bottom" ori_bottom />,
      );
      expect(getByTestId('ori_bottom')).toHaveStyle(
        'transform-origin: bottom;',
      );
    });

    test('ori_bottom_left', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="ori_bottom_left" ori_bottom_left />,
      );
      expect(getByTestId('ori_bottom_left')).toHaveStyle(
        'transform-origin: bottom left;',
      );
    });

    test('ori_left', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="ori_left" ori_left />,
      );
      expect(getByTestId('ori_left')).toHaveStyle('transform-origin: left;');
    });

    test('ori_top_left', () => {
      const { getByTestId } = render(
        <TransformComponent data-testid="ori_top_left" ori_top_left />,
      );
      expect(getByTestId('ori_top_left')).toHaveStyle(
        'transform-origin: top left;',
      );
    });
  });

  describe('Translate', () => {
    describe('Full', () => {
      test('tl_100$', () => {
        const { getByTestId } = render(
          <TransformComponent data-testid="tl_100$" tl_100$ />,
        );
        expect(getByTestId('tl_100$')).toHaveStyle(
          'transform:translate(100%,100%);',
        );
      });

      test('tl_neg_100$', () => {
        const { getByTestId } = render(
          <TransformComponent data-testid="tl_neg_100$" tl_neg_100$ />,
        );
        expect(getByTestId('tl_neg_100$')).toHaveStyle(
          'transform:translate(-100%,-100%);',
        );
      });

      test('tlx_100$', () => {
        const { getByTestId } = render(
          <TransformComponent data-testid="tlx_100$" tlx_100$ />,
        );
        expect(getByTestId('tlx_100$')).toHaveStyle(
          'transform: translateX(100%);',
        );
      });

      test('tly_neg_100$', () => {
        const { getByTestId } = render(
          <TransformComponent data-testid="tly_neg_100$" tly_neg_100$ />,
        );
        expect(getByTestId('tly_neg_100$')).toHaveStyle(
          'transform: translateY(-100%);',
        );
      });
    });
  });
});
