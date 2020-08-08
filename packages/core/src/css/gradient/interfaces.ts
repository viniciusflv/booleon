import { KeyInType } from '../../lib/interfaces';

type Options = 
  | 'gx_HEX'
  | 'gy_HEX'
  | 'gt_HEX'
  | 'gb_HEX'
  | 'gl_HEX'
  | 'gr_HEX'

type Props = KeyInType<Options>;

export default Props;
