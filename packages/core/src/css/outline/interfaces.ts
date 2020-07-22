import { FlattenIntersection } from '../../helpers/interfaces';

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

type Props = FlattenIntersection<
  | { [key in string]?: boolean }
  | { [key in Options]?: boolean }
>;

export default Props;
