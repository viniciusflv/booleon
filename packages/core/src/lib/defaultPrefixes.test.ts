import { defaultPrefixes } from './defaultPrefixes';

describe('defaultPrefixes', () => {
  test('dark', () => {
    const res = defaultPrefixes.dark({
      key: 'dark',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: ({ className }) => `.bl-${className} {css}`,
    });
    expect(res).toMatchInlineSnapshot(
      '"body[data-theme=\\"dark\\"] .bl-undefined {css}"',
    );
  });

  test('xs', () => {
    const res = defaultPrefixes.xs({
      key: 'xs',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 640px){css}"');
  });

  test('sm', () => {
    const res = defaultPrefixes.sm({
      key: 'sm',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 768px){css}"');
  });

  test('md', () => {
    const res = defaultPrefixes.md({
      key: 'md',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 1024px){css}"');
  });

  test('lg', () => {
    const res = defaultPrefixes.lg({
      key: 'lg',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 1440px){css}"');
  });

  test('xl', () => {
    const res = defaultPrefixes.xl({
      key: 'xl',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('"@media (min-width: 1920px){css}"');
  });

  test('focus', () => {
    const res = defaultPrefixes.focus({
      key: 'focus',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:focus{css}"');
  });

  test('within', () => {
    const res = defaultPrefixes.within({
      key: 'within',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:focus-within{css}"');
  });

  test('after', () => {
    const res = defaultPrefixes.after({
      key: 'after',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:after{css}"');
  });

  test('before', () => {
    const res = defaultPrefixes.before({
      key: 'before',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:before{css}"');
  });

  test('active', () => {
    const res = defaultPrefixes.active({
      key: 'active',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:active{css}"');
  });

  test('checked', () => {
    const res = defaultPrefixes.checked({
      key: 'checked',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:checked{css}"');
  });

  test('disabled', () => {
    const res = defaultPrefixes.disabled({
      key: 'disabled',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:disabled{css}"');
  });

  test('hover', () => {
    const res = defaultPrefixes.hover({
      key: 'hover',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:hover{css}"');
  });

  test('visited', () => {
    const res = defaultPrefixes.visited({
      key: 'visited',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:visited{css}"');
  });

  test('child', () => {
    const res = defaultPrefixes.child({
      key: 'child',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className>*{css}"');
  });

  test('last', () => {
    const res = defaultPrefixes.last({
      key: 'last',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className>:last-child{css}"');
  });

  test('first', () => {
    const res = defaultPrefixes.first({
      key: 'first',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className>:first-child{css}"');
  });

  test('adjacent', () => {
    const res = defaultPrefixes.adjacent({
      key: 'adjacent',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className~*{css}"');
  });

  test('sibling', () => {
    const res = defaultPrefixes.sibling({
      key: 'sibling',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className+*{css}"');
  });

  test('odd', () => {
    const res = defaultPrefixes.odd({
      key: 'odd',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:nth-child(odd){css}"');
  });

  test('even', () => {
    const res = defaultPrefixes.even({
      key: 'even',
      value: { flex: true },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot('".className:nth-child(even){css}"');
  });

  test('kf', () => {
    const res = defaultPrefixes.kf({
      key: 'kf_animation',
      value: { from: { flex: true }, to: { flex: true } },
      prefixes: defaultPrefixes,
      className: 'className',
      recursiveCompiler: () => 'css',
    });
    expect(res).toMatchInlineSnapshot(
      '"@keyframes animation{0%{css}100%{css}}"',
    );
  });
});
