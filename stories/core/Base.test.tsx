import 'jest-styled-components';
import { Base } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

const props = {
  content: '"*"',
  grow: '1',
  outline: 'none',
  transition: 'easy .2s',
  cursor: 'pointer',
  pointerEvents: 'none',
  opacity: '.1',
  display: 'flex',
  visibility: 'hidden',
  zIndex: '666',
  alignSelf: 'flex-end',
};

describe('Base', () => {
  test('snapshot', () => {
    const component = renderer.create(<Base {...props} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('props', () => {
    const component = renderer.create(<Base {...props} />);
    const tree = component.toJSON();

    expect(tree).toHaveStyleRule('content', props.content);
    expect(tree).toHaveStyleRule('flex-grow', props.grow);
    expect(tree).toHaveStyleRule('outline', props.outline);
    expect(tree).toHaveStyleRule('transition', props.transition);
    expect(tree).toHaveStyleRule('cursor', props.cursor);
    expect(tree).toHaveStyleRule('pointer-events', props.pointerEvents);
    expect(tree).toHaveStyleRule('opacity', props.opacity);
    expect(tree).toHaveStyleRule('display', props.display);
    expect(tree).toHaveStyleRule('visibility', props.visibility);
    expect(tree).toHaveStyleRule('z-index', props.zIndex);
    expect(tree).toHaveStyleRule('align-self', props.alignSelf);
  });
});
