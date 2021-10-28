import { sym } from './sym';

test('sym', async () => {
  const symbol = sym('flex');

  expect(symbol.toString()).toBe('Symbol(flex)');
});
