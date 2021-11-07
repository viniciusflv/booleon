import { handleCssVars } from './handleCssVars';

test('handleCssVars', () => {
  const x = handleCssVars('var_dark_primary');
  expect(x).toBe('var(--dark-primary)');
});
