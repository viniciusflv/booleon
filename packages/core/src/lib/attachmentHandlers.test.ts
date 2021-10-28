import { AttachmentContext } from '../types';
import { attach } from './attachmentHandlers';
import { attachmentsDefault } from './attachmentsDefault';

describe('attach', () => {
  let ctx: AttachmentContext;

  beforeAll(() => {
    ctx = {
      key: 'key',
      value: { flex: true },
      className: 'className',
      attachments: attachmentsDefault,
      recursiveCompiler: () => 'css',
    };
  });

  test('classes', () => {
    const fn = attach.classes();
    expect(fn(ctx)).toMatchInlineSnapshot('".className{css}"');
  });

  test('media', () => {
    const fn = attach.media('breakpoint');
    expect(fn(ctx)).toMatchInlineSnapshot('"@media breakpoint{css}"');
  });

  test('theme', () => {
    const fn = attach.theme();
    expect(
      fn({
        key: 'key',
        value: { flex: true },
        className: 'className',
        attachments: attachmentsDefault,
        recursiveCompiler: () => '.bl-className {css}',
      }),
    ).toMatchInlineSnapshot('"body[data-theme=\\"key\\"] .bl-className {css}"');
  });

  test('pseudo', () => {
    const fn = attach.pseudo(':pseudo');
    expect(
      fn({
        key: 'checked_checked',
        value: { flex: true },
        className: 'className',
        attachments: attachmentsDefault,
        recursiveCompiler: () => 'css',
      }),
    ).toMatchInlineSnapshot('".className:checked:checked{css}"');
  });

  test('keyframe', () => {
    const fn = attach.keyframe({ from: '0%' });
    expect(
      fn({
        key: 'kf_drop',
        value: { from: { css: { flex: true } } },
        className: 'className',
        attachments: attachmentsDefault,
        recursiveCompiler: () => 'css',
      }),
    ).toMatchInlineSnapshot('"@keyframes drop{0%{css}}"');
  });

  test('important', () => {
    const fn = attach.important();
    expect(
      fn({
        key: 'key',
        value: { flex: true },
        className: 'className',
        attachments: attachmentsDefault,
        recursiveCompiler: () => '.bl-className {css;}',
      }),
    ).toMatchInlineSnapshot('".bl-className {css !important;}"');
  });
});
