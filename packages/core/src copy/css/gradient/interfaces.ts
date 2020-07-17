type Options = 'gx_HEX' | 'gy_HEX' | 'gt_HEX' | 'gb_HEX' | 'gl_HEX' | 'gr_HEX';

export type GradientProps =
  | { [key in Options]?: boolean }
  | { [key in string]?: boolean };
