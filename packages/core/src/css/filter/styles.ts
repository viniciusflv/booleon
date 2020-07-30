

import { indexerCss } from '../../lib/indexer';
import FilterProps from './interfaces';
  
const cursorCss = indexerCss<FilterProps>([
  [null, () => 'filter:'],
  [/^(ft_blur_)()/, () => 'blur(4px);'],
  [/^(ft_btn_)()/, () => 'brightness(0.30);'],
  [/^(ft_contrast_)()/, () => 'contrast(180%);'],
  [/^(ft_grayscale_)()/, () => 'grayscale(100%);'],
  [/^(ft_hue_)()/, () => 'hue-rotate(180deg);'],
  [/^(ft_invert_)()/, () => 'invert(100%);'],
  [/^(ft_opacity_)()/, () => 'opacity(50%);'],
  [/^(ft_saturate_)()/, () => 'saturate(7);'],
  [/^(ft_sepia_)()/, () => 'sepia(100%);'],
  [/^(ft_shadow_)()/, () => 'drop-shadow(8px 8px 10px gray);'],
  [null, () => ';'],
]);
  
export default cursorCss;