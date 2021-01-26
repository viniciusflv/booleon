import { handleCssVars } from '../../packages/modules/src/utils/handleCssVars';
test('', () => {
  const x = handleCssVars('colors', 'var primary', () => '');
  expect(x).toBe('var(--colors-primary)');
});
