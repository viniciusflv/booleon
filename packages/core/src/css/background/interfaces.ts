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
  | 'op_PERCENTAGE';

export type BackgroundProps = (
  | { [key in Options]?: boolean }
  | { [key in string]?: boolean }
) & {
  bg_img?: string;
};
