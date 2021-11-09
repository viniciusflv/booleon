import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

const _Table = booleon.table(modules);
const _Row = booleon.tr(modules);
const _Column = booleon.td(modules);
const _Head = booleon.th(modules);
function KeyValue({ entries = [['key', 'value']] }) {
  return (
    <_Table bd_collapse ft_align_left w_full h_full>
      {entries?.map(([key, value]) => (
        <_Row
          key={key}
          ft_size_12
          hover__sd_4
          hover__bg_color_var_prismjs_selection
        >
          <_Head className="token function" p_5>
            {key}
          </_Head>
          <_Column
            className="token string"
            ft_weight_bold
            p_5
            pl_20
            bdl_1_solid_d55901
          >
            {value}
          </_Column>
        </_Row>
      ))}
    </_Table>
  );
}

export default KeyValue;
