type Options =
  | 'bg_repeat'
  | 'bg_norepeat'
  | 'bg_auto'
  | 'bg_cover'
  | 'bg_contain'
  | 'bg_fixed'
  | 'bg_local'
  | 'bg_scroll'
  | 'bg_HEX'
  | 'op_PERCENTAGE'
  | 'g_op_PERCENTAGE'
  | 'gx_HEX'
  | 'gy_HEX'
  | 'gt_HEX'
  | 'gb_HEX'
  | 'gl_HEX'
  | 'gr_HEX';

export type BackgroundProps = (
  | { [key in Options]?: boolean }
  | { [key in string]?: boolean }
) & {
  bg_img?: string;
};
