import { handleCssVars } from './handleCssVars';

export function handleSize(value: string, cb?: (str: string) => string) {
  return handleCssVars('sizes', value, () => {
    const size = value.replace('neg_', '-').replace('$', '%');
    const number = Number(size);
    const nan = isNaN(number);
    return nan ? size : cb ? cb(size) : size;
  });
}
