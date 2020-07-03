import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

const injectPseudoElement = (pseudo: string, component: any) => {
  component.props.className = component.props.className
    .split(/\s/)
    .map((classes: string) => ` ${classes}${pseudo}`)
    .join('');
  return component;
};

describe('Background', () => {
  test('bg_img', () => {
    const component = renderer
      .create(
        <View
          bc_red
          md__bc_red
          before__bc_red
          after__bc_red
          after__c_red
          hover__c_red
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
    expect(component).toHaveStyleRule('background-color', 'red');
    const after = injectPseudoElement(':hover', component);
    expect(after).toHaveStyleRule('color', 'red');
  });
});
