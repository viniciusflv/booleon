import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Transition', () => {
  describe('Translate', () => {
    test('translate', () => {
      const component = renderer.create(<View tl_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translate(12rem,12rem)');
    });

    test('translate_neg', () => {
      const component = renderer.create(<View tl_neg_12 />).toJSON();
      expect(component).toHaveStyleRule(
        'transform',
        'translate(-12rem,-12rem)',
      );
    });

    test('translate_full', () => {
      const component = renderer.create(<View tl_full />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translate(100%,100%)');
    });

    test('translate_full_neg', () => {
      const component = renderer.create(<View tl_full_neg />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translate(-100%,-100%)');
    });

    test('translate_half', () => {
      const component = renderer.create(<View tl_half />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translate(50%,50%)');
    });

    test('translate_half_neg', () => {
      const component = renderer.create(<View tl_half_neg />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translate(-50%,-50%)');
    });

    test('translateX', () => {
      const component = renderer.create(<View tlx_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translateX(12rem)');
    });

    test('translatex_neg', () => {
      const component = renderer.create(<View tlx_neg_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translateX(-12rem)');
    });

    test('translatex_full', () => {
      const component = renderer.create(<View tlx_full />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translateX(100%)');
    });

    test('translatex_full_neg', () => {
      const component = renderer.create(<View tlx_full_neg />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translateX(-100%)');
    });

    test('translatex_half', () => {
      const component = renderer.create(<View tlx_half />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translateX(50%)');
    });

    test('translatex_half_neg', () => {
      const component = renderer.create(<View tlx_half_neg />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translateX(-50%)');
    });

    test('translateY', () => {
      const component = renderer.create(<View tly_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translateY(12rem)');
    });

    test('translatey_neg', () => {
      const component = renderer.create(<View tly_neg_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translateY(-12rem)');
    });

    test('translatey_full', () => {
      const component = renderer.create(<View tly_full />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translateY(100%)');
    });

    test('translatey_full_neg', () => {
      const component = renderer.create(<View tly_full_neg />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translateY(-100%)');
    });

    test('translatey_half', () => {
      const component = renderer.create(<View tly_half />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translateY(50%)');
    });

    test('translatey_half_neg', () => {
      const component = renderer.create(<View tly_half_neg />).toJSON();
      expect(component).toHaveStyleRule('transform', 'translateY(-50%)');
    });
  });
  
  describe('Scale', () => {
    test('scale', () => {
      const component = renderer.create(<View sl_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'scale(12rem,12rem)');
    });

    test('scale_neg', () => {
      const component = renderer.create(<View sl_neg_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'scale(-12rem,-12rem)');
    });

    test('scaleX', () => {
      const component = renderer.create(<View slx_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'scaleX(12rem)');
    });

    test('scalex_neg', () => {
      const component = renderer.create(<View slx_neg_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'scaleX(-12rem)');
    });

    test('scaleY', () => {
      const component = renderer.create(<View slx_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'scaleX(12rem)');
    });

    test('scaley_neg', () => {
      const component = renderer.create(<View slx_neg_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'scaleX(-12rem)');
    });
  });

  describe('Rotate', () => {
    test('rotate', () => {
      const component = renderer.create(<View rt_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'rotate(12deg)');
    });

    test('rotate_neg', () => {
      const component = renderer.create(<View rt_neg_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'rotate(-12deg)');
    });
  });

  describe('Skew', () => {
    test('skew', () => {
      const component = renderer.create(<View sk_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'skew(12deg,12deg)');
    });

    test('skew_neg', () => {
      const component = renderer.create(<View sk_neg_12 />).toJSON();
      expect(component).toHaveStyleRule('transform', 'skew(-12deg,-12deg)');
    });
  });

  describe('Origin', () => {
    test('origin_center', () => {
      const component = renderer.create(<View ori_center />).toJSON();
      expect(component).toHaveStyleRule('transform-origin', 'center');
    });

    test('origin_top', () => {
      const component = renderer.create(<View ori_top />).toJSON();
      expect(component).toHaveStyleRule('transform-origin', 'top');
    });

    test('origin_top_right', () => {
      const component = renderer.create(<View ori_top_right />).toJSON();
      expect(component).toHaveStyleRule('transform-origin', 'top right');
    });

    test('origin_right', () => {
      const component = renderer.create(<View ori_right />).toJSON();
      expect(component).toHaveStyleRule('transform-origin', 'right');
    });

    test('origin_bottom_right', () => {
      const component = renderer.create(<View ori_bottom_right />).toJSON();
      expect(component).toHaveStyleRule('transform-origin', 'bottom right');
    });

    test('origin_bottom', () => {
      const component = renderer.create(<View ori_bottom />).toJSON();
      expect(component).toHaveStyleRule('transform-origin', 'bottom');
    });

    test('origin_bottom_left', () => {
      const component = renderer.create(<View ori_bottom_left />).toJSON();
      expect(component).toHaveStyleRule('transform-origin', 'bottom left');
    });

    test('origin_left', () => {
      const component = renderer.create(<View ori_left />).toJSON();
      expect(component).toHaveStyleRule('transform-origin', 'left');
    });

    test('origin_top_left', () => {
      const component = renderer.create(<View ori_top_left />).toJSON();
      expect(component).toHaveStyleRule('transform-origin', 'top left');
    });
  });
});
