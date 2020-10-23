import { number } from '../constants/regex';
import { percentage } from '../utils';
import { shadow } from '../utils/handleShadow';

export const filterTuple = [
  [
    ['ft_blur_' as 'ft_blur_NUMBER', `(${number})`],
    (value: string) => `filter:blur(${value}rem);`,
  ],
  [
    ['ft_bn_' as 'ft_bn_NUMBER', `(${number})`],
    (value: string) => `filter:brightness(${percentage(value)});`,
  ],
  [
    ['ft_contrast_' as 'ft_contrast_NUMBER', `(${number})`],
    (value: string) => `filter:contrast(${value}%);`,
  ],
  [
    ['ft_grayscale_' as 'ft_grayscale_NUMBER', `(${number})`],
    (value: string) => `filter:grayscale(${value}%);`,
  ],
  [
    ['ft_hue_' as 'ft_hue_NUMBER', `(${number})`],
    (value: string) => `filter:hue-rotate(${value}deg);`,
  ],
  [
    ['ft_opacity_' as 'ft_opacity_NUMBER', `(${number})`],
    (value: string) => `filter:opacity(${value}%);`,
  ],
  [
    ['ft_saturate_' as 'ft_saturate_NUMBER', `(${number})`],
    (value: string) => `filter:saturate(${value});`,
  ],
  [
    ['ft_sepia_' as 'ft_sepia_NUMBER', `(${number})`],
    (value: string) => `filter:sepia(${value}%);`,
  ],
  [
    ['ft_sd_' as 'ft_sd_NUMBER', `(${number})`],
    (value: string) => `filter:${shadow(Number(value), false, true)};`,
  ],
  ['ft_invert', () => 'filter:invert(100%);'],
] as const;
