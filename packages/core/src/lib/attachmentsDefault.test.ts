import { attachmentsDefault } from './attachmentsDefault';

describe('attachmentsDefault', () => {
  test('dark', () => {
    const res = attachmentsDefault.dark({
      key: 'dark',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: ({ className }) => `.bl-${className} {css}`,
    });
    expect(res).toMatchInlineSnapshot(
      '"body[data-theme=\\"dark\\"] .bl-undefined {css}"',
    );
  });

  test('xs', () => {
    const res = attachmentsDefault.xs({
      key: 'xs',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 640px){css}"');
  });

  test('sm', () => {
    const res = attachmentsDefault.sm({
      key: 'sm',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 768px){css}"');
  });

  test('md', () => {
    const res = attachmentsDefault.md({
      key: 'md',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 1024px){css}"');
  });

  test('lg', () => {
    const res = attachmentsDefault.lg({
      key: 'lg',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 1440px){css}"');
  });

  test('xl', () => {
    const res = attachmentsDefault.xl({
      key: 'xl',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 1920px){css}"');
  });

  test('focus', () => {
    const res = attachmentsDefault.focus({
      key: 'focus',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:focus{css}"');
  });

  test('within', () => {
    const res = attachmentsDefault.within({
      key: 'within',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:focus-within{css}"');
  });

  test('after', () => {
    const res = attachmentsDefault.after({
      key: 'after',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:after{css}"');
  });

  test('before', () => {
    const res = attachmentsDefault.before({
      key: 'before',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:before{css}"');
  });

  test('active', () => {
    const res = attachmentsDefault.active({
      key: 'active',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:active{css}"');
  });

  test('checked', () => {
    const res = attachmentsDefault.checked({
      key: 'checked',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:checked{css}"');
  });

  test('disabled', () => {
    const res = attachmentsDefault.disabled({
      key: 'disabled',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:disabled{css}"');
  });

  test('hover', () => {
    const res = attachmentsDefault.hover({
      key: 'hover',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:hover{css}"');
  });

  test('visited', () => {
    const res = attachmentsDefault.visited({
      key: 'visited',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:visited{css}"');
  });

  test('child', () => {
    const res = attachmentsDefault.child({
      key: 'child',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className>*{css}"');
  });

  test('last', () => {
    const res = attachmentsDefault.last({
      key: 'last',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className>:last-child{css}"');
  });

  test('first', () => {
    const res = attachmentsDefault.first({
      key: 'first',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className>:first-child{css}"');
  });

  test('adjacent', () => {
    const res = attachmentsDefault.adjacent({
      key: 'adjacent',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className~*{css}"');
  });

  test('sibling', () => {
    const res = attachmentsDefault.sibling({
      key: 'sibling',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className+*{css}"');
  });

  test('odd', () => {
    const res = attachmentsDefault.odd({
      key: 'odd',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:nth-child(odd){css}"');
  });

  test('even', () => {
    const res = attachmentsDefault.even({
      key: 'even',
      value: { flex: true },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:nth-child(even){css}"');
  });

  test('kf', () => {
    const res = attachmentsDefault.kf({
      key: 'kf_animation',
      value: { from: { flex: true }, to: { flex: true } },
      attachments: attachmentsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot(
      '"@keyframes animation{0%{css}100%{css}}"',
    );
  });
});
