import { RGB_COLOR } from '../constants/regex';
import { handleCssVars } from './handleCssVars';
import { percentage } from './percentage';

export function handleColor(value: string) {
  return handleCssVars('colors', value, () => {
    const key = value.replace(/\s/g, '_');
    const isRGB = key.match(RegExp(RGB_COLOR));
    if (isRGB) {
      const [red, green, blue, opacity] = value.split(/\s/);
      return opacity
        ? `rgba(${red},${green},${blue},${percentage(opacity)})`
        : `rgb(${red},${green},${blue})`;
    } else {
      return `#${value}`;
    }
  });
}
