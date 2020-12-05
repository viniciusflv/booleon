import { rem } from './rem';

test('rem', () => {
  const res = rem(12);
  expect(res).toBe('0.75rem');
});
