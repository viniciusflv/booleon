import { FlattenIntersection } from '../../helpers/interfaces';

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

type Props = FlattenIntersection<(
  | { [key in string]?: boolean }
  | { [key in Options]?: boolean }
) & {
  bg_img?: string;
}>;

export default Props;
