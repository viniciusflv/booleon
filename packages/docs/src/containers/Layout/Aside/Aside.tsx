import modules from '@booleon/modules';
import { booleon } from '@booleon/react';
import { Link } from '@booleon/ui';

import { Link as GatsbyLink } from 'gatsby';

import * as icons from '../../../assets';
import { useNavData } from './hooks';

const __Aside = booleon.aside(modules);
const __Div = booleon.div(modules);
const __Strong = booleon.strong(modules);
function Aside({ children, slug, ...props }: any) {
  const { headings, navigation } = useNavData(slug);

  return (
    <>
      <__Aside
        relative
        flex
        col
        fixed
        sm__static
        h_min_screen
        w_min_200
        pt_20
        md__pt_0
        md__mt_60
        bg_color_fff
        dark__bg_color_22202c
        dark__bdr_1_solid_000
        bdr_1_solid_d5d5d5
        {...props}>
        <__Div h_full w_full>
          <__Div
            sm__sticky
            top_100
            scy_auto
            w_full
            h_max_80vh
            grid
            grid_gap_20
            cols_1fr>
            {navigation?.map(({ path, title, icon }) => (
              <__Div key={path} flex hover__ft_color_d55901>
                <Link
                  flex
                  grow
                  ft_size_14
                  dark__ft_color_fff
                  as={GatsbyLink}
                  to={`/${path}`}
                  first={icons?.[icon]}>
                  {title}
                </Link>
              </__Div>
            ))}
          </__Div>
        </__Div>
      </__Aside>
      {children}
      {headings?.length ? (
        <__Aside
          ft_size_14
          py_20
          md__pt_60
          hidden
          md__flex
          md__col
          w_min_250
          cross_start
          {...props}>
          <__Div
            sticky
            top_100
            flex
            col
            cross_start
            child__mb_20
            scy_auto
            w_full
            h_max_80vh>
            <__Strong dark__ft_color_fff>On this page</__Strong>
            <__Div flex col bdl_1_solid_d55901 ft_color_8795a1>
              <UL child__mb_5>
                {headings?.map(({ value, depth }) =>
                  depth > 1 ? (
                    <Ul key={value} depth={depth}>
                      <li style={{ listStyle: 'none' }}>
                        <Link title={value} href={`#${value}`}>
                          {value}
                        </Link>
                      </li>
                    </Ul>
                  ) : (
                    <li key={value} style={{ listStyle: 'none' }}>
                      <Link title={value} href={`#${value}`}>
                        {value}
                      </Link>
                    </li>
                  ),
                )}
              </UL>
            </__Div>
            <Link dark__ft_color_fff href="#top" last={icons.arrow}>
              Go to top
            </Link>
          </__Div>
        </__Aside>
      ) : null}
    </>
  );
}

const UL = booleon.ul(modules);

const Ul = ({ depth, children }: any) => {
  let res = children;
  let count = depth;

  while (count > 1) {
    res = <ul>{res}</ul>;
    count--;
  }

  return res;
};

export default Aside;
