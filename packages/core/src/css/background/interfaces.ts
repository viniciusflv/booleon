import { KeyInType } from '../../lib/interfaces';

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

type Props = { bg_img?: string } & KeyInType<Options>;

export default Props;
