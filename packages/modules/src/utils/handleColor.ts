import { RGB_COLOR } from '../constants/regex';
import { percentage } from './percentage';

export function handleColor(value: string) {
  const match = value.replace(/\s/g, '_').match(RegExp(RGB_COLOR));
  if (match) {
    const [red, green, blue, opacity] = value.split(/\s/);
    return opacity
      ? `rgba(${red},${green},${blue},${percentage(opacity)})`
      : `rgb(${red},${green},${blue})`;
  } else {
    return `#${value}`;
  }
}
