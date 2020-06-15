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
      const component = renderer.create(<Background bg_000 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('background-color', '#000');
    });

    test('bg_white', () => {
      const component = renderer.create(<Background bg_fff />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('background-color', '#fff');
    });

    test('bg_grey', () => {
      const component = renderer.create(<Background bg_cbd5e0 />).toJSON();
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
      expect(before).toHaveStyleRule('opacity', '0.1');
    });

    test('bg_op_20', () => {
      const component = renderer.create(<Background bg_op_20 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '0.2');
    });

    test('bg_op_30', () => {
      const component = renderer.create(<Background bg_op_30 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '0.3');
    });

    test('bg_op_40', () => {
      const component = renderer.create(<Background bg_op_40 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '0.4');
    });

    test('bg_op_50', () => {
      const component = renderer.create(<Background bg_op_50 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '0.5');
    });

    test('bg_op_60', () => {
      const component = renderer.create(<Background bg_op_60 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '0.6');
    });

    test('bg_op_70', () => {
      const component = renderer.create(<Background bg_op_70 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '0.7');
    });

    test('bg_op_80', () => {
      const component = renderer.create(<Background bg_op_80 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '0.8');
    });

    test('bg_op_90', () => {
      const component = renderer.create(<Background bg_op_90 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '0.9');
    });

    test('bg_op_100', () => {
      const component = renderer.create(<Background bg_op_100 />).toJSON();
      const before = injectPseudoElement('before', component);
      expect(before).toHaveStyleRule('opacity', '1');
    });
  });
});

describe('Gradient', () => {
  test('g_op_20', () => {
    const component = renderer.create(<Background g_op_20 />).toJSON();
    const after = injectPseudoElement('after', component);
    expect(after).toHaveStyleRule('opacity', '0.2');
  });

  test('gx', () => {
    const component = renderer.create(<Background gx_000 />).toJSON();
    const after = injectPseudoElement('after', component);
    expect(after).toHaveStyleRule(
      'background-image',
      'linear-gradient(to right,#000,transparent,#000)',
    );
  });

  test('gy', () => {
    const component = renderer.create(<Background gy_000 />).toJSON();
    const after = injectPseudoElement('after', component);
    expect(after).toHaveStyleRule(
      'background-image',
      'linear-gradient(to top,#000,transparent,#000)',
    );
  });

  test('gt', () => {
    const component = renderer.create(<Background gt_000 />).toJSON();
    const after = injectPseudoElement('after', component);
    expect(after).toHaveStyleRule(
      'background-image',
      'linear-gradient(to top,transparent,#000)',
    );
  });

  test('gb', () => {
    const component = renderer.create(<Background gb_000 />).toJSON();
    const after = injectPseudoElement('after', component);
    expect(after).toHaveStyleRule(
      'background-image',
      'linear-gradient(to bottom,transparent,#000)',
    );
  });

  test('gl', () => {
    const component = renderer.create(<Background gl_000 />).toJSON();
    const after = injectPseudoElement('after', component);
    expect(after).toHaveStyleRule(
      'background-image',
      'linear-gradient(to left,transparent,#000)',
    );
  });

  test('gr', () => {
    const component = renderer.create(<Background gr_000 />).toJSON();
    const after = injectPseudoElement('after', component);
    expect(after).toHaveStyleRule(
      'background-image',
      'linear-gradient(to right,transparent,#000)',
    );
  });
});
