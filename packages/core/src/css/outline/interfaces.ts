import {
  FlattenIntersection,
  KeyinTypeOrString,
} from '../../helpers/interfaces';

type Options =
  | 'ol_none'
  | 'ol_dotted'
  | 'ol_dashed'
  | 'ol_solid'
  | 'ol_double'
  | 'ol_groove'
  | 'ol_ridge'
  | 'ol_inset'
  | 'ol_outset'
  | 'olw_NUMBER'
  | 'olc_HEX';

type Props = FlattenIntersection<KeyinTypeOrString<Options>>;

export default Props;
