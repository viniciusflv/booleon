type Options =
  | 'z_NUMBER'
  | 'top_NUMBER'
  | 'bottom_NUMBER'
  | 'left_NUMBER'
  | 'right_NUMBER'
  | 'top_neg_NUMBER'
  | 'bottom_neg_NUMBER'
  | 'left_neg_NUMBER'
  | 'right_neg_NUMBER'
  | 'top'
  | 'top_neg'
  | 'right'
  | 'right_neg'
  | 'bottom'
  | 'bottom_neg'
  | 'left'
  | 'left_neg'
  | 'z_max'
  | 'z_neg'
  | 'z_auto'
  | 'sc_auto'
  | 'sc_hidden'
  | 'sc_visible'
  | 'scy_auto'
  | 'scy_hidden'
  | 'scy_visible'
  | 'scx_auto'
  | 'scx_hidden'
  | 'scx_visible'
  | 'fixed'
  | 'absolute'
  | 'relative'
  | 'sticky'
  | 'cover'
  | 'fit_contain'
  | 'fit_cover'
  | 'fit_fill'
  | 'fit_none'
  | 'pointer_none'
  | 'outline_none'
  | 'cursor_auto'
  | 'cursor_default'
  | 'cursor_pointer'
  | 'cursor_wait'
  | 'cursor_text'
  | 'cursor_move'
  | 'cursor_not_allowed'
  | 'hidden'
  | 'visible'
  | 'invisible'
  | 'noappearance'
  | 'rz_none'
  | 'rz'
  | 'rzy'
  | 'rzx';

export type ContainerProps = { [key in Options]?: boolean };
