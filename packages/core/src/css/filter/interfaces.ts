import { KeyInType } from '../../lib/interfaces';
type Options = 
| 'ft_blur_'
| 'ft_btn_'
| 'ft_contrast_'
| 'ft_grayscale_'
| 'ft_hue_'
| 'ft_invert'
| 'ft_opacity_'
| 'ft_saturate_'
| 'ft_sepia_'
| 'ft_sd_';

type Props = KeyInType<Options>;

export default Props;