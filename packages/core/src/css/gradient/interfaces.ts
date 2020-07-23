import {
  KeyinTypeOrString,
} from '../../helpers/interfaces';

type Options =
  | 'gx_HEX'
  | 'gy_HEX'
  | 'gt_HEX'
  | 'gb_HEX'
  | 'gl_HEX'
  | 'gr_HEX';

type Props = KeyinTypeOrString<Options>;

export default Props;
