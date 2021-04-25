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
        flex
        col
        w_min_250
        p_20
        bg_color_fff
        dark__bg_color_191921
        bdx_1_solid_d5d5d5
        dark__bdx_1_solid_000000
        {...props}>
        <__Div
          sticky
          top_100
          grid
          grid_gap_20
          xs__cols_1fr_1fr
          sm__cols_1fr_1fr_1fr_1fr
          md__cols_1fr>
          {navigation?.map(({ path, title, icon }) => (
            <__Div key={path} flex hover__ft_color_d55901>
              <Link
                flex
                grow
                as={GatsbyLink}
                to={`/${path}`}
                first={icons?.[icon]}>
                {title}
              </Link>
            </__Div>
          ))}
        </__Div>
      </__Aside>
      {children}
      {headings?.length ? (
        <__Aside py_20 hidden md__flex md__col w_min_250 cross_start {...props}>
          <__Div sticky top_100 flex col cross_start child__mb_20>
            <__Strong>On this page</__Strong>
            <__Div flex col pl_20 bdl_1_solid_d55901>
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
            <Link href="#top" last={icons.arrow}>
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
