import { percentage } from '../../packages/modules/src/utils';

test('percentage', () => {
  const res = percentage(100);
  expect(res).toBe(1);
});
