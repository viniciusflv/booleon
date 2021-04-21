import modules from '@booleon/modules';
import { booleon } from '@booleon/react';
import { Svg } from '@booleon/ui';

import { Link } from 'gatsby';

import * as icons from '../../../assets';
import { useNavData } from './hooks';

const __Aside = booleon.aside(modules);
const __Div = booleon.div(modules);
const __Link = booleon(Link, modules);
const LinkC = (props: any) => (
  <__Link
    {...props}
    ol_none
    ft_color_inherit
    ft_no_underline
    focus__ft_color_d55901
    hover__ft_color_d55901
  />
);
function Aside({ children, path, ...props }: any) {
  const { headings, navigation } = useNavData(path);

  console.log(navigation);

  return (
    <>
      <__Aside
        area_ASIDE_DOCS
        w_min_250
        p_20
        sd_6
        bg_color_fff
        dark__bg_color_191921
        bdr_1_solid_d55901
        {...props}>
        <__Div sticky top_100 flex col child__mb_10>
          {navigation?.map(({ path, title, icon }) => (
            <__Div key={path} flex>
              {icon ? (
                <Svg w_30 h_30 fill="#d55901" {...icons?.[icon]} />
              ) : null}
              <LinkC
                to={`/${path}`}
                flex
                grow
                main_end
                ft_color_inherit
                ft_no_underline
                hover__ft_color_d55901>
                {title}
              </LinkC>
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
        w_min_250
        cross_start
        {...props}>
        <__Div sticky top_100 flex col px_20 bdl_1_solid_d55901>
          <ul>
            {headings?.map(({ value, depth }) =>
              depth > 1 ? (
                <Ul depth={depth}>
                  <li>
                    <LinkC title={value} href={`#${value}`}>
                      {value}
                    </LinkC>
                  </li>
                </Ul>
              ) : (
                <li>
                  <LinkC title={value} href={`#${value}`}>
                    {value}
                  </LinkC>
                </li>
              ),
            )}
          </ul>
        </__Div>
      </__Aside>
    </>
  );
}

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
