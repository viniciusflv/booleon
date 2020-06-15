type Options =
  | 'sd_1'
  | 'sd_2'
  | 'sd_3'
  | 'sd_4'
  | 'sd_6'
  | 'sd_8'
  | 'sd_9'
  | 'sd_12'
  | 'sd_16'
  | 'sd_24';

export type ShadowProps = { [key in Options]?: boolean };
