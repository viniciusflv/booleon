import { RGB_COLOR, HEX_COLOR } from '../constants/regex';
import { handleCssVars } from './handleCssVars';
import { percentage } from './percentage';

export function handleColor(value: string) {
  return handleCssVars(value, (newValue) => {
    if (newValue.match(RegExp(RGB_COLOR))) {
      const [red, green, blue, opacity] = newValue.split(/_/);
      return opacity
        ? `rgba(${red},${green},${blue},${percentage(opacity)})`
        : `rgb(${red},${green},${blue})`;
    } else if (RegExp(HEX_COLOR)) {
      return `#${newValue}`;
    }
    return newValue;
  });
}
