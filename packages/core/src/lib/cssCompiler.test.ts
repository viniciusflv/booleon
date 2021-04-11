import { cssCompiler } from './cssCompiler';

describe('cssCompiler', () => {
  test('prefixer', () => {
    const res = cssCompiler('sticky', true, {
      sticky: () => 'position:sticky;',
    });
    expect(res).toBe('position:-webkit-sticky;position:sticky;');
  });
});
