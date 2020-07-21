import { FlattenIntersection } from '../../helpers/interfaces';
type Options =
  | 'gx_HEX'
  | 'gy_HEX'
  | 'gt_HEX'
  | 'gb_HEX'
  | 'gl_HEX'
  | 'gr_HEX';

type Props = FlattenIntersection<
  | { [key in string]?: boolean }
  | { [key in Options]?: boolean }
>;

export default Props;
