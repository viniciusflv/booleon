import { percentage } from './percentage';

test('percentage', () => {
  const res = percentage(100);
  expect(res).toBe(1);
});
