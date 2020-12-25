import { rem } from '../../packages/modules/src/utils';

test('rem', () => {
  const res = rem(12);
  expect(res).toBe('0.75rem');
});
