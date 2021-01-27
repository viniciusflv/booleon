import { RGB_COLOR, HEX_COLOR } from '../constants/regex';
import { handleCssVars } from './handleCssVars';
import { percentage } from './percentage';

export function handleColor(value: string) {
  return handleCssVars('colors', value, () => {
    const isRGB = value.match(RegExp(RGB_COLOR));
    const isHEX = value.match(RegExp(HEX_COLOR));
    if (isRGB) {
      const [red, green, blue, opacity] = value.split(/_/);
      return opacity
        ? `rgba(${red},${green},${blue},${percentage(opacity)})`
        : `rgb(${red},${green},${blue})`;
    } else if (isHEX) {
      return `#${value}`;
    }
    return value;
  });
}
