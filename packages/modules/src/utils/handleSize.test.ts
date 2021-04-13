import { handleSize, percentage } from '.';

describe('handleSize', () => {
  test('none', () => {
    const size = handleSize('12');
    expect(size).toBe('12');
  });

  test('neg', () => {
    const size = handleSize('neg_12');
    expect(size).toBe('-12');
  });

  test('%', () => {
    const size = handleSize('12$');
    expect(size).toBe('12%');
  });

  test('cb', () => {
    const size = handleSize('100', percentage);
    expect(size).toBe(1);
  });
});
