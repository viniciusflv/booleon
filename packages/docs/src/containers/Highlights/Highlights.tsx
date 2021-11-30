import modules from '@booleon/modules';
import { booleon } from '@booleon/react';
import { IconText } from '@booleon/ui';

import * as icons from '../../assets';
import { useNavData } from '../../fragments/NavDataFragment';

const _Highlights = booleon.section(modules);
const _Card = booleon.section(modules);

function Highlights() {
  const edges = useNavData();

  console.log({ edges });

  return (
    <_Highlights
      relative
      top_neg_10vh
      grid
      cols_1fr
      xs__cols_1fr_1fr
      sm__cols_1fr_1fr
      md__cols_1fr_1fr_1fr_1fr
      gap_24rxm
      sm__main_between
      main_center
      cross_center
      do_wrap
      py_60rxm
      px_20rxm
      max_w_1440rxm
      min_h_30vh
      w_full
      h_full
      m_auto
    >
      {edges
        .filter(({ node: { slug } }) => /[^docs/*$]/.test(slug))
        .map(
          ({
            node: {
              slug,
              headings,
              frontmatter: { title, icon },
            },
          }) => (
            <_Card
              key={slug}
              flex
              col
              cross_center
              main_center
              w_full
              py_20rxm
              bg_color_fff
              dark__bg_color_22202c
              sd_4
              hover__sd_12
              dark__hover__sd_16
              relative
              bd_radius_8rxm
              dark__bd_1_solid_000
              bd_color_d55901
              bd_width_0
              bd_style_solid
              bdb_width_3rxm
              hover__bdb_width_5rxm
              ts_all
              ts_ease_out
            >
              <IconText
                ft_size_20rxm
                col
                color="#d55901"
                first={{ ...icons[icon], color: 'red' }}
              >
                {title}
              </IconText>
            </_Card>
          ),
        )}
    </_Highlights>
  );
}

export default Highlights;
