import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { booleon } from '../../../react/src';
import { transform } from './transform';

const BooleonComponent = booleon.div(transform);
describe('Transform', () => {
  describe('Scale', () => {
    test.skip('combine', () => {
      const { getByTestId } = render(
        <BooleonComponent
          data-testid="combine"
          tf_sl_1
          tf_slx_1
          tf_sly_1
          tf_sl_neg_1
          tf_slx_neg_1
          tf_sly_neg_1
          tf_sk_30deg
          tf_skx_30deg
          tf_sky_30deg
          tf_sk_neg_30deg
          tf_skx_neg_30deg
          tf_sky_neg_30deg
          tf_rt_30deg
          tf_rt_neg_30deg
          tf_ori_center
          tf_ori_top
          tf_ori_top_right
          tf_ori_right
          tf_ori_bottom_right
          tf_ori_bottom
          tf_ori_bottom_left
          tf_ori_left
          tf_ori_top_left
          tf_tl_100
          tf_tl_neg_100
          tf_tlx_100
          tf_tly_neg_100
        />,
      );
      expect(getByTestId('combine')).toHaveStyle(
        'transform:' +
          'translateY(-100)' +
          'translateX(100)' +
          'translate(-100,-100)' +
          'translate(100,100)' +
          'rotate(-30deg)' +
          'rotate(30deg)' +
          'skewY(-30deg)' +
          'skewX(-30deg)' +
          'skew(-30deg,-30deg)' +
          'skewY(30deg)' +
          'skewX(30deg)' +
          'skew(30deg,30deg)' +
          'scaleY(-0.01)' +
          'scaleX(-0.01)' +
          'scale(-0.01,-0.01)' +
          'scaleY(0.01)' +
          'scaleX(0.01)' +
          'scale(0.01,0.01);',
      );
      expect(getByTestId('combine')).toHaveStyle('transform-origin:top left;');
    });

    test('tf_sl_1', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_sl_1" tf_sl_1 />,
      );
      expect(getByTestId('tf_sl_1')).toHaveStyle(
        'transform: scale(0.01,0.01);',
      );
    });

    test('tf_slx_1', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_slx_1" tf_slx_1 />,
      );
      expect(getByTestId('tf_slx_1')).toHaveStyle('transform: scaleX(0.01);');
    });

    test('tf_sly_1', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_sly_1" tf_sly_1 />,
      );
      expect(getByTestId('tf_sly_1')).toHaveStyle('transform: scaleY(0.01);');
    });

    test('tf_sl_neg_1', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_sl_neg_1" tf_sl_neg_1 />,
      );
      expect(getByTestId('tf_sl_neg_1')).toHaveStyle(
        'transform: scale(-0.01,-0.01);',
      );
    });

    test('tf_slx_neg_1', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_slx_neg_1" tf_slx_neg_1 />,
      );
      expect(getByTestId('tf_slx_neg_1')).toHaveStyle(
        'transform: scaleX(-0.01);',
      );
    });

    test('tf_sly_neg_1', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_sly_neg_1" tf_sly_neg_1 />,
      );
      expect(getByTestId('tf_sly_neg_1')).toHaveStyle(
        'transform: scaleY(-0.01);',
      );
    });
  });

  describe('Skew', () => {
    test('tf_sk_30deg', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_sk_30deg" tf_sk_30deg />,
      );
      expect(getByTestId('tf_sk_30deg')).toHaveStyle(
        'transform: skew(30deg,30deg);',
      );
    });

    test('tf_skx_30deg', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_skx_30deg" tf_skx_30deg />,
      );
      expect(getByTestId('tf_skx_30deg')).toHaveStyle(
        'transform: skewX(30deg);',
      );
    });

    test('tf_sky_30deg', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_sky_30deg" tf_sky_30deg />,
      );
      expect(getByTestId('tf_sky_30deg')).toHaveStyle(
        'transform: skewY(30deg);',
      );
    });

    test('tf_sk_neg_30deg', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_sk_neg_30deg" tf_sk_neg_30deg />,
      );
      expect(getByTestId('tf_sk_neg_30deg')).toHaveStyle(
        'transform: skew(-30deg,-30deg);',
      );
    });

    test('tf_skx_neg_30deg', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_skx_neg_30deg" tf_skx_neg_30deg />,
      );
      expect(getByTestId('tf_skx_neg_30deg')).toHaveStyle(
        'transform: skewX(-30deg);',
      );
    });

    test('tf_sky_neg_30deg', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_sky_neg_30deg" tf_sky_neg_30deg />,
      );
      expect(getByTestId('tf_sky_neg_30deg')).toHaveStyle(
        'transform: skewY(-30deg);',
      );
    });
  });

  describe('Rotate', () => {
    test('tf_rt_30deg', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_rt_30deg" tf_rt_30deg />,
      );
      expect(getByTestId('tf_rt_30deg')).toHaveStyle(
        'transform: rotate(30deg);',
      );
    });

    test('tf_rt_neg_30deg', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_rt_neg_30deg" tf_rt_neg_30deg />,
      );
      expect(getByTestId('tf_rt_neg_30deg')).toHaveStyle(
        'transform: rotate(-30deg);',
      );
    });
  });

  describe('Origin', () => {
    test('tf_ori_center', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_ori_center" tf_ori_center />,
      );
      expect(getByTestId('tf_ori_center')).toHaveStyle(
        'transform-origin: center;',
      );
    });

    test('tf_ori_top', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_ori_top" tf_ori_top />,
      );
      expect(getByTestId('tf_ori_top')).toHaveStyle('transform-origin: top;');
    });

    test('tf_ori_top_right', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_ori_top_right" tf_ori_top_right />,
      );
      expect(getByTestId('tf_ori_top_right')).toHaveStyle(
        'transform-origin: top right;',
      );
    });

    test('tf_ori_right', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_ori_right" tf_ori_right />,
      );
      expect(getByTestId('tf_ori_right')).toHaveStyle(
        'transform-origin: right;',
      );
    });

    test('tf_ori_bottom_right', () => {
      const { getByTestId } = render(
        <BooleonComponent
          data-testid="tf_ori_bottom_right"
          tf_ori_bottom_right
        />,
      );
      expect(getByTestId('tf_ori_bottom_right')).toHaveStyle(
        'transform-origin: bottom right;',
      );
    });

    test('tf_ori_bottom', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_ori_bottom" tf_ori_bottom />,
      );
      expect(getByTestId('tf_ori_bottom')).toHaveStyle(
        'transform-origin: bottom;',
      );
    });

    test('tf_ori_bottom_left', () => {
      const { getByTestId } = render(
        <BooleonComponent
          data-testid="tf_ori_bottom_left"
          tf_ori_bottom_left
        />,
      );
      expect(getByTestId('tf_ori_bottom_left')).toHaveStyle(
        'transform-origin: bottom left;',
      );
    });

    test('tf_ori_left', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_ori_left" tf_ori_left />,
      );
      expect(getByTestId('tf_ori_left')).toHaveStyle('transform-origin: left;');
    });

    test('tf_ori_top_left', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="tf_ori_top_left" tf_ori_top_left />,
      );
      expect(getByTestId('tf_ori_top_left')).toHaveStyle(
        'transform-origin: top left;',
      );
    });
  });

  describe('Translate', () => {
    describe('Full', () => {
      test('tf_tl_100$', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="tf_tl_100$" tf_tl_100$ />,
        );
        expect(getByTestId('tf_tl_100$')).toHaveStyle(
          'transform:translate(100%,100%);',
        );
      });

      test('tf_tl_neg_100$', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="tf_tl_neg_100$" tf_tl_neg_100$ />,
        );
        expect(getByTestId('tf_tl_neg_100$')).toHaveStyle(
          'transform:translate(-100%,-100%);',
        );
      });

      test('tf_tlx_100$', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="tf_tlx_100$" tf_tlx_100$ />,
        );
        expect(getByTestId('tf_tlx_100$')).toHaveStyle(
          'transform: translateX(100%);',
        );
      });

      test('tf_tly_neg_100$', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="tf_tly_neg_100$" tf_tly_neg_100$ />,
        );
        expect(getByTestId('tf_tly_neg_100$')).toHaveStyle(
          'transform: translateY(-100%);',
        );
      });
    });
  });
});
