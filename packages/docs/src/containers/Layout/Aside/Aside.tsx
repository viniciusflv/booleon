import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

import { Link, graphql } from 'gatsby';

import { useNavData } from './hooks';

const __Aside = booleon.aside(modules);
const __Div = booleon.div(modules);
const __Link = booleon(Link, modules);
function Aside({ children, data, ...props }: any) {
  console.log(data);
  const navData = useNavData();

  return (
    <>
      <__Aside
        area_ASIDE_DOCS
        flex
        col
        w_min_250
        p_20
        bg_color_fff
        dark__bg_color_191921
        bdr_1_solid_d55901
        child__mb_10
        {...props}>
        {navData?.map(({ path, title }) => (
          <__Link
            key={path}
            to={`/${path}`}
            ft_color_inherit
            ft_no_underline
            hover__ft_color_d55901>
            {title}
          </__Link>
        ))}
      </__Aside>
      {children}
      <__Aside
        area_ASIDE_HEADINGS
        py_20
        hidden
        md__flex
        w_min_250
        cross_start
        {...props}>
        <__Div flex col px_20 bdl_1_solid_d55901>
          <ul>
            <li>
              a
              <ul>
                <li>
                  a
                  <ul>
                    <li>a</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <li>a</li>
            </li>
          </ul>
        </__Div>
      </__Aside>
    </>
  );
}

export const QueryHeadings = graphql`
  query {
    file {
      absolutePath
    }
  }
`;

export default Aside;
