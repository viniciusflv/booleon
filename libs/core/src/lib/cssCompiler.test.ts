import { cssCompiler } from './cssCompiler';
import { selectorsDefault } from './selectorsDefault';

describe('cssCompiler', () => {
  test('prefixer', () => {
    const res = cssCompiler(
      {
        key: 'sticky',
        value: true,
        selectors: selectorsDefault,
      } as any,
      {
        sticky: () => 'position:sticky;',
      },
    );
    expect(res).toMatchInlineSnapshot(
      '"position:-webkit-sticky;position:sticky;"',
    );
  });

  test('prop value', () => {
    const res = cssCompiler(
      {
        key: 'display_flex',
        value: true,
        selectors: selectorsDefault,
      } as any,
      {
        [Symbol('display_$')]: ($) => `display:${$};`,
      },
    );
    expect(res).toMatchInlineSnapshot('"display:flex;"');
  });

  test('negative value', () => {
    const res = cssCompiler(
      {
        key: 'width_neg_10px',
        value: true,
        selectors: selectorsDefault,
      } as any,
      {
        [Symbol('width_$')]: ($) => `width:${$};`,
      },
    );
    expect(res).toMatchInlineSnapshot('"width:-10px;"');
  });

  test('percentage', () => {
    const res = cssCompiler(
      {
        key: 'width_10$',
        value: true,
        selectors: selectorsDefault,
      } as any,
      {
        [Symbol('width_$')]: ($) => `width:${$};`,
      },
    );
    expect(res).toMatchInlineSnapshot('"width:10%;"');
  });

  test('rxm', () => {
    const res = cssCompiler(
      {
        key: 'width_10rxm',
        value: true,
        selectors: selectorsDefault,
      } as any,
      {
        [Symbol('width_$')]: ($) => `width:${$};`,
      },
    );
    expect(res).toMatchInlineSnapshot('"width:0.625rem;"');
  });

  test('string value overwrite', () => {
    const res = cssCompiler(
      {
        key: 'width_$',
        value: '321px',
        selectors: selectorsDefault,
      } as any,
      {
        [Symbol('width_$')]: ($) => `width:${$};`,
      },
    );
    expect(res).toMatchInlineSnapshot('"width:321px;"');
  });

  test('css var', () => {
    const res = cssCompiler(
      {
        key: 'width_var_primary',
        value: true,
        selectors: selectorsDefault,
      } as any,
      {
        [Symbol('width_$')]: ($) => `width:${$};`,
      },
    );
    expect(res).toMatchInlineSnapshot('"width:var(--primary);"');
  });

  test('tokens', () => {
    const res = cssCompiler(
      {
        key: 'ft_color_ruby',
        value: true,
        selectors: selectorsDefault,
      } as any,
      {
        ft_color_ruby: (_, t) => `color:${t?.colors.ruby};`,
      },
      {
        colors: { ruby: '#f00' },
      },
    );
    expect(res).toMatchInlineSnapshot('"color:#f00;"');
  });
});
