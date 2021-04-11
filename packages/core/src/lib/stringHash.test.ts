import { stringHash } from './stringHash';

test('stringHash', () => {
  const h1 = stringHash('stringHash');
  const h2 = stringHash(`${h1}`);
  expect(h1).toBe('-1573444417');
  expect(h2).toBe('-681790701');
});
