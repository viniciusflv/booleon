import { Entry, Indexer } from '../lib/interfaces';
import { hexColor } from '../lib/regex';

const lg = (linear: string) => `background-image:linear-gradient(${linear});`;

const gradientIndexer: Indexer = [
  [
    () => `^(gx_)(${hexColor})`,
    (value) => lg(`to right,#${value},transparent,#${value}`),
  ],
  [
    () => `^(gy_)(${hexColor})`,
    (value) => lg(`to top,#${value},transparent,#${value}`),
  ],
  [() => `^(gt_)(${hexColor})`, (value) => lg(`to top,transparent,#${value}`)],
  [() => `^(gb_)(${hexColor})`, (value) => lg(`to bottom,transparent,#${value}`)],
  [() => `^(gl_)(${hexColor})`, (value) => lg(`to left,transparent,#${value}`)],
  [() => `^(gr_)(${hexColor})`, (value) => lg(`to right,transparent,#${value}`)],
];

type GradientProps = Entry<
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

export { gradientIndexer, GradientProps };
