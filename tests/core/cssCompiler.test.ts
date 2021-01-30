import { cssCompiler } from '../../packages/core/src';
import { container } from '../../packages/modules/src';

describe('cssCompiler', () => {
  test('prefixer', () => {
    const res = cssCompiler('sticky', true, container);
    expect(res).toBe('position:-webkit-sticky;position:sticky;');
  });
});
