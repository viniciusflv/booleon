import { createClassName } from './createClassName';

describe('createClassName', () => {
  test('empty', () => {
    const res = createClassName({});
    expect(res).toMatchInlineSnapshot('"bl-0"');
  });

  test('with object', () => {
    const res = createClassName({ flex: true });
    expect(res).toMatchInlineSnapshot('"bl--1802589470"');
  });
});
