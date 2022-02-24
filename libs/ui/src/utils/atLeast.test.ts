import { atLeast } from './atLeast';

describe('atLeast', () => {
  test('truthy', () => {
    expect(atLeast(2, 'a', true, undefined)).toBeTruthy();
  });

  test('falsy', () => {
    expect(atLeast(3, 'a', true, undefined)).toBeFalsy();
  });
});
