import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Pseudo', () => {
  test('after', () => {
    const component = renderer.create(<View after__flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex', {
      modifier: ':after',
    });
  });

  test('before', () => {
    const component = renderer.create(<View before__flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex', {
      modifier: ':before',
    });
  });

  test('active', () => {
    const component = renderer.create(<View active__flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex', {
      modifier: ':active',
    });
  });

  test('checked', () => {
    const component = renderer.create(<View checked__flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex', {
      modifier: ':checked',
    });
  });

  test('disabled', () => {
    const component = renderer.create(<View disabled__flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex', {
      modifier: ':disabled',
    });
  });

  test('focus', () => {
    const component = renderer.create(<View focus__flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex', {
      modifier: ':focus',
    });
  });

  test('hover', () => {
    const component = renderer.create(<View hover__flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex', {
      modifier: ':hover',
    });
  });

  test('visited', () => {
    const component = renderer.create(<View visited__flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex', {
      modifier: ':visited',
    });
  });
});
