import {
  SD_1,
  SD_12,
  SD_16,
  SD_2,
  SD_24,
  SD_3,
  SD_4,
  SD_6,
  SD_8,
  SD_9,
} from './constants';

export const fastHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
};

export const uniqueClass = (...classes: string[]) =>
  Array.from(new Set(classes.filter(Boolean))).join(' ');

export const rem = (value: any) =>
  isNaN(value) ? value : Number(value) * 0.0625 + 'rem';

export const percentage = (value: any) =>
  isNaN(value) ? value : Number(value) / 100;

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
      return handler(SD_1, inset, drop);
    case 2:
      return handler(SD_2, inset, drop);
    case 3:
      return handler(SD_3, inset, drop);
    case 4:
      return handler(SD_4, inset, drop);
    case 6:
      return handler(SD_6, inset, drop);
    case 8:
      return handler(SD_8, inset, drop);
    case 9:
      return handler(SD_9, inset, drop);
    case 12:
      return handler(SD_12, inset, drop);
    case 16:
      return handler(SD_16, inset, drop);
    case 24:
      return handler(SD_24, inset, drop);
    default:
      return '';
  }
}
