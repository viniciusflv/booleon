import 'jest-styled-components';
import { Card } from '../../packages/components/src';
import React from 'react';
import renderer from 'react-test-renderer';

const injectPseudoElement = (pseudo: string, component: any) => {
  component.props.className += component.props.className
    .split(/\s/)
    .map((classes: string) => ` ${classes}::${pseudo}`)
    .join('');
  return component;
};

test('Card', () => {
  const component = renderer.create(<Card />).toJSON();
  const before = injectPseudoElement('before', renderer.create(<Card />).toJSON());
  const shadow = '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)';

  expect(component).toHaveStyleRule('display', 'flex');
  expect(component).toHaveStyleRule('flex-direction', 'column');
  expect(component).toHaveStyleRule('align-items', 'center');
  expect(component).toHaveStyleRule('justify-content', 'space-between');
  expect(component).toHaveStyleRule('height', '100%');
  expect(component).toHaveStyleRule('width', '100%');
  expect(component).toHaveStyleRule('max-height', '100%');
  expect(component).toHaveStyleRule('max-width', '100%');
  expect(component).toHaveStyleRule('min-height', '16rem');
  expect(component).toHaveStyleRule('min-width', '8rem');
  expect(component).toHaveStyleRule('padding-right', '.5rem');
  expect(component).toHaveStyleRule('padding-left', '.5rem');
  expect(component).toHaveStyleRule('padding-top', '1rem');
  expect(component).toHaveStyleRule('padding-bottom', '1rem');
  expect(component).toHaveStyleRule('border-radius', '.5rem');
  expect(before).toHaveStyleRule('background-color', '#fff');
  expect(component).toHaveStyleRule('box-shadow', shadow);
});
