import { handleCssVars } from '../../packages/modules/src/utils/handleCssVars';
test('', () => {
  const x = handleCssVars('colors', 'var_primary', () => '');
  expect(x).toBe('var(--colors-primary)');
});
