import {
  sd_1,
  sd_12,
  sd_16,
  sd_2,
  sd_24,
  sd_3,
  sd_4,
  sd_6,
  sd_8,
  sd_9,
} from './constants';

export const uniqueClass = (...classes: string[]) =>
  Array.from(new Set(classes.filter(Boolean))).join(' ');

export const divideIfNumber = (value: any, sulfix = '', divider = 100) =>
  isNaN(value) ? value : Number(value) / divider + sulfix;

export function handleStyle(id: string, classes: string) {
  let style = document.getElementById(id);
  if (!style) {
    style = document.createElement('style');
    style.setAttribute('id', id);
    document.head.appendChild(style);
  }
  if (classes !== style.innerHTML) style.innerHTML = classes;
}

const wrap = (bool?: boolean, value = '') =>
  bool ? `drop-shadow(${value})` : value;
const concat = (bool?: boolean, value = '') => (bool ? value : '');

const handler = (sd: string[][], inset?: boolean, drop?: boolean) =>
  sd
    .map(
      ([shadow, spread, color]) =>
        wrap(
          drop,
          [shadow, concat(!drop, spread), color, concat(inset, 'inset')]
            .filter(Boolean)
            .join(' '),
        ),
      '',
    )
    .join(concat(!drop, ','));

export function shadow(value: number, inset?: boolean, drop?: boolean) {
  switch (value) {
    case 1:
      return handler(sd_1, inset, drop);
    case 2:
      return handler(sd_2, inset, drop);
    case 3:
      return handler(sd_3, inset, drop);
    case 4:
      return handler(sd_4, inset, drop);
    case 6:
      return handler(sd_6, inset, drop);
    case 8:
      return handler(sd_8, inset, drop);
    case 9:
      return handler(sd_9, inset, drop);
    case 12:
      return handler(sd_12, inset, drop);
    case 16:
      return handler(sd_16, inset, drop);
    case 24:
      return handler(sd_24, inset, drop);
    default:
      return '';
  }
}
