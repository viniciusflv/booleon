import { handleCssVars } from './handleCssVars';
import { rem } from './rem';

export function handleSize(value: string, addUnit = true) {
  return handleCssVars('sizes', value, () => {
    const size = value.replace('neg_', '-').replace('$', '%');
    const number = Number(size);
    const nan = isNaN(number);
    return nan ? size : addUnit ? rem(size) : size;
  });
}
