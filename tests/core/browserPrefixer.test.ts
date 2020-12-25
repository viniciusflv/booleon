import { browserPrefixer } from '../../packages/core/src';

describe('browserPrefixer', () => {
  test('sticky', () => {
    const res = browserPrefixer('position:sticky;');
    expect(res).toBe('position:-webkit-sticky;position:sticky;');
  });

  test('appearance', () => {
    const res = browserPrefixer('appearance:none;');
    expect(res).toBe(
      '-webkit-appearance:none;-moz-appearance:none;appearance:none;',
    );
  });
});
