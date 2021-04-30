import { handleCssVars } from './handleCssVars';
test('handleCssVars', () => {
  const x = handleCssVars('colors', 'var_primary', () => '');
  expect(x).toBe('var(--primary)');
});
