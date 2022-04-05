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
      arrowhead: selector.pseudo(' .arrowheadPath'),
      arrowline: selector.pseudo(' .edgePath .path'),
      label: selector.pseudo(' .label,.mermaid .edgeLabel'),
      node: selector.pseudo(' .label-container'),
    },
  },
);

export function Mermaid({ children, className }: any) {
  return (
    <_Mermaid
      className={className}
      important__label__ft_size_sm
      important__label__ft_family_sans
      important__label__ft_color_light_code_baseColor
      important__node__fill_color_light_code_background
      important__arrowhead__fill_color_light_code_keyword
      important__arrowline__stroke_color_light_code_variable
      dark__important__arrowline__stroke_color_dark_code_variable
      dark__important__arrowhead__fill_color_dark_code_keyword
      dark__important__node__fill_color_dark_code_background
      dark__important__label__ft_color_dark_code_baseColor
      child__min_w_13xl
      sc_auto
    >
      {children}
    </_Mermaid>
  );
}
