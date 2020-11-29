import { cssCompiler } from './cssCompiler';

test('cssCompiler', () => {
  const res = cssCompiler('sticky', true, [
    ['sticky', () => 'position:sticky;'],
  ]);
  expect(res).toBe('position:-webkit-sticky;position:sticky;');
});
