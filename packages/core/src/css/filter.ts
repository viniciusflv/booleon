import { Entry, Indexer } from '../lib/interfaces';
import { percentage, shadow } from '../lib/utils';

const filterIndexer: Indexer = [
  [() => '^(ft_blur_)(\\d+)', (value) => `filter:blur(${value}rem);`],
  [
    () => '^(ft_bn_)(\\d+)',
    (value) => `filter:brightness(${percentage(value)});`,
  ],
  [() => '^(ft_contrast_)(\\d+)', (value) => `filter:contrast(${value}%);`],
  [() => '^(ft_grayscale_)(\\d+)', (value) => `filter:grayscale(${value}%);`],
  [() => '^(ft_hue_)(\\d+)', (value) => `filter:hue-rotate(${value}deg);`],
  [() => '^(ft_opacity_)(\\d+)', (value) => `filter:opacity(${value}%);`],
  [() => '^(ft_saturate_)(\\d+)', (value) => `filter:saturate(${value});`],
  [() => '^(ft_sepia_)(\\d+)', (value) => `filter:sepia(${value}%);`],
  [
    () => '^(ft_sd_)(\\d+)',
    (value) => `filter:${shadow(Number(value), false, true)};`,
  ],
  [() => '(ft_invert_)(\\d+)', (value) => `filter:invert(${value}%);`],
];

type FilterProps = Entry<
  any,
  | 'ft_blur_NUMBER'
  | 'ft_btn_NUMBER'
  | 'ft_contrast_NUMBER'
  | 'ft_grayscale_NUMBER'
  | 'ft_hue_NUMBER'
  | 'ft_invertNUMBER'
  | 'ft_opacity_NUMBER'
  | 'ft_saturate_NUMBER'
  | 'ft_sepia_NUMBER'
  | 'ft_sd_NUMBER'
>;

export { filterIndexer, FilterProps };
