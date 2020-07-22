import {
  FlattenIntersection,
  KeyinTypeOrString,
} from '../../helpers/interfaces';

type Options =
  | 'bc_HEX'
  | 'bxc_HEX'
  | 'byc_HEX'
  | 'btc_HEX'
  | 'bbc_HEX'
  | 'blc_HEX'
  | 'brc_HEX'
  | 'b_collapse'
  | 'b_separate'
  | 'b_none'
  | 'b_solid'
  | 'b_dashed'
  | 'b_dotted'
  | 'b_double'
  | 'b_circular'
  | 'b_rounded'
  | 'b_edge'
  | 'b_thick'
  | 'b_thin'
  | 'bx_none'
  | 'bx_solid'
  | 'bx_dashed'
  | 'bx_dotted'
  | 'bx_double'
  | 'bx_thick'
  | 'bx_thin'
  | 'by_none'
  | 'by_solid'
  | 'by_dashed'
  | 'by_dotted'
  | 'by_double'
  | 'by_thick'
  | 'by_thin'
  | 'bt_none'
  | 'bt_solid'
  | 'bt_dashed'
  | 'bt_dotted'
  | 'bt_double'
  | 'bt_circular'
  | 'bt_rounded'
  | 'bt_edge'
  | 'bt_thick'
  | 'bt_thin'
  | 'bb_none'
  | 'bb_solid'
  | 'bb_dashed'
  | 'bb_dotted'
  | 'bb_double'
  | 'bb_circular'
  | 'bb_rounded'
  | 'bb_edge'
  | 'bb_thick'
  | 'bb_thin'
  | 'bl_none'
  | 'bl_solid'
  | 'bl_dashed'
  | 'bl_dotted'
  | 'bl_double'
  | 'bl_circular'
  | 'bl_rounded'
  | 'bl_edge'
  | 'bl_thick'
  | 'bl_thin'
  | 'br_none'
  | 'br_solid'
  | 'br_dashed'
  | 'br_dotted'
  | 'br_double'
  | 'br_circular'
  | 'br_rounded'
  | 'br_edge'
  | 'br_thick'
  | 'br_thin'
  | 'btr_circular'
  | 'btr_rounded'
  | 'btr_edge'
  | 'btl_circular'
  | 'btl_rounded'
  | 'btl_edge'
  | 'bbr_circular'
  | 'bbr_rounded'
  | 'bbr_edge'
  | 'bbl_circular'
  | 'bbl_rounded'
  | 'bbl_edge';

type Props = FlattenIntersection<KeyinTypeOrString<Options>>;

export default Props;
