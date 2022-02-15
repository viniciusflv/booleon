import { border } from './border';

describe('border', () => {
  test('bd_collapse', () =>
    expect(border.bd_collapse()).toMatchInlineSnapshot(
      `"border-collapse:collapse;"`,
    ));
  test('bd_color_base_blue_100', () =>
    expect(border.bd_color_base_blue_100()).toMatchInlineSnapshot(
      `"background-color:#A8DBFF;"`,
    ));
  test('bd_color_base_blue_200', () =>
    expect(border.bd_color_base_blue_200()).toMatchInlineSnapshot(
      `"background-color:#7EC8FE;"`,
    ));
  test('bd_color_base_blue_300', () =>
    expect(border.bd_color_base_blue_300()).toMatchInlineSnapshot(
      `"background-color:#5AB5F4;"`,
    ));
  test('bd_color_base_blue_400', () =>
    expect(border.bd_color_base_blue_400()).toMatchInlineSnapshot(
      `"background-color:#3EA0E5;"`,
    ));
  test('bd_color_base_blue_500', () =>
    expect(border.bd_color_base_blue_500()).toMatchInlineSnapshot(
      `"background-color:#268bd2;"`,
    ));
  test('bd_color_base_blue_600', () =>
    expect(border.bd_color_base_blue_600()).toMatchInlineSnapshot(
      `"background-color:#0D72B9;"`,
    ));
  test('bd_color_base_blue_700', () =>
    expect(border.bd_color_base_blue_700()).toMatchInlineSnapshot(
      `"background-color:#005898;"`,
    ));
  test('bd_color_base_blue_800', () =>
    expect(border.bd_color_base_blue_800()).toMatchInlineSnapshot(
      `"background-color:#003C66;"`,
    ));
  test('bd_color_base_blue_900', () =>
    expect(border.bd_color_base_blue_900()).toMatchInlineSnapshot(
      `"background-color:#001F33;"`,
    ));
  test('bd_color_base_green_100', () =>
    expect(border.bd_color_base_green_100()).toMatchInlineSnapshot(
      `"background-color:#B0FFB6;"`,
    ));
  test('bd_color_base_green_200', () =>
    expect(border.bd_color_base_green_200()).toMatchInlineSnapshot(
      `"background-color:#91FFA0;"`,
    ));
  test('bd_color_base_green_300', () =>
    expect(border.bd_color_base_green_300()).toMatchInlineSnapshot(
      `"background-color:#77FF8F;"`,
    ));
  test('bd_color_base_green_400', () =>
    expect(border.bd_color_base_green_400()).toMatchInlineSnapshot(
      `"background-color:#61FF83;"`,
    ));
  test('bd_color_base_green_500', () =>
    expect(border.bd_color_base_green_500()).toMatchInlineSnapshot(
      `"background-color:#50fa7b;"`,
    ));
  test('bd_color_base_green_600', () =>
    expect(border.bd_color_base_green_600()).toMatchInlineSnapshot(
      `"background-color:#2FCC5A;"`,
    ));
  test('bd_color_base_green_700', () =>
    expect(border.bd_color_base_green_700()).toMatchInlineSnapshot(
      `"background-color:#17993D;"`,
    ));
  test('bd_color_base_green_800', () =>
    expect(border.bd_color_base_green_800()).toMatchInlineSnapshot(
      `"background-color:#076625;"`,
    ));
  test('bd_color_base_green_900', () =>
    expect(border.bd_color_base_green_900()).toMatchInlineSnapshot(
      `"background-color:#003310;"`,
    ));
  test('bd_color_base_grey_100', () =>
    expect(border.bd_color_base_grey_100()).toMatchInlineSnapshot(
      `"background-color:#BDC1C9;"`,
    ));
  test('bd_color_base_grey_200', () =>
    expect(border.bd_color_base_grey_200()).toMatchInlineSnapshot(
      `"background-color:#9EA2AF;"`,
    ));
  test('bd_color_base_grey_300', () =>
    expect(border.bd_color_base_grey_300()).toMatchInlineSnapshot(
      `"background-color:#7F8493;"`,
    ));
  test('bd_color_base_grey_400', () =>
    expect(border.bd_color_base_grey_400()).toMatchInlineSnapshot(
      `"background-color:#616577;"`,
    ));
  test('bd_color_base_grey_500', () =>
    expect(border.bd_color_base_grey_500()).toMatchInlineSnapshot(
      `"background-color:#44475a;"`,
    ));
  test('bd_color_base_grey_600', () =>
    expect(border.bd_color_base_grey_600()).toMatchInlineSnapshot(
      `"background-color:#34374A;"`,
    ));
  test('bd_color_base_grey_700', () =>
    expect(border.bd_color_base_grey_700()).toMatchInlineSnapshot(
      `"background-color:#262839;"`,
    ));
  test('bd_color_base_grey_800', () =>
    expect(border.bd_color_base_grey_800()).toMatchInlineSnapshot(
      `"background-color:#181A27;"`,
    ));
  test('bd_color_base_grey_900', () =>
    expect(border.bd_color_base_grey_900()).toMatchInlineSnapshot(
      `"background-color:#0B0D14;"`,
    ));
  test('bd_color_base_orange_100', () =>
    expect(border.bd_color_base_orange_100()).toMatchInlineSnapshot(
      `"background-color:#FFACA8;"`,
    ));
  test('bd_color_base_orange_200', () =>
    expect(border.bd_color_base_orange_200()).toMatchInlineSnapshot(
      `"background-color:#FF907E;"`,
    ));
  test('bd_color_base_orange_300', () =>
    expect(border.bd_color_base_orange_300()).toMatchInlineSnapshot(
      `"background-color:#FB7A54;"`,
    ));
  test('bd_color_base_orange_400', () =>
    expect(border.bd_color_base_orange_400()).toMatchInlineSnapshot(
      `"background-color:#EB682A;"`,
    ));
  test('bd_color_base_orange_500', () =>
    expect(border.bd_color_base_orange_500()).toMatchInlineSnapshot(
      `"background-color:#D55901;"`,
    ));
  test('bd_color_base_orange_600', () =>
    expect(border.bd_color_base_orange_600()).toMatchInlineSnapshot(
      `"background-color:#C04400;"`,
    ));
  test('bd_color_base_orange_700', () =>
    expect(border.bd_color_base_orange_700()).toMatchInlineSnapshot(
      `"background-color:#993000;"`,
    ));
  test('bd_color_base_orange_800', () =>
    expect(border.bd_color_base_orange_800()).toMatchInlineSnapshot(
      `"background-color:#661E00;"`,
    ));
  test('bd_color_base_orange_900', () =>
    expect(border.bd_color_base_orange_900()).toMatchInlineSnapshot(
      `"background-color:#330E00;"`,
    ));
  test('bd_color_base_pink_100', () =>
    expect(border.bd_color_base_pink_100()).toMatchInlineSnapshot(
      `"background-color:#FFC2EE;"`,
    ));
  test('bd_color_base_pink_200', () =>
    expect(border.bd_color_base_pink_200()).toMatchInlineSnapshot(
      `"background-color:#FFAAE5;"`,
    ));
  test('bd_color_base_pink_300', () =>
    expect(border.bd_color_base_pink_300()).toMatchInlineSnapshot(
      `"background-color:#FF96DB;"`,
    ));
  test('bd_color_base_pink_400', () =>
    expect(border.bd_color_base_pink_400()).toMatchInlineSnapshot(
      `"background-color:#FF86D1;"`,
    ));
  test('bd_color_base_pink_500', () =>
    expect(border.bd_color_base_pink_500()).toMatchInlineSnapshot(
      `"background-color:#ff79c6;"`,
    ));
  test('bd_color_base_pink_600', () =>
    expect(border.bd_color_base_pink_600()).toMatchInlineSnapshot(
      `"background-color:#CC53A0;"`,
    ));
  test('bd_color_base_pink_700', () =>
    expect(border.bd_color_base_pink_700()).toMatchInlineSnapshot(
      `"background-color:#99357A;"`,
    ));
  test('bd_color_base_pink_800', () =>
    expect(border.bd_color_base_pink_800()).toMatchInlineSnapshot(
      `"background-color:#661C52;"`,
    ));
  test('bd_color_base_pink_900', () =>
    expect(border.bd_color_base_pink_900()).toMatchInlineSnapshot(
      `"background-color:#330B2A;"`,
    ));
  test('bd_color_base_purple_100', () =>
    expect(border.bd_color_base_purple_100()).toMatchInlineSnapshot(
      `"background-color:#DCCFFF;"`,
    ));
  test('bd_color_base_purple_200', () =>
    expect(border.bd_color_base_purple_200()).toMatchInlineSnapshot(
      `"background-color:#D1BCFF;"`,
    ));
  test('bd_color_base_purple_300', () =>
    expect(border.bd_color_base_purple_300()).toMatchInlineSnapshot(
      `"background-color:#C8ABFF;"`,
    ));
  test('bd_color_base_purple_400', () =>
    expect(border.bd_color_base_purple_400()).toMatchInlineSnapshot(
      `"background-color:#C29EFF;"`,
    ));
  test('bd_color_base_purple_500', () =>
    expect(border.bd_color_base_purple_500()).toMatchInlineSnapshot(
      `"background-color:#bd93f9;"`,
    ));
  test('bd_color_base_purple_600', () =>
    expect(border.bd_color_base_purple_600()).toMatchInlineSnapshot(
      `"background-color:#956BCC;"`,
    ));
  test('bd_color_base_purple_700', () =>
    expect(border.bd_color_base_purple_700()).toMatchInlineSnapshot(
      `"background-color:#6F4999;"`,
    ));
  test('bd_color_base_purple_800', () =>
    expect(border.bd_color_base_purple_800()).toMatchInlineSnapshot(
      `"background-color:#492C66;"`,
    ));
  test('bd_color_base_purple_900', () =>
    expect(border.bd_color_base_purple_900()).toMatchInlineSnapshot(
      `"background-color:#241333;"`,
    ));
  test('bd_color_base_sand_100', () =>
    expect(border.bd_color_base_sand_100()).toMatchInlineSnapshot(
      `"background-color:#FFF1D3;"`,
    ));
  test('bd_color_base_sand_200', () =>
    expect(border.bd_color_base_sand_200()).toMatchInlineSnapshot(
      `"background-color:#FFE3AE;"`,
    ));
  test('bd_color_base_sand_300', () =>
    expect(border.bd_color_base_sand_300()).toMatchInlineSnapshot(
      `"background-color:#FFD591;"`,
    ));
  test('bd_color_base_sand_400', () =>
    expect(border.bd_color_base_sand_400()).toMatchInlineSnapshot(
      `"background-color:#FFC77B;"`,
    ));
  test('bd_color_base_sand_500', () =>
    expect(border.bd_color_base_sand_500()).toMatchInlineSnapshot(
      `"background-color:#ffb86c;"`,
    ));
  test('bd_color_base_sand_600', () =>
    expect(border.bd_color_base_sand_600()).toMatchInlineSnapshot(
      `"background-color:#CC9448;"`,
    ));
  test('bd_color_base_sand_700', () =>
    expect(border.bd_color_base_sand_700()).toMatchInlineSnapshot(
      `"background-color:#996F2B;"`,
    ));
  test('bd_color_base_sand_800', () =>
    expect(border.bd_color_base_sand_800()).toMatchInlineSnapshot(
      `"background-color:#664A15;"`,
    ));
  test('bd_color_base_sand_900', () =>
    expect(border.bd_color_base_sand_900()).toMatchInlineSnapshot(
      `"background-color:#332507;"`,
    ));
  test('bd_color_base_sky_100', () =>
    expect(border.bd_color_base_sky_100()).toMatchInlineSnapshot(
      `"background-color:#CBFFFF;"`,
    ));
  test('bd_color_base_sky_200', () =>
    expect(border.bd_color_base_sky_200()).toMatchInlineSnapshot(
      `"background-color:#B6FFFF;"`,
    ));
  test('bd_color_base_sky_300', () =>
    expect(border.bd_color_base_sky_300()).toMatchInlineSnapshot(
      `"background-color:#A5FFFF;"`,
    ));
  test('bd_color_base_sky_400', () =>
    expect(border.bd_color_base_sky_400()).toMatchInlineSnapshot(
      `"background-color:#96F7FF;"`,
    ));
  test('bd_color_base_sky_500', () =>
    expect(border.bd_color_base_sky_500()).toMatchInlineSnapshot(
      `"background-color:#8be9fd;"`,
    ));
  test('bd_color_base_sky_600', () =>
    expect(border.bd_color_base_sky_600()).toMatchInlineSnapshot(
      `"background-color:#64C2CC;"`,
    ));
  test('bd_color_base_sky_700', () =>
    expect(border.bd_color_base_sky_700()).toMatchInlineSnapshot(
      `"background-color:#429799;"`,
    ));
  test('bd_color_base_sky_800', () =>
    expect(border.bd_color_base_sky_800()).toMatchInlineSnapshot(
      `"background-color:#276666;"`,
    ));
  test('bd_color_base_sky_900', () =>
    expect(border.bd_color_base_sky_900()).toMatchInlineSnapshot(
      `"background-color:#103333;"`,
    ));
  test('bd_color_base_white_100', () =>
    expect(border.bd_color_base_white_100()).toMatchInlineSnapshot(
      `"background-color:#FFFFFF;"`,
    ));
  test('bd_color_base_white_200', () =>
    expect(border.bd_color_base_white_200()).toMatchInlineSnapshot(
      `"background-color:#FEFEFB;"`,
    ));
  test('bd_color_base_white_300', () =>
    expect(border.bd_color_base_white_300()).toMatchInlineSnapshot(
      `"background-color:#FCFCF8;"`,
    ));
  test('bd_color_base_white_400', () =>
    expect(border.bd_color_base_white_400()).toMatchInlineSnapshot(
      `"background-color:#FAFAF5;"`,
    ));
  test('bd_color_base_white_500', () =>
    expect(border.bd_color_base_white_500()).toMatchInlineSnapshot(
      `"background-color:#f8f8f2;"`,
    ));
  test('bd_color_base_white_600', () =>
    expect(border.bd_color_base_white_600()).toMatchInlineSnapshot(
      `"background-color:#D9D9D4;"`,
    ));
  test('bd_color_base_white_700', () =>
    expect(border.bd_color_base_white_700()).toMatchInlineSnapshot(
      `"background-color:#BABAB6;"`,
    ));
  test('bd_color_base_white_800', () =>
    expect(border.bd_color_base_white_800()).toMatchInlineSnapshot(
      `"background-color:#9B9B97;"`,
    ));
  test('bd_color_base_white_900', () =>
    expect(border.bd_color_base_white_900()).toMatchInlineSnapshot(
      `"background-color:#7C7C79;"`,
    ));
  test('bd_color_base_yellow_100', () =>
    expect(border.bd_color_base_yellow_100()).toMatchInlineSnapshot(
      `"background-color:#FFFFFD;"`,
    ));
  test('bd_color_base_yellow_200', () =>
    expect(border.bd_color_base_yellow_200()).toMatchInlineSnapshot(
      `"background-color:#FFFFD7;"`,
    ));
  test('bd_color_base_yellow_300', () =>
    expect(border.bd_color_base_yellow_300()).toMatchInlineSnapshot(
      `"background-color:#FFFFB7;"`,
    ));
  test('bd_color_base_yellow_400', () =>
    expect(border.bd_color_base_yellow_400()).toMatchInlineSnapshot(
      `"background-color:#FDFF9E;"`,
    ));
  test('bd_color_base_yellow_500', () =>
    expect(border.bd_color_base_yellow_500()).toMatchInlineSnapshot(
      `"background-color:#f1fa8c;"`,
    ));
  test('bd_color_base_yellow_600', () =>
    expect(border.bd_color_base_yellow_600()).toMatchInlineSnapshot(
      `"background-color:#CCC565;"`,
    ));
  test('bd_color_base_yellow_700', () =>
    expect(border.bd_color_base_yellow_700()).toMatchInlineSnapshot(
      `"background-color:#998544;"`,
    ));
  test('bd_color_base_yellow_800', () =>
    expect(border.bd_color_base_yellow_800()).toMatchInlineSnapshot(
      `"background-color:#664B28;"`,
    ));
  test('bd_color_base_yellow_900', () =>
    expect(border.bd_color_base_yellow_900()).toMatchInlineSnapshot(
      `"background-color:#331C11;"`,
    ));
  test('bd_color_brand_primary', () =>
    expect(border.bd_color_brand_primary()).toMatchInlineSnapshot(
      `"background-color:#D55901;"`,
    ));
  test('bd_color_brand_secondary', () =>
    expect(border.bd_color_brand_secondary()).toMatchInlineSnapshot(
      `"background-color:#330E00;"`,
    ));
  test('bd_color_dark_code_background', () =>
    expect(border.bd_color_dark_code_background()).toMatchInlineSnapshot(
      `"background-color:#282a36;"`,
    ));
  test('bd_color_dark_code_baseColor', () =>
    expect(border.bd_color_dark_code_baseColor()).toMatchInlineSnapshot(
      `"background-color:#f8f8f2;"`,
    ));
  test('bd_color_dark_code_builtin', () =>
    expect(border.bd_color_dark_code_builtin()).toMatchInlineSnapshot(
      `"background-color:#8be9fd;"`,
    ));
  test('bd_color_dark_code_comment', () =>
    expect(border.bd_color_dark_code_comment()).toMatchInlineSnapshot(
      `"background-color:#6272a4;"`,
    ));
  test('bd_color_dark_code_function', () =>
    expect(border.bd_color_dark_code_function()).toMatchInlineSnapshot(
      `"background-color:#50fa7b;"`,
    ));
  test('bd_color_dark_code_keyword', () =>
    expect(border.bd_color_dark_code_keyword()).toMatchInlineSnapshot(
      `"background-color:#ff79c6;"`,
    ));
  test('bd_color_dark_code_operator', () =>
    expect(border.bd_color_dark_code_operator()).toMatchInlineSnapshot(
      `"background-color:#ff79c6;"`,
    ));
  test('bd_color_dark_code_parameter', () =>
    expect(border.bd_color_dark_code_parameter()).toMatchInlineSnapshot(
      `"background-color:#ffb86c;"`,
    ));
  test('bd_color_dark_code_property', () =>
    expect(border.bd_color_dark_code_property()).toMatchInlineSnapshot(
      `"background-color:#bd93f9;"`,
    ));
  test('bd_color_dark_code_punctuation', () =>
    expect(border.bd_color_dark_code_punctuation()).toMatchInlineSnapshot(
      `"background-color:#f8f8f2;"`,
    ));
  test('bd_color_dark_code_selection', () =>
    expect(border.bd_color_dark_code_selection()).toMatchInlineSnapshot(
      `"background-color:#44475a;"`,
    ));
  test('bd_color_dark_code_string', () =>
    expect(border.bd_color_dark_code_string()).toMatchInlineSnapshot(
      `"background-color:#f1fa8c;"`,
    ));
  test('bd_color_dark_code_variable', () =>
    expect(border.bd_color_dark_code_variable()).toMatchInlineSnapshot(
      `"background-color:#bd93f9;"`,
    ));
  test('bd_color_light_code_background', () =>
    expect(border.bd_color_light_code_background()).toMatchInlineSnapshot(
      `"background-color:#f8f8f2;"`,
    ));
  test('bd_color_light_code_baseColor', () =>
    expect(border.bd_color_light_code_baseColor()).toMatchInlineSnapshot(
      `"background-color:#657b83;"`,
    ));
  test('bd_color_light_code_builtin', () =>
    expect(border.bd_color_light_code_builtin()).toMatchInlineSnapshot(
      `"background-color:#268bd2;"`,
    ));
  test('bd_color_light_code_comment', () =>
    expect(border.bd_color_light_code_comment()).toMatchInlineSnapshot(
      `"background-color:#93a1a1;"`,
    ));
  test('bd_color_light_code_function', () =>
    expect(border.bd_color_light_code_function()).toMatchInlineSnapshot(
      `"background-color:#b58900;"`,
    ));
  test('bd_color_light_code_keyword', () =>
    expect(border.bd_color_light_code_keyword()).toMatchInlineSnapshot(
      `"background-color:#859900;"`,
    ));
  test('bd_color_light_code_operator', () =>
    expect(border.bd_color_light_code_operator()).toMatchInlineSnapshot(
      `"background-color:#586e75;"`,
    ));
  test('bd_color_light_code_parameter', () =>
    expect(border.bd_color_light_code_parameter()).toMatchInlineSnapshot(
      `"background-color:#D55901;"`,
    ));
  test('bd_color_light_code_property', () =>
    expect(border.bd_color_light_code_property()).toMatchInlineSnapshot(
      `"background-color:#268bd2;"`,
    ));
  test('bd_color_light_code_punctuation', () =>
    expect(border.bd_color_light_code_punctuation()).toMatchInlineSnapshot(
      `"background-color:#586e75;"`,
    ));
  test('bd_color_light_code_selection', () =>
    expect(border.bd_color_light_code_selection()).toMatchInlineSnapshot(
      `"background-color:#073642;"`,
    ));
  test('bd_color_light_code_string', () =>
    expect(border.bd_color_light_code_string()).toMatchInlineSnapshot(
      `"background-color:#2aa198;"`,
    ));
  test('bd_color_light_code_variable', () =>
    expect(border.bd_color_light_code_variable()).toMatchInlineSnapshot(
      `"background-color:#D55901;"`,
    ));
  test('bd_none', () =>
    expect(border.bd_none()).toMatchInlineSnapshot(`"border:none;"`));
  test('bd_radius_circle', () =>
    expect(border.bd_radius_circle()).toMatchInlineSnapshot(
      `"border-radius:0.75rem;"`,
    ));
  test('bd_radius_lg', () =>
    expect(border.bd_radius_lg()).toMatchInlineSnapshot(
      `"border-radius:0.5rem;"`,
    ));
  test('bd_radius_md', () =>
    expect(border.bd_radius_md()).toMatchInlineSnapshot(
      `"border-radius:0.375rem;"`,
    ));
  test('bd_radius_none', () =>
    expect(border.bd_radius_none()).toMatchInlineSnapshot(
      `"border-radius:0rem;"`,
    ));
  test('bd_radius_pill', () =>
    expect(border.bd_radius_pill()).toMatchInlineSnapshot(
      `"border-radius:0.75rem;"`,
    ));
  test('bd_radius_px', () =>
    expect(border.bd_radius_px()).toMatchInlineSnapshot(
      `"border-radius:0.0625rem;"`,
    ));
  test('bd_radius_sm', () =>
    expect(border.bd_radius_sm()).toMatchInlineSnapshot(
      `"border-radius:0.25rem;"`,
    ));
  test('bd_radius_xl', () =>
    expect(border.bd_radius_xl()).toMatchInlineSnapshot(
      `"border-radius:0.75rem;"`,
    ));
  test('bd_radius_xs', () =>
    expect(border.bd_radius_xs()).toMatchInlineSnapshot(
      `"border-radius:0.125rem;"`,
    ));
  test('bd_separate', () =>
    expect(border.bd_separate()).toMatchInlineSnapshot(
      `"border-collapse:separate;"`,
    ));
  test('bd_style_dashed', () =>
    expect(border.bd_style_dashed()).toMatchInlineSnapshot(
      `"border-style:dashed;"`,
    ));
  test('bd_style_dotted', () =>
    expect(border.bd_style_dotted()).toMatchInlineSnapshot(
      `"border-style:dotted;"`,
    ));
  test('bd_style_double', () =>
    expect(border.bd_style_double()).toMatchInlineSnapshot(
      `"border-style:double;"`,
    ));
  test('bd_style_groove', () =>
    expect(border.bd_style_groove()).toMatchInlineSnapshot(
      `"border-style:groove;"`,
    ));
  test('bd_style_hidden', () =>
    expect(border.bd_style_hidden()).toMatchInlineSnapshot(
      `"border-style:hidden;"`,
    ));
  test('bd_style_inherit', () =>
    expect(border.bd_style_inherit()).toMatchInlineSnapshot(
      `"border-style:inherit;"`,
    ));
  test('bd_style_initial', () =>
    expect(border.bd_style_initial()).toMatchInlineSnapshot(
      `"border-style:initial;"`,
    ));
  test('bd_style_inset', () =>
    expect(border.bd_style_inset()).toMatchInlineSnapshot(
      `"border-style:inset;"`,
    ));
  test('bd_style_none', () =>
    expect(border.bd_style_none()).toMatchInlineSnapshot(
      `"border-style:none;"`,
    ));
  test('bd_style_outset', () =>
    expect(border.bd_style_outset()).toMatchInlineSnapshot(
      `"border-style:outset;"`,
    ));
  test('bd_style_ridge', () =>
    expect(border.bd_style_ridge()).toMatchInlineSnapshot(
      `"border-style:ridge;"`,
    ));
  test('bd_style_solid', () =>
    expect(border.bd_style_solid()).toMatchInlineSnapshot(
      `"border-style:solid;"`,
    ));
  test('bd_width_lg', () =>
    expect(border.bd_width_lg()).toMatchInlineSnapshot(
      `"border-width:0.5rem;"`,
    ));
  test('bd_width_md', () =>
    expect(border.bd_width_md()).toMatchInlineSnapshot(
      `"border-width:0.375rem;"`,
    ));
  test('bd_width_none', () =>
    expect(border.bd_width_none()).toMatchInlineSnapshot(
      `"border-width:0rem;"`,
    ));
  test('bd_width_px', () =>
    expect(border.bd_width_px()).toMatchInlineSnapshot(
      `"border-width:0.0625rem;"`,
    ));
  test('bd_width_sm', () =>
    expect(border.bd_width_sm()).toMatchInlineSnapshot(
      `"border-width:0.25rem;"`,
    ));
  test('bd_width_xl', () =>
    expect(border.bd_width_xl()).toMatchInlineSnapshot(
      `"border-width:0.75rem;"`,
    ));
  test('bd_width_xs', () =>
    expect(border.bd_width_xs()).toMatchInlineSnapshot(
      `"border-width:0.125rem;"`,
    ));
});
