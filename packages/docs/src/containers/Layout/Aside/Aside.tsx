import modules from '@booleon/modules';
import { booleon } from '@booleon/react';
import { Link, List } from '@booleon/ui';

import { Link as GatsbyLink } from 'gatsby';

import * as icons from '../../../assets';
import { usePageNavData } from '../../../fragments/NavDataFragment';

const _Aside = booleon.aside(modules);
const _Div = booleon.div(modules);
const _Strong = booleon.strong(modules);
function Aside({ children, slug, ...props }: any) {
  const { headings, navigation } = usePageNavData(slug);

  return (
    <>
      <_Aside
        relative
        flex
        col
        fixed
        sm__static
        min_h_screen
        min_w_200rxm
        pt_20rxm
        md__pt_0
        md__mt_60rxm
        bg_color_fff
        bdr_width_1rxm
        bdr_style_solid
        bdr_color_d5d5d5
        dark__bdr_color_000
        dark__bg_color_22202c
        {...props}
      >
        <_Div h_full w_full>
          <_Div
            sm__sticky
            top_100rxm
            scy_auto
            w_full
            max_h_80vh
            grid
            grid_gap_20rxm
            cols_1fr
          >
            {navigation?.map(({ path, title, icon }) => (
              <_Div key={path} flex hover__ft_color_d55901>
                <Link
                  ft_size_14rxm
                  dark__ft_color_fff
                  tag={GatsbyLink}
                  to={`/${path}`}
                  first={icons?.[icon]}
                >
                  {title}
                </Link>
              </_Div>
            ))}
          </_Div>
        </_Div>
      </_Aside>
      {children}
      {headings?.length ? (
        <_Aside
          ft_size_14rxm
          py_20rxm
          md__pt_60rxm
          hidden
          md__flex
          md__col
          min_w_250rxm
          cross_start
          {...props}
        >
          <_Div
            sticky
            top_100rxm
            flex
            col
            cross_start
            gap_20rxm
            w_full
            max_h_70vh
          >
            <_Strong dark__ft_color_fff>On this page</_Strong>
            <_Div
              flex
              col
              scy_auto
              bdl_width_1rxm
              bdl_style_solid
              bdl_color_d55901
              ft_color_8795a1
            >
              <List>
                {headings?.map(({ value, depth }) => (
                  <List.Item key={value} depth={depth}>
                    <Link title={value} href={`#${value}`}>
                      {value}
                    </Link>
                  </List.Item>
                ))}
              </List>
            </_Div>
            <Link dark__ft_color_fff href="#top" last={icons.arrow}>
              Go to top
            </Link>
          </_Div>
        </_Aside>
      ) : null}
    </>
  );
}

export default Aside;
