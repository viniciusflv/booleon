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
} from '../constants/shadow';

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

export function handleShadow(
  value: any,
  inset?: boolean,
  drop?: boolean,
): string {
  return isNaN(value)
    ? ''
    : {
        1: handler(SD_1, inset, drop),
        2: handler(SD_2, inset, drop),
        3: handler(SD_3, inset, drop),
        4: handler(SD_4, inset, drop),
        6: handler(SD_6, inset, drop),
        8: handler(SD_8, inset, drop),
        9: handler(SD_9, inset, drop),
        12: handler(SD_12, inset, drop),
        16: handler(SD_16, inset, drop),
        24: handler(SD_24, inset, drop),
      }[Number(value)];
}
