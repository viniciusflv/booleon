import { handleCssVars } from './handleCssVars';
test('handleCssVars', () => {
  const x = handleCssVars('var_primary', () => '');
  expect(x).toBe('var(--primary)');
});
