import { RGB_COLOR, HEX_COLOR } from '../constants/regex';
import { percentage } from './percentage';

export function handleColor(value: string) {
  if (value.startsWith('var')) {
    return value;
  } else if (value.match(RegExp(RGB_COLOR))) {
    const [red, green, blue, opacity] = value.split(/_/);
    return opacity
      ? `rgba(${red},${green},${blue},${percentage(opacity)})`
      : `rgb(${red},${green},${blue})`;
  } else if (value.match(RegExp(HEX_COLOR))) {
    return `#${value}`;
  }
  return value;
}
