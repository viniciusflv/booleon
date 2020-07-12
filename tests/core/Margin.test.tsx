import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Margin', () => {
  test('m_42', () => {
    const component = renderer.create(<View m_42 />).toJSON();
    expect(component).toHaveStyleRule('margin', '4.2rem');
  });

  test('m_auto', () => {
    const component = renderer.create(<View m_auto />).toJSON();
    expect(component).toHaveStyleRule('margin', 'auto');
  });

  test('mx_42', () => {
    const component = renderer.create(<View mx_42 />).toJSON();
    expect(component).toHaveStyleRule('margin-left', '4.2rem');
    expect(component).toHaveStyleRule('margin-right', '4.2rem');
  });

  test('mx_auto', () => {
    const component = renderer.create(<View mx_auto />).toJSON();
    expect(component).toHaveStyleRule('margin-left', 'auto');
    expect(component).toHaveStyleRule('margin-right', 'auto');
  });

  test('my_42', () => {
    const component = renderer.create(<View my_42 />).toJSON();
    expect(component).toHaveStyleRule('margin-top', '4.2rem');
    expect(component).toHaveStyleRule('margin-bottom', '4.2rem');
  });

  test('my_auto', () => {
    const component = renderer.create(<View my_auto />).toJSON();
    expect(component).toHaveStyleRule('margin-top', 'auto');
    expect(component).toHaveStyleRule('margin-bottom', 'auto');
  });

  test('mt_42', () => {
    const component = renderer.create(<View mt_42 />).toJSON();
    expect(component).toHaveStyleRule('margin-top', '4.2rem');
  });

  test('mt_auto', () => {
    const component = renderer.create(<View mt_auto />).toJSON();
    expect(component).toHaveStyleRule('margin-top', 'auto');
  });

  test('mb_42', () => {
    const component = renderer.create(<View mb_42 />).toJSON();
    expect(component).toHaveStyleRule('margin-bottom', '4.2rem');
  });

  test('mb_auto', () => {
    const component = renderer.create(<View mb_auto />).toJSON();
    expect(component).toHaveStyleRule('margin-bottom', 'auto');
  });

  test('ml_42', () => {
    const component = renderer.create(<View ml_42 />).toJSON();
    expect(component).toHaveStyleRule('margin-left', '4.2rem');
  });

  test('ml_auto', () => {
    const component = renderer.create(<View ml_auto />).toJSON();
    expect(component).toHaveStyleRule('margin-left', 'auto');
  });

  test('mr_42', () => {
    const component = renderer.create(<View mr_42 />).toJSON();
    expect(component).toHaveStyleRule('margin-right', '4.2rem');
  });

  test('mr_auto', () => {
    const component = renderer.create(<View mr_auto />).toJSON();
    expect(component).toHaveStyleRule('margin-right', 'auto');
  });
});