import { NUMBER } from '../constants';
import { Shadows } from '../types';
import { percentage } from '../utils';
import { handleShadow } from '../utils/handleShadow';

export const filter = [
  [
    ['ft_blur_' as `ft_blur_${number}`, `(${NUMBER})`],
    (value: string) => `filter:blur(${value}rem);`,
  ],
  [
    ['ft_bn_' as `ft_bn_${number}`, `(${NUMBER})`],
    (value: string) => `filter:brightness(${percentage(value)});`,
  ],
  [
    ['ft_contrast_' as `ft_contrast_${number}`, `(${NUMBER})`],
    (value: string) => `filter:contrast(${value}%);`,
  ],
  [
    ['ft_grayscale_' as `ft_grayscale_${number}`, `(${NUMBER})`],
    (value: string) => `filter:grayscale(${value}%);`,
  ],
  [
    ['ft_hue_' as `ft_hue_${number}`, `(${NUMBER})`],
    (value: string) => `filter:hue-rotate(${value}deg);`,
  ],
  [
    ['ft_opacity_' as `ft_opacity_${number}`, `(${NUMBER})`],
    (value: string) => `filter:opacity(${value}%);`,
  ],
  [
    ['ft_saturate_' as `ft_saturate_${number}`, `(${NUMBER})`],
    (value: string) => `filter:saturate(${value});`,
  ],
  [
    ['ft_sepia_' as `ft_sepia_${number}`, `(${NUMBER})`],
    (value: string) => `filter:sepia(${value}%);`,
  ],
  [
    ['ft_sd_' as `ft_sd_${Shadows}`, `(${NUMBER})`],
    (value: string) => `filter:${handleShadow(Number(value), false, true)};`,
  ],
  ['ft_invert', () => 'filter:invert(100%);'],
] as const;
