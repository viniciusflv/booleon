import { prefixerHandlers, defaultPrefixes } from '.';
import { PrefixHandlerArg } from '../types';

describe('prefixerHandlers', () => {
  let prefixer: PrefixHandlerArg;

  beforeAll(() => {
    prefixer = {
      key: 'key',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    };
  });

  test('classes', () => {
    const fn = prefixerHandlers.classes();
    expect(fn(prefixer)).toMatchInlineSnapshot('".className{css}"');
  });

  test('media', () => {
    const fn = prefixerHandlers.media('breakpoint');
    expect(fn(prefixer)).toMatchInlineSnapshot('"@media breakpoint{css}"');
  });

  test('theme', () => {
    const fn = prefixerHandlers.theme();
    expect(
      fn({
        key: 'key',
        value: { flex: true },
        prefixes: defaultPrefixes,
        className: 'className',
        recursiveCompiler: () => '.bl-className {css}',
      }),
    ).toMatchInlineSnapshot('"body[data-theme=\\"key\\"] .bl-className {css}"');
  });

  test('pseudo', () => {
    const fn = prefixerHandlers.pseudo(':pseudo');
    expect(
      fn({
        key: 'checked_checked',
        value: { flex: true },
        prefixes: defaultPrefixes,
        className: 'className',
        recursiveCompiler: () => 'css',
      }),
    ).toMatchInlineSnapshot('".className:checked:checked{css}"');
  });

  test('keyframe', () => {
    const fn = prefixerHandlers.keyframe({ from: '0%' });
    expect(
      fn({
        key: 'kf_drop',
        value: { from: { css: { flex: true } } },
        prefixes: defaultPrefixes,
        className: 'className',
        recursiveCompiler: () => 'css',
      }),
    ).toMatchInlineSnapshot('"@keyframes drop{0%{css}}"');
  });
});
