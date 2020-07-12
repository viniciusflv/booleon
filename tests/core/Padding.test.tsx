import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Padding', () => {
  test('p_42', () => {
    const component = renderer.create(<View p_42 />).toJSON();
    expect(component).toHaveStyleRule('padding', '4.2rem');
  });

  test('p_auto', () => {
    const component = renderer.create(<View p_auto />).toJSON();
    expect(component).toHaveStyleRule('padding', 'auto');
  });

  test('px_42', () => {
    const component = renderer.create(<View px_42 />).toJSON();
    expect(component).toHaveStyleRule('padding-left', '4.2rem');
    expect(component).toHaveStyleRule('padding-right', '4.2rem');
  });

  test('px_auto', () => {
    const component = renderer.create(<View px_auto />).toJSON();
    expect(component).toHaveStyleRule('padding-left', 'auto');
    expect(component).toHaveStyleRule('padding-right', 'auto');
  });

  test('py_42', () => {
    const component = renderer.create(<View py_42 />).toJSON();
    expect(component).toHaveStyleRule('padding-top', '4.2rem');
    expect(component).toHaveStyleRule('padding-bottom', '4.2rem');
  });

  test('py_auto', () => {
    const component = renderer.create(<View py_auto />).toJSON();
    expect(component).toHaveStyleRule('padding-top', 'auto');
    expect(component).toHaveStyleRule('padding-bottom', 'auto');
  });

  test('pt_42', () => {
    const component = renderer.create(<View pt_42 />).toJSON();
    expect(component).toHaveStyleRule('padding-top', '4.2rem');
  });

  test('pt_auto', () => {
    const component = renderer.create(<View pt_auto />).toJSON();
    expect(component).toHaveStyleRule('padding-top', 'auto');
  });

  test('pb_42', () => {
    const component = renderer.create(<View pb_42 />).toJSON();
    expect(component).toHaveStyleRule('padding-bottom', '4.2rem');
  });

  test('pb_auto', () => {
    const component = renderer.create(<View pb_auto />).toJSON();
    expect(component).toHaveStyleRule('padding-bottom', 'auto');
  });

  test('pl_42', () => {
    const component = renderer.create(<View pl_42 />).toJSON();
    expect(component).toHaveStyleRule('padding-left', '4.2rem');
  });

  test('pl_auto', () => {
    const component = renderer.create(<View pl_auto />).toJSON();
    expect(component).toHaveStyleRule('padding-left', 'auto');
  });

  test('pr_42', () => {
    const component = renderer.create(<View pr_42 />).toJSON();
    expect(component).toHaveStyleRule('padding-right', '4.2rem');
  });

  test('pr_auto', () => {
    const component = renderer.create(<View pr_auto />).toJSON();
    expect(component).toHaveStyleRule('padding-right', 'auto');
  });
});