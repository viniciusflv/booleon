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
});
