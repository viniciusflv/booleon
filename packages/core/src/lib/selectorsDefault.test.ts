import { selectorsDefault } from './selectorsDefault';

describe('selectorsDefault', () => {
  test('dark', () => {
    const res = selectorsDefault.dark({
      key: 'dark',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: ({ className }) => `.bl-${className} {css}`,
    });
    expect(res).toMatchInlineSnapshot(
      '"body[data-theme=\\"dark\\"] .bl-undefined {css}"',
    );
  });

  test('xs', () => {
    const res = selectorsDefault.xs({
      key: 'xs',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 640px){css}"');
  });

  test('sm', () => {
    const res = selectorsDefault.sm({
      key: 'sm',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 768px){css}"');
  });

  test('md', () => {
    const res = selectorsDefault.md({
      key: 'md',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 1024px){css}"');
  });

  test('lg', () => {
    const res = selectorsDefault.lg({
      key: 'lg',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 1440px){css}"');
  });

  test('xl', () => {
    const res = selectorsDefault.xl({
      key: 'xl',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 1920px){css}"');
  });

  test('not', () => {
    const res = selectorsDefault.not({
      key: 'not_checked',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:not(:checked){css}"');
  });

  test('focus', () => {
    const res = selectorsDefault.focus({
      key: 'focus',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:focus{css}"');
  });

  test('within', () => {
    const res = selectorsDefault.within({
      key: 'within',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:focus-within{css}"');
  });

  test('after', () => {
    const res = selectorsDefault.after({
      key: 'after',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:after{css}"');
  });

  test('before', () => {
    const res = selectorsDefault.before({
      key: 'before',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:before{css}"');
  });

  test('active', () => {
    const res = selectorsDefault.active({
      key: 'active',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:active{css}"');
  });

  test('checked', () => {
    const res = selectorsDefault.checked({
      key: 'checked',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:checked{css}"');
  });

  test('disabled', () => {
    const res = selectorsDefault.disabled({
      key: 'disabled',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:disabled{css}"');
  });

  test('hover', () => {
    const res = selectorsDefault.hover({
      key: 'hover',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:hover{css}"');
  });

  test('visited', () => {
    const res = selectorsDefault.visited({
      key: 'visited',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:visited{css}"');
  });

  test('child', () => {
    const res = selectorsDefault.child({
      key: 'child',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className>*{css}"');
  });

  test('last', () => {
    const res = selectorsDefault.last({
      key: 'last',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className>:last-child{css}"');
  });

  test('first', () => {
    const res = selectorsDefault.first({
      key: 'first',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className>:first-child{css}"');
  });

  test('adjacent', () => {
    const res = selectorsDefault.adjacent({
      key: 'adjacent',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className~*{css}"');
  });

  test('sibling', () => {
    const res = selectorsDefault.sibling({
      key: 'sibling',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className+*{css}"');
  });

  test('odd', () => {
    const res = selectorsDefault.odd({
      key: 'odd',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:nth-child(odd){css}"');
  });

  test('even', () => {
    const res = selectorsDefault.even({
      key: 'even',
      value: { flex: true },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:nth-child(even){css}"');
  });

  test('kf', () => {
    const res = selectorsDefault.kf({
      key: 'kf_animation',
      value: { from: { flex: true }, to: { flex: true } },
      selectors: selectorsDefault,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot(
      '"@keyframes animation{0%{css}100%{css}}"',
    );
  });
});
