import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

const __Table = booleon.table(modules);
const __Row = booleon.tr(modules);
const __Column = booleon.td(modules);
const __Head = booleon.th(modules);
function KeyValue({ entries = [['key', 'value']] }) {
  return (
    <__Table bd_collapse ft_align_left w_full h_full>
      {entries?.map(([key, value]) => (
        <__Row
          key={key}
          ft_size_12
          hover__sd_4
          hover__bg_color_var_prismjs_selection>
          <__Head className="token function" p_5>
            {key}
          </__Head>
          <__Column
            className="token string"
            ft_weight_bold
            p_5
            pl_20
            bdl_1_solid_d55901>
            {value}
          </__Column>
        </__Row>
      ))}
    </__Table>
  );
}

export default KeyValue;
