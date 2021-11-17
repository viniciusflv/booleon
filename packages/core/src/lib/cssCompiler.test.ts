import { cssCompiler } from './cssCompiler';

describe('cssCompiler', () => {
  test('prefixer', () => {
    const res = cssCompiler('sticky', true, {
      sticky: () => 'position:sticky;',
    });
    expect(res).toMatchInlineSnapshot(
      '"position:-webkit-sticky;position:sticky;"',
    );
  });

  test('prop value', () => {
    const res = cssCompiler('display_flex', true, {
      [Symbol('display_$')]: ($) => `display:${$};`,
    });
    expect(res).toMatchInlineSnapshot('"display:flex;"');
  });

  test('negative value', () => {
    const res = cssCompiler('width_neg_10px', true, {
      [Symbol('width_$')]: ($) => `width:${$};`,
    });
    expect(res).toMatchInlineSnapshot('"width:-10px;"');
  });

  test('percentage', () => {
    const res = cssCompiler('width_10$', true, {
      [Symbol('width_$')]: ($) => `width:${$};`,
    });
    expect(res).toMatchInlineSnapshot('"width:10%;"');
  });

  test('rxm', () => {
    const res = cssCompiler('width_10rxm', true, {
      [Symbol('width_$')]: ($) => `width:${$};`,
    });
    expect(res).toMatchInlineSnapshot('"width:0.625rem;"');
  });

  test('string value overwrite', () => {
    const res = cssCompiler('width_$', '321px', {
      [Symbol('width_$')]: ($) => `width:${$};`,
    });
    expect(res).toMatchInlineSnapshot('"width:321px;"');
  });

  test('css var', () => {
    const res = cssCompiler('width_var_primary', true, {
      [Symbol('width_$')]: ($) => `width:${$};`,
    });
    expect(res).toMatchInlineSnapshot('"width:var(--primary);"');
  });
});
