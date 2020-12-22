import { NUMBER } from '../constants';
import { Shadows } from '../types';
import { percentage, handleShadow } from '../utils';

export const filter = [
  [
    ['ft_', '(.*)'],
    [
      (value: string) => `filter:${value};`,
      [
        [
          ['ft_blur_' as 'ft_blur_NUMBER', `(${NUMBER})`],
          (value: string) => `blur(${value}rem)`,
        ],
        [
          ['ft_bn_' as 'ft_bn_NUMBER', `(${NUMBER})`],
          (value: string) => `brightness(${percentage(value)})`,
        ],
        [
          ['ft_contrast_' as 'ft_contrast_NUMBER', `(${NUMBER})`],
          (value: string) => `contrast(${value}%)`,
        ],
        [
          ['ft_grayscale_' as 'ft_grayscale_NUMBER', `(${NUMBER})`],
          (value: string) => `grayscale(${value}%)`,
        ],
        [
          ['ft_hue_' as 'ft_hue_NUMBER', `(${NUMBER})`],
          (value: string) => `hue-rotate(${value}deg)`,
        ],
        [
          ['ft_opacity_' as 'ft_opacity_NUMBER', `(${NUMBER})`],
          (value: string) => `opacity(${value}%)`,
        ],
        [
          ['ft_saturate_' as 'ft_saturate_NUMBER', `(${NUMBER})`],
          (value: string) => `saturate(${value})`,
        ],
        [
          ['ft_sepia_' as 'ft_sepia_NUMBER', `(${NUMBER})`],
          (value: string) => `sepia(${value}%)`,
        ],
        [
          ['ft_sd_' as `ft_sd_${Shadows}`, `(${NUMBER})`],
          (value: string) => handleShadow(Number(value), false, true),
        ],
        ['ft_invert', () => 'invert(100%)'],
      ],
    ],
  ],
] as const;
