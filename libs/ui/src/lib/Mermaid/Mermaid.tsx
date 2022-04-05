import { selector, theme } from '@booleon/core';
import { container, font, sizing } from '@booleon/modules';
import { booleon } from '@booleon/react';
import { colors } from '@booleon/tokens';

const _Mermaid = booleon.div(
  {
    ...container,
    ...sizing,
    ...font,
    ...theme('stroke_color', colors, ($) => `stroke:${$};`),
    ...theme('fill_color', colors, ($) => `fill:${$};`),
  },
  {
    selectors: {
      line: selector.pseudo(' .mermaid .path'),
      arrow: selector.pseudo(' .mermaid .arrowheadPath'),
      node: selector.pseudo(' .mermaid .node rect,.node foreignObject'),
    },
  },
);

export function Mermaid({ children }: any) {
  return (
    <_Mermaid
      dark__important__line__stroke_color_dark_code_baseColor
      dark__important__arrow__fill_color_dark_code_keyword
      dark__important__node__fill_color_dark_code_background
      dark__important__node__ft_color_dark_code_baseColor
      dark__important__node__stroke_color_dark_code_variable
      important__line__stroke_color_light_code_variable
      important__arrow__fill_color_light_code_keyword
      important__node__fill_color_light_code_background
      important__node__ft_color_light_code_baseColor
      important__node__stroke_color_light_code_variable
      node__ft_family_sans
      node__ft_size_sm
      child__min_w_13xl
      sc_auto
    >
      {children}
    </_Mermaid>
  );
}
