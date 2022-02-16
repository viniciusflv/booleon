import { font } from './font';

describe('font', () => {
  test('ft_align_center', () =>
    expect(font.ft_align_center()).toMatchInlineSnapshot(
      `"text-align:center;"`,
    ));
  test('ft_align_inherit', () =>
    expect(font.ft_align_inherit()).toMatchInlineSnapshot(
      `"text-align:inherit;"`,
    ));
  test('ft_align_initial', () =>
    expect(font.ft_align_initial()).toMatchInlineSnapshot(
      `"text-align:initial;"`,
    ));
  test('ft_align_justify', () =>
    expect(font.ft_align_justify()).toMatchInlineSnapshot(
      `"text-align:justify;"`,
    ));
  test('ft_align_left', () =>
    expect(font.ft_align_left()).toMatchInlineSnapshot(`"text-align:left;"`));
  test('ft_align_right', () =>
    expect(font.ft_align_right()).toMatchInlineSnapshot(`"text-align:right;"`));
  test('ft_color_base_blue_100', () =>
    expect(font.ft_color_base_blue_100()).toMatchInlineSnapshot(
      `"color:#A8DBFF;"`,
    ));
  test('ft_color_base_blue_200', () =>
    expect(font.ft_color_base_blue_200()).toMatchInlineSnapshot(
      `"color:#7EC8FE;"`,
    ));
  test('ft_color_base_blue_300', () =>
    expect(font.ft_color_base_blue_300()).toMatchInlineSnapshot(
      `"color:#5AB5F4;"`,
    ));
  test('ft_color_base_blue_400', () =>
    expect(font.ft_color_base_blue_400()).toMatchInlineSnapshot(
      `"color:#3EA0E5;"`,
    ));
  test('ft_color_base_blue_500', () =>
    expect(font.ft_color_base_blue_500()).toMatchInlineSnapshot(
      `"color:#268bd2;"`,
    ));
  test('ft_color_base_blue_600', () =>
    expect(font.ft_color_base_blue_600()).toMatchInlineSnapshot(
      `"color:#0D72B9;"`,
    ));
  test('ft_color_base_blue_700', () =>
    expect(font.ft_color_base_blue_700()).toMatchInlineSnapshot(
      `"color:#005898;"`,
    ));
  test('ft_color_base_blue_800', () =>
    expect(font.ft_color_base_blue_800()).toMatchInlineSnapshot(
      `"color:#003C66;"`,
    ));
  test('ft_color_base_blue_900', () =>
    expect(font.ft_color_base_blue_900()).toMatchInlineSnapshot(
      `"color:#001F33;"`,
    ));
  test('ft_color_base_green_100', () =>
    expect(font.ft_color_base_green_100()).toMatchInlineSnapshot(
      `"color:#B0FFB6;"`,
    ));
  test('ft_color_base_green_200', () =>
    expect(font.ft_color_base_green_200()).toMatchInlineSnapshot(
      `"color:#91FFA0;"`,
    ));
  test('ft_color_base_green_300', () =>
    expect(font.ft_color_base_green_300()).toMatchInlineSnapshot(
      `"color:#77FF8F;"`,
    ));
  test('ft_color_base_green_400', () =>
    expect(font.ft_color_base_green_400()).toMatchInlineSnapshot(
      `"color:#61FF83;"`,
    ));
  test('ft_color_base_green_500', () =>
    expect(font.ft_color_base_green_500()).toMatchInlineSnapshot(
      `"color:#50fa7b;"`,
    ));
  test('ft_color_base_green_600', () =>
    expect(font.ft_color_base_green_600()).toMatchInlineSnapshot(
      `"color:#2FCC5A;"`,
    ));
  test('ft_color_base_green_700', () =>
    expect(font.ft_color_base_green_700()).toMatchInlineSnapshot(
      `"color:#17993D;"`,
    ));
  test('ft_color_base_green_800', () =>
    expect(font.ft_color_base_green_800()).toMatchInlineSnapshot(
      `"color:#076625;"`,
    ));
  test('ft_color_base_green_900', () =>
    expect(font.ft_color_base_green_900()).toMatchInlineSnapshot(
      `"color:#003310;"`,
    ));
  test('ft_color_base_grey_100', () =>
    expect(font.ft_color_base_grey_100()).toMatchInlineSnapshot(
      `"color:#BDC1C9;"`,
    ));
  test('ft_color_base_grey_200', () =>
    expect(font.ft_color_base_grey_200()).toMatchInlineSnapshot(
      `"color:#9EA2AF;"`,
    ));
  test('ft_color_base_grey_300', () =>
    expect(font.ft_color_base_grey_300()).toMatchInlineSnapshot(
      `"color:#7F8493;"`,
    ));
  test('ft_color_base_grey_400', () =>
    expect(font.ft_color_base_grey_400()).toMatchInlineSnapshot(
      `"color:#616577;"`,
    ));
  test('ft_color_base_grey_500', () =>
    expect(font.ft_color_base_grey_500()).toMatchInlineSnapshot(
      `"color:#44475a;"`,
    ));
  test('ft_color_base_grey_600', () =>
    expect(font.ft_color_base_grey_600()).toMatchInlineSnapshot(
      `"color:#34374A;"`,
    ));
  test('ft_color_base_grey_700', () =>
    expect(font.ft_color_base_grey_700()).toMatchInlineSnapshot(
      `"color:#262839;"`,
    ));
  test('ft_color_base_grey_800', () =>
    expect(font.ft_color_base_grey_800()).toMatchInlineSnapshot(
      `"color:#181A27;"`,
    ));
  test('ft_color_base_grey_900', () =>
    expect(font.ft_color_base_grey_900()).toMatchInlineSnapshot(
      `"color:#0B0D14;"`,
    ));
  test('ft_color_base_orange_100', () =>
    expect(font.ft_color_base_orange_100()).toMatchInlineSnapshot(
      `"color:#FFACA8;"`,
    ));
  test('ft_color_base_orange_200', () =>
    expect(font.ft_color_base_orange_200()).toMatchInlineSnapshot(
      `"color:#FF907E;"`,
    ));
  test('ft_color_base_orange_300', () =>
    expect(font.ft_color_base_orange_300()).toMatchInlineSnapshot(
      `"color:#FB7A54;"`,
    ));
  test('ft_color_base_orange_400', () =>
    expect(font.ft_color_base_orange_400()).toMatchInlineSnapshot(
      `"color:#EB682A;"`,
    ));
  test('ft_color_base_orange_500', () =>
    expect(font.ft_color_base_orange_500()).toMatchInlineSnapshot(
      `"color:#D55901;"`,
    ));
  test('ft_color_base_orange_600', () =>
    expect(font.ft_color_base_orange_600()).toMatchInlineSnapshot(
      `"color:#C04400;"`,
    ));
  test('ft_color_base_orange_700', () =>
    expect(font.ft_color_base_orange_700()).toMatchInlineSnapshot(
      `"color:#993000;"`,
    ));
  test('ft_color_base_orange_800', () =>
    expect(font.ft_color_base_orange_800()).toMatchInlineSnapshot(
      `"color:#661E00;"`,
    ));
  test('ft_color_base_orange_900', () =>
    expect(font.ft_color_base_orange_900()).toMatchInlineSnapshot(
      `"color:#330E00;"`,
    ));
  test('ft_color_base_pink_100', () =>
    expect(font.ft_color_base_pink_100()).toMatchInlineSnapshot(
      `"color:#FFC2EE;"`,
    ));
  test('ft_color_base_pink_200', () =>
    expect(font.ft_color_base_pink_200()).toMatchInlineSnapshot(
      `"color:#FFAAE5;"`,
    ));
  test('ft_color_base_pink_300', () =>
    expect(font.ft_color_base_pink_300()).toMatchInlineSnapshot(
      `"color:#FF96DB;"`,
    ));
  test('ft_color_base_pink_400', () =>
    expect(font.ft_color_base_pink_400()).toMatchInlineSnapshot(
      `"color:#FF86D1;"`,
    ));
  test('ft_color_base_pink_500', () =>
    expect(font.ft_color_base_pink_500()).toMatchInlineSnapshot(
      `"color:#ff79c6;"`,
    ));
  test('ft_color_base_pink_600', () =>
    expect(font.ft_color_base_pink_600()).toMatchInlineSnapshot(
      `"color:#CC53A0;"`,
    ));
  test('ft_color_base_pink_700', () =>
    expect(font.ft_color_base_pink_700()).toMatchInlineSnapshot(
      `"color:#99357A;"`,
    ));
  test('ft_color_base_pink_800', () =>
    expect(font.ft_color_base_pink_800()).toMatchInlineSnapshot(
      `"color:#661C52;"`,
    ));
  test('ft_color_base_pink_900', () =>
    expect(font.ft_color_base_pink_900()).toMatchInlineSnapshot(
      `"color:#330B2A;"`,
    ));
  test('ft_color_base_purple_100', () =>
    expect(font.ft_color_base_purple_100()).toMatchInlineSnapshot(
      `"color:#DCCFFF;"`,
    ));
  test('ft_color_base_purple_200', () =>
    expect(font.ft_color_base_purple_200()).toMatchInlineSnapshot(
      `"color:#D1BCFF;"`,
    ));
  test('ft_color_base_purple_300', () =>
    expect(font.ft_color_base_purple_300()).toMatchInlineSnapshot(
      `"color:#C8ABFF;"`,
    ));
  test('ft_color_base_purple_400', () =>
    expect(font.ft_color_base_purple_400()).toMatchInlineSnapshot(
      `"color:#C29EFF;"`,
    ));
  test('ft_color_base_purple_500', () =>
    expect(font.ft_color_base_purple_500()).toMatchInlineSnapshot(
      `"color:#bd93f9;"`,
    ));
  test('ft_color_base_purple_600', () =>
    expect(font.ft_color_base_purple_600()).toMatchInlineSnapshot(
      `"color:#956BCC;"`,
    ));
  test('ft_color_base_purple_700', () =>
    expect(font.ft_color_base_purple_700()).toMatchInlineSnapshot(
      `"color:#6F4999;"`,
    ));
  test('ft_color_base_purple_800', () =>
    expect(font.ft_color_base_purple_800()).toMatchInlineSnapshot(
      `"color:#492C66;"`,
    ));
  test('ft_color_base_purple_900', () =>
    expect(font.ft_color_base_purple_900()).toMatchInlineSnapshot(
      `"color:#241333;"`,
    ));
  test('ft_color_base_sand_100', () =>
    expect(font.ft_color_base_sand_100()).toMatchInlineSnapshot(
      `"color:#FFF1D3;"`,
    ));
  test('ft_color_base_sand_200', () =>
    expect(font.ft_color_base_sand_200()).toMatchInlineSnapshot(
      `"color:#FFE3AE;"`,
    ));
  test('ft_color_base_sand_300', () =>
    expect(font.ft_color_base_sand_300()).toMatchInlineSnapshot(
      `"color:#FFD591;"`,
    ));
  test('ft_color_base_sand_400', () =>
    expect(font.ft_color_base_sand_400()).toMatchInlineSnapshot(
      `"color:#FFC77B;"`,
    ));
  test('ft_color_base_sand_500', () =>
    expect(font.ft_color_base_sand_500()).toMatchInlineSnapshot(
      `"color:#ffb86c;"`,
    ));
  test('ft_color_base_sand_600', () =>
    expect(font.ft_color_base_sand_600()).toMatchInlineSnapshot(
      `"color:#CC9448;"`,
    ));
  test('ft_color_base_sand_700', () =>
    expect(font.ft_color_base_sand_700()).toMatchInlineSnapshot(
      `"color:#996F2B;"`,
    ));
  test('ft_color_base_sand_800', () =>
    expect(font.ft_color_base_sand_800()).toMatchInlineSnapshot(
      `"color:#664A15;"`,
    ));
  test('ft_color_base_sand_900', () =>
    expect(font.ft_color_base_sand_900()).toMatchInlineSnapshot(
      `"color:#332507;"`,
    ));
  test('ft_color_base_sky_100', () =>
    expect(font.ft_color_base_sky_100()).toMatchInlineSnapshot(
      `"color:#CBFFFF;"`,
    ));
  test('ft_color_base_sky_200', () =>
    expect(font.ft_color_base_sky_200()).toMatchInlineSnapshot(
      `"color:#B6FFFF;"`,
    ));
  test('ft_color_base_sky_300', () =>
    expect(font.ft_color_base_sky_300()).toMatchInlineSnapshot(
      `"color:#A5FFFF;"`,
    ));
  test('ft_color_base_sky_400', () =>
    expect(font.ft_color_base_sky_400()).toMatchInlineSnapshot(
      `"color:#96F7FF;"`,
    ));
  test('ft_color_base_sky_500', () =>
    expect(font.ft_color_base_sky_500()).toMatchInlineSnapshot(
      `"color:#8be9fd;"`,
    ));
  test('ft_color_base_sky_600', () =>
    expect(font.ft_color_base_sky_600()).toMatchInlineSnapshot(
      `"color:#64C2CC;"`,
    ));
  test('ft_color_base_sky_700', () =>
    expect(font.ft_color_base_sky_700()).toMatchInlineSnapshot(
      `"color:#429799;"`,
    ));
  test('ft_color_base_sky_800', () =>
    expect(font.ft_color_base_sky_800()).toMatchInlineSnapshot(
      `"color:#276666;"`,
    ));
  test('ft_color_base_sky_900', () =>
    expect(font.ft_color_base_sky_900()).toMatchInlineSnapshot(
      `"color:#103333;"`,
    ));
  test('ft_color_base_white_100', () =>
    expect(font.ft_color_base_white_100()).toMatchInlineSnapshot(
      `"color:#FFFFFF;"`,
    ));
  test('ft_color_base_white_200', () =>
    expect(font.ft_color_base_white_200()).toMatchInlineSnapshot(
      `"color:#FEFEFB;"`,
    ));
  test('ft_color_base_white_300', () =>
    expect(font.ft_color_base_white_300()).toMatchInlineSnapshot(
      `"color:#FCFCF8;"`,
    ));
  test('ft_color_base_white_400', () =>
    expect(font.ft_color_base_white_400()).toMatchInlineSnapshot(
      `"color:#FAFAF5;"`,
    ));
  test('ft_color_base_white_500', () =>
    expect(font.ft_color_base_white_500()).toMatchInlineSnapshot(
      `"color:#f8f8f2;"`,
    ));
  test('ft_color_base_white_600', () =>
    expect(font.ft_color_base_white_600()).toMatchInlineSnapshot(
      `"color:#D9D9D4;"`,
    ));
  test('ft_color_base_white_700', () =>
    expect(font.ft_color_base_white_700()).toMatchInlineSnapshot(
      `"color:#BABAB6;"`,
    ));
  test('ft_color_base_white_800', () =>
    expect(font.ft_color_base_white_800()).toMatchInlineSnapshot(
      `"color:#9B9B97;"`,
    ));
  test('ft_color_base_white_900', () =>
    expect(font.ft_color_base_white_900()).toMatchInlineSnapshot(
      `"color:#7C7C79;"`,
    ));
  test('ft_color_base_yellow_100', () =>
    expect(font.ft_color_base_yellow_100()).toMatchInlineSnapshot(
      `"color:#FFFFFD;"`,
    ));
  test('ft_color_base_yellow_200', () =>
    expect(font.ft_color_base_yellow_200()).toMatchInlineSnapshot(
      `"color:#FFFFD7;"`,
    ));
  test('ft_color_base_yellow_300', () =>
    expect(font.ft_color_base_yellow_300()).toMatchInlineSnapshot(
      `"color:#FFFFB7;"`,
    ));
  test('ft_color_base_yellow_400', () =>
    expect(font.ft_color_base_yellow_400()).toMatchInlineSnapshot(
      `"color:#FDFF9E;"`,
    ));
  test('ft_color_base_yellow_500', () =>
    expect(font.ft_color_base_yellow_500()).toMatchInlineSnapshot(
      `"color:#f1fa8c;"`,
    ));
  test('ft_color_base_yellow_600', () =>
    expect(font.ft_color_base_yellow_600()).toMatchInlineSnapshot(
      `"color:#CCC565;"`,
    ));
  test('ft_color_base_yellow_700', () =>
    expect(font.ft_color_base_yellow_700()).toMatchInlineSnapshot(
      `"color:#998544;"`,
    ));
  test('ft_color_base_yellow_800', () =>
    expect(font.ft_color_base_yellow_800()).toMatchInlineSnapshot(
      `"color:#664B28;"`,
    ));
  test('ft_color_base_yellow_900', () =>
    expect(font.ft_color_base_yellow_900()).toMatchInlineSnapshot(
      `"color:#331C11;"`,
    ));
  test('ft_color_brand_primary', () =>
    expect(font.ft_color_brand_primary()).toMatchInlineSnapshot(
      `"color:#D55901;"`,
    ));
  test('ft_color_brand_secondary', () =>
    expect(font.ft_color_brand_secondary()).toMatchInlineSnapshot(
      `"color:#330E00;"`,
    ));
  test('ft_color_dark_code_background', () =>
    expect(font.ft_color_dark_code_background()).toMatchInlineSnapshot(
      `"color:#282a36;"`,
    ));
  test('ft_color_dark_code_baseColor', () =>
    expect(font.ft_color_dark_code_baseColor()).toMatchInlineSnapshot(
      `"color:#f8f8f2;"`,
    ));
  test('ft_color_dark_code_builtin', () =>
    expect(font.ft_color_dark_code_builtin()).toMatchInlineSnapshot(
      `"color:#8be9fd;"`,
    ));
  test('ft_color_dark_code_comment', () =>
    expect(font.ft_color_dark_code_comment()).toMatchInlineSnapshot(
      `"color:#6272a4;"`,
    ));
  test('ft_color_dark_code_function', () =>
    expect(font.ft_color_dark_code_function()).toMatchInlineSnapshot(
      `"color:#50fa7b;"`,
    ));
  test('ft_color_dark_code_keyword', () =>
    expect(font.ft_color_dark_code_keyword()).toMatchInlineSnapshot(
      `"color:#ff79c6;"`,
    ));
  test('ft_color_dark_code_operator', () =>
    expect(font.ft_color_dark_code_operator()).toMatchInlineSnapshot(
      `"color:#ff79c6;"`,
    ));
  test('ft_color_dark_code_parameter', () =>
    expect(font.ft_color_dark_code_parameter()).toMatchInlineSnapshot(
      `"color:#ffb86c;"`,
    ));
  test('ft_color_dark_code_property', () =>
    expect(font.ft_color_dark_code_property()).toMatchInlineSnapshot(
      `"color:#bd93f9;"`,
    ));
  test('ft_color_dark_code_punctuation', () =>
    expect(font.ft_color_dark_code_punctuation()).toMatchInlineSnapshot(
      `"color:#f8f8f2;"`,
    ));
  test('ft_color_dark_code_selection', () =>
    expect(font.ft_color_dark_code_selection()).toMatchInlineSnapshot(
      `"color:#44475a;"`,
    ));
  test('ft_color_dark_code_string', () =>
    expect(font.ft_color_dark_code_string()).toMatchInlineSnapshot(
      `"color:#f1fa8c;"`,
    ));
  test('ft_color_dark_code_variable', () =>
    expect(font.ft_color_dark_code_variable()).toMatchInlineSnapshot(
      `"color:#bd93f9;"`,
    ));
  test('ft_color_inherit', () =>
    expect(font.ft_color_inherit()).toMatchInlineSnapshot(`"color:inherit;"`));
  test('ft_color_light_code_background', () =>
    expect(font.ft_color_light_code_background()).toMatchInlineSnapshot(
      `"color:#f8f8f2;"`,
    ));
  test('ft_color_light_code_baseColor', () =>
    expect(font.ft_color_light_code_baseColor()).toMatchInlineSnapshot(
      `"color:#657b83;"`,
    ));
  test('ft_color_light_code_builtin', () =>
    expect(font.ft_color_light_code_builtin()).toMatchInlineSnapshot(
      `"color:#268bd2;"`,
    ));
  test('ft_color_light_code_comment', () =>
    expect(font.ft_color_light_code_comment()).toMatchInlineSnapshot(
      `"color:#93a1a1;"`,
    ));
  test('ft_color_light_code_function', () =>
    expect(font.ft_color_light_code_function()).toMatchInlineSnapshot(
      `"color:#b58900;"`,
    ));
  test('ft_color_light_code_keyword', () =>
    expect(font.ft_color_light_code_keyword()).toMatchInlineSnapshot(
      `"color:#859900;"`,
    ));
  test('ft_color_light_code_operator', () =>
    expect(font.ft_color_light_code_operator()).toMatchInlineSnapshot(
      `"color:#586e75;"`,
    ));
  test('ft_color_light_code_parameter', () =>
    expect(font.ft_color_light_code_parameter()).toMatchInlineSnapshot(
      `"color:#D55901;"`,
    ));
  test('ft_color_light_code_property', () =>
    expect(font.ft_color_light_code_property()).toMatchInlineSnapshot(
      `"color:#268bd2;"`,
    ));
  test('ft_color_light_code_punctuation', () =>
    expect(font.ft_color_light_code_punctuation()).toMatchInlineSnapshot(
      `"color:#586e75;"`,
    ));
  test('ft_color_light_code_selection', () =>
    expect(font.ft_color_light_code_selection()).toMatchInlineSnapshot(
      `"color:#073642;"`,
    ));
  test('ft_color_light_code_string', () =>
    expect(font.ft_color_light_code_string()).toMatchInlineSnapshot(
      `"color:#2aa198;"`,
    ));
  test('ft_color_light_code_variable', () =>
    expect(font.ft_color_light_code_variable()).toMatchInlineSnapshot(
      `"color:#D55901;"`,
    ));
  test('ft_family_mono', () =>
    expect(font.ft_family_mono()).toMatchInlineSnapshot(
      `"font-family:Fira Code;"`,
    ));
  test('ft_family_sans', () =>
    expect(font.ft_family_sans()).toMatchInlineSnapshot(
      `"font-family:RocknRoll One;"`,
    ));
  test('ft_height_auto', () =>
    expect(font.ft_height_auto()).toMatchInlineSnapshot(`"line-height:auto;"`));
  test('ft_height_lg', () =>
    expect(font.ft_height_lg()).toMatchInlineSnapshot(`"line-height:0.5rem;"`));
  test('ft_height_md', () =>
    expect(font.ft_height_md()).toMatchInlineSnapshot(
      `"line-height:0.375rem;"`,
    ));
  test('ft_height_none', () =>
    expect(font.ft_height_none()).toMatchInlineSnapshot(`"line-height:0rem;"`));
  test('ft_height_px', () =>
    expect(font.ft_height_px()).toMatchInlineSnapshot(
      `"line-height:0.0625rem;"`,
    ));
  test('ft_height_sm', () =>
    expect(font.ft_height_sm()).toMatchInlineSnapshot(
      `"line-height:0.25rem;"`,
    ));
  test('ft_height_xl', () =>
    expect(font.ft_height_xl()).toMatchInlineSnapshot(
      `"line-height:0.75rem;"`,
    ));
  test('ft_height_xs', () =>
    expect(font.ft_height_xs()).toMatchInlineSnapshot(
      `"line-height:0.125rem;"`,
    ));
  test('ft_italic', () =>
    expect(font.ft_italic()).toMatchInlineSnapshot(`"font-style:italic;"`));
  test('ft_line_through', () =>
    expect(font.ft_line_through()).toMatchInlineSnapshot(
      `"text-decoration:line-through;"`,
    ));
  test('ft_no_underline', () =>
    expect(font.ft_no_underline()).toMatchInlineSnapshot(
      `"text-decoration:none;"`,
    ));
  test('ft_no_wrap', () =>
    expect(font.ft_no_wrap()).toMatchInlineSnapshot(
      `"white-space:nowrap;word-break:normal;overflow-wrap:normal;"`,
    ));
  test('ft_select_all', () =>
    expect(font.ft_select_all()).toMatchInlineSnapshot(`"user-select:all;"`));
  test('ft_select_auto', () =>
    expect(font.ft_select_auto()).toMatchInlineSnapshot(`"user-select:auto;"`));
  test('ft_select_contain', () =>
    expect(font.ft_select_contain()).toMatchInlineSnapshot(
      `"user-select:contain;"`,
    ));
  test('ft_select_inherit', () =>
    expect(font.ft_select_inherit()).toMatchInlineSnapshot(
      `"user-select:inherit;"`,
    ));
  test('ft_select_initial', () =>
    expect(font.ft_select_initial()).toMatchInlineSnapshot(
      `"user-select:initial;"`,
    ));
  test('ft_select_none', () =>
    expect(font.ft_select_none()).toMatchInlineSnapshot(`"user-select:none;"`));
  test('ft_select_text', () =>
    expect(font.ft_select_text()).toMatchInlineSnapshot(`"user-select:text;"`));
  test('ft_select_unset', () =>
    expect(font.ft_select_unset()).toMatchInlineSnapshot(
      `"user-select:unset;"`,
    ));
  test('ft_size_lg', () =>
    expect(font.ft_size_lg()).toMatchInlineSnapshot(`"font-size:1.5rem;"`));
  test('ft_size_md', () =>
    expect(font.ft_size_md()).toMatchInlineSnapshot(`"font-size:1rem;"`));
  test('ft_size_sm', () =>
    expect(font.ft_size_sm()).toMatchInlineSnapshot(`"font-size:0.75rem;"`));
  test('ft_size_xl', () =>
    expect(font.ft_size_xl()).toMatchInlineSnapshot(`"font-size:2rem;"`));
  test('ft_size_xs', () =>
    expect(font.ft_size_xs()).toMatchInlineSnapshot(`"font-size:0.5rem;"`));
  test('ft_spacing_auto', () =>
    expect(font.ft_spacing_auto()).toMatchInlineSnapshot(
      `"letter-spacing:auto;"`,
    ));
  test('ft_spacing_lg', () =>
    expect(font.ft_spacing_lg()).toMatchInlineSnapshot(
      `"letter-spacing:0.5rem;"`,
    ));
  test('ft_spacing_md', () =>
    expect(font.ft_spacing_md()).toMatchInlineSnapshot(
      `"letter-spacing:0.375rem;"`,
    ));
  test('ft_spacing_none', () =>
    expect(font.ft_spacing_none()).toMatchInlineSnapshot(
      `"letter-spacing:0rem;"`,
    ));
  test('ft_spacing_px', () =>
    expect(font.ft_spacing_px()).toMatchInlineSnapshot(
      `"letter-spacing:0.0625rem;"`,
    ));
  test('ft_spacing_sm', () =>
    expect(font.ft_spacing_sm()).toMatchInlineSnapshot(
      `"letter-spacing:0.25rem;"`,
    ));
  test('ft_spacing_xl', () =>
    expect(font.ft_spacing_xl()).toMatchInlineSnapshot(
      `"letter-spacing:0.75rem;"`,
    ));
  test('ft_spacing_xs', () =>
    expect(font.ft_spacing_xs()).toMatchInlineSnapshot(
      `"letter-spacing:0.125rem;"`,
    ));
  test('ft_transform_capitalize', () =>
    expect(font.ft_transform_capitalize()).toMatchInlineSnapshot(
      `"text-transform:capitalize;"`,
    ));
  test('ft_transform_inherit', () =>
    expect(font.ft_transform_inherit()).toMatchInlineSnapshot(
      `"text-transform:inherit;"`,
    ));
  test('ft_transform_initial', () =>
    expect(font.ft_transform_initial()).toMatchInlineSnapshot(
      `"text-transform:initial;"`,
    ));
  test('ft_transform_lowercase', () =>
    expect(font.ft_transform_lowercase()).toMatchInlineSnapshot(
      `"text-transform:lowercase;"`,
    ));
  test('ft_transform_none', () =>
    expect(font.ft_transform_none()).toMatchInlineSnapshot(
      `"text-transform:none;"`,
    ));
  test('ft_transform_normal', () =>
    expect(font.ft_transform_normal()).toMatchInlineSnapshot(
      `"text-transform:normal;"`,
    ));
  test('ft_transform_uppercase', () =>
    expect(font.ft_transform_uppercase()).toMatchInlineSnapshot(
      `"text-transform:uppercase;"`,
    ));
  test('ft_truncate', () =>
    expect(font.ft_truncate()).toMatchInlineSnapshot(
      `"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"`,
    ));
  test('ft_underline', () =>
    expect(font.ft_underline()).toMatchInlineSnapshot(
      `"text-decoration:underline;"`,
    ));
  test('ft_weight_black', () =>
    expect(font.ft_weight_black()).toMatchInlineSnapshot(`"font-weight:900;"`));
  test('ft_weight_bold', () =>
    expect(font.ft_weight_bold()).toMatchInlineSnapshot(`"font-weight:700;"`));
  test('ft_weight_bolder', () =>
    expect(font.ft_weight_bolder()).toMatchInlineSnapshot(
      `"font-weight:800;"`,
    ));
  test('ft_weight_light', () =>
    expect(font.ft_weight_light()).toMatchInlineSnapshot(`"font-weight:300;"`));
  test('ft_weight_lighter', () =>
    expect(font.ft_weight_lighter()).toMatchInlineSnapshot(
      `"font-weight:200;"`,
    ));
  test('ft_weight_lightest', () =>
    expect(font.ft_weight_lightest()).toMatchInlineSnapshot(
      `"font-weight:100;"`,
    ));
  test('ft_weight_medium', () =>
    expect(font.ft_weight_medium()).toMatchInlineSnapshot(
      `"font-weight:500;"`,
    ));
  test('ft_weight_normal', () =>
    expect(font.ft_weight_normal()).toMatchInlineSnapshot(
      `"font-weight:400;"`,
    ));
  test('ft_weight_semibold', () =>
    expect(font.ft_weight_semibold()).toMatchInlineSnapshot(
      `"font-weight:600;"`,
    ));
  test('ft_wrap_letter', () =>
    expect(font.ft_wrap_letter()).toMatchInlineSnapshot(
      `"word-break:break-all;"`,
    ));
  test('ft_wrap_space', () =>
    expect(font.ft_wrap_space()).toMatchInlineSnapshot(
      `"white-space:normal;"`,
    ));
  test('ft_wrap_word', () =>
    expect(font.ft_wrap_word()).toMatchInlineSnapshot(
      `"overflow-wrap:break-word;"`,
    ));
  test('li_decimal', () =>
    expect(font.li_decimal()).toMatchInlineSnapshot(
      `"list-style-type:decimal;"`,
    ));
  test('li_disc', () =>
    expect(font.li_disc()).toMatchInlineSnapshot(`"list-style-type:disc;"`));
  test('li_inside', () =>
    expect(font.li_inside()).toMatchInlineSnapshot(
      `"list-style-position:inside;"`,
    ));
  test('li_none', () =>
    expect(font.li_none()).toMatchInlineSnapshot(`"list-style-type:none;"`));
  test('li_outside', () =>
    expect(font.li_outside()).toMatchInlineSnapshot(
      `"list-style-position:outside;"`,
    ));
});
