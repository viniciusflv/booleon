import { cssCompiler } from '../../packages/core/src';
import { container } from '../../packages/modules/src';

describe('cssCompiler', () => {
  test('prefixer', () => {
    const res = cssCompiler('sticky', true, container);
    expect(res).toBe('position:-webkit-sticky;position:sticky;');
  });

  // test('aggregation', () => {
  //   const res = cssCompiler('ft_invert', true, [
  //     [
  //       ['ft_', '(.*)'],
  //       [
  //         (value: string) => `filter:${value};`,
  //         [['ft_invert', () => 'invert(100%)']],
  //       ],
  //     ],
  //   ]);
  //   expect(res).toBe('filter:invert(100%);');
  // });
});
