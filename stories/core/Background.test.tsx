import 'jest-styled-components';
import { Background } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

const injectPseudoElement = (pseudo: string, component: any) => {
  component.props.className = component.props.className
    .split(/\s/)
    .map((classes: string) => ` ${classes}::${pseudo}`)
    .join('');
  return component;
};

describe('Background', () => {
  test('bg_img', () => {
    const bg_img = 'https://www.w3schools.com/cssref/img_tree.gif';
    const component = renderer.create(<Background bg_img={bg_img} />).toJSON();
    const before = injectPseudoElement('before', component);
    expect(before).toHaveStyleRule('background-image', `url(${bg_img})`);
  });

  describe('Repeat', () => {
    test('bg_repeat', () => {
      const component = renderer.create(<Background bg_repeat />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('background-repeat', 'repeat');
    });

    test('bg_norepeat', () => {
      const component = renderer.create(<Background bg_norepeat />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('background-repeat', 'no-repeat');
    });
  });

  describe('Size', () => {
    test('bg_auto', () => {
      const component = renderer.create(<Background bg_auto />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('background-size', 'auto');
    });

    test('bg_cover', () => {
      const component = renderer.create(<Background bg_cover />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('background-size', 'cover');
    });

    test('bg_cover', () => {
      const component = renderer.create(<Background bg_cover />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('background-size', 'cover');
    });
  });

  describe('Attachment', () => {
    test('bg_fixed', () => {
      const component = renderer.create(<Background bg_fixed />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('background-attachment', 'fixed');
    });

    test('bg_local', () => {
      const component = renderer.create(<Background bg_local />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('background-attachment', 'local');
    });

    test('bg_scroll', () => {
      const component = renderer.create(<Background bg_scroll />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('background-attachment', 'scroll');
    });
  });

  describe('Color', () => {
    test('bg_black', () => {
      const component = renderer.create(<Background bg_black />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('background-color', '#000');
    });

    test('bg_white', () => {
      const component = renderer.create(<Background bg_white />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('background-color', '#fff');
    });

    test('bg_grey', () => {
      const component = renderer.create(<Background bg_grey />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('background-color', '#cbd5e0');
    });
  });

  describe('Opacity', () => {
    test('bg_op_0', () => {
      const component = renderer.create(<Background bg_op_0 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '0');
    });

    test('bg_op_10', () => {
      const component = renderer.create(<Background bg_op_10 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '.1');
    });

    test('bg_op_20', () => {
      const component = renderer.create(<Background bg_op_20 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '.2');
    });

    test('bg_op_30', () => {
      const component = renderer.create(<Background bg_op_30 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '.3');
    });

    test('bg_op_40', () => {
      const component = renderer.create(<Background bg_op_40 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '.4');
    });

    test('bg_op_50', () => {
      const component = renderer.create(<Background bg_op_50 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '.5');
    });

    test('bg_op_60', () => {
      const component = renderer.create(<Background bg_op_60 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '.6');
    });

    test('bg_op_70', () => {
      const component = renderer.create(<Background bg_op_70 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '.7');
    });

    test('bg_op_80', () => {
      const component = renderer.create(<Background bg_op_80 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '.8');
    });

    test('bg_op_90', () => {
      const component = renderer.create(<Background bg_op_90 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '.9');
    });

    test('bg_op_100', () => {
      const component = renderer.create(<Background bg_op_100 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '1');
    });
  });
});

describe('Gradient', () => {
  describe('Opacity', () => {
    test('g_op_0', () => {
      const component = renderer.create(<Background g_op_0 />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule('opacity', '0');
    });

    test('g_op_10', () => {
      const component = renderer.create(<Background g_op_10 />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule('opacity', '.1');
    });

    test('g_op_20', () => {
      const component = renderer.create(<Background g_op_20 />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule('opacity', '.2');
    });

    test('g_op_30', () => {
      const component = renderer.create(<Background g_op_30 />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule('opacity', '.3');
    });

    test('g_op_40', () => {
      const component = renderer.create(<Background g_op_40 />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule('opacity', '.4');
    });

    test('g_op_50', () => {
      const component = renderer.create(<Background g_op_50 />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule('opacity', '.5');
    });

    test('g_op_60', () => {
      const component = renderer.create(<Background g_op_60 />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule('opacity', '.6');
    });

    test('g_op_70', () => {
      const component = renderer.create(<Background g_op_70 />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule('opacity', '.7');
    });

    test('g_op_80', () => {
      const component = renderer.create(<Background g_op_80 />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule('opacity', '.8');
    });

    test('g_op_90', () => {
      const component = renderer.create(<Background g_op_90 />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule('opacity', '.9');
    });

    test('g_op_100', () => {
      const component = renderer.create(<Background g_op_100 />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule('opacity', '1');
    });
  });

  describe('X', () => {
    test('gx_black', () => {
      const component = renderer.create(<Background gx_black />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to right,#000,transparent,#000)',
      );
    });

    test('gx_white', () => {
      const component = renderer.create(<Background gx_white />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to right,#fff,transparent,#fff)',
      );
    });

    test('gx_grey', () => {
      const component = renderer.create(<Background gx_grey />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to right,#cbd5e0,transparent,#cbd5e0)',
      );
    });
  });

  describe('Y', () => {
    test('gy_black', () => {
      const component = renderer.create(<Background gy_black />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to top,#000,transparent,#000)',
      );
    });

    test('gy_white', () => {
      const component = renderer.create(<Background gy_white />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to top,#fff,transparent,#fff)',
      );
    });

    test('gy_grey', () => {
      const component = renderer.create(<Background gy_grey />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to top,#cbd5e0,transparent,#cbd5e0)',
      );
    });
  });

  describe('Top', () => {
    test('gt_black', () => {
      const component = renderer.create(<Background gt_black />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to top,transparent,#000)',
      );
    });

    test('gt_white', () => {
      const component = renderer.create(<Background gt_white />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to top,transparent,#fff)',
      );
    });

    test('gt_grey', () => {
      const component = renderer.create(<Background gt_grey />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to top,transparent,#cbd5e0)',
      );
    });
  });

  describe('Bottom', () => {
    test('gb_black', () => {
      const component = renderer.create(<Background gb_black />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to bottom,transparent,#000)',
      );
    });

    test('gb_white', () => {
      const component = renderer.create(<Background gb_white />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to bottom,transparent,#fff)',
      );
    });

    test('gb_grey', () => {
      const component = renderer.create(<Background gb_grey />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to bottom,transparent,#cbd5e0)',
      );
    });
  });

  describe('Left', () => {
    test('gl_black', () => {
      const component = renderer.create(<Background gl_black />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to left,transparent,#000)',
      );
    });

    test('gl_white', () => {
      const component = renderer.create(<Background gl_white />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to left,transparent,#fff)',
      );
    });

    test('gl_grey', () => {
      const component = renderer.create(<Background gl_grey />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to left,transparent,#cbd5e0)',
      );
    });
  });

  describe('Right', () => {
    test('gr_black', () => {
      const component = renderer.create(<Background gr_black />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to right,transparent,#000)',
      );
    });

    test('gr_white', () => {
      const component = renderer.create(<Background gr_white />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to right,transparent,#fff)',
      );
    });

    test('gr_grey', () => {
      const component = renderer.create(<Background gr_grey />).toJSON();
      const after = injectPseudoElement('after', component);
      expect(after).toHaveStyleRule(
        'background-image',
        'linear-gradient(to right,transparent,#cbd5e0)',
      );
    });
  });
});
