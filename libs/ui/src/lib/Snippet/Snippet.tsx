import { forwardRef } from 'react';

import { selector } from '@booleon/core';
import {
  background,
  border,
  container,
  font,
  shadow,
  spacing,
} from '@booleon/modules';
import { booleon } from '@booleon/react';

const _Snippet = booleon.pre(
  {
    ...font,
    ...border,
    ...shadow,
    ...spacing,
    ...container,
    ...background,
  },
  {
    selectors: {
      snippet: selector.pseudo(' pre,code'),
      selection: selector.pseudo(
        ' pre[class*="language-"]::selection,pre[class*="language-"] ::selection,code[class*="language-"]::selection,code[class*="language-"] ::selection',
      ),
      comment: selector.pseudo(
        ' .token.cdata,.token.comment,.token.doctype,.token.prolog',
      ),
      parameter: selector.pseudo(' .token.parameter'),
      builtin: selector.pseudo(' .token.builtin,.token.tag .token.class-name'),
      operator: selector.pseudo(
        ' .token.operator,.token.script-punctuation.punctuation,.token.script-punctuation ~ .punctuation,.token.parameter .token.punctuation',
      ),
      punctuation: selector.pseudo(' .token.punctuation'),
      property: selector.pseudo(
        ' .token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag',
      ),
      string: selector.pseudo(
        ' .token.regex-source,.token.attr-name,.token.char,.token.inserted,.token.selector,.token.string,.token.attr-value,.token.url',
      ),
      keyword: selector.pseudo(
        ' .token.regex-flags,.token.atrule,.token.tag,.token.keyword',
      ),
      function: selector.pseudo(
        ' .token.class-name,.token.attr-name,.token.function',
      ),
      variable: selector.pseudo(
        ' .token.important,.token.regex,.token.variable',
      ),
    },
  },
);

export function Snippet({ children, className }: any) {
  return (
    <_Snippet
      className={className}
      sc_auto
      p_2xl
      sd_1
      bd_radius_md
      snippet__ft_family_mono
      snippet__ft_size_sm
      ft_color_light_code_baseColor
      bg_color_light_code_background
      selection__bg_color_light_code_selection
      comment__ft_color_light_code_comment
      parameter__ft_color_light_code_parameter
      builtin__ft_color_light_code_builtin
      operator__ft_color_light_code_operator
      punctuation__ft_color_light_code_punctuation
      property__ft_color_light_code_property
      string__ft_color_light_code_string
      keyword__ft_color_light_code_keyword
      function__ft_color_light_code_function
      variable__ft_color_light_code_variable
      dark__selection__bg_color_dark_code_selection
      dark__ft_color_dark_code_baseColor
      dark__bg_color_dark_code_background
      dark__comment__ft_color_dark_code_comment
      dark__parameter__ft_color_dark_code_parameter
      dark__builtin__ft_color_dark_code_builtin
      dark__operator__ft_color_dark_code_operator
      dark__punctuation__ft_color_dark_code_punctuation
      dark__property__ft_color_dark_code_property
      dark__string__ft_color_dark_code_string
      dark__keyword__ft_color_dark_code_keyword
      dark__function__ft_color_dark_code_function
      dark__variable__ft_color_dark_code_variable
    >
      {children}
    </_Snippet>
  );
}

// const ForwardedComponent = forwardRef(Snippet);

// export { ForwardedComponent as Snippet };
