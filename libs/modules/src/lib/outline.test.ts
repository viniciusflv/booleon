import { outline } from './outline';

describe('outline', () => {
  test('ol_color_base_blue_100', () =>
    expect(outline.ol_color_base_blue_100()).toMatchInlineSnapshot(
      `"outline-color:#A8DBFF;"`,
    ));
  test('ol_color_base_blue_200', () =>
    expect(outline.ol_color_base_blue_200()).toMatchInlineSnapshot(
      `"outline-color:#7EC8FE;"`,
    ));
  test('ol_color_base_blue_300', () =>
    expect(outline.ol_color_base_blue_300()).toMatchInlineSnapshot(
      `"outline-color:#5AB5F4;"`,
    ));
  test('ol_color_base_blue_400', () =>
    expect(outline.ol_color_base_blue_400()).toMatchInlineSnapshot(
      `"outline-color:#3EA0E5;"`,
    ));
  test('ol_color_base_blue_500', () =>
    expect(outline.ol_color_base_blue_500()).toMatchInlineSnapshot(
      `"outline-color:#268bd2;"`,
    ));
  test('ol_color_base_blue_600', () =>
    expect(outline.ol_color_base_blue_600()).toMatchInlineSnapshot(
      `"outline-color:#0D72B9;"`,
    ));
  test('ol_color_base_blue_700', () =>
    expect(outline.ol_color_base_blue_700()).toMatchInlineSnapshot(
      `"outline-color:#005898;"`,
    ));
  test('ol_color_base_blue_800', () =>
    expect(outline.ol_color_base_blue_800()).toMatchInlineSnapshot(
      `"outline-color:#003C66;"`,
    ));
  test('ol_color_base_blue_900', () =>
    expect(outline.ol_color_base_blue_900()).toMatchInlineSnapshot(
      `"outline-color:#001F33;"`,
    ));
  test('ol_color_base_green_100', () =>
    expect(outline.ol_color_base_green_100()).toMatchInlineSnapshot(
      `"outline-color:#B0FFB6;"`,
    ));
  test('ol_color_base_green_200', () =>
    expect(outline.ol_color_base_green_200()).toMatchInlineSnapshot(
      `"outline-color:#91FFA0;"`,
    ));
  test('ol_color_base_green_300', () =>
    expect(outline.ol_color_base_green_300()).toMatchInlineSnapshot(
      `"outline-color:#77FF8F;"`,
    ));
  test('ol_color_base_green_400', () =>
    expect(outline.ol_color_base_green_400()).toMatchInlineSnapshot(
      `"outline-color:#61FF83;"`,
    ));
  test('ol_color_base_green_500', () =>
    expect(outline.ol_color_base_green_500()).toMatchInlineSnapshot(
      `"outline-color:#50fa7b;"`,
    ));
  test('ol_color_base_green_600', () =>
    expect(outline.ol_color_base_green_600()).toMatchInlineSnapshot(
      `"outline-color:#2FCC5A;"`,
    ));
  test('ol_color_base_green_700', () =>
    expect(outline.ol_color_base_green_700()).toMatchInlineSnapshot(
      `"outline-color:#17993D;"`,
    ));
  test('ol_color_base_green_800', () =>
    expect(outline.ol_color_base_green_800()).toMatchInlineSnapshot(
      `"outline-color:#076625;"`,
    ));
  test('ol_color_base_green_900', () =>
    expect(outline.ol_color_base_green_900()).toMatchInlineSnapshot(
      `"outline-color:#003310;"`,
    ));
  test('ol_color_base_grey_100', () =>
    expect(outline.ol_color_base_grey_100()).toMatchInlineSnapshot(
      `"outline-color:#BDC1C9;"`,
    ));
  test('ol_color_base_grey_200', () =>
    expect(outline.ol_color_base_grey_200()).toMatchInlineSnapshot(
      `"outline-color:#9EA2AF;"`,
    ));
  test('ol_color_base_grey_300', () =>
    expect(outline.ol_color_base_grey_300()).toMatchInlineSnapshot(
      `"outline-color:#7F8493;"`,
    ));
  test('ol_color_base_grey_400', () =>
    expect(outline.ol_color_base_grey_400()).toMatchInlineSnapshot(
      `"outline-color:#616577;"`,
    ));
  test('ol_color_base_grey_500', () =>
    expect(outline.ol_color_base_grey_500()).toMatchInlineSnapshot(
      `"outline-color:#44475a;"`,
    ));
  test('ol_color_base_grey_600', () =>
    expect(outline.ol_color_base_grey_600()).toMatchInlineSnapshot(
      `"outline-color:#34374A;"`,
    ));
  test('ol_color_base_grey_700', () =>
    expect(outline.ol_color_base_grey_700()).toMatchInlineSnapshot(
      `"outline-color:#262839;"`,
    ));
  test('ol_color_base_grey_800', () =>
    expect(outline.ol_color_base_grey_800()).toMatchInlineSnapshot(
      `"outline-color:#181A27;"`,
    ));
  test('ol_color_base_grey_900', () =>
    expect(outline.ol_color_base_grey_900()).toMatchInlineSnapshot(
      `"outline-color:#0B0D14;"`,
    ));
  test('ol_color_base_orange_100', () =>
    expect(outline.ol_color_base_orange_100()).toMatchInlineSnapshot(
      `"outline-color:#FFACA8;"`,
    ));
  test('ol_color_base_orange_200', () =>
    expect(outline.ol_color_base_orange_200()).toMatchInlineSnapshot(
      `"outline-color:#FF907E;"`,
    ));
  test('ol_color_base_orange_300', () =>
    expect(outline.ol_color_base_orange_300()).toMatchInlineSnapshot(
      `"outline-color:#FB7A54;"`,
    ));
  test('ol_color_base_orange_400', () =>
    expect(outline.ol_color_base_orange_400()).toMatchInlineSnapshot(
      `"outline-color:#EB682A;"`,
    ));
  test('ol_color_base_orange_500', () =>
    expect(outline.ol_color_base_orange_500()).toMatchInlineSnapshot(
      `"outline-color:#D55901;"`,
    ));
  test('ol_color_base_orange_600', () =>
    expect(outline.ol_color_base_orange_600()).toMatchInlineSnapshot(
      `"outline-color:#C04400;"`,
    ));
  test('ol_color_base_orange_700', () =>
    expect(outline.ol_color_base_orange_700()).toMatchInlineSnapshot(
      `"outline-color:#993000;"`,
    ));
  test('ol_color_base_orange_800', () =>
    expect(outline.ol_color_base_orange_800()).toMatchInlineSnapshot(
      `"outline-color:#661E00;"`,
    ));
  test('ol_color_base_orange_900', () =>
    expect(outline.ol_color_base_orange_900()).toMatchInlineSnapshot(
      `"outline-color:#330E00;"`,
    ));
  test('ol_color_base_pink_100', () =>
    expect(outline.ol_color_base_pink_100()).toMatchInlineSnapshot(
      `"outline-color:#FFC2EE;"`,
    ));
  test('ol_color_base_pink_200', () =>
    expect(outline.ol_color_base_pink_200()).toMatchInlineSnapshot(
      `"outline-color:#FFAAE5;"`,
    ));
  test('ol_color_base_pink_300', () =>
    expect(outline.ol_color_base_pink_300()).toMatchInlineSnapshot(
      `"outline-color:#FF96DB;"`,
    ));
  test('ol_color_base_pink_400', () =>
    expect(outline.ol_color_base_pink_400()).toMatchInlineSnapshot(
      `"outline-color:#FF86D1;"`,
    ));
  test('ol_color_base_pink_500', () =>
    expect(outline.ol_color_base_pink_500()).toMatchInlineSnapshot(
      `"outline-color:#ff79c6;"`,
    ));
  test('ol_color_base_pink_600', () =>
    expect(outline.ol_color_base_pink_600()).toMatchInlineSnapshot(
      `"outline-color:#CC53A0;"`,
    ));
  test('ol_color_base_pink_700', () =>
    expect(outline.ol_color_base_pink_700()).toMatchInlineSnapshot(
      `"outline-color:#99357A;"`,
    ));
  test('ol_color_base_pink_800', () =>
    expect(outline.ol_color_base_pink_800()).toMatchInlineSnapshot(
      `"outline-color:#661C52;"`,
    ));
  test('ol_color_base_pink_900', () =>
    expect(outline.ol_color_base_pink_900()).toMatchInlineSnapshot(
      `"outline-color:#330B2A;"`,
    ));
  test('ol_color_base_purple_100', () =>
    expect(outline.ol_color_base_purple_100()).toMatchInlineSnapshot(
      `"outline-color:#DCCFFF;"`,
    ));
  test('ol_color_base_purple_200', () =>
    expect(outline.ol_color_base_purple_200()).toMatchInlineSnapshot(
      `"outline-color:#D1BCFF;"`,
    ));
  test('ol_color_base_purple_300', () =>
    expect(outline.ol_color_base_purple_300()).toMatchInlineSnapshot(
      `"outline-color:#C8ABFF;"`,
    ));
  test('ol_color_base_purple_400', () =>
    expect(outline.ol_color_base_purple_400()).toMatchInlineSnapshot(
      `"outline-color:#C29EFF;"`,
    ));
  test('ol_color_base_purple_500', () =>
    expect(outline.ol_color_base_purple_500()).toMatchInlineSnapshot(
      `"outline-color:#bd93f9;"`,
    ));
  test('ol_color_base_purple_600', () =>
    expect(outline.ol_color_base_purple_600()).toMatchInlineSnapshot(
      `"outline-color:#956BCC;"`,
    ));
  test('ol_color_base_purple_700', () =>
    expect(outline.ol_color_base_purple_700()).toMatchInlineSnapshot(
      `"outline-color:#6F4999;"`,
    ));
  test('ol_color_base_purple_800', () =>
    expect(outline.ol_color_base_purple_800()).toMatchInlineSnapshot(
      `"outline-color:#492C66;"`,
    ));
  test('ol_color_base_purple_900', () =>
    expect(outline.ol_color_base_purple_900()).toMatchInlineSnapshot(
      `"outline-color:#241333;"`,
    ));
  test('ol_color_base_sand_100', () =>
    expect(outline.ol_color_base_sand_100()).toMatchInlineSnapshot(
      `"outline-color:#FFF1D3;"`,
    ));
  test('ol_color_base_sand_200', () =>
    expect(outline.ol_color_base_sand_200()).toMatchInlineSnapshot(
      `"outline-color:#FFE3AE;"`,
    ));
  test('ol_color_base_sand_300', () =>
    expect(outline.ol_color_base_sand_300()).toMatchInlineSnapshot(
      `"outline-color:#FFD591;"`,
    ));
  test('ol_color_base_sand_400', () =>
    expect(outline.ol_color_base_sand_400()).toMatchInlineSnapshot(
      `"outline-color:#FFC77B;"`,
    ));
  test('ol_color_base_sand_500', () =>
    expect(outline.ol_color_base_sand_500()).toMatchInlineSnapshot(
      `"outline-color:#ffb86c;"`,
    ));
  test('ol_color_base_sand_600', () =>
    expect(outline.ol_color_base_sand_600()).toMatchInlineSnapshot(
      `"outline-color:#CC9448;"`,
    ));
  test('ol_color_base_sand_700', () =>
    expect(outline.ol_color_base_sand_700()).toMatchInlineSnapshot(
      `"outline-color:#996F2B;"`,
    ));
  test('ol_color_base_sand_800', () =>
    expect(outline.ol_color_base_sand_800()).toMatchInlineSnapshot(
      `"outline-color:#664A15;"`,
    ));
  test('ol_color_base_sand_900', () =>
    expect(outline.ol_color_base_sand_900()).toMatchInlineSnapshot(
      `"outline-color:#332507;"`,
    ));
  test('ol_color_base_sky_100', () =>
    expect(outline.ol_color_base_sky_100()).toMatchInlineSnapshot(
      `"outline-color:#CBFFFF;"`,
    ));
  test('ol_color_base_sky_200', () =>
    expect(outline.ol_color_base_sky_200()).toMatchInlineSnapshot(
      `"outline-color:#B6FFFF;"`,
    ));
  test('ol_color_base_sky_300', () =>
    expect(outline.ol_color_base_sky_300()).toMatchInlineSnapshot(
      `"outline-color:#A5FFFF;"`,
    ));
  test('ol_color_base_sky_400', () =>
    expect(outline.ol_color_base_sky_400()).toMatchInlineSnapshot(
      `"outline-color:#96F7FF;"`,
    ));
  test('ol_color_base_sky_500', () =>
    expect(outline.ol_color_base_sky_500()).toMatchInlineSnapshot(
      `"outline-color:#8be9fd;"`,
    ));
  test('ol_color_base_sky_600', () =>
    expect(outline.ol_color_base_sky_600()).toMatchInlineSnapshot(
      `"outline-color:#64C2CC;"`,
    ));
  test('ol_color_base_sky_700', () =>
    expect(outline.ol_color_base_sky_700()).toMatchInlineSnapshot(
      `"outline-color:#429799;"`,
    ));
  test('ol_color_base_sky_800', () =>
    expect(outline.ol_color_base_sky_800()).toMatchInlineSnapshot(
      `"outline-color:#276666;"`,
    ));
  test('ol_color_base_sky_900', () =>
    expect(outline.ol_color_base_sky_900()).toMatchInlineSnapshot(
      `"outline-color:#103333;"`,
    ));
  test('ol_color_base_white_100', () =>
    expect(outline.ol_color_base_white_100()).toMatchInlineSnapshot(
      `"outline-color:#FFFFFF;"`,
    ));
  test('ol_color_base_white_200', () =>
    expect(outline.ol_color_base_white_200()).toMatchInlineSnapshot(
      `"outline-color:#FEFEFB;"`,
    ));
  test('ol_color_base_white_300', () =>
    expect(outline.ol_color_base_white_300()).toMatchInlineSnapshot(
      `"outline-color:#FCFCF8;"`,
    ));
  test('ol_color_base_white_400', () =>
    expect(outline.ol_color_base_white_400()).toMatchInlineSnapshot(
      `"outline-color:#FAFAF5;"`,
    ));
  test('ol_color_base_white_500', () =>
    expect(outline.ol_color_base_white_500()).toMatchInlineSnapshot(
      `"outline-color:#f8f8f2;"`,
    ));
  test('ol_color_base_white_600', () =>
    expect(outline.ol_color_base_white_600()).toMatchInlineSnapshot(
      `"outline-color:#D9D9D4;"`,
    ));
  test('ol_color_base_white_700', () =>
    expect(outline.ol_color_base_white_700()).toMatchInlineSnapshot(
      `"outline-color:#BABAB6;"`,
    ));
  test('ol_color_base_white_800', () =>
    expect(outline.ol_color_base_white_800()).toMatchInlineSnapshot(
      `"outline-color:#9B9B97;"`,
    ));
  test('ol_color_base_white_900', () =>
    expect(outline.ol_color_base_white_900()).toMatchInlineSnapshot(
      `"outline-color:#7C7C79;"`,
    ));
  test('ol_color_base_yellow_100', () =>
    expect(outline.ol_color_base_yellow_100()).toMatchInlineSnapshot(
      `"outline-color:#FFFFFD;"`,
    ));
  test('ol_color_base_yellow_200', () =>
    expect(outline.ol_color_base_yellow_200()).toMatchInlineSnapshot(
      `"outline-color:#FFFFD7;"`,
    ));
  test('ol_color_base_yellow_300', () =>
    expect(outline.ol_color_base_yellow_300()).toMatchInlineSnapshot(
      `"outline-color:#FFFFB7;"`,
    ));
  test('ol_color_base_yellow_400', () =>
    expect(outline.ol_color_base_yellow_400()).toMatchInlineSnapshot(
      `"outline-color:#FDFF9E;"`,
    ));
  test('ol_color_base_yellow_500', () =>
    expect(outline.ol_color_base_yellow_500()).toMatchInlineSnapshot(
      `"outline-color:#f1fa8c;"`,
    ));
  test('ol_color_base_yellow_600', () =>
    expect(outline.ol_color_base_yellow_600()).toMatchInlineSnapshot(
      `"outline-color:#CCC565;"`,
    ));
  test('ol_color_base_yellow_700', () =>
    expect(outline.ol_color_base_yellow_700()).toMatchInlineSnapshot(
      `"outline-color:#998544;"`,
    ));
  test('ol_color_base_yellow_800', () =>
    expect(outline.ol_color_base_yellow_800()).toMatchInlineSnapshot(
      `"outline-color:#664B28;"`,
    ));
  test('ol_color_base_yellow_900', () =>
    expect(outline.ol_color_base_yellow_900()).toMatchInlineSnapshot(
      `"outline-color:#331C11;"`,
    ));
  test('ol_color_brand_primary', () =>
    expect(outline.ol_color_brand_primary()).toMatchInlineSnapshot(
      `"outline-color:#D55901;"`,
    ));
  test('ol_color_brand_secondary', () =>
    expect(outline.ol_color_brand_secondary()).toMatchInlineSnapshot(
      `"outline-color:#330E00;"`,
    ));
  test('ol_color_dark_code_background', () =>
    expect(outline.ol_color_dark_code_background()).toMatchInlineSnapshot(
      `"outline-color:#282a36;"`,
    ));
  test('ol_color_dark_code_baseColor', () =>
    expect(outline.ol_color_dark_code_baseColor()).toMatchInlineSnapshot(
      `"outline-color:#f8f8f2;"`,
    ));
  test('ol_color_dark_code_builtin', () =>
    expect(outline.ol_color_dark_code_builtin()).toMatchInlineSnapshot(
      `"outline-color:#8be9fd;"`,
    ));
  test('ol_color_dark_code_comment', () =>
    expect(outline.ol_color_dark_code_comment()).toMatchInlineSnapshot(
      `"outline-color:#6272a4;"`,
    ));
  test('ol_color_dark_code_function', () =>
    expect(outline.ol_color_dark_code_function()).toMatchInlineSnapshot(
      `"outline-color:#50fa7b;"`,
    ));
  test('ol_color_dark_code_keyword', () =>
    expect(outline.ol_color_dark_code_keyword()).toMatchInlineSnapshot(
      `"outline-color:#ff79c6;"`,
    ));
  test('ol_color_dark_code_operator', () =>
    expect(outline.ol_color_dark_code_operator()).toMatchInlineSnapshot(
      `"outline-color:#ff79c6;"`,
    ));
  test('ol_color_dark_code_parameter', () =>
    expect(outline.ol_color_dark_code_parameter()).toMatchInlineSnapshot(
      `"outline-color:#ffb86c;"`,
    ));
  test('ol_color_dark_code_property', () =>
    expect(outline.ol_color_dark_code_property()).toMatchInlineSnapshot(
      `"outline-color:#bd93f9;"`,
    ));
  test('ol_color_dark_code_punctuation', () =>
    expect(outline.ol_color_dark_code_punctuation()).toMatchInlineSnapshot(
      `"outline-color:#f8f8f2;"`,
    ));
  test('ol_color_dark_code_selection', () =>
    expect(outline.ol_color_dark_code_selection()).toMatchInlineSnapshot(
      `"outline-color:#44475a;"`,
    ));
  test('ol_color_dark_code_string', () =>
    expect(outline.ol_color_dark_code_string()).toMatchInlineSnapshot(
      `"outline-color:#f1fa8c;"`,
    ));
  test('ol_color_dark_code_variable', () =>
    expect(outline.ol_color_dark_code_variable()).toMatchInlineSnapshot(
      `"outline-color:#bd93f9;"`,
    ));
  test('ol_color_light_code_background', () =>
    expect(outline.ol_color_light_code_background()).toMatchInlineSnapshot(
      `"outline-color:#f8f8f2;"`,
    ));
  test('ol_color_light_code_baseColor', () =>
    expect(outline.ol_color_light_code_baseColor()).toMatchInlineSnapshot(
      `"outline-color:#657b83;"`,
    ));
  test('ol_color_light_code_builtin', () =>
    expect(outline.ol_color_light_code_builtin()).toMatchInlineSnapshot(
      `"outline-color:#268bd2;"`,
    ));
  test('ol_color_light_code_comment', () =>
    expect(outline.ol_color_light_code_comment()).toMatchInlineSnapshot(
      `"outline-color:#93a1a1;"`,
    ));
  test('ol_color_light_code_function', () =>
    expect(outline.ol_color_light_code_function()).toMatchInlineSnapshot(
      `"outline-color:#b58900;"`,
    ));
  test('ol_color_light_code_keyword', () =>
    expect(outline.ol_color_light_code_keyword()).toMatchInlineSnapshot(
      `"outline-color:#859900;"`,
    ));
  test('ol_color_light_code_operator', () =>
    expect(outline.ol_color_light_code_operator()).toMatchInlineSnapshot(
      `"outline-color:#586e75;"`,
    ));
  test('ol_color_light_code_parameter', () =>
    expect(outline.ol_color_light_code_parameter()).toMatchInlineSnapshot(
      `"outline-color:#D55901;"`,
    ));
  test('ol_color_light_code_property', () =>
    expect(outline.ol_color_light_code_property()).toMatchInlineSnapshot(
      `"outline-color:#268bd2;"`,
    ));
  test('ol_color_light_code_punctuation', () =>
    expect(outline.ol_color_light_code_punctuation()).toMatchInlineSnapshot(
      `"outline-color:#586e75;"`,
    ));
  test('ol_color_light_code_selection', () =>
    expect(outline.ol_color_light_code_selection()).toMatchInlineSnapshot(
      `"outline-color:#073642;"`,
    ));
  test('ol_color_light_code_string', () =>
    expect(outline.ol_color_light_code_string()).toMatchInlineSnapshot(
      `"outline-color:#2aa198;"`,
    ));
  test('ol_color_light_code_variable', () =>
    expect(outline.ol_color_light_code_variable()).toMatchInlineSnapshot(
      `"outline-color:#D55901;"`,
    ));
  test('ol_none', () =>
    expect(outline.ol_none()).toMatchInlineSnapshot(`"outline:none;"`));
  test('ol_style_auto', () =>
    expect(outline.ol_style_auto()).toMatchInlineSnapshot(
      `"outline-style:auto;"`,
    ));
  test('ol_style_dashed', () =>
    expect(outline.ol_style_dashed()).toMatchInlineSnapshot(
      `"outline-style:dashed;"`,
    ));
  test('ol_style_dotted', () =>
    expect(outline.ol_style_dotted()).toMatchInlineSnapshot(
      `"outline-style:dotted;"`,
    ));
  test('ol_style_double', () =>
    expect(outline.ol_style_double()).toMatchInlineSnapshot(
      `"outline-style:double;"`,
    ));
  test('ol_style_groove', () =>
    expect(outline.ol_style_groove()).toMatchInlineSnapshot(
      `"outline-style:groove;"`,
    ));
  test('ol_style_inherit', () =>
    expect(outline.ol_style_inherit()).toMatchInlineSnapshot(
      `"outline-style:inherit;"`,
    ));
  test('ol_style_initial', () =>
    expect(outline.ol_style_initial()).toMatchInlineSnapshot(
      `"outline-style:initial;"`,
    ));
  test('ol_style_inset', () =>
    expect(outline.ol_style_inset()).toMatchInlineSnapshot(
      `"outline-style:inset;"`,
    ));
  test('ol_style_none', () =>
    expect(outline.ol_style_none()).toMatchInlineSnapshot(
      `"outline-style:none;"`,
    ));
  test('ol_style_outset', () =>
    expect(outline.ol_style_outset()).toMatchInlineSnapshot(
      `"outline-style:outset;"`,
    ));
  test('ol_style_ridge', () =>
    expect(outline.ol_style_ridge()).toMatchInlineSnapshot(
      `"outline-style:ridge;"`,
    ));
  test('ol_style_solid', () =>
    expect(outline.ol_style_solid()).toMatchInlineSnapshot(
      `"outline-style:solid;"`,
    ));
  test('ol_style_unset', () =>
    expect(outline.ol_style_unset()).toMatchInlineSnapshot(
      `"outline-style:unset;"`,
    ));
  test('ol_width_lg', () =>
    expect(outline.ol_width_lg()).toMatchInlineSnapshot(
      `"outline-width:0.5rem;"`,
    ));
  test('ol_width_md', () =>
    expect(outline.ol_width_md()).toMatchInlineSnapshot(
      `"outline-width:0.375rem;"`,
    ));
  test('ol_width_none', () =>
    expect(outline.ol_width_none()).toMatchInlineSnapshot(
      `"outline-width:0rem;"`,
    ));
  test('ol_width_px', () =>
    expect(outline.ol_width_px()).toMatchInlineSnapshot(
      `"outline-width:0.0625rem;"`,
    ));
  test('ol_width_sm', () =>
    expect(outline.ol_width_sm()).toMatchInlineSnapshot(
      `"outline-width:0.25rem;"`,
    ));
  test('ol_width_xl', () =>
    expect(outline.ol_width_xl()).toMatchInlineSnapshot(
      `"outline-width:0.75rem;"`,
    ));
  test('ol_width_xs', () =>
    expect(outline.ol_width_xs()).toMatchInlineSnapshot(
      `"outline-width:0.125rem;"`,
    ));
});
