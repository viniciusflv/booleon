import { stripSymbolValue } from './stripSymbolValue';

describe('stripSymbolValue', () => {
  test('default', () => {
    const res = stripSymbolValue(Symbol('display_flex'));
    expect(res).toMatchInlineSnapshot('"display_flex"');
  });

  test('with symbol', () => {
    const res = stripSymbolValue(Symbol('display_$'));
    expect(res).toMatchInlineSnapshot('"display_"');
  });
});
