import FilterProps from './interfaces';
import { handleShadow } from '../../lib/shadow';
import { Indexer } from '../../lib/interfaces';

const filterCss: Indexer<FilterProps> = [
  [/^(ft_blur_)(\d+)/, (value) => `filter: blur(${value}rem);`],
  [/^(ft_btn_)(\d+)/, (value) => `filter: brightness(${Number(value) / 10});`],
  [/^(ft_contrast_)(\d+)/, (value) => `filter: contrast(${value}%);`],
  [/^(ft_grayscale_)(\d+)/, (value) => `filter: grayscale(${value}%);`],
  [/^(ft_hue_)(\d+)/, (value) => `filter: hue-rotate(${value}deg);`],
  [/^(ft_opacity_)(\d+)/, (value) => `filter: opacity(${value}%);`],
  [/^(ft_saturate_)(\d+)/, (value) => `filter: saturate(${value});`],
  [/^(ft_sepia_)(\d+)/, (value) => `filter: sepia(${value}%);`],
  [
    /^(ft_sd_)(\d+)/,
    (value) => `filter: ${handleShadow(Number(value), false, true)};`,
  ],
  ['ft_invert', () => 'filter: invert(100%);'],
];

export default filterCss;
