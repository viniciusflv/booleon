import { concatTuples } from './concatTuples';

test('concatTuples', () => {
  const res = concatTuples(['concat'], ['Tuples']);
  expect(res).toStrictEqual(['concat', 'Tuples']);
});
