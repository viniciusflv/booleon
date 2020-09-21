import { KeyInType } from '../../lib/interfaces';

type Options =
  | 'ol_none'
  | 'ols_dotted'
  | 'ols_dashed'
  | 'ols_solid'
  | 'ols_double'
  | 'ols_groove'
  | 'ols_ridge'
  | 'ols_inset'
  | 'ols_outset'
  | 'olw_NUMBER'
  | 'olc_HEX';

type Props = KeyInType<Options>;

export default Props;
