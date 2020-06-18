import 'jest-styled-components';
import { Shadow } from '../../packages/core/src/core';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Shadow', () => {
  test('sd_1', () => {
    const component = renderer.create(<Shadow sd_1 />).toJSON();
    expect(component).toHaveStyleRule(
      'box-shadow',
      '0 1px 1px 0 rgba(0,0,0,0.14), ' +
      '0 2px 1px -1px rgba(0,0,0,0.12), ' +
      '0 1px 3px 0 rgba(0,0,0,0.20)',
    );
  });

  test('sd_2', () => {
    const component = renderer.create(<Shadow sd_2 />).toJSON();
    expect(component).toHaveStyleRule(
      'box-shadow',
      '0 2px 2px 0 rgba(0,0,0,0.14), ' +
      '0 3px 1px -2px rgba(0,0,0,0.12), ' +
      '0 1px 5px 0 rgba(0,0,0,0.20)',
    );
  });

  test('sd_3', () => {
    const component = renderer.create(<Shadow sd_3 />).toJSON();
    expect(component).toHaveStyleRule(
      'box-shadow',
      '0 3px 4px 0 rgba(0,0,0,0.14), ' +
      '0 3px 3px -2px rgba(0,0,0,0.12), ' +
      '0 1px 8px 0 rgba(0,0,0,0.20)',
    );
  });

  test('sd_4', () => {
    const component = renderer.create(<Shadow sd_4 />).toJSON();
    expect(component).toHaveStyleRule(
      'box-shadow',
      '0 4px 5px 0 rgba(0,0,0,0.14), ' +
      '0 1px 10px 0 rgba(0,0,0,0.12), ' +
      '0 2px 4px -1px rgba(0,0,0,0.20)',
    );
  });

  test('sd_6', () => {
    const component = renderer.create(<Shadow sd_6 />).toJSON();
    expect(component).toHaveStyleRule(
      'box-shadow',
      '0 6px 10px 0 rgba(0,0,0,0.14), ' +
      '0 1px 18px 0 rgba(0,0,0,0.12), ' +
      '0 3px 5px -1px rgba(0,0,0,0.20)',
    );
  });

  test('sd_8', () => {
    const component = renderer.create(<Shadow sd_8 />).toJSON();
    expect(component).toHaveStyleRule(
      'box-shadow',
      '0 8px 10px 1px rgba(0,0,0,0.14), ' +
      '0 3px 14px 2px rgba(0,0,0,0.12), ' +
      '0 5px 5px -3px rgba(0,0,0,0.20)',
    );
  });

  test('sd_9', () => {
    const component = renderer.create(<Shadow sd_9 />).toJSON();
    expect(component).toHaveStyleRule(
      'box-shadow',
      '0 9px 12px 1px rgba(0,0,0,0.14), ' +
      '0 3px 16px 2px rgba(0,0,0,0.12), ' +
      '0 5px 6px -3px rgba(0,0,0,0.20)',
    );
  });

  test('sd_12', () => {
    const component = renderer.create(<Shadow sd_12 />).toJSON();
    expect(component).toHaveStyleRule(
      'box-shadow',
      '0 12px 17px 2px rgba(0,0,0,0.14), ' +
      '0 5px 22px 4px rgba(0,0,0,0.12), ' +
      '0 7px 8px -4px rgba(0,0,0,0.20)',
    );
  });

  test('sd_16', () => {
    const component = renderer.create(<Shadow sd_16 />).toJSON();
    expect(component).toHaveStyleRule(
      'box-shadow',
      '0 16px 24px 2px rgba(0,0,0,0.14), ' +
      '0 6px 30px 5px rgba(0,0,0,0.12), ' +
      '0 8px 10px -5px rgba(0,0,0,0.20)',
    );
  });

  test('sd_24', () => {
    const component = renderer.create(<Shadow sd_24 />).toJSON();
    expect(component).toHaveStyleRule(
      'box-shadow',
      '0 24px 38px 3px rgba(0,0,0,0.14), ' +
      '0 9px 46px 8px rgba(0,0,0,0.12), ' +
      '0 11px 15px -7px rgba(0,0,0,0.20)',
    );
  });
});
