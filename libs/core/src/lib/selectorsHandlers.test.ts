import type { SelectorContext } from '../types';
import { selectorsDefault } from './selectorsDefault';
import { selector } from './selectorsHandlers';

describe('selector', () => {
  let ctx: SelectorContext;

  beforeAll(() => {
    ctx = {
      key: 'key',
      value: { flex: true },
      className: 'className',
      selectors: selectorsDefault,
      recursiveCompiler: () => 'css',
    };
  });

  test('classes', () => {
    const fn = selector.classes();
    expect(fn(ctx)).toMatchInlineSnapshot('".className{css}"');
  });

  test('media', () => {
    const fn = selector.media('breakpoint');
    expect(fn(ctx)).toMatchInlineSnapshot('"@media breakpoint{css}"');
  });

  test('theme', () => {
    const fn = selector.theme();
    expect(
      fn({
        key: 'key',
        value: { flex: true },
        className: 'className',
        selectors: selectorsDefault,
        recursiveCompiler: () => '.bl-className {css}',
      }),
    ).toMatchInlineSnapshot('"body[data-theme=\\"key\\"] .bl-className {css}"');
  });

  test('pseudo', () => {
    const fn = selector.pseudo(':pseudo');
    expect(
      fn({
        key: 'first_not_checked_not_p',
        value: { flex: true },
        className: 'className',
        selectors: selectorsDefault,
        recursiveCompiler: () => 'css',
      }),
    ).toMatchInlineSnapshot(
      '".className>:first-child:not(:checked):not(.p){css}"',
    );
  });

  test('keyframe', () => {
    const fn = selector.keyframe({ from: '0%' });
    expect(
      fn({
        key: 'kf_drop',
        value: { from: { css: { flex: true } } },
        className: 'className',
        selectors: selectorsDefault,
        recursiveCompiler: () => 'css',
      }),
    ).toMatchInlineSnapshot('"@keyframes drop{0%{css}}"');
  });

  test('important', () => {
    const fn = selector.important();
    expect(
      fn({
        key: 'key',
        value: { flex: true },
        className: 'className',
        selectors: selectorsDefault,
        recursiveCompiler: () => '.bl-className {css;}',
      }),
    ).toMatchInlineSnapshot('".bl-className {css !important;}"');
  });
});
