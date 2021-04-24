import modules from '@booleon/modules';
import { booleon } from '@booleon/react';
import { Svg, Link } from '@booleon/ui';

import { Link as GatsbyLink } from 'gatsby';

import * as icons from '../../../assets';
import { useNavData } from './hooks';

const __Aside = booleon.aside(modules);
const __Div = booleon.div(modules);
const __Strong = booleon.strong(modules);
function Aside({ children, slug, ...props }: any) {
  const { headings, navigation } = useNavData(slug);

  console.log(navigation);

  return (
    <>
      <__Aside
        area_ASIDE_DOCS
        flex
        col
        cross_end
        w_min_250
        p_20
        bg_color_fff
        dark__bg_color_191921
        bdr_1_solid_d5d5d5
        dark__bdr_1_solid_000000
        {...props}>
        <__Div sticky top_100 flex col cross_end child__mb_10>
          {navigation?.map(({ path, title, icon }) => (
            <__Div
              key={path}
              flex
              w_full
              ft_color_d55901={path === slug}
              hover__ft_color_d55901>
              {icon ? <Svg w_30 h_30 mr_20 {...icons?.[icon]} /> : null}
              <Link flex grow main_end as={GatsbyLink} to={`/${path}`}>
                {title}
              </Link>
            </__Div>
          ))}
        </__Div>
      </__Aside>
      {children}
      <__Aside
        area_ASIDE_HEADINGS
        py_20
        hidden
        md__flex
        md__col
        w_min_250
        cross_start
        {...props}>
        <__Div sticky top_100 flex col child__mb_20>
          <__Strong>On this page</__Strong>
          <__Div flex col px_20 bdl_1_solid_d55901>
            <UL child__mb_5>
              {headings?.map(({ value, depth }) =>
                depth > 1 ? (
                  <Ul depth={depth}>
                    <li>
                      <Link title={value} href={`#${value}`}>
                        {value}
                      </Link>
                    </li>
                  </Ul>
                ) : (
                  <li>
                    <Link title={value} href={`#${value}`}>
                      {value}
                    </Link>
                  </li>
                ),
              )}
            </UL>
          </__Div>
          <__Div flex hover__ft_color_d55901>
            <Link mr_20 href="#top">
              Go to top
            </Link>
            <Svg w_30 h_30 mr_20 {...icons.arrow} />
          </__Div>
        </__Div>
      </__Aside>
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
