import React from 'react';

import { render } from '@testing-library/react';

import { View } from '../../packages/base/src';
import '@testing-library/jest-dom';

describe('Transform', () => {
  describe('Scale', () => {
    test('sl_1', () => {
      const { getByTestId } = render(<View.div data-testid="sl_1" sl_1 />);
      expect(getByTestId('sl_1')).toHaveStyle('transform: scale(0.01,0.01);');
    });

    test('slx_1', () => {
      const { getByTestId } = render(<View.div data-testid="slx_1" slx_1 />);
      expect(getByTestId('slx_1')).toHaveStyle('transform: scaleX(0.01);');
    });

    test('sly_1', () => {
      const { getByTestId } = render(<View.div data-testid="sly_1" sly_1 />);
      expect(getByTestId('sly_1')).toHaveStyle('transform: scaleY(0.01);');
    });

    test('sl_neg_1', () => {
      const { getByTestId } = render(
        <View.div data-testid="sl_neg_1" sl_neg_1 />,
      );
      expect(getByTestId('sl_neg_1')).toHaveStyle(
        'transform: scale(-0.01,-0.01);',
      );
    });

    test('slx_neg_1', () => {
      const { getByTestId } = render(
        <View.div data-testid="slx_neg_1" slx_neg_1 />,
      );
      expect(getByTestId('slx_neg_1')).toHaveStyle('transform: scaleX(-0.01);');
    });

    test('sly_neg_1', () => {
      const { getByTestId } = render(
        <View.div data-testid="sly_neg_1" sly_neg_1 />,
      );
      expect(getByTestId('sly_neg_1')).toHaveStyle('transform: scaleY(-0.01);');
    });
  });

  describe('Skew', () => {
    test('sk_30', () => {
      const { getByTestId } = render(<View.div data-testid="sk_30" sk_30 />);
      expect(getByTestId('sk_30')).toHaveStyle('transform: skew(30deg,30deg);');
    });

    test('skx_30', () => {
      const { getByTestId } = render(<View.div data-testid="skx_30" skx_30 />);
      expect(getByTestId('skx_30')).toHaveStyle('transform: skewX(30deg);');
    });

    test('sky_30', () => {
      const { getByTestId } = render(<View.div data-testid="sky_30" sky_30 />);
      expect(getByTestId('sky_30')).toHaveStyle('transform: skewY(30deg);');
    });

    test('sk_neg_30', () => {
      const { getByTestId } = render(
        <View.div data-testid="sk_neg_30" sk_neg_30 />,
      );
      expect(getByTestId('sk_neg_30')).toHaveStyle(
        'transform: skew(-30deg,-30deg);',
      );
    });

    test('skx_neg_30', () => {
      const { getByTestId } = render(
        <View.div data-testid="skx_neg_30" skx_neg_30 />,
      );
      expect(getByTestId('skx_neg_30')).toHaveStyle(
        'transform: skewX(-30deg);',
      );
    });

    test('sky_neg_30', () => {
      const { getByTestId } = render(
        <View.div data-testid="sky_neg_30" sky_neg_30 />,
      );
      expect(getByTestId('sky_neg_30')).toHaveStyle(
        'transform: skewY(-30deg);',
      );
    });
  });

  describe('Rotate', () => {
    test('rt_30', () => {
      const { getByTestId } = render(<View.div data-testid="rt_30" rt_30 />);
      expect(getByTestId('rt_30')).toHaveStyle('transform: rotate(30deg);');
    });

    test('rt_neg_30', () => {
      const { getByTestId } = render(
        <View.div data-testid="rt_neg_30" rt_neg_30 />,
      );
      expect(getByTestId('rt_neg_30')).toHaveStyle(
        'transform: rotate(-30deg);',
      );
    });
  });

  describe('Origin', () => {
    test('ori_center', () => {
      const { getByTestId } = render(
        <View.div data-testid="ori_center" ori_center />,
      );
      expect(getByTestId('ori_center')).toHaveStyle(
        'transform-origin: center;',
      );
    });

    test('ori_top', () => {
      const { getByTestId } = render(
        <View.div data-testid="ori_top" ori_top />,
      );
      expect(getByTestId('ori_top')).toHaveStyle('transform-origin: top;');
    });

    test('ori_top_right', () => {
      const { getByTestId } = render(
        <View.div data-testid="ori_top_right" ori_top_right />,
      );
      expect(getByTestId('ori_top_right')).toHaveStyle(
        'transform-origin: top right;',
      );
    });

    test('ori_right', () => {
      const { getByTestId } = render(
        <View.div data-testid="ori_right" ori_right />,
      );
      expect(getByTestId('ori_right')).toHaveStyle('transform-origin: right;');
    });

    test('ori_bottom_right', () => {
      const { getByTestId } = render(
        <View.div data-testid="ori_bottom_right" ori_bottom_right />,
      );
      expect(getByTestId('ori_bottom_right')).toHaveStyle(
        'transform-origin: bottom right;',
      );
    });

    test('ori_bottom', () => {
      const { getByTestId } = render(
        <View.div data-testid="ori_bottom" ori_bottom />,
      );
      expect(getByTestId('ori_bottom')).toHaveStyle(
        'transform-origin: bottom;',
      );
    });

    test('ori_bottom_left', () => {
      const { getByTestId } = render(
        <View.div data-testid="ori_bottom_left" ori_bottom_left />,
      );
      expect(getByTestId('ori_bottom_left')).toHaveStyle(
        'transform-origin: bottom left;',
      );
    });

    test('ori_left', () => {
      const { getByTestId } = render(
        <View.div data-testid="ori_left" ori_left />,
      );
      expect(getByTestId('ori_left')).toHaveStyle('transform-origin: left;');
    });

    test('ori_top_left', () => {
      const { getByTestId } = render(
        <View.div data-testid="ori_top_left" ori_top_left />,
      );
      expect(getByTestId('ori_top_left')).toHaveStyle(
        'transform-origin: top left;',
      );
    });
  });

  describe('Translate', () => {
    describe('Full', () => {
      test('tl_full', () => {
        const { getByTestId } = render(
          <View.div data-testid="tl_full" tl_full />,
        );
        expect(getByTestId('tl_full')).toHaveStyle(
          'transform:translate(100%,100%);',
        );
      });

      test('tl_full_neg', () => {
        const { getByTestId } = render(
          <View.div data-testid="tl_full_neg" tl_full_neg />,
        );
        expect(getByTestId('tl_full_neg')).toHaveStyle(
          'transform:translate(-100%,-100%);',
        );
      });

      test('tlx_full', () => {
        const { getByTestId } = render(
          <View.div data-testid="tlx_full" tlx_full />,
        );
        expect(getByTestId('tlx_full')).toHaveStyle(
          'transform: translateX(100%);',
        );
      });

      test('tly_full_neg', () => {
        const { getByTestId } = render(
          <View.div data-testid="tly_full_neg" tly_full_neg />,
        );
        expect(getByTestId('tly_full_neg')).toHaveStyle(
          'transform: translateY(-100%);',
        );
      });
    });

    describe('Half', () => {
      test('tl_half', () => {
        const { getByTestId } = render(
          <View.div data-testid="tl_half" tl_half />,
        );
        expect(getByTestId('tl_half')).toHaveStyle(
          'transform: translate(50%,50%);',
        );
      });

      test('tl_half_neg', () => {
        const { getByTestId } = render(
          <View.div data-testid="tl_half_neg" tl_half_neg />,
        );
        expect(getByTestId('tl_half_neg')).toHaveStyle(
          'transform: translate(-50%,-50%);',
        );
      });

      test('tlx_half', () => {
        const { getByTestId } = render(
          <View.div data-testid="tlx_half" tlx_half />,
        );
        expect(getByTestId('tlx_half')).toHaveStyle(
          'transform: translateX(50%);',
        );
      });

      test('tly_half_neg', () => {
        const { getByTestId } = render(
          <View.div data-testid="tly_half_neg" tly_half_neg />,
        );
        expect(getByTestId('tly_half_neg')).toHaveStyle(
          'transform: translateY(-50%);',
        );
      });
    });
  });
});
