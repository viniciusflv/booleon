import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Medias', () => {
  test('xs', () => {
    const component = renderer.create(<View xs__flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex', {
      media: '(min-width: 640px)',
    });
  });

  test('sm', () => {
    const component = renderer.create(<View sm__flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex', {
      media: '(min-width: 768px)',
    });
  });

  test('md', () => {
    const component = renderer.create(<View md__flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex', {
      media: '(min-width: 1024px)',
    });
  });

  test('lg', () => {
    const component = renderer.create(<View lg__flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex', {
      media: '(min-width: 1440px)',
    });
  });

  test('xl', () => {
    const component = renderer.create(<View xl__flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex', {
      media: '(min-width: 1920px)',
    });
  });
});
