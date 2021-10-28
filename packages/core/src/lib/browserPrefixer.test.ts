import { browserPrefixer } from './browserPrefixer';

describe('browserPrefixer', () => {
  test('sticky', () => {
    const res = browserPrefixer('position:sticky;');
    expect(res).toMatchInlineSnapshot(
      '"position:-webkit-sticky;position:sticky;"',
    );
  });

  test('appearance', () => {
    const res = browserPrefixer('appearance:none;');
    expect(res).toMatchInlineSnapshot(
      '"-webkit-appearance:none;-moz-appearance:none;appearance:none;"',
    );
  });
});
