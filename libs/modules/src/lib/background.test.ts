import { background } from './background';

describe('background', () => {
  test('bg_auto', () =>
    expect(background.bg_auto()).toMatchInlineSnapshot(
      `"background-size:auto;"`,
    ));
  test('bg_color_base_blue_100', () =>
    expect(background.bg_color_base_blue_100()).toMatchInlineSnapshot(
      `"background-color:#A8DBFF;"`,
    ));
  test('bg_color_base_blue_200', () =>
    expect(background.bg_color_base_blue_200()).toMatchInlineSnapshot(
      `"background-color:#7EC8FE;"`,
    ));
  test('bg_color_base_blue_300', () =>
    expect(background.bg_color_base_blue_300()).toMatchInlineSnapshot(
      `"background-color:#5AB5F4;"`,
    ));
  test('bg_color_base_blue_400', () =>
    expect(background.bg_color_base_blue_400()).toMatchInlineSnapshot(
      `"background-color:#3EA0E5;"`,
    ));
  test('bg_color_base_blue_500', () =>
    expect(background.bg_color_base_blue_500()).toMatchInlineSnapshot(
      `"background-color:#268bd2;"`,
    ));
  test('bg_color_base_blue_600', () =>
    expect(background.bg_color_base_blue_600()).toMatchInlineSnapshot(
      `"background-color:#0D72B9;"`,
    ));
  test('bg_color_base_blue_700', () =>
    expect(background.bg_color_base_blue_700()).toMatchInlineSnapshot(
      `"background-color:#005898;"`,
    ));
  test('bg_color_base_blue_800', () =>
    expect(background.bg_color_base_blue_800()).toMatchInlineSnapshot(
      `"background-color:#003C66;"`,
    ));
  test('bg_color_base_blue_900', () =>
    expect(background.bg_color_base_blue_900()).toMatchInlineSnapshot(
      `"background-color:#001F33;"`,
    ));
  test('bg_color_base_green_100', () =>
    expect(background.bg_color_base_green_100()).toMatchInlineSnapshot(
      `"background-color:#B0FFB6;"`,
    ));
  test('bg_color_base_green_200', () =>
    expect(background.bg_color_base_green_200()).toMatchInlineSnapshot(
      `"background-color:#91FFA0;"`,
    ));
  test('bg_color_base_green_300', () =>
    expect(background.bg_color_base_green_300()).toMatchInlineSnapshot(
      `"background-color:#77FF8F;"`,
    ));
  test('bg_color_base_green_400', () =>
    expect(background.bg_color_base_green_400()).toMatchInlineSnapshot(
      `"background-color:#61FF83;"`,
    ));
  test('bg_color_base_green_500', () =>
    expect(background.bg_color_base_green_500()).toMatchInlineSnapshot(
      `"background-color:#50fa7b;"`,
    ));
  test('bg_color_base_green_600', () =>
    expect(background.bg_color_base_green_600()).toMatchInlineSnapshot(
      `"background-color:#2FCC5A;"`,
    ));
  test('bg_color_base_green_700', () =>
    expect(background.bg_color_base_green_700()).toMatchInlineSnapshot(
      `"background-color:#17993D;"`,
    ));
  test('bg_color_base_green_800', () =>
    expect(background.bg_color_base_green_800()).toMatchInlineSnapshot(
      `"background-color:#076625;"`,
    ));
  test('bg_color_base_green_900', () =>
    expect(background.bg_color_base_green_900()).toMatchInlineSnapshot(
      `"background-color:#003310;"`,
    ));
  test('bg_color_base_grey_100', () =>
    expect(background.bg_color_base_grey_100()).toMatchInlineSnapshot(
      `"background-color:#BDC1C9;"`,
    ));
  test('bg_color_base_grey_200', () =>
    expect(background.bg_color_base_grey_200()).toMatchInlineSnapshot(
      `"background-color:#9EA2AF;"`,
    ));
  test('bg_color_base_grey_300', () =>
    expect(background.bg_color_base_grey_300()).toMatchInlineSnapshot(
      `"background-color:#7F8493;"`,
    ));
  test('bg_color_base_grey_400', () =>
    expect(background.bg_color_base_grey_400()).toMatchInlineSnapshot(
      `"background-color:#616577;"`,
    ));
  test('bg_color_base_grey_500', () =>
    expect(background.bg_color_base_grey_500()).toMatchInlineSnapshot(
      `"background-color:#44475a;"`,
    ));
  test('bg_color_base_grey_600', () =>
    expect(background.bg_color_base_grey_600()).toMatchInlineSnapshot(
      `"background-color:#34374A;"`,
    ));
  test('bg_color_base_grey_700', () =>
    expect(background.bg_color_base_grey_700()).toMatchInlineSnapshot(
      `"background-color:#262839;"`,
    ));
  test('bg_color_base_grey_800', () =>
    expect(background.bg_color_base_grey_800()).toMatchInlineSnapshot(
      `"background-color:#181A27;"`,
    ));
  test('bg_color_base_grey_900', () =>
    expect(background.bg_color_base_grey_900()).toMatchInlineSnapshot(
      `"background-color:#0B0D14;"`,
    ));
  test('bg_color_base_orange_100', () =>
    expect(background.bg_color_base_orange_100()).toMatchInlineSnapshot(
      `"background-color:#FFACA8;"`,
    ));
  test('bg_color_base_orange_200', () =>
    expect(background.bg_color_base_orange_200()).toMatchInlineSnapshot(
      `"background-color:#FF907E;"`,
    ));
  test('bg_color_base_orange_300', () =>
    expect(background.bg_color_base_orange_300()).toMatchInlineSnapshot(
      `"background-color:#FB7A54;"`,
    ));
  test('bg_color_base_orange_400', () =>
    expect(background.bg_color_base_orange_400()).toMatchInlineSnapshot(
      `"background-color:#EB682A;"`,
    ));
  test('bg_color_base_orange_500', () =>
    expect(background.bg_color_base_orange_500()).toMatchInlineSnapshot(
      `"background-color:#D55901;"`,
    ));
  test('bg_color_base_orange_600', () =>
    expect(background.bg_color_base_orange_600()).toMatchInlineSnapshot(
      `"background-color:#C04400;"`,
    ));
  test('bg_color_base_orange_700', () =>
    expect(background.bg_color_base_orange_700()).toMatchInlineSnapshot(
      `"background-color:#993000;"`,
    ));
  test('bg_color_base_orange_800', () =>
    expect(background.bg_color_base_orange_800()).toMatchInlineSnapshot(
      `"background-color:#661E00;"`,
    ));
  test('bg_color_base_orange_900', () =>
    expect(background.bg_color_base_orange_900()).toMatchInlineSnapshot(
      `"background-color:#330E00;"`,
    ));
  test('bg_color_base_pink_100', () =>
    expect(background.bg_color_base_pink_100()).toMatchInlineSnapshot(
      `"background-color:#FFC2EE;"`,
    ));
  test('bg_color_base_pink_200', () =>
    expect(background.bg_color_base_pink_200()).toMatchInlineSnapshot(
      `"background-color:#FFAAE5;"`,
    ));
  test('bg_color_base_pink_300', () =>
    expect(background.bg_color_base_pink_300()).toMatchInlineSnapshot(
      `"background-color:#FF96DB;"`,
    ));
  test('bg_color_base_pink_400', () =>
    expect(background.bg_color_base_pink_400()).toMatchInlineSnapshot(
      `"background-color:#FF86D1;"`,
    ));
  test('bg_color_base_pink_500', () =>
    expect(background.bg_color_base_pink_500()).toMatchInlineSnapshot(
      `"background-color:#ff79c6;"`,
    ));
  test('bg_color_base_pink_600', () =>
    expect(background.bg_color_base_pink_600()).toMatchInlineSnapshot(
      `"background-color:#CC53A0;"`,
    ));
  test('bg_color_base_pink_700', () =>
    expect(background.bg_color_base_pink_700()).toMatchInlineSnapshot(
      `"background-color:#99357A;"`,
    ));
  test('bg_color_base_pink_800', () =>
    expect(background.bg_color_base_pink_800()).toMatchInlineSnapshot(
      `"background-color:#661C52;"`,
    ));
  test('bg_color_base_pink_900', () =>
    expect(background.bg_color_base_pink_900()).toMatchInlineSnapshot(
      `"background-color:#330B2A;"`,
    ));
  test('bg_color_base_purple_100', () =>
    expect(background.bg_color_base_purple_100()).toMatchInlineSnapshot(
      `"background-color:#DCCFFF;"`,
    ));
  test('bg_color_base_purple_200', () =>
    expect(background.bg_color_base_purple_200()).toMatchInlineSnapshot(
      `"background-color:#D1BCFF;"`,
    ));
  test('bg_color_base_purple_300', () =>
    expect(background.bg_color_base_purple_300()).toMatchInlineSnapshot(
      `"background-color:#C8ABFF;"`,
    ));
  test('bg_color_base_purple_400', () =>
    expect(background.bg_color_base_purple_400()).toMatchInlineSnapshot(
      `"background-color:#C29EFF;"`,
    ));
  test('bg_color_base_purple_500', () =>
    expect(background.bg_color_base_purple_500()).toMatchInlineSnapshot(
      `"background-color:#bd93f9;"`,
    ));
  test('bg_color_base_purple_600', () =>
    expect(background.bg_color_base_purple_600()).toMatchInlineSnapshot(
      `"background-color:#956BCC;"`,
    ));
  test('bg_color_base_purple_700', () =>
    expect(background.bg_color_base_purple_700()).toMatchInlineSnapshot(
      `"background-color:#6F4999;"`,
    ));
  test('bg_color_base_purple_800', () =>
    expect(background.bg_color_base_purple_800()).toMatchInlineSnapshot(
      `"background-color:#492C66;"`,
    ));
  test('bg_color_base_purple_900', () =>
    expect(background.bg_color_base_purple_900()).toMatchInlineSnapshot(
      `"background-color:#241333;"`,
    ));
  test('bg_color_base_sand_100', () =>
    expect(background.bg_color_base_sand_100()).toMatchInlineSnapshot(
      `"background-color:#FFF1D3;"`,
    ));
  test('bg_color_base_sand_200', () =>
    expect(background.bg_color_base_sand_200()).toMatchInlineSnapshot(
      `"background-color:#FFE3AE;"`,
    ));
  test('bg_color_base_sand_300', () =>
    expect(background.bg_color_base_sand_300()).toMatchInlineSnapshot(
      `"background-color:#FFD591;"`,
    ));
  test('bg_color_base_sand_400', () =>
    expect(background.bg_color_base_sand_400()).toMatchInlineSnapshot(
      `"background-color:#FFC77B;"`,
    ));
  test('bg_color_base_sand_500', () =>
    expect(background.bg_color_base_sand_500()).toMatchInlineSnapshot(
      `"background-color:#ffb86c;"`,
    ));
  test('bg_color_base_sand_600', () =>
    expect(background.bg_color_base_sand_600()).toMatchInlineSnapshot(
      `"background-color:#CC9448;"`,
    ));
  test('bg_color_base_sand_700', () =>
    expect(background.bg_color_base_sand_700()).toMatchInlineSnapshot(
      `"background-color:#996F2B;"`,
    ));
  test('bg_color_base_sand_800', () =>
    expect(background.bg_color_base_sand_800()).toMatchInlineSnapshot(
      `"background-color:#664A15;"`,
    ));
  test('bg_color_base_sand_900', () =>
    expect(background.bg_color_base_sand_900()).toMatchInlineSnapshot(
      `"background-color:#332507;"`,
    ));
  test('bg_color_base_sky_100', () =>
    expect(background.bg_color_base_sky_100()).toMatchInlineSnapshot(
      `"background-color:#CBFFFF;"`,
    ));
  test('bg_color_base_sky_200', () =>
    expect(background.bg_color_base_sky_200()).toMatchInlineSnapshot(
      `"background-color:#B6FFFF;"`,
    ));
  test('bg_color_base_sky_300', () =>
    expect(background.bg_color_base_sky_300()).toMatchInlineSnapshot(
      `"background-color:#A5FFFF;"`,
    ));
  test('bg_color_base_sky_400', () =>
    expect(background.bg_color_base_sky_400()).toMatchInlineSnapshot(
      `"background-color:#96F7FF;"`,
    ));
  test('bg_color_base_sky_500', () =>
    expect(background.bg_color_base_sky_500()).toMatchInlineSnapshot(
      `"background-color:#8be9fd;"`,
    ));
  test('bg_color_base_sky_600', () =>
    expect(background.bg_color_base_sky_600()).toMatchInlineSnapshot(
      `"background-color:#64C2CC;"`,
    ));
  test('bg_color_base_sky_700', () =>
    expect(background.bg_color_base_sky_700()).toMatchInlineSnapshot(
      `"background-color:#429799;"`,
    ));
  test('bg_color_base_sky_800', () =>
    expect(background.bg_color_base_sky_800()).toMatchInlineSnapshot(
      `"background-color:#276666;"`,
    ));
  test('bg_color_base_sky_900', () =>
    expect(background.bg_color_base_sky_900()).toMatchInlineSnapshot(
      `"background-color:#103333;"`,
    ));
  test('bg_color_base_white_100', () =>
    expect(background.bg_color_base_white_100()).toMatchInlineSnapshot(
      `"background-color:#FFFFFF;"`,
    ));
  test('bg_color_base_white_200', () =>
    expect(background.bg_color_base_white_200()).toMatchInlineSnapshot(
      `"background-color:#FEFEFB;"`,
    ));
  test('bg_color_base_white_300', () =>
    expect(background.bg_color_base_white_300()).toMatchInlineSnapshot(
      `"background-color:#FCFCF8;"`,
    ));
  test('bg_color_base_white_400', () =>
    expect(background.bg_color_base_white_400()).toMatchInlineSnapshot(
      `"background-color:#FAFAF5;"`,
    ));
  test('bg_color_base_white_500', () =>
    expect(background.bg_color_base_white_500()).toMatchInlineSnapshot(
      `"background-color:#f8f8f2;"`,
    ));
  test('bg_color_base_white_600', () =>
    expect(background.bg_color_base_white_600()).toMatchInlineSnapshot(
      `"background-color:#D9D9D4;"`,
    ));
  test('bg_color_base_white_700', () =>
    expect(background.bg_color_base_white_700()).toMatchInlineSnapshot(
      `"background-color:#BABAB6;"`,
    ));
  test('bg_color_base_white_800', () =>
    expect(background.bg_color_base_white_800()).toMatchInlineSnapshot(
      `"background-color:#9B9B97;"`,
    ));
  test('bg_color_base_white_900', () =>
    expect(background.bg_color_base_white_900()).toMatchInlineSnapshot(
      `"background-color:#7C7C79;"`,
    ));
  test('bg_color_base_yellow_100', () =>
    expect(background.bg_color_base_yellow_100()).toMatchInlineSnapshot(
      `"background-color:#FFFFFD;"`,
    ));
  test('bg_color_base_yellow_200', () =>
    expect(background.bg_color_base_yellow_200()).toMatchInlineSnapshot(
      `"background-color:#FFFFD7;"`,
    ));
  test('bg_color_base_yellow_300', () =>
    expect(background.bg_color_base_yellow_300()).toMatchInlineSnapshot(
      `"background-color:#FFFFB7;"`,
    ));
  test('bg_color_base_yellow_400', () =>
    expect(background.bg_color_base_yellow_400()).toMatchInlineSnapshot(
      `"background-color:#FDFF9E;"`,
    ));
  test('bg_color_base_yellow_500', () =>
    expect(background.bg_color_base_yellow_500()).toMatchInlineSnapshot(
      `"background-color:#f1fa8c;"`,
    ));
  test('bg_color_base_yellow_600', () =>
    expect(background.bg_color_base_yellow_600()).toMatchInlineSnapshot(
      `"background-color:#CCC565;"`,
    ));
  test('bg_color_base_yellow_700', () =>
    expect(background.bg_color_base_yellow_700()).toMatchInlineSnapshot(
      `"background-color:#998544;"`,
    ));
  test('bg_color_base_yellow_800', () =>
    expect(background.bg_color_base_yellow_800()).toMatchInlineSnapshot(
      `"background-color:#664B28;"`,
    ));
  test('bg_color_base_yellow_900', () =>
    expect(background.bg_color_base_yellow_900()).toMatchInlineSnapshot(
      `"background-color:#331C11;"`,
    ));
  test('bg_color_brand_primary', () =>
    expect(background.bg_color_brand_primary()).toMatchInlineSnapshot(
      `"background-color:#D55901;"`,
    ));
  test('bg_color_brand_secondary', () =>
    expect(background.bg_color_brand_secondary()).toMatchInlineSnapshot(
      `"background-color:#330E00;"`,
    ));
  test('bg_color_dark_code_background', () =>
    expect(background.bg_color_dark_code_background()).toMatchInlineSnapshot(
      `"background-color:#282a36;"`,
    ));
  test('bg_color_dark_code_baseColor', () =>
    expect(background.bg_color_dark_code_baseColor()).toMatchInlineSnapshot(
      `"background-color:#f8f8f2;"`,
    ));
  test('bg_color_dark_code_builtin', () =>
    expect(background.bg_color_dark_code_builtin()).toMatchInlineSnapshot(
      `"background-color:#8be9fd;"`,
    ));
  test('bg_color_dark_code_comment', () =>
    expect(background.bg_color_dark_code_comment()).toMatchInlineSnapshot(
      `"background-color:#6272a4;"`,
    ));
  test('bg_color_dark_code_function', () =>
    expect(background.bg_color_dark_code_function()).toMatchInlineSnapshot(
      `"background-color:#50fa7b;"`,
    ));
  test('bg_color_dark_code_keyword', () =>
    expect(background.bg_color_dark_code_keyword()).toMatchInlineSnapshot(
      `"background-color:#ff79c6;"`,
    ));
  test('bg_color_dark_code_operator', () =>
    expect(background.bg_color_dark_code_operator()).toMatchInlineSnapshot(
      `"background-color:#ff79c6;"`,
    ));
  test('bg_color_dark_code_parameter', () =>
    expect(background.bg_color_dark_code_parameter()).toMatchInlineSnapshot(
      `"background-color:#ffb86c;"`,
    ));
  test('bg_color_dark_code_property', () =>
    expect(background.bg_color_dark_code_property()).toMatchInlineSnapshot(
      `"background-color:#bd93f9;"`,
    ));
  test('bg_color_dark_code_punctuation', () =>
    expect(background.bg_color_dark_code_punctuation()).toMatchInlineSnapshot(
      `"background-color:#f8f8f2;"`,
    ));
  test('bg_color_dark_code_selection', () =>
    expect(background.bg_color_dark_code_selection()).toMatchInlineSnapshot(
      `"background-color:#44475a;"`,
    ));
  test('bg_color_dark_code_string', () =>
    expect(background.bg_color_dark_code_string()).toMatchInlineSnapshot(
      `"background-color:#f1fa8c;"`,
    ));
  test('bg_color_dark_code_variable', () =>
    expect(background.bg_color_dark_code_variable()).toMatchInlineSnapshot(
      `"background-color:#bd93f9;"`,
    ));
  test('bg_color_light_code_background', () =>
    expect(background.bg_color_light_code_background()).toMatchInlineSnapshot(
      `"background-color:#f8f8f2;"`,
    ));
  test('bg_color_light_code_baseColor', () =>
    expect(background.bg_color_light_code_baseColor()).toMatchInlineSnapshot(
      `"background-color:#657b83;"`,
    ));
  test('bg_color_light_code_builtin', () =>
    expect(background.bg_color_light_code_builtin()).toMatchInlineSnapshot(
      `"background-color:#268bd2;"`,
    ));
  test('bg_color_light_code_comment', () =>
    expect(background.bg_color_light_code_comment()).toMatchInlineSnapshot(
      `"background-color:#93a1a1;"`,
    ));
  test('bg_color_light_code_function', () =>
    expect(background.bg_color_light_code_function()).toMatchInlineSnapshot(
      `"background-color:#b58900;"`,
    ));
  test('bg_color_light_code_keyword', () =>
    expect(background.bg_color_light_code_keyword()).toMatchInlineSnapshot(
      `"background-color:#859900;"`,
    ));
  test('bg_color_light_code_operator', () =>
    expect(background.bg_color_light_code_operator()).toMatchInlineSnapshot(
      `"background-color:#586e75;"`,
    ));
  test('bg_color_light_code_parameter', () =>
    expect(background.bg_color_light_code_parameter()).toMatchInlineSnapshot(
      `"background-color:#D55901;"`,
    ));
  test('bg_color_light_code_property', () =>
    expect(background.bg_color_light_code_property()).toMatchInlineSnapshot(
      `"background-color:#268bd2;"`,
    ));
  test('bg_color_light_code_punctuation', () =>
    expect(background.bg_color_light_code_punctuation()).toMatchInlineSnapshot(
      `"background-color:#586e75;"`,
    ));
  test('bg_color_light_code_selection', () =>
    expect(background.bg_color_light_code_selection()).toMatchInlineSnapshot(
      `"background-color:#073642;"`,
    ));
  test('bg_color_light_code_string', () =>
    expect(background.bg_color_light_code_string()).toMatchInlineSnapshot(
      `"background-color:#2aa198;"`,
    ));
  test('bg_color_light_code_variable', () =>
    expect(background.bg_color_light_code_variable()).toMatchInlineSnapshot(
      `"background-color:#D55901;"`,
    ));
  test('bg_contain', () =>
    expect(background.bg_contain()).toMatchInlineSnapshot(
      `"background-size:contain;"`,
    ));
  test('bg_cover', () =>
    expect(background.bg_cover()).toMatchInlineSnapshot(
      `"background-size:cover;"`,
    ));
  test('bg_fixed', () =>
    expect(background.bg_fixed()).toMatchInlineSnapshot(
      `"background-attachment:fixed;"`,
    ));
  test('bg_img', () =>
    expect(background.bg_img('/img.png')).toMatchInlineSnapshot(
      `"background-image:url(/img.png);"`,
    ));
  test('bg_local', () =>
    expect(background.bg_local()).toMatchInlineSnapshot(
      `"background-attachment:local;"`,
    ));
  test('bg_norepeat', () =>
    expect(background.bg_norepeat()).toMatchInlineSnapshot(
      `"background-repeat:no-repeat;"`,
    ));
  test('bg_repeat', () =>
    expect(background.bg_repeat()).toMatchInlineSnapshot(
      `"background-repeat:repeat;"`,
    ));
  test('bg_scroll', () =>
    expect(background.bg_scroll()).toMatchInlineSnapshot(
      `"background-attachment:scroll;"`,
    ));
  test('bg_transparent', () =>
    expect(background.bg_transparent()).toMatchInlineSnapshot(
      `"background-color:transparent;"`,
    ));
});
