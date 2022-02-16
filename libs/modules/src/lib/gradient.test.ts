import { gradient } from './gradient';

describe('gradient', () => {
  test('gdb_linear_base_blue_100', () =>
    expect(gradient.gdb_linear_base_blue_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#A8DBFF);"`,
    ));
  test('gdb_linear_base_blue_200', () =>
    expect(gradient.gdb_linear_base_blue_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#7EC8FE);"`,
    ));
  test('gdb_linear_base_blue_300', () =>
    expect(gradient.gdb_linear_base_blue_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#5AB5F4);"`,
    ));
  test('gdb_linear_base_blue_400', () =>
    expect(gradient.gdb_linear_base_blue_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#3EA0E5);"`,
    ));
  test('gdb_linear_base_blue_500', () =>
    expect(gradient.gdb_linear_base_blue_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#268bd2);"`,
    ));
  test('gdb_linear_base_blue_600', () =>
    expect(gradient.gdb_linear_base_blue_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#0D72B9);"`,
    ));
  test('gdb_linear_base_blue_700', () =>
    expect(gradient.gdb_linear_base_blue_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#005898);"`,
    ));
  test('gdb_linear_base_blue_800', () =>
    expect(gradient.gdb_linear_base_blue_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#003C66);"`,
    ));
  test('gdb_linear_base_blue_900', () =>
    expect(gradient.gdb_linear_base_blue_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#001F33);"`,
    ));
  test('gdb_linear_base_green_100', () =>
    expect(gradient.gdb_linear_base_green_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#B0FFB6);"`,
    ));
  test('gdb_linear_base_green_200', () =>
    expect(gradient.gdb_linear_base_green_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#91FFA0);"`,
    ));
  test('gdb_linear_base_green_300', () =>
    expect(gradient.gdb_linear_base_green_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#77FF8F);"`,
    ));
  test('gdb_linear_base_green_400', () =>
    expect(gradient.gdb_linear_base_green_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#61FF83);"`,
    ));
  test('gdb_linear_base_green_500', () =>
    expect(gradient.gdb_linear_base_green_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#50fa7b);"`,
    ));
  test('gdb_linear_base_green_600', () =>
    expect(gradient.gdb_linear_base_green_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#2FCC5A);"`,
    ));
  test('gdb_linear_base_green_700', () =>
    expect(gradient.gdb_linear_base_green_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#17993D);"`,
    ));
  test('gdb_linear_base_green_800', () =>
    expect(gradient.gdb_linear_base_green_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#076625);"`,
    ));
  test('gdb_linear_base_green_900', () =>
    expect(gradient.gdb_linear_base_green_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#003310);"`,
    ));
  test('gdb_linear_base_grey_100', () =>
    expect(gradient.gdb_linear_base_grey_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#BDC1C9);"`,
    ));
  test('gdb_linear_base_grey_200', () =>
    expect(gradient.gdb_linear_base_grey_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#9EA2AF);"`,
    ));
  test('gdb_linear_base_grey_300', () =>
    expect(gradient.gdb_linear_base_grey_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#7F8493);"`,
    ));
  test('gdb_linear_base_grey_400', () =>
    expect(gradient.gdb_linear_base_grey_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#616577);"`,
    ));
  test('gdb_linear_base_grey_500', () =>
    expect(gradient.gdb_linear_base_grey_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#44475a);"`,
    ));
  test('gdb_linear_base_grey_600', () =>
    expect(gradient.gdb_linear_base_grey_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#34374A);"`,
    ));
  test('gdb_linear_base_grey_700', () =>
    expect(gradient.gdb_linear_base_grey_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#262839);"`,
    ));
  test('gdb_linear_base_grey_800', () =>
    expect(gradient.gdb_linear_base_grey_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#181A27);"`,
    ));
  test('gdb_linear_base_grey_900', () =>
    expect(gradient.gdb_linear_base_grey_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#0B0D14);"`,
    ));
  test('gdb_linear_base_orange_100', () =>
    expect(gradient.gdb_linear_base_orange_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FFACA8);"`,
    ));
  test('gdb_linear_base_orange_200', () =>
    expect(gradient.gdb_linear_base_orange_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FF907E);"`,
    ));
  test('gdb_linear_base_orange_300', () =>
    expect(gradient.gdb_linear_base_orange_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FB7A54);"`,
    ));
  test('gdb_linear_base_orange_400', () =>
    expect(gradient.gdb_linear_base_orange_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#EB682A);"`,
    ));
  test('gdb_linear_base_orange_500', () =>
    expect(gradient.gdb_linear_base_orange_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#D55901);"`,
    ));
  test('gdb_linear_base_orange_600', () =>
    expect(gradient.gdb_linear_base_orange_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#C04400);"`,
    ));
  test('gdb_linear_base_orange_700', () =>
    expect(gradient.gdb_linear_base_orange_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#993000);"`,
    ));
  test('gdb_linear_base_orange_800', () =>
    expect(gradient.gdb_linear_base_orange_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#661E00);"`,
    ));
  test('gdb_linear_base_orange_900', () =>
    expect(gradient.gdb_linear_base_orange_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#330E00);"`,
    ));
  test('gdb_linear_base_pink_100', () =>
    expect(gradient.gdb_linear_base_pink_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FFC2EE);"`,
    ));
  test('gdb_linear_base_pink_200', () =>
    expect(gradient.gdb_linear_base_pink_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FFAAE5);"`,
    ));
  test('gdb_linear_base_pink_300', () =>
    expect(gradient.gdb_linear_base_pink_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FF96DB);"`,
    ));
  test('gdb_linear_base_pink_400', () =>
    expect(gradient.gdb_linear_base_pink_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FF86D1);"`,
    ));
  test('gdb_linear_base_pink_500', () =>
    expect(gradient.gdb_linear_base_pink_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#ff79c6);"`,
    ));
  test('gdb_linear_base_pink_600', () =>
    expect(gradient.gdb_linear_base_pink_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#CC53A0);"`,
    ));
  test('gdb_linear_base_pink_700', () =>
    expect(gradient.gdb_linear_base_pink_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#99357A);"`,
    ));
  test('gdb_linear_base_pink_800', () =>
    expect(gradient.gdb_linear_base_pink_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#661C52);"`,
    ));
  test('gdb_linear_base_pink_900', () =>
    expect(gradient.gdb_linear_base_pink_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#330B2A);"`,
    ));
  test('gdb_linear_base_purple_100', () =>
    expect(gradient.gdb_linear_base_purple_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#DCCFFF);"`,
    ));
  test('gdb_linear_base_purple_200', () =>
    expect(gradient.gdb_linear_base_purple_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#D1BCFF);"`,
    ));
  test('gdb_linear_base_purple_300', () =>
    expect(gradient.gdb_linear_base_purple_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#C8ABFF);"`,
    ));
  test('gdb_linear_base_purple_400', () =>
    expect(gradient.gdb_linear_base_purple_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#C29EFF);"`,
    ));
  test('gdb_linear_base_purple_500', () =>
    expect(gradient.gdb_linear_base_purple_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#bd93f9);"`,
    ));
  test('gdb_linear_base_purple_600', () =>
    expect(gradient.gdb_linear_base_purple_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#956BCC);"`,
    ));
  test('gdb_linear_base_purple_700', () =>
    expect(gradient.gdb_linear_base_purple_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#6F4999);"`,
    ));
  test('gdb_linear_base_purple_800', () =>
    expect(gradient.gdb_linear_base_purple_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#492C66);"`,
    ));
  test('gdb_linear_base_purple_900', () =>
    expect(gradient.gdb_linear_base_purple_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#241333);"`,
    ));
  test('gdb_linear_base_sand_100', () =>
    expect(gradient.gdb_linear_base_sand_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FFF1D3);"`,
    ));
  test('gdb_linear_base_sand_200', () =>
    expect(gradient.gdb_linear_base_sand_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FFE3AE);"`,
    ));
  test('gdb_linear_base_sand_300', () =>
    expect(gradient.gdb_linear_base_sand_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FFD591);"`,
    ));
  test('gdb_linear_base_sand_400', () =>
    expect(gradient.gdb_linear_base_sand_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FFC77B);"`,
    ));
  test('gdb_linear_base_sand_500', () =>
    expect(gradient.gdb_linear_base_sand_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#ffb86c);"`,
    ));
  test('gdb_linear_base_sand_600', () =>
    expect(gradient.gdb_linear_base_sand_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#CC9448);"`,
    ));
  test('gdb_linear_base_sand_700', () =>
    expect(gradient.gdb_linear_base_sand_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#996F2B);"`,
    ));
  test('gdb_linear_base_sand_800', () =>
    expect(gradient.gdb_linear_base_sand_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#664A15);"`,
    ));
  test('gdb_linear_base_sand_900', () =>
    expect(gradient.gdb_linear_base_sand_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#332507);"`,
    ));
  test('gdb_linear_base_sky_100', () =>
    expect(gradient.gdb_linear_base_sky_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#CBFFFF);"`,
    ));
  test('gdb_linear_base_sky_200', () =>
    expect(gradient.gdb_linear_base_sky_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#B6FFFF);"`,
    ));
  test('gdb_linear_base_sky_300', () =>
    expect(gradient.gdb_linear_base_sky_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#A5FFFF);"`,
    ));
  test('gdb_linear_base_sky_400', () =>
    expect(gradient.gdb_linear_base_sky_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#96F7FF);"`,
    ));
  test('gdb_linear_base_sky_500', () =>
    expect(gradient.gdb_linear_base_sky_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#8be9fd);"`,
    ));
  test('gdb_linear_base_sky_600', () =>
    expect(gradient.gdb_linear_base_sky_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#64C2CC);"`,
    ));
  test('gdb_linear_base_sky_700', () =>
    expect(gradient.gdb_linear_base_sky_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#429799);"`,
    ));
  test('gdb_linear_base_sky_800', () =>
    expect(gradient.gdb_linear_base_sky_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#276666);"`,
    ));
  test('gdb_linear_base_sky_900', () =>
    expect(gradient.gdb_linear_base_sky_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#103333);"`,
    ));
  test('gdb_linear_base_white_100', () =>
    expect(gradient.gdb_linear_base_white_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FFFFFF);"`,
    ));
  test('gdb_linear_base_white_200', () =>
    expect(gradient.gdb_linear_base_white_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FEFEFB);"`,
    ));
  test('gdb_linear_base_white_300', () =>
    expect(gradient.gdb_linear_base_white_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FCFCF8);"`,
    ));
  test('gdb_linear_base_white_400', () =>
    expect(gradient.gdb_linear_base_white_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FAFAF5);"`,
    ));
  test('gdb_linear_base_white_500', () =>
    expect(gradient.gdb_linear_base_white_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#f8f8f2);"`,
    ));
  test('gdb_linear_base_white_600', () =>
    expect(gradient.gdb_linear_base_white_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#D9D9D4);"`,
    ));
  test('gdb_linear_base_white_700', () =>
    expect(gradient.gdb_linear_base_white_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#BABAB6);"`,
    ));
  test('gdb_linear_base_white_800', () =>
    expect(gradient.gdb_linear_base_white_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#9B9B97);"`,
    ));
  test('gdb_linear_base_white_900', () =>
    expect(gradient.gdb_linear_base_white_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#7C7C79);"`,
    ));
  test('gdb_linear_base_yellow_100', () =>
    expect(gradient.gdb_linear_base_yellow_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FFFFFD);"`,
    ));
  test('gdb_linear_base_yellow_200', () =>
    expect(gradient.gdb_linear_base_yellow_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FFFFD7);"`,
    ));
  test('gdb_linear_base_yellow_300', () =>
    expect(gradient.gdb_linear_base_yellow_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FFFFB7);"`,
    ));
  test('gdb_linear_base_yellow_400', () =>
    expect(gradient.gdb_linear_base_yellow_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#FDFF9E);"`,
    ));
  test('gdb_linear_base_yellow_500', () =>
    expect(gradient.gdb_linear_base_yellow_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#f1fa8c);"`,
    ));
  test('gdb_linear_base_yellow_600', () =>
    expect(gradient.gdb_linear_base_yellow_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#CCC565);"`,
    ));
  test('gdb_linear_base_yellow_700', () =>
    expect(gradient.gdb_linear_base_yellow_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#998544);"`,
    ));
  test('gdb_linear_base_yellow_800', () =>
    expect(gradient.gdb_linear_base_yellow_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#664B28);"`,
    ));
  test('gdb_linear_base_yellow_900', () =>
    expect(gradient.gdb_linear_base_yellow_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#331C11);"`,
    ));
  test('gdb_linear_brand_primary', () =>
    expect(gradient.gdb_linear_brand_primary()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#D55901);"`,
    ));
  test('gdb_linear_brand_secondary', () =>
    expect(gradient.gdb_linear_brand_secondary()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#330E00);"`,
    ));
  test('gdb_linear_dark_code_background', () =>
    expect(gradient.gdb_linear_dark_code_background()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#282a36);"`,
    ));
  test('gdb_linear_dark_code_baseColor', () =>
    expect(gradient.gdb_linear_dark_code_baseColor()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#f8f8f2);"`,
    ));
  test('gdb_linear_dark_code_builtin', () =>
    expect(gradient.gdb_linear_dark_code_builtin()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#8be9fd);"`,
    ));
  test('gdb_linear_dark_code_comment', () =>
    expect(gradient.gdb_linear_dark_code_comment()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#6272a4);"`,
    ));
  test('gdb_linear_dark_code_function', () =>
    expect(gradient.gdb_linear_dark_code_function()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#50fa7b);"`,
    ));
  test('gdb_linear_dark_code_keyword', () =>
    expect(gradient.gdb_linear_dark_code_keyword()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#ff79c6);"`,
    ));
  test('gdb_linear_dark_code_operator', () =>
    expect(gradient.gdb_linear_dark_code_operator()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#ff79c6);"`,
    ));
  test('gdb_linear_dark_code_parameter', () =>
    expect(gradient.gdb_linear_dark_code_parameter()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#ffb86c);"`,
    ));
  test('gdb_linear_dark_code_property', () =>
    expect(gradient.gdb_linear_dark_code_property()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#bd93f9);"`,
    ));
  test('gdb_linear_dark_code_punctuation', () =>
    expect(gradient.gdb_linear_dark_code_punctuation()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#f8f8f2);"`,
    ));
  test('gdb_linear_dark_code_selection', () =>
    expect(gradient.gdb_linear_dark_code_selection()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#44475a);"`,
    ));
  test('gdb_linear_dark_code_string', () =>
    expect(gradient.gdb_linear_dark_code_string()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#f1fa8c);"`,
    ));
  test('gdb_linear_dark_code_variable', () =>
    expect(gradient.gdb_linear_dark_code_variable()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#bd93f9);"`,
    ));
  test('gdb_linear_light_code_background', () =>
    expect(gradient.gdb_linear_light_code_background()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#f8f8f2);"`,
    ));
  test('gdb_linear_light_code_baseColor', () =>
    expect(gradient.gdb_linear_light_code_baseColor()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#657b83);"`,
    ));
  test('gdb_linear_light_code_builtin', () =>
    expect(gradient.gdb_linear_light_code_builtin()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#268bd2);"`,
    ));
  test('gdb_linear_light_code_comment', () =>
    expect(gradient.gdb_linear_light_code_comment()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#93a1a1);"`,
    ));
  test('gdb_linear_light_code_function', () =>
    expect(gradient.gdb_linear_light_code_function()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#b58900);"`,
    ));
  test('gdb_linear_light_code_keyword', () =>
    expect(gradient.gdb_linear_light_code_keyword()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#859900);"`,
    ));
  test('gdb_linear_light_code_operator', () =>
    expect(gradient.gdb_linear_light_code_operator()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#586e75);"`,
    ));
  test('gdb_linear_light_code_parameter', () =>
    expect(gradient.gdb_linear_light_code_parameter()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#D55901);"`,
    ));
  test('gdb_linear_light_code_property', () =>
    expect(gradient.gdb_linear_light_code_property()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#268bd2);"`,
    ));
  test('gdb_linear_light_code_punctuation', () =>
    expect(gradient.gdb_linear_light_code_punctuation()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#586e75);"`,
    ));
  test('gdb_linear_light_code_selection', () =>
    expect(gradient.gdb_linear_light_code_selection()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#073642);"`,
    ));
  test('gdb_linear_light_code_string', () =>
    expect(gradient.gdb_linear_light_code_string()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#2aa198);"`,
    ));
  test('gdb_linear_light_code_variable', () =>
    expect(gradient.gdb_linear_light_code_variable()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to bottom,transparent,#D55901);"`,
    ));
  test('gdl_linear_base_blue_100', () =>
    expect(gradient.gdl_linear_base_blue_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#A8DBFF);"`,
    ));
  test('gdl_linear_base_blue_200', () =>
    expect(gradient.gdl_linear_base_blue_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#7EC8FE);"`,
    ));
  test('gdl_linear_base_blue_300', () =>
    expect(gradient.gdl_linear_base_blue_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#5AB5F4);"`,
    ));
  test('gdl_linear_base_blue_400', () =>
    expect(gradient.gdl_linear_base_blue_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#3EA0E5);"`,
    ));
  test('gdl_linear_base_blue_500', () =>
    expect(gradient.gdl_linear_base_blue_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#268bd2);"`,
    ));
  test('gdl_linear_base_blue_600', () =>
    expect(gradient.gdl_linear_base_blue_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#0D72B9);"`,
    ));
  test('gdl_linear_base_blue_700', () =>
    expect(gradient.gdl_linear_base_blue_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#005898);"`,
    ));
  test('gdl_linear_base_blue_800', () =>
    expect(gradient.gdl_linear_base_blue_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#003C66);"`,
    ));
  test('gdl_linear_base_blue_900', () =>
    expect(gradient.gdl_linear_base_blue_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#001F33);"`,
    ));
  test('gdl_linear_base_green_100', () =>
    expect(gradient.gdl_linear_base_green_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#B0FFB6);"`,
    ));
  test('gdl_linear_base_green_200', () =>
    expect(gradient.gdl_linear_base_green_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#91FFA0);"`,
    ));
  test('gdl_linear_base_green_300', () =>
    expect(gradient.gdl_linear_base_green_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#77FF8F);"`,
    ));
  test('gdl_linear_base_green_400', () =>
    expect(gradient.gdl_linear_base_green_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#61FF83);"`,
    ));
  test('gdl_linear_base_green_500', () =>
    expect(gradient.gdl_linear_base_green_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#50fa7b);"`,
    ));
  test('gdl_linear_base_green_600', () =>
    expect(gradient.gdl_linear_base_green_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#2FCC5A);"`,
    ));
  test('gdl_linear_base_green_700', () =>
    expect(gradient.gdl_linear_base_green_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#17993D);"`,
    ));
  test('gdl_linear_base_green_800', () =>
    expect(gradient.gdl_linear_base_green_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#076625);"`,
    ));
  test('gdl_linear_base_green_900', () =>
    expect(gradient.gdl_linear_base_green_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#003310);"`,
    ));
  test('gdl_linear_base_grey_100', () =>
    expect(gradient.gdl_linear_base_grey_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#BDC1C9);"`,
    ));
  test('gdl_linear_base_grey_200', () =>
    expect(gradient.gdl_linear_base_grey_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#9EA2AF);"`,
    ));
  test('gdl_linear_base_grey_300', () =>
    expect(gradient.gdl_linear_base_grey_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#7F8493);"`,
    ));
  test('gdl_linear_base_grey_400', () =>
    expect(gradient.gdl_linear_base_grey_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#616577);"`,
    ));
  test('gdl_linear_base_grey_500', () =>
    expect(gradient.gdl_linear_base_grey_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#44475a);"`,
    ));
  test('gdl_linear_base_grey_600', () =>
    expect(gradient.gdl_linear_base_grey_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#34374A);"`,
    ));
  test('gdl_linear_base_grey_700', () =>
    expect(gradient.gdl_linear_base_grey_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#262839);"`,
    ));
  test('gdl_linear_base_grey_800', () =>
    expect(gradient.gdl_linear_base_grey_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#181A27);"`,
    ));
  test('gdl_linear_base_grey_900', () =>
    expect(gradient.gdl_linear_base_grey_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#0B0D14);"`,
    ));
  test('gdl_linear_base_orange_100', () =>
    expect(gradient.gdl_linear_base_orange_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FFACA8);"`,
    ));
  test('gdl_linear_base_orange_200', () =>
    expect(gradient.gdl_linear_base_orange_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FF907E);"`,
    ));
  test('gdl_linear_base_orange_300', () =>
    expect(gradient.gdl_linear_base_orange_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FB7A54);"`,
    ));
  test('gdl_linear_base_orange_400', () =>
    expect(gradient.gdl_linear_base_orange_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#EB682A);"`,
    ));
  test('gdl_linear_base_orange_500', () =>
    expect(gradient.gdl_linear_base_orange_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#D55901);"`,
    ));
  test('gdl_linear_base_orange_600', () =>
    expect(gradient.gdl_linear_base_orange_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#C04400);"`,
    ));
  test('gdl_linear_base_orange_700', () =>
    expect(gradient.gdl_linear_base_orange_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#993000);"`,
    ));
  test('gdl_linear_base_orange_800', () =>
    expect(gradient.gdl_linear_base_orange_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#661E00);"`,
    ));
  test('gdl_linear_base_orange_900', () =>
    expect(gradient.gdl_linear_base_orange_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#330E00);"`,
    ));
  test('gdl_linear_base_pink_100', () =>
    expect(gradient.gdl_linear_base_pink_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FFC2EE);"`,
    ));
  test('gdl_linear_base_pink_200', () =>
    expect(gradient.gdl_linear_base_pink_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FFAAE5);"`,
    ));
  test('gdl_linear_base_pink_300', () =>
    expect(gradient.gdl_linear_base_pink_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FF96DB);"`,
    ));
  test('gdl_linear_base_pink_400', () =>
    expect(gradient.gdl_linear_base_pink_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FF86D1);"`,
    ));
  test('gdl_linear_base_pink_500', () =>
    expect(gradient.gdl_linear_base_pink_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#ff79c6);"`,
    ));
  test('gdl_linear_base_pink_600', () =>
    expect(gradient.gdl_linear_base_pink_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#CC53A0);"`,
    ));
  test('gdl_linear_base_pink_700', () =>
    expect(gradient.gdl_linear_base_pink_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#99357A);"`,
    ));
  test('gdl_linear_base_pink_800', () =>
    expect(gradient.gdl_linear_base_pink_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#661C52);"`,
    ));
  test('gdl_linear_base_pink_900', () =>
    expect(gradient.gdl_linear_base_pink_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#330B2A);"`,
    ));
  test('gdl_linear_base_purple_100', () =>
    expect(gradient.gdl_linear_base_purple_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#DCCFFF);"`,
    ));
  test('gdl_linear_base_purple_200', () =>
    expect(gradient.gdl_linear_base_purple_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#D1BCFF);"`,
    ));
  test('gdl_linear_base_purple_300', () =>
    expect(gradient.gdl_linear_base_purple_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#C8ABFF);"`,
    ));
  test('gdl_linear_base_purple_400', () =>
    expect(gradient.gdl_linear_base_purple_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#C29EFF);"`,
    ));
  test('gdl_linear_base_purple_500', () =>
    expect(gradient.gdl_linear_base_purple_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#bd93f9);"`,
    ));
  test('gdl_linear_base_purple_600', () =>
    expect(gradient.gdl_linear_base_purple_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#956BCC);"`,
    ));
  test('gdl_linear_base_purple_700', () =>
    expect(gradient.gdl_linear_base_purple_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#6F4999);"`,
    ));
  test('gdl_linear_base_purple_800', () =>
    expect(gradient.gdl_linear_base_purple_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#492C66);"`,
    ));
  test('gdl_linear_base_purple_900', () =>
    expect(gradient.gdl_linear_base_purple_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#241333);"`,
    ));
  test('gdl_linear_base_sand_100', () =>
    expect(gradient.gdl_linear_base_sand_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FFF1D3);"`,
    ));
  test('gdl_linear_base_sand_200', () =>
    expect(gradient.gdl_linear_base_sand_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FFE3AE);"`,
    ));
  test('gdl_linear_base_sand_300', () =>
    expect(gradient.gdl_linear_base_sand_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FFD591);"`,
    ));
  test('gdl_linear_base_sand_400', () =>
    expect(gradient.gdl_linear_base_sand_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FFC77B);"`,
    ));
  test('gdl_linear_base_sand_500', () =>
    expect(gradient.gdl_linear_base_sand_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#ffb86c);"`,
    ));
  test('gdl_linear_base_sand_600', () =>
    expect(gradient.gdl_linear_base_sand_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#CC9448);"`,
    ));
  test('gdl_linear_base_sand_700', () =>
    expect(gradient.gdl_linear_base_sand_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#996F2B);"`,
    ));
  test('gdl_linear_base_sand_800', () =>
    expect(gradient.gdl_linear_base_sand_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#664A15);"`,
    ));
  test('gdl_linear_base_sand_900', () =>
    expect(gradient.gdl_linear_base_sand_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#332507);"`,
    ));
  test('gdl_linear_base_sky_100', () =>
    expect(gradient.gdl_linear_base_sky_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#CBFFFF);"`,
    ));
  test('gdl_linear_base_sky_200', () =>
    expect(gradient.gdl_linear_base_sky_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#B6FFFF);"`,
    ));
  test('gdl_linear_base_sky_300', () =>
    expect(gradient.gdl_linear_base_sky_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#A5FFFF);"`,
    ));
  test('gdl_linear_base_sky_400', () =>
    expect(gradient.gdl_linear_base_sky_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#96F7FF);"`,
    ));
  test('gdl_linear_base_sky_500', () =>
    expect(gradient.gdl_linear_base_sky_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#8be9fd);"`,
    ));
  test('gdl_linear_base_sky_600', () =>
    expect(gradient.gdl_linear_base_sky_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#64C2CC);"`,
    ));
  test('gdl_linear_base_sky_700', () =>
    expect(gradient.gdl_linear_base_sky_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#429799);"`,
    ));
  test('gdl_linear_base_sky_800', () =>
    expect(gradient.gdl_linear_base_sky_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#276666);"`,
    ));
  test('gdl_linear_base_sky_900', () =>
    expect(gradient.gdl_linear_base_sky_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#103333);"`,
    ));
  test('gdl_linear_base_white_100', () =>
    expect(gradient.gdl_linear_base_white_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FFFFFF);"`,
    ));
  test('gdl_linear_base_white_200', () =>
    expect(gradient.gdl_linear_base_white_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FEFEFB);"`,
    ));
  test('gdl_linear_base_white_300', () =>
    expect(gradient.gdl_linear_base_white_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FCFCF8);"`,
    ));
  test('gdl_linear_base_white_400', () =>
    expect(gradient.gdl_linear_base_white_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FAFAF5);"`,
    ));
  test('gdl_linear_base_white_500', () =>
    expect(gradient.gdl_linear_base_white_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#f8f8f2);"`,
    ));
  test('gdl_linear_base_white_600', () =>
    expect(gradient.gdl_linear_base_white_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#D9D9D4);"`,
    ));
  test('gdl_linear_base_white_700', () =>
    expect(gradient.gdl_linear_base_white_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#BABAB6);"`,
    ));
  test('gdl_linear_base_white_800', () =>
    expect(gradient.gdl_linear_base_white_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#9B9B97);"`,
    ));
  test('gdl_linear_base_white_900', () =>
    expect(gradient.gdl_linear_base_white_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#7C7C79);"`,
    ));
  test('gdl_linear_base_yellow_100', () =>
    expect(gradient.gdl_linear_base_yellow_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FFFFFD);"`,
    ));
  test('gdl_linear_base_yellow_200', () =>
    expect(gradient.gdl_linear_base_yellow_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FFFFD7);"`,
    ));
  test('gdl_linear_base_yellow_300', () =>
    expect(gradient.gdl_linear_base_yellow_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FFFFB7);"`,
    ));
  test('gdl_linear_base_yellow_400', () =>
    expect(gradient.gdl_linear_base_yellow_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#FDFF9E);"`,
    ));
  test('gdl_linear_base_yellow_500', () =>
    expect(gradient.gdl_linear_base_yellow_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#f1fa8c);"`,
    ));
  test('gdl_linear_base_yellow_600', () =>
    expect(gradient.gdl_linear_base_yellow_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#CCC565);"`,
    ));
  test('gdl_linear_base_yellow_700', () =>
    expect(gradient.gdl_linear_base_yellow_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#998544);"`,
    ));
  test('gdl_linear_base_yellow_800', () =>
    expect(gradient.gdl_linear_base_yellow_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#664B28);"`,
    ));
  test('gdl_linear_base_yellow_900', () =>
    expect(gradient.gdl_linear_base_yellow_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#331C11);"`,
    ));
  test('gdl_linear_brand_primary', () =>
    expect(gradient.gdl_linear_brand_primary()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#D55901);"`,
    ));
  test('gdl_linear_brand_secondary', () =>
    expect(gradient.gdl_linear_brand_secondary()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#330E00);"`,
    ));
  test('gdl_linear_dark_code_background', () =>
    expect(gradient.gdl_linear_dark_code_background()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#282a36);"`,
    ));
  test('gdl_linear_dark_code_baseColor', () =>
    expect(gradient.gdl_linear_dark_code_baseColor()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#f8f8f2);"`,
    ));
  test('gdl_linear_dark_code_builtin', () =>
    expect(gradient.gdl_linear_dark_code_builtin()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#8be9fd);"`,
    ));
  test('gdl_linear_dark_code_comment', () =>
    expect(gradient.gdl_linear_dark_code_comment()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#6272a4);"`,
    ));
  test('gdl_linear_dark_code_function', () =>
    expect(gradient.gdl_linear_dark_code_function()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#50fa7b);"`,
    ));
  test('gdl_linear_dark_code_keyword', () =>
    expect(gradient.gdl_linear_dark_code_keyword()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#ff79c6);"`,
    ));
  test('gdl_linear_dark_code_operator', () =>
    expect(gradient.gdl_linear_dark_code_operator()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#ff79c6);"`,
    ));
  test('gdl_linear_dark_code_parameter', () =>
    expect(gradient.gdl_linear_dark_code_parameter()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#ffb86c);"`,
    ));
  test('gdl_linear_dark_code_property', () =>
    expect(gradient.gdl_linear_dark_code_property()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#bd93f9);"`,
    ));
  test('gdl_linear_dark_code_punctuation', () =>
    expect(gradient.gdl_linear_dark_code_punctuation()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#f8f8f2);"`,
    ));
  test('gdl_linear_dark_code_selection', () =>
    expect(gradient.gdl_linear_dark_code_selection()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#44475a);"`,
    ));
  test('gdl_linear_dark_code_string', () =>
    expect(gradient.gdl_linear_dark_code_string()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#f1fa8c);"`,
    ));
  test('gdl_linear_dark_code_variable', () =>
    expect(gradient.gdl_linear_dark_code_variable()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#bd93f9);"`,
    ));
  test('gdl_linear_light_code_background', () =>
    expect(gradient.gdl_linear_light_code_background()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#f8f8f2);"`,
    ));
  test('gdl_linear_light_code_baseColor', () =>
    expect(gradient.gdl_linear_light_code_baseColor()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#657b83);"`,
    ));
  test('gdl_linear_light_code_builtin', () =>
    expect(gradient.gdl_linear_light_code_builtin()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#268bd2);"`,
    ));
  test('gdl_linear_light_code_comment', () =>
    expect(gradient.gdl_linear_light_code_comment()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#93a1a1);"`,
    ));
  test('gdl_linear_light_code_function', () =>
    expect(gradient.gdl_linear_light_code_function()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#b58900);"`,
    ));
  test('gdl_linear_light_code_keyword', () =>
    expect(gradient.gdl_linear_light_code_keyword()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#859900);"`,
    ));
  test('gdl_linear_light_code_operator', () =>
    expect(gradient.gdl_linear_light_code_operator()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#586e75);"`,
    ));
  test('gdl_linear_light_code_parameter', () =>
    expect(gradient.gdl_linear_light_code_parameter()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#D55901);"`,
    ));
  test('gdl_linear_light_code_property', () =>
    expect(gradient.gdl_linear_light_code_property()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#268bd2);"`,
    ));
  test('gdl_linear_light_code_punctuation', () =>
    expect(gradient.gdl_linear_light_code_punctuation()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#586e75);"`,
    ));
  test('gdl_linear_light_code_selection', () =>
    expect(gradient.gdl_linear_light_code_selection()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#073642);"`,
    ));
  test('gdl_linear_light_code_string', () =>
    expect(gradient.gdl_linear_light_code_string()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#2aa198);"`,
    ));
  test('gdl_linear_light_code_variable', () =>
    expect(gradient.gdl_linear_light_code_variable()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to left,transparent,#D55901);"`,
    ));
  test('gdr_linear_base_blue_100', () =>
    expect(gradient.gdr_linear_base_blue_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#A8DBFF);"`,
    ));
  test('gdr_linear_base_blue_200', () =>
    expect(gradient.gdr_linear_base_blue_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#7EC8FE);"`,
    ));
  test('gdr_linear_base_blue_300', () =>
    expect(gradient.gdr_linear_base_blue_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#5AB5F4);"`,
    ));
  test('gdr_linear_base_blue_400', () =>
    expect(gradient.gdr_linear_base_blue_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#3EA0E5);"`,
    ));
  test('gdr_linear_base_blue_500', () =>
    expect(gradient.gdr_linear_base_blue_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#268bd2);"`,
    ));
  test('gdr_linear_base_blue_600', () =>
    expect(gradient.gdr_linear_base_blue_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#0D72B9);"`,
    ));
  test('gdr_linear_base_blue_700', () =>
    expect(gradient.gdr_linear_base_blue_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#005898);"`,
    ));
  test('gdr_linear_base_blue_800', () =>
    expect(gradient.gdr_linear_base_blue_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#003C66);"`,
    ));
  test('gdr_linear_base_blue_900', () =>
    expect(gradient.gdr_linear_base_blue_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#001F33);"`,
    ));
  test('gdr_linear_base_green_100', () =>
    expect(gradient.gdr_linear_base_green_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#B0FFB6);"`,
    ));
  test('gdr_linear_base_green_200', () =>
    expect(gradient.gdr_linear_base_green_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#91FFA0);"`,
    ));
  test('gdr_linear_base_green_300', () =>
    expect(gradient.gdr_linear_base_green_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#77FF8F);"`,
    ));
  test('gdr_linear_base_green_400', () =>
    expect(gradient.gdr_linear_base_green_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#61FF83);"`,
    ));
  test('gdr_linear_base_green_500', () =>
    expect(gradient.gdr_linear_base_green_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#50fa7b);"`,
    ));
  test('gdr_linear_base_green_600', () =>
    expect(gradient.gdr_linear_base_green_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#2FCC5A);"`,
    ));
  test('gdr_linear_base_green_700', () =>
    expect(gradient.gdr_linear_base_green_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#17993D);"`,
    ));
  test('gdr_linear_base_green_800', () =>
    expect(gradient.gdr_linear_base_green_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#076625);"`,
    ));
  test('gdr_linear_base_green_900', () =>
    expect(gradient.gdr_linear_base_green_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#003310);"`,
    ));
  test('gdr_linear_base_grey_100', () =>
    expect(gradient.gdr_linear_base_grey_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#BDC1C9);"`,
    ));
  test('gdr_linear_base_grey_200', () =>
    expect(gradient.gdr_linear_base_grey_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#9EA2AF);"`,
    ));
  test('gdr_linear_base_grey_300', () =>
    expect(gradient.gdr_linear_base_grey_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#7F8493);"`,
    ));
  test('gdr_linear_base_grey_400', () =>
    expect(gradient.gdr_linear_base_grey_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#616577);"`,
    ));
  test('gdr_linear_base_grey_500', () =>
    expect(gradient.gdr_linear_base_grey_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#44475a);"`,
    ));
  test('gdr_linear_base_grey_600', () =>
    expect(gradient.gdr_linear_base_grey_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#34374A);"`,
    ));
  test('gdr_linear_base_grey_700', () =>
    expect(gradient.gdr_linear_base_grey_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#262839);"`,
    ));
  test('gdr_linear_base_grey_800', () =>
    expect(gradient.gdr_linear_base_grey_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#181A27);"`,
    ));
  test('gdr_linear_base_grey_900', () =>
    expect(gradient.gdr_linear_base_grey_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#0B0D14);"`,
    ));
  test('gdr_linear_base_orange_100', () =>
    expect(gradient.gdr_linear_base_orange_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FFACA8);"`,
    ));
  test('gdr_linear_base_orange_200', () =>
    expect(gradient.gdr_linear_base_orange_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FF907E);"`,
    ));
  test('gdr_linear_base_orange_300', () =>
    expect(gradient.gdr_linear_base_orange_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FB7A54);"`,
    ));
  test('gdr_linear_base_orange_400', () =>
    expect(gradient.gdr_linear_base_orange_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#EB682A);"`,
    ));
  test('gdr_linear_base_orange_500', () =>
    expect(gradient.gdr_linear_base_orange_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#D55901);"`,
    ));
  test('gdr_linear_base_orange_600', () =>
    expect(gradient.gdr_linear_base_orange_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#C04400);"`,
    ));
  test('gdr_linear_base_orange_700', () =>
    expect(gradient.gdr_linear_base_orange_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#993000);"`,
    ));
  test('gdr_linear_base_orange_800', () =>
    expect(gradient.gdr_linear_base_orange_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#661E00);"`,
    ));
  test('gdr_linear_base_orange_900', () =>
    expect(gradient.gdr_linear_base_orange_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#330E00);"`,
    ));
  test('gdr_linear_base_pink_100', () =>
    expect(gradient.gdr_linear_base_pink_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FFC2EE);"`,
    ));
  test('gdr_linear_base_pink_200', () =>
    expect(gradient.gdr_linear_base_pink_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FFAAE5);"`,
    ));
  test('gdr_linear_base_pink_300', () =>
    expect(gradient.gdr_linear_base_pink_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FF96DB);"`,
    ));
  test('gdr_linear_base_pink_400', () =>
    expect(gradient.gdr_linear_base_pink_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FF86D1);"`,
    ));
  test('gdr_linear_base_pink_500', () =>
    expect(gradient.gdr_linear_base_pink_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#ff79c6);"`,
    ));
  test('gdr_linear_base_pink_600', () =>
    expect(gradient.gdr_linear_base_pink_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#CC53A0);"`,
    ));
  test('gdr_linear_base_pink_700', () =>
    expect(gradient.gdr_linear_base_pink_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#99357A);"`,
    ));
  test('gdr_linear_base_pink_800', () =>
    expect(gradient.gdr_linear_base_pink_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#661C52);"`,
    ));
  test('gdr_linear_base_pink_900', () =>
    expect(gradient.gdr_linear_base_pink_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#330B2A);"`,
    ));
  test('gdr_linear_base_purple_100', () =>
    expect(gradient.gdr_linear_base_purple_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#DCCFFF);"`,
    ));
  test('gdr_linear_base_purple_200', () =>
    expect(gradient.gdr_linear_base_purple_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#D1BCFF);"`,
    ));
  test('gdr_linear_base_purple_300', () =>
    expect(gradient.gdr_linear_base_purple_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#C8ABFF);"`,
    ));
  test('gdr_linear_base_purple_400', () =>
    expect(gradient.gdr_linear_base_purple_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#C29EFF);"`,
    ));
  test('gdr_linear_base_purple_500', () =>
    expect(gradient.gdr_linear_base_purple_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#bd93f9);"`,
    ));
  test('gdr_linear_base_purple_600', () =>
    expect(gradient.gdr_linear_base_purple_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#956BCC);"`,
    ));
  test('gdr_linear_base_purple_700', () =>
    expect(gradient.gdr_linear_base_purple_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#6F4999);"`,
    ));
  test('gdr_linear_base_purple_800', () =>
    expect(gradient.gdr_linear_base_purple_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#492C66);"`,
    ));
  test('gdr_linear_base_purple_900', () =>
    expect(gradient.gdr_linear_base_purple_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#241333);"`,
    ));
  test('gdr_linear_base_sand_100', () =>
    expect(gradient.gdr_linear_base_sand_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FFF1D3);"`,
    ));
  test('gdr_linear_base_sand_200', () =>
    expect(gradient.gdr_linear_base_sand_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FFE3AE);"`,
    ));
  test('gdr_linear_base_sand_300', () =>
    expect(gradient.gdr_linear_base_sand_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FFD591);"`,
    ));
  test('gdr_linear_base_sand_400', () =>
    expect(gradient.gdr_linear_base_sand_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FFC77B);"`,
    ));
  test('gdr_linear_base_sand_500', () =>
    expect(gradient.gdr_linear_base_sand_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#ffb86c);"`,
    ));
  test('gdr_linear_base_sand_600', () =>
    expect(gradient.gdr_linear_base_sand_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#CC9448);"`,
    ));
  test('gdr_linear_base_sand_700', () =>
    expect(gradient.gdr_linear_base_sand_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#996F2B);"`,
    ));
  test('gdr_linear_base_sand_800', () =>
    expect(gradient.gdr_linear_base_sand_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#664A15);"`,
    ));
  test('gdr_linear_base_sand_900', () =>
    expect(gradient.gdr_linear_base_sand_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#332507);"`,
    ));
  test('gdr_linear_base_sky_100', () =>
    expect(gradient.gdr_linear_base_sky_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#CBFFFF);"`,
    ));
  test('gdr_linear_base_sky_200', () =>
    expect(gradient.gdr_linear_base_sky_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#B6FFFF);"`,
    ));
  test('gdr_linear_base_sky_300', () =>
    expect(gradient.gdr_linear_base_sky_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#A5FFFF);"`,
    ));
  test('gdr_linear_base_sky_400', () =>
    expect(gradient.gdr_linear_base_sky_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#96F7FF);"`,
    ));
  test('gdr_linear_base_sky_500', () =>
    expect(gradient.gdr_linear_base_sky_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#8be9fd);"`,
    ));
  test('gdr_linear_base_sky_600', () =>
    expect(gradient.gdr_linear_base_sky_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#64C2CC);"`,
    ));
  test('gdr_linear_base_sky_700', () =>
    expect(gradient.gdr_linear_base_sky_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#429799);"`,
    ));
  test('gdr_linear_base_sky_800', () =>
    expect(gradient.gdr_linear_base_sky_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#276666);"`,
    ));
  test('gdr_linear_base_sky_900', () =>
    expect(gradient.gdr_linear_base_sky_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#103333);"`,
    ));
  test('gdr_linear_base_white_100', () =>
    expect(gradient.gdr_linear_base_white_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FFFFFF);"`,
    ));
  test('gdr_linear_base_white_200', () =>
    expect(gradient.gdr_linear_base_white_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FEFEFB);"`,
    ));
  test('gdr_linear_base_white_300', () =>
    expect(gradient.gdr_linear_base_white_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FCFCF8);"`,
    ));
  test('gdr_linear_base_white_400', () =>
    expect(gradient.gdr_linear_base_white_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FAFAF5);"`,
    ));
  test('gdr_linear_base_white_500', () =>
    expect(gradient.gdr_linear_base_white_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#f8f8f2);"`,
    ));
  test('gdr_linear_base_white_600', () =>
    expect(gradient.gdr_linear_base_white_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#D9D9D4);"`,
    ));
  test('gdr_linear_base_white_700', () =>
    expect(gradient.gdr_linear_base_white_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#BABAB6);"`,
    ));
  test('gdr_linear_base_white_800', () =>
    expect(gradient.gdr_linear_base_white_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#9B9B97);"`,
    ));
  test('gdr_linear_base_white_900', () =>
    expect(gradient.gdr_linear_base_white_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#7C7C79);"`,
    ));
  test('gdr_linear_base_yellow_100', () =>
    expect(gradient.gdr_linear_base_yellow_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FFFFFD);"`,
    ));
  test('gdr_linear_base_yellow_200', () =>
    expect(gradient.gdr_linear_base_yellow_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FFFFD7);"`,
    ));
  test('gdr_linear_base_yellow_300', () =>
    expect(gradient.gdr_linear_base_yellow_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FFFFB7);"`,
    ));
  test('gdr_linear_base_yellow_400', () =>
    expect(gradient.gdr_linear_base_yellow_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#FDFF9E);"`,
    ));
  test('gdr_linear_base_yellow_500', () =>
    expect(gradient.gdr_linear_base_yellow_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#f1fa8c);"`,
    ));
  test('gdr_linear_base_yellow_600', () =>
    expect(gradient.gdr_linear_base_yellow_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#CCC565);"`,
    ));
  test('gdr_linear_base_yellow_700', () =>
    expect(gradient.gdr_linear_base_yellow_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#998544);"`,
    ));
  test('gdr_linear_base_yellow_800', () =>
    expect(gradient.gdr_linear_base_yellow_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#664B28);"`,
    ));
  test('gdr_linear_base_yellow_900', () =>
    expect(gradient.gdr_linear_base_yellow_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#331C11);"`,
    ));
  test('gdr_linear_brand_primary', () =>
    expect(gradient.gdr_linear_brand_primary()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#D55901);"`,
    ));
  test('gdr_linear_brand_secondary', () =>
    expect(gradient.gdr_linear_brand_secondary()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#330E00);"`,
    ));
  test('gdr_linear_dark_code_background', () =>
    expect(gradient.gdr_linear_dark_code_background()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#282a36);"`,
    ));
  test('gdr_linear_dark_code_baseColor', () =>
    expect(gradient.gdr_linear_dark_code_baseColor()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#f8f8f2);"`,
    ));
  test('gdr_linear_dark_code_builtin', () =>
    expect(gradient.gdr_linear_dark_code_builtin()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#8be9fd);"`,
    ));
  test('gdr_linear_dark_code_comment', () =>
    expect(gradient.gdr_linear_dark_code_comment()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#6272a4);"`,
    ));
  test('gdr_linear_dark_code_function', () =>
    expect(gradient.gdr_linear_dark_code_function()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#50fa7b);"`,
    ));
  test('gdr_linear_dark_code_keyword', () =>
    expect(gradient.gdr_linear_dark_code_keyword()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#ff79c6);"`,
    ));
  test('gdr_linear_dark_code_operator', () =>
    expect(gradient.gdr_linear_dark_code_operator()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#ff79c6);"`,
    ));
  test('gdr_linear_dark_code_parameter', () =>
    expect(gradient.gdr_linear_dark_code_parameter()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#ffb86c);"`,
    ));
  test('gdr_linear_dark_code_property', () =>
    expect(gradient.gdr_linear_dark_code_property()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#bd93f9);"`,
    ));
  test('gdr_linear_dark_code_punctuation', () =>
    expect(gradient.gdr_linear_dark_code_punctuation()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#f8f8f2);"`,
    ));
  test('gdr_linear_dark_code_selection', () =>
    expect(gradient.gdr_linear_dark_code_selection()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#44475a);"`,
    ));
  test('gdr_linear_dark_code_string', () =>
    expect(gradient.gdr_linear_dark_code_string()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#f1fa8c);"`,
    ));
  test('gdr_linear_dark_code_variable', () =>
    expect(gradient.gdr_linear_dark_code_variable()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#bd93f9);"`,
    ));
  test('gdr_linear_light_code_background', () =>
    expect(gradient.gdr_linear_light_code_background()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#f8f8f2);"`,
    ));
  test('gdr_linear_light_code_baseColor', () =>
    expect(gradient.gdr_linear_light_code_baseColor()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#657b83);"`,
    ));
  test('gdr_linear_light_code_builtin', () =>
    expect(gradient.gdr_linear_light_code_builtin()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#268bd2);"`,
    ));
  test('gdr_linear_light_code_comment', () =>
    expect(gradient.gdr_linear_light_code_comment()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#93a1a1);"`,
    ));
  test('gdr_linear_light_code_function', () =>
    expect(gradient.gdr_linear_light_code_function()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#b58900);"`,
    ));
  test('gdr_linear_light_code_keyword', () =>
    expect(gradient.gdr_linear_light_code_keyword()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#859900);"`,
    ));
  test('gdr_linear_light_code_operator', () =>
    expect(gradient.gdr_linear_light_code_operator()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#586e75);"`,
    ));
  test('gdr_linear_light_code_parameter', () =>
    expect(gradient.gdr_linear_light_code_parameter()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#D55901);"`,
    ));
  test('gdr_linear_light_code_property', () =>
    expect(gradient.gdr_linear_light_code_property()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#268bd2);"`,
    ));
  test('gdr_linear_light_code_punctuation', () =>
    expect(gradient.gdr_linear_light_code_punctuation()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#586e75);"`,
    ));
  test('gdr_linear_light_code_selection', () =>
    expect(gradient.gdr_linear_light_code_selection()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#073642);"`,
    ));
  test('gdr_linear_light_code_string', () =>
    expect(gradient.gdr_linear_light_code_string()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#2aa198);"`,
    ));
  test('gdr_linear_light_code_variable', () =>
    expect(gradient.gdr_linear_light_code_variable()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,transparent,#D55901);"`,
    ));
  test('gdt_linear_base_blue_100', () =>
    expect(gradient.gdt_linear_base_blue_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#A8DBFF);"`,
    ));
  test('gdt_linear_base_blue_200', () =>
    expect(gradient.gdt_linear_base_blue_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#7EC8FE);"`,
    ));
  test('gdt_linear_base_blue_300', () =>
    expect(gradient.gdt_linear_base_blue_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#5AB5F4);"`,
    ));
  test('gdt_linear_base_blue_400', () =>
    expect(gradient.gdt_linear_base_blue_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#3EA0E5);"`,
    ));
  test('gdt_linear_base_blue_500', () =>
    expect(gradient.gdt_linear_base_blue_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#268bd2);"`,
    ));
  test('gdt_linear_base_blue_600', () =>
    expect(gradient.gdt_linear_base_blue_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#0D72B9);"`,
    ));
  test('gdt_linear_base_blue_700', () =>
    expect(gradient.gdt_linear_base_blue_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#005898);"`,
    ));
  test('gdt_linear_base_blue_800', () =>
    expect(gradient.gdt_linear_base_blue_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#003C66);"`,
    ));
  test('gdt_linear_base_blue_900', () =>
    expect(gradient.gdt_linear_base_blue_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#001F33);"`,
    ));
  test('gdt_linear_base_green_100', () =>
    expect(gradient.gdt_linear_base_green_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#B0FFB6);"`,
    ));
  test('gdt_linear_base_green_200', () =>
    expect(gradient.gdt_linear_base_green_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#91FFA0);"`,
    ));
  test('gdt_linear_base_green_300', () =>
    expect(gradient.gdt_linear_base_green_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#77FF8F);"`,
    ));
  test('gdt_linear_base_green_400', () =>
    expect(gradient.gdt_linear_base_green_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#61FF83);"`,
    ));
  test('gdt_linear_base_green_500', () =>
    expect(gradient.gdt_linear_base_green_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#50fa7b);"`,
    ));
  test('gdt_linear_base_green_600', () =>
    expect(gradient.gdt_linear_base_green_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#2FCC5A);"`,
    ));
  test('gdt_linear_base_green_700', () =>
    expect(gradient.gdt_linear_base_green_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#17993D);"`,
    ));
  test('gdt_linear_base_green_800', () =>
    expect(gradient.gdt_linear_base_green_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#076625);"`,
    ));
  test('gdt_linear_base_green_900', () =>
    expect(gradient.gdt_linear_base_green_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#003310);"`,
    ));
  test('gdt_linear_base_grey_100', () =>
    expect(gradient.gdt_linear_base_grey_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#BDC1C9);"`,
    ));
  test('gdt_linear_base_grey_200', () =>
    expect(gradient.gdt_linear_base_grey_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#9EA2AF);"`,
    ));
  test('gdt_linear_base_grey_300', () =>
    expect(gradient.gdt_linear_base_grey_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#7F8493);"`,
    ));
  test('gdt_linear_base_grey_400', () =>
    expect(gradient.gdt_linear_base_grey_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#616577);"`,
    ));
  test('gdt_linear_base_grey_500', () =>
    expect(gradient.gdt_linear_base_grey_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#44475a);"`,
    ));
  test('gdt_linear_base_grey_600', () =>
    expect(gradient.gdt_linear_base_grey_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#34374A);"`,
    ));
  test('gdt_linear_base_grey_700', () =>
    expect(gradient.gdt_linear_base_grey_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#262839);"`,
    ));
  test('gdt_linear_base_grey_800', () =>
    expect(gradient.gdt_linear_base_grey_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#181A27);"`,
    ));
  test('gdt_linear_base_grey_900', () =>
    expect(gradient.gdt_linear_base_grey_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#0B0D14);"`,
    ));
  test('gdt_linear_base_orange_100', () =>
    expect(gradient.gdt_linear_base_orange_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FFACA8);"`,
    ));
  test('gdt_linear_base_orange_200', () =>
    expect(gradient.gdt_linear_base_orange_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FF907E);"`,
    ));
  test('gdt_linear_base_orange_300', () =>
    expect(gradient.gdt_linear_base_orange_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FB7A54);"`,
    ));
  test('gdt_linear_base_orange_400', () =>
    expect(gradient.gdt_linear_base_orange_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#EB682A);"`,
    ));
  test('gdt_linear_base_orange_500', () =>
    expect(gradient.gdt_linear_base_orange_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#D55901);"`,
    ));
  test('gdt_linear_base_orange_600', () =>
    expect(gradient.gdt_linear_base_orange_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#C04400);"`,
    ));
  test('gdt_linear_base_orange_700', () =>
    expect(gradient.gdt_linear_base_orange_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#993000);"`,
    ));
  test('gdt_linear_base_orange_800', () =>
    expect(gradient.gdt_linear_base_orange_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#661E00);"`,
    ));
  test('gdt_linear_base_orange_900', () =>
    expect(gradient.gdt_linear_base_orange_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#330E00);"`,
    ));
  test('gdt_linear_base_pink_100', () =>
    expect(gradient.gdt_linear_base_pink_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FFC2EE);"`,
    ));
  test('gdt_linear_base_pink_200', () =>
    expect(gradient.gdt_linear_base_pink_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FFAAE5);"`,
    ));
  test('gdt_linear_base_pink_300', () =>
    expect(gradient.gdt_linear_base_pink_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FF96DB);"`,
    ));
  test('gdt_linear_base_pink_400', () =>
    expect(gradient.gdt_linear_base_pink_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FF86D1);"`,
    ));
  test('gdt_linear_base_pink_500', () =>
    expect(gradient.gdt_linear_base_pink_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#ff79c6);"`,
    ));
  test('gdt_linear_base_pink_600', () =>
    expect(gradient.gdt_linear_base_pink_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#CC53A0);"`,
    ));
  test('gdt_linear_base_pink_700', () =>
    expect(gradient.gdt_linear_base_pink_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#99357A);"`,
    ));
  test('gdt_linear_base_pink_800', () =>
    expect(gradient.gdt_linear_base_pink_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#661C52);"`,
    ));
  test('gdt_linear_base_pink_900', () =>
    expect(gradient.gdt_linear_base_pink_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#330B2A);"`,
    ));
  test('gdt_linear_base_purple_100', () =>
    expect(gradient.gdt_linear_base_purple_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#DCCFFF);"`,
    ));
  test('gdt_linear_base_purple_200', () =>
    expect(gradient.gdt_linear_base_purple_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#D1BCFF);"`,
    ));
  test('gdt_linear_base_purple_300', () =>
    expect(gradient.gdt_linear_base_purple_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#C8ABFF);"`,
    ));
  test('gdt_linear_base_purple_400', () =>
    expect(gradient.gdt_linear_base_purple_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#C29EFF);"`,
    ));
  test('gdt_linear_base_purple_500', () =>
    expect(gradient.gdt_linear_base_purple_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#bd93f9);"`,
    ));
  test('gdt_linear_base_purple_600', () =>
    expect(gradient.gdt_linear_base_purple_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#956BCC);"`,
    ));
  test('gdt_linear_base_purple_700', () =>
    expect(gradient.gdt_linear_base_purple_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#6F4999);"`,
    ));
  test('gdt_linear_base_purple_800', () =>
    expect(gradient.gdt_linear_base_purple_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#492C66);"`,
    ));
  test('gdt_linear_base_purple_900', () =>
    expect(gradient.gdt_linear_base_purple_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#241333);"`,
    ));
  test('gdt_linear_base_sand_100', () =>
    expect(gradient.gdt_linear_base_sand_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FFF1D3);"`,
    ));
  test('gdt_linear_base_sand_200', () =>
    expect(gradient.gdt_linear_base_sand_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FFE3AE);"`,
    ));
  test('gdt_linear_base_sand_300', () =>
    expect(gradient.gdt_linear_base_sand_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FFD591);"`,
    ));
  test('gdt_linear_base_sand_400', () =>
    expect(gradient.gdt_linear_base_sand_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FFC77B);"`,
    ));
  test('gdt_linear_base_sand_500', () =>
    expect(gradient.gdt_linear_base_sand_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#ffb86c);"`,
    ));
  test('gdt_linear_base_sand_600', () =>
    expect(gradient.gdt_linear_base_sand_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#CC9448);"`,
    ));
  test('gdt_linear_base_sand_700', () =>
    expect(gradient.gdt_linear_base_sand_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#996F2B);"`,
    ));
  test('gdt_linear_base_sand_800', () =>
    expect(gradient.gdt_linear_base_sand_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#664A15);"`,
    ));
  test('gdt_linear_base_sand_900', () =>
    expect(gradient.gdt_linear_base_sand_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#332507);"`,
    ));
  test('gdt_linear_base_sky_100', () =>
    expect(gradient.gdt_linear_base_sky_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#CBFFFF);"`,
    ));
  test('gdt_linear_base_sky_200', () =>
    expect(gradient.gdt_linear_base_sky_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#B6FFFF);"`,
    ));
  test('gdt_linear_base_sky_300', () =>
    expect(gradient.gdt_linear_base_sky_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#A5FFFF);"`,
    ));
  test('gdt_linear_base_sky_400', () =>
    expect(gradient.gdt_linear_base_sky_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#96F7FF);"`,
    ));
  test('gdt_linear_base_sky_500', () =>
    expect(gradient.gdt_linear_base_sky_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#8be9fd);"`,
    ));
  test('gdt_linear_base_sky_600', () =>
    expect(gradient.gdt_linear_base_sky_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#64C2CC);"`,
    ));
  test('gdt_linear_base_sky_700', () =>
    expect(gradient.gdt_linear_base_sky_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#429799);"`,
    ));
  test('gdt_linear_base_sky_800', () =>
    expect(gradient.gdt_linear_base_sky_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#276666);"`,
    ));
  test('gdt_linear_base_sky_900', () =>
    expect(gradient.gdt_linear_base_sky_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#103333);"`,
    ));
  test('gdt_linear_base_white_100', () =>
    expect(gradient.gdt_linear_base_white_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FFFFFF);"`,
    ));
  test('gdt_linear_base_white_200', () =>
    expect(gradient.gdt_linear_base_white_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FEFEFB);"`,
    ));
  test('gdt_linear_base_white_300', () =>
    expect(gradient.gdt_linear_base_white_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FCFCF8);"`,
    ));
  test('gdt_linear_base_white_400', () =>
    expect(gradient.gdt_linear_base_white_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FAFAF5);"`,
    ));
  test('gdt_linear_base_white_500', () =>
    expect(gradient.gdt_linear_base_white_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#f8f8f2);"`,
    ));
  test('gdt_linear_base_white_600', () =>
    expect(gradient.gdt_linear_base_white_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#D9D9D4);"`,
    ));
  test('gdt_linear_base_white_700', () =>
    expect(gradient.gdt_linear_base_white_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#BABAB6);"`,
    ));
  test('gdt_linear_base_white_800', () =>
    expect(gradient.gdt_linear_base_white_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#9B9B97);"`,
    ));
  test('gdt_linear_base_white_900', () =>
    expect(gradient.gdt_linear_base_white_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#7C7C79);"`,
    ));
  test('gdt_linear_base_yellow_100', () =>
    expect(gradient.gdt_linear_base_yellow_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FFFFFD);"`,
    ));
  test('gdt_linear_base_yellow_200', () =>
    expect(gradient.gdt_linear_base_yellow_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FFFFD7);"`,
    ));
  test('gdt_linear_base_yellow_300', () =>
    expect(gradient.gdt_linear_base_yellow_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FFFFB7);"`,
    ));
  test('gdt_linear_base_yellow_400', () =>
    expect(gradient.gdt_linear_base_yellow_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#FDFF9E);"`,
    ));
  test('gdt_linear_base_yellow_500', () =>
    expect(gradient.gdt_linear_base_yellow_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#f1fa8c);"`,
    ));
  test('gdt_linear_base_yellow_600', () =>
    expect(gradient.gdt_linear_base_yellow_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#CCC565);"`,
    ));
  test('gdt_linear_base_yellow_700', () =>
    expect(gradient.gdt_linear_base_yellow_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#998544);"`,
    ));
  test('gdt_linear_base_yellow_800', () =>
    expect(gradient.gdt_linear_base_yellow_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#664B28);"`,
    ));
  test('gdt_linear_base_yellow_900', () =>
    expect(gradient.gdt_linear_base_yellow_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#331C11);"`,
    ));
  test('gdt_linear_brand_primary', () =>
    expect(gradient.gdt_linear_brand_primary()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#D55901);"`,
    ));
  test('gdt_linear_brand_secondary', () =>
    expect(gradient.gdt_linear_brand_secondary()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#330E00);"`,
    ));
  test('gdt_linear_dark_code_background', () =>
    expect(gradient.gdt_linear_dark_code_background()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#282a36);"`,
    ));
  test('gdt_linear_dark_code_baseColor', () =>
    expect(gradient.gdt_linear_dark_code_baseColor()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#f8f8f2);"`,
    ));
  test('gdt_linear_dark_code_builtin', () =>
    expect(gradient.gdt_linear_dark_code_builtin()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#8be9fd);"`,
    ));
  test('gdt_linear_dark_code_comment', () =>
    expect(gradient.gdt_linear_dark_code_comment()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#6272a4);"`,
    ));
  test('gdt_linear_dark_code_function', () =>
    expect(gradient.gdt_linear_dark_code_function()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#50fa7b);"`,
    ));
  test('gdt_linear_dark_code_keyword', () =>
    expect(gradient.gdt_linear_dark_code_keyword()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#ff79c6);"`,
    ));
  test('gdt_linear_dark_code_operator', () =>
    expect(gradient.gdt_linear_dark_code_operator()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#ff79c6);"`,
    ));
  test('gdt_linear_dark_code_parameter', () =>
    expect(gradient.gdt_linear_dark_code_parameter()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#ffb86c);"`,
    ));
  test('gdt_linear_dark_code_property', () =>
    expect(gradient.gdt_linear_dark_code_property()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#bd93f9);"`,
    ));
  test('gdt_linear_dark_code_punctuation', () =>
    expect(gradient.gdt_linear_dark_code_punctuation()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#f8f8f2);"`,
    ));
  test('gdt_linear_dark_code_selection', () =>
    expect(gradient.gdt_linear_dark_code_selection()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#44475a);"`,
    ));
  test('gdt_linear_dark_code_string', () =>
    expect(gradient.gdt_linear_dark_code_string()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#f1fa8c);"`,
    ));
  test('gdt_linear_dark_code_variable', () =>
    expect(gradient.gdt_linear_dark_code_variable()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#bd93f9);"`,
    ));
  test('gdt_linear_light_code_background', () =>
    expect(gradient.gdt_linear_light_code_background()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#f8f8f2);"`,
    ));
  test('gdt_linear_light_code_baseColor', () =>
    expect(gradient.gdt_linear_light_code_baseColor()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#657b83);"`,
    ));
  test('gdt_linear_light_code_builtin', () =>
    expect(gradient.gdt_linear_light_code_builtin()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#268bd2);"`,
    ));
  test('gdt_linear_light_code_comment', () =>
    expect(gradient.gdt_linear_light_code_comment()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#93a1a1);"`,
    ));
  test('gdt_linear_light_code_function', () =>
    expect(gradient.gdt_linear_light_code_function()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#b58900);"`,
    ));
  test('gdt_linear_light_code_keyword', () =>
    expect(gradient.gdt_linear_light_code_keyword()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#859900);"`,
    ));
  test('gdt_linear_light_code_operator', () =>
    expect(gradient.gdt_linear_light_code_operator()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#586e75);"`,
    ));
  test('gdt_linear_light_code_parameter', () =>
    expect(gradient.gdt_linear_light_code_parameter()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#D55901);"`,
    ));
  test('gdt_linear_light_code_property', () =>
    expect(gradient.gdt_linear_light_code_property()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#268bd2);"`,
    ));
  test('gdt_linear_light_code_punctuation', () =>
    expect(gradient.gdt_linear_light_code_punctuation()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#586e75);"`,
    ));
  test('gdt_linear_light_code_selection', () =>
    expect(gradient.gdt_linear_light_code_selection()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#073642);"`,
    ));
  test('gdt_linear_light_code_string', () =>
    expect(gradient.gdt_linear_light_code_string()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#2aa198);"`,
    ));
  test('gdt_linear_light_code_variable', () =>
    expect(gradient.gdt_linear_light_code_variable()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,transparent,#D55901);"`,
    ));
  test('gdx_linear_base_blue_100', () =>
    expect(gradient.gdx_linear_base_blue_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#A8DBFF,transparent,#A8DBFF);"`,
    ));
  test('gdx_linear_base_blue_200', () =>
    expect(gradient.gdx_linear_base_blue_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#7EC8FE,transparent,#7EC8FE);"`,
    ));
  test('gdx_linear_base_blue_300', () =>
    expect(gradient.gdx_linear_base_blue_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#5AB5F4,transparent,#5AB5F4);"`,
    ));
  test('gdx_linear_base_blue_400', () =>
    expect(gradient.gdx_linear_base_blue_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#3EA0E5,transparent,#3EA0E5);"`,
    ));
  test('gdx_linear_base_blue_500', () =>
    expect(gradient.gdx_linear_base_blue_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#268bd2,transparent,#268bd2);"`,
    ));
  test('gdx_linear_base_blue_600', () =>
    expect(gradient.gdx_linear_base_blue_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#0D72B9,transparent,#0D72B9);"`,
    ));
  test('gdx_linear_base_blue_700', () =>
    expect(gradient.gdx_linear_base_blue_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#005898,transparent,#005898);"`,
    ));
  test('gdx_linear_base_blue_800', () =>
    expect(gradient.gdx_linear_base_blue_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#003C66,transparent,#003C66);"`,
    ));
  test('gdx_linear_base_blue_900', () =>
    expect(gradient.gdx_linear_base_blue_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#001F33,transparent,#001F33);"`,
    ));
  test('gdx_linear_base_green_100', () =>
    expect(gradient.gdx_linear_base_green_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#B0FFB6,transparent,#B0FFB6);"`,
    ));
  test('gdx_linear_base_green_200', () =>
    expect(gradient.gdx_linear_base_green_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#91FFA0,transparent,#91FFA0);"`,
    ));
  test('gdx_linear_base_green_300', () =>
    expect(gradient.gdx_linear_base_green_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#77FF8F,transparent,#77FF8F);"`,
    ));
  test('gdx_linear_base_green_400', () =>
    expect(gradient.gdx_linear_base_green_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#61FF83,transparent,#61FF83);"`,
    ));
  test('gdx_linear_base_green_500', () =>
    expect(gradient.gdx_linear_base_green_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#50fa7b,transparent,#50fa7b);"`,
    ));
  test('gdx_linear_base_green_600', () =>
    expect(gradient.gdx_linear_base_green_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#2FCC5A,transparent,#2FCC5A);"`,
    ));
  test('gdx_linear_base_green_700', () =>
    expect(gradient.gdx_linear_base_green_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#17993D,transparent,#17993D);"`,
    ));
  test('gdx_linear_base_green_800', () =>
    expect(gradient.gdx_linear_base_green_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#076625,transparent,#076625);"`,
    ));
  test('gdx_linear_base_green_900', () =>
    expect(gradient.gdx_linear_base_green_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#003310,transparent,#003310);"`,
    ));
  test('gdx_linear_base_grey_100', () =>
    expect(gradient.gdx_linear_base_grey_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#BDC1C9,transparent,#BDC1C9);"`,
    ));
  test('gdx_linear_base_grey_200', () =>
    expect(gradient.gdx_linear_base_grey_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#9EA2AF,transparent,#9EA2AF);"`,
    ));
  test('gdx_linear_base_grey_300', () =>
    expect(gradient.gdx_linear_base_grey_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#7F8493,transparent,#7F8493);"`,
    ));
  test('gdx_linear_base_grey_400', () =>
    expect(gradient.gdx_linear_base_grey_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#616577,transparent,#616577);"`,
    ));
  test('gdx_linear_base_grey_500', () =>
    expect(gradient.gdx_linear_base_grey_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#44475a,transparent,#44475a);"`,
    ));
  test('gdx_linear_base_grey_600', () =>
    expect(gradient.gdx_linear_base_grey_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#34374A,transparent,#34374A);"`,
    ));
  test('gdx_linear_base_grey_700', () =>
    expect(gradient.gdx_linear_base_grey_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#262839,transparent,#262839);"`,
    ));
  test('gdx_linear_base_grey_800', () =>
    expect(gradient.gdx_linear_base_grey_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#181A27,transparent,#181A27);"`,
    ));
  test('gdx_linear_base_grey_900', () =>
    expect(gradient.gdx_linear_base_grey_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#0B0D14,transparent,#0B0D14);"`,
    ));
  test('gdx_linear_base_orange_100', () =>
    expect(gradient.gdx_linear_base_orange_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FFACA8,transparent,#FFACA8);"`,
    ));
  test('gdx_linear_base_orange_200', () =>
    expect(gradient.gdx_linear_base_orange_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FF907E,transparent,#FF907E);"`,
    ));
  test('gdx_linear_base_orange_300', () =>
    expect(gradient.gdx_linear_base_orange_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FB7A54,transparent,#FB7A54);"`,
    ));
  test('gdx_linear_base_orange_400', () =>
    expect(gradient.gdx_linear_base_orange_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#EB682A,transparent,#EB682A);"`,
    ));
  test('gdx_linear_base_orange_500', () =>
    expect(gradient.gdx_linear_base_orange_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#D55901,transparent,#D55901);"`,
    ));
  test('gdx_linear_base_orange_600', () =>
    expect(gradient.gdx_linear_base_orange_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#C04400,transparent,#C04400);"`,
    ));
  test('gdx_linear_base_orange_700', () =>
    expect(gradient.gdx_linear_base_orange_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#993000,transparent,#993000);"`,
    ));
  test('gdx_linear_base_orange_800', () =>
    expect(gradient.gdx_linear_base_orange_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#661E00,transparent,#661E00);"`,
    ));
  test('gdx_linear_base_orange_900', () =>
    expect(gradient.gdx_linear_base_orange_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#330E00,transparent,#330E00);"`,
    ));
  test('gdx_linear_base_pink_100', () =>
    expect(gradient.gdx_linear_base_pink_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FFC2EE,transparent,#FFC2EE);"`,
    ));
  test('gdx_linear_base_pink_200', () =>
    expect(gradient.gdx_linear_base_pink_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FFAAE5,transparent,#FFAAE5);"`,
    ));
  test('gdx_linear_base_pink_300', () =>
    expect(gradient.gdx_linear_base_pink_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FF96DB,transparent,#FF96DB);"`,
    ));
  test('gdx_linear_base_pink_400', () =>
    expect(gradient.gdx_linear_base_pink_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FF86D1,transparent,#FF86D1);"`,
    ));
  test('gdx_linear_base_pink_500', () =>
    expect(gradient.gdx_linear_base_pink_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#ff79c6,transparent,#ff79c6);"`,
    ));
  test('gdx_linear_base_pink_600', () =>
    expect(gradient.gdx_linear_base_pink_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#CC53A0,transparent,#CC53A0);"`,
    ));
  test('gdx_linear_base_pink_700', () =>
    expect(gradient.gdx_linear_base_pink_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#99357A,transparent,#99357A);"`,
    ));
  test('gdx_linear_base_pink_800', () =>
    expect(gradient.gdx_linear_base_pink_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#661C52,transparent,#661C52);"`,
    ));
  test('gdx_linear_base_pink_900', () =>
    expect(gradient.gdx_linear_base_pink_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#330B2A,transparent,#330B2A);"`,
    ));
  test('gdx_linear_base_purple_100', () =>
    expect(gradient.gdx_linear_base_purple_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#DCCFFF,transparent,#DCCFFF);"`,
    ));
  test('gdx_linear_base_purple_200', () =>
    expect(gradient.gdx_linear_base_purple_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#D1BCFF,transparent,#D1BCFF);"`,
    ));
  test('gdx_linear_base_purple_300', () =>
    expect(gradient.gdx_linear_base_purple_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#C8ABFF,transparent,#C8ABFF);"`,
    ));
  test('gdx_linear_base_purple_400', () =>
    expect(gradient.gdx_linear_base_purple_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#C29EFF,transparent,#C29EFF);"`,
    ));
  test('gdx_linear_base_purple_500', () =>
    expect(gradient.gdx_linear_base_purple_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#bd93f9,transparent,#bd93f9);"`,
    ));
  test('gdx_linear_base_purple_600', () =>
    expect(gradient.gdx_linear_base_purple_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#956BCC,transparent,#956BCC);"`,
    ));
  test('gdx_linear_base_purple_700', () =>
    expect(gradient.gdx_linear_base_purple_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#6F4999,transparent,#6F4999);"`,
    ));
  test('gdx_linear_base_purple_800', () =>
    expect(gradient.gdx_linear_base_purple_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#492C66,transparent,#492C66);"`,
    ));
  test('gdx_linear_base_purple_900', () =>
    expect(gradient.gdx_linear_base_purple_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#241333,transparent,#241333);"`,
    ));
  test('gdx_linear_base_sand_100', () =>
    expect(gradient.gdx_linear_base_sand_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FFF1D3,transparent,#FFF1D3);"`,
    ));
  test('gdx_linear_base_sand_200', () =>
    expect(gradient.gdx_linear_base_sand_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FFE3AE,transparent,#FFE3AE);"`,
    ));
  test('gdx_linear_base_sand_300', () =>
    expect(gradient.gdx_linear_base_sand_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FFD591,transparent,#FFD591);"`,
    ));
  test('gdx_linear_base_sand_400', () =>
    expect(gradient.gdx_linear_base_sand_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FFC77B,transparent,#FFC77B);"`,
    ));
  test('gdx_linear_base_sand_500', () =>
    expect(gradient.gdx_linear_base_sand_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#ffb86c,transparent,#ffb86c);"`,
    ));
  test('gdx_linear_base_sand_600', () =>
    expect(gradient.gdx_linear_base_sand_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#CC9448,transparent,#CC9448);"`,
    ));
  test('gdx_linear_base_sand_700', () =>
    expect(gradient.gdx_linear_base_sand_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#996F2B,transparent,#996F2B);"`,
    ));
  test('gdx_linear_base_sand_800', () =>
    expect(gradient.gdx_linear_base_sand_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#664A15,transparent,#664A15);"`,
    ));
  test('gdx_linear_base_sand_900', () =>
    expect(gradient.gdx_linear_base_sand_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#332507,transparent,#332507);"`,
    ));
  test('gdx_linear_base_sky_100', () =>
    expect(gradient.gdx_linear_base_sky_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#CBFFFF,transparent,#CBFFFF);"`,
    ));
  test('gdx_linear_base_sky_200', () =>
    expect(gradient.gdx_linear_base_sky_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#B6FFFF,transparent,#B6FFFF);"`,
    ));
  test('gdx_linear_base_sky_300', () =>
    expect(gradient.gdx_linear_base_sky_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#A5FFFF,transparent,#A5FFFF);"`,
    ));
  test('gdx_linear_base_sky_400', () =>
    expect(gradient.gdx_linear_base_sky_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#96F7FF,transparent,#96F7FF);"`,
    ));
  test('gdx_linear_base_sky_500', () =>
    expect(gradient.gdx_linear_base_sky_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#8be9fd,transparent,#8be9fd);"`,
    ));
  test('gdx_linear_base_sky_600', () =>
    expect(gradient.gdx_linear_base_sky_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#64C2CC,transparent,#64C2CC);"`,
    ));
  test('gdx_linear_base_sky_700', () =>
    expect(gradient.gdx_linear_base_sky_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#429799,transparent,#429799);"`,
    ));
  test('gdx_linear_base_sky_800', () =>
    expect(gradient.gdx_linear_base_sky_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#276666,transparent,#276666);"`,
    ));
  test('gdx_linear_base_sky_900', () =>
    expect(gradient.gdx_linear_base_sky_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#103333,transparent,#103333);"`,
    ));
  test('gdx_linear_base_white_100', () =>
    expect(gradient.gdx_linear_base_white_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FFFFFF,transparent,#FFFFFF);"`,
    ));
  test('gdx_linear_base_white_200', () =>
    expect(gradient.gdx_linear_base_white_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FEFEFB,transparent,#FEFEFB);"`,
    ));
  test('gdx_linear_base_white_300', () =>
    expect(gradient.gdx_linear_base_white_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FCFCF8,transparent,#FCFCF8);"`,
    ));
  test('gdx_linear_base_white_400', () =>
    expect(gradient.gdx_linear_base_white_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FAFAF5,transparent,#FAFAF5);"`,
    ));
  test('gdx_linear_base_white_500', () =>
    expect(gradient.gdx_linear_base_white_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#f8f8f2,transparent,#f8f8f2);"`,
    ));
  test('gdx_linear_base_white_600', () =>
    expect(gradient.gdx_linear_base_white_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#D9D9D4,transparent,#D9D9D4);"`,
    ));
  test('gdx_linear_base_white_700', () =>
    expect(gradient.gdx_linear_base_white_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#BABAB6,transparent,#BABAB6);"`,
    ));
  test('gdx_linear_base_white_800', () =>
    expect(gradient.gdx_linear_base_white_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#9B9B97,transparent,#9B9B97);"`,
    ));
  test('gdx_linear_base_white_900', () =>
    expect(gradient.gdx_linear_base_white_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#7C7C79,transparent,#7C7C79);"`,
    ));
  test('gdx_linear_base_yellow_100', () =>
    expect(gradient.gdx_linear_base_yellow_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FFFFFD,transparent,#FFFFFD);"`,
    ));
  test('gdx_linear_base_yellow_200', () =>
    expect(gradient.gdx_linear_base_yellow_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FFFFD7,transparent,#FFFFD7);"`,
    ));
  test('gdx_linear_base_yellow_300', () =>
    expect(gradient.gdx_linear_base_yellow_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FFFFB7,transparent,#FFFFB7);"`,
    ));
  test('gdx_linear_base_yellow_400', () =>
    expect(gradient.gdx_linear_base_yellow_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#FDFF9E,transparent,#FDFF9E);"`,
    ));
  test('gdx_linear_base_yellow_500', () =>
    expect(gradient.gdx_linear_base_yellow_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#f1fa8c,transparent,#f1fa8c);"`,
    ));
  test('gdx_linear_base_yellow_600', () =>
    expect(gradient.gdx_linear_base_yellow_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#CCC565,transparent,#CCC565);"`,
    ));
  test('gdx_linear_base_yellow_700', () =>
    expect(gradient.gdx_linear_base_yellow_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#998544,transparent,#998544);"`,
    ));
  test('gdx_linear_base_yellow_800', () =>
    expect(gradient.gdx_linear_base_yellow_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#664B28,transparent,#664B28);"`,
    ));
  test('gdx_linear_base_yellow_900', () =>
    expect(gradient.gdx_linear_base_yellow_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#331C11,transparent,#331C11);"`,
    ));
  test('gdx_linear_brand_primary', () =>
    expect(gradient.gdx_linear_brand_primary()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#D55901,transparent,#D55901);"`,
    ));
  test('gdx_linear_brand_secondary', () =>
    expect(gradient.gdx_linear_brand_secondary()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#330E00,transparent,#330E00);"`,
    ));
  test('gdx_linear_dark_code_background', () =>
    expect(gradient.gdx_linear_dark_code_background()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#282a36,transparent,#282a36);"`,
    ));
  test('gdx_linear_dark_code_baseColor', () =>
    expect(gradient.gdx_linear_dark_code_baseColor()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#f8f8f2,transparent,#f8f8f2);"`,
    ));
  test('gdx_linear_dark_code_builtin', () =>
    expect(gradient.gdx_linear_dark_code_builtin()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#8be9fd,transparent,#8be9fd);"`,
    ));
  test('gdx_linear_dark_code_comment', () =>
    expect(gradient.gdx_linear_dark_code_comment()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#6272a4,transparent,#6272a4);"`,
    ));
  test('gdx_linear_dark_code_function', () =>
    expect(gradient.gdx_linear_dark_code_function()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#50fa7b,transparent,#50fa7b);"`,
    ));
  test('gdx_linear_dark_code_keyword', () =>
    expect(gradient.gdx_linear_dark_code_keyword()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#ff79c6,transparent,#ff79c6);"`,
    ));
  test('gdx_linear_dark_code_operator', () =>
    expect(gradient.gdx_linear_dark_code_operator()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#ff79c6,transparent,#ff79c6);"`,
    ));
  test('gdx_linear_dark_code_parameter', () =>
    expect(gradient.gdx_linear_dark_code_parameter()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#ffb86c,transparent,#ffb86c);"`,
    ));
  test('gdx_linear_dark_code_property', () =>
    expect(gradient.gdx_linear_dark_code_property()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#bd93f9,transparent,#bd93f9);"`,
    ));
  test('gdx_linear_dark_code_punctuation', () =>
    expect(gradient.gdx_linear_dark_code_punctuation()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#f8f8f2,transparent,#f8f8f2);"`,
    ));
  test('gdx_linear_dark_code_selection', () =>
    expect(gradient.gdx_linear_dark_code_selection()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#44475a,transparent,#44475a);"`,
    ));
  test('gdx_linear_dark_code_string', () =>
    expect(gradient.gdx_linear_dark_code_string()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#f1fa8c,transparent,#f1fa8c);"`,
    ));
  test('gdx_linear_dark_code_variable', () =>
    expect(gradient.gdx_linear_dark_code_variable()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#bd93f9,transparent,#bd93f9);"`,
    ));
  test('gdx_linear_light_code_background', () =>
    expect(gradient.gdx_linear_light_code_background()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#f8f8f2,transparent,#f8f8f2);"`,
    ));
  test('gdx_linear_light_code_baseColor', () =>
    expect(gradient.gdx_linear_light_code_baseColor()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#657b83,transparent,#657b83);"`,
    ));
  test('gdx_linear_light_code_builtin', () =>
    expect(gradient.gdx_linear_light_code_builtin()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#268bd2,transparent,#268bd2);"`,
    ));
  test('gdx_linear_light_code_comment', () =>
    expect(gradient.gdx_linear_light_code_comment()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#93a1a1,transparent,#93a1a1);"`,
    ));
  test('gdx_linear_light_code_function', () =>
    expect(gradient.gdx_linear_light_code_function()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#b58900,transparent,#b58900);"`,
    ));
  test('gdx_linear_light_code_keyword', () =>
    expect(gradient.gdx_linear_light_code_keyword()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#859900,transparent,#859900);"`,
    ));
  test('gdx_linear_light_code_operator', () =>
    expect(gradient.gdx_linear_light_code_operator()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#586e75,transparent,#586e75);"`,
    ));
  test('gdx_linear_light_code_parameter', () =>
    expect(gradient.gdx_linear_light_code_parameter()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#D55901,transparent,#D55901);"`,
    ));
  test('gdx_linear_light_code_property', () =>
    expect(gradient.gdx_linear_light_code_property()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#268bd2,transparent,#268bd2);"`,
    ));
  test('gdx_linear_light_code_punctuation', () =>
    expect(gradient.gdx_linear_light_code_punctuation()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#586e75,transparent,#586e75);"`,
    ));
  test('gdx_linear_light_code_selection', () =>
    expect(gradient.gdx_linear_light_code_selection()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#073642,transparent,#073642);"`,
    ));
  test('gdx_linear_light_code_string', () =>
    expect(gradient.gdx_linear_light_code_string()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#2aa198,transparent,#2aa198);"`,
    ));
  test('gdx_linear_light_code_variable', () =>
    expect(gradient.gdx_linear_light_code_variable()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to right,#D55901,transparent,#D55901);"`,
    ));
  test('gdy_linear_base_blue_100', () =>
    expect(gradient.gdy_linear_base_blue_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#A8DBFF,transparent,#A8DBFF);"`,
    ));
  test('gdy_linear_base_blue_200', () =>
    expect(gradient.gdy_linear_base_blue_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#7EC8FE,transparent,#7EC8FE);"`,
    ));
  test('gdy_linear_base_blue_300', () =>
    expect(gradient.gdy_linear_base_blue_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#5AB5F4,transparent,#5AB5F4);"`,
    ));
  test('gdy_linear_base_blue_400', () =>
    expect(gradient.gdy_linear_base_blue_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#3EA0E5,transparent,#3EA0E5);"`,
    ));
  test('gdy_linear_base_blue_500', () =>
    expect(gradient.gdy_linear_base_blue_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#268bd2,transparent,#268bd2);"`,
    ));
  test('gdy_linear_base_blue_600', () =>
    expect(gradient.gdy_linear_base_blue_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#0D72B9,transparent,#0D72B9);"`,
    ));
  test('gdy_linear_base_blue_700', () =>
    expect(gradient.gdy_linear_base_blue_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#005898,transparent,#005898);"`,
    ));
  test('gdy_linear_base_blue_800', () =>
    expect(gradient.gdy_linear_base_blue_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#003C66,transparent,#003C66);"`,
    ));
  test('gdy_linear_base_blue_900', () =>
    expect(gradient.gdy_linear_base_blue_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#001F33,transparent,#001F33);"`,
    ));
  test('gdy_linear_base_green_100', () =>
    expect(gradient.gdy_linear_base_green_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#B0FFB6,transparent,#B0FFB6);"`,
    ));
  test('gdy_linear_base_green_200', () =>
    expect(gradient.gdy_linear_base_green_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#91FFA0,transparent,#91FFA0);"`,
    ));
  test('gdy_linear_base_green_300', () =>
    expect(gradient.gdy_linear_base_green_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#77FF8F,transparent,#77FF8F);"`,
    ));
  test('gdy_linear_base_green_400', () =>
    expect(gradient.gdy_linear_base_green_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#61FF83,transparent,#61FF83);"`,
    ));
  test('gdy_linear_base_green_500', () =>
    expect(gradient.gdy_linear_base_green_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#50fa7b,transparent,#50fa7b);"`,
    ));
  test('gdy_linear_base_green_600', () =>
    expect(gradient.gdy_linear_base_green_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#2FCC5A,transparent,#2FCC5A);"`,
    ));
  test('gdy_linear_base_green_700', () =>
    expect(gradient.gdy_linear_base_green_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#17993D,transparent,#17993D);"`,
    ));
  test('gdy_linear_base_green_800', () =>
    expect(gradient.gdy_linear_base_green_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#076625,transparent,#076625);"`,
    ));
  test('gdy_linear_base_green_900', () =>
    expect(gradient.gdy_linear_base_green_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#003310,transparent,#003310);"`,
    ));
  test('gdy_linear_base_grey_100', () =>
    expect(gradient.gdy_linear_base_grey_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#BDC1C9,transparent,#BDC1C9);"`,
    ));
  test('gdy_linear_base_grey_200', () =>
    expect(gradient.gdy_linear_base_grey_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#9EA2AF,transparent,#9EA2AF);"`,
    ));
  test('gdy_linear_base_grey_300', () =>
    expect(gradient.gdy_linear_base_grey_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#7F8493,transparent,#7F8493);"`,
    ));
  test('gdy_linear_base_grey_400', () =>
    expect(gradient.gdy_linear_base_grey_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#616577,transparent,#616577);"`,
    ));
  test('gdy_linear_base_grey_500', () =>
    expect(gradient.gdy_linear_base_grey_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#44475a,transparent,#44475a);"`,
    ));
  test('gdy_linear_base_grey_600', () =>
    expect(gradient.gdy_linear_base_grey_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#34374A,transparent,#34374A);"`,
    ));
  test('gdy_linear_base_grey_700', () =>
    expect(gradient.gdy_linear_base_grey_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#262839,transparent,#262839);"`,
    ));
  test('gdy_linear_base_grey_800', () =>
    expect(gradient.gdy_linear_base_grey_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#181A27,transparent,#181A27);"`,
    ));
  test('gdy_linear_base_grey_900', () =>
    expect(gradient.gdy_linear_base_grey_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#0B0D14,transparent,#0B0D14);"`,
    ));
  test('gdy_linear_base_orange_100', () =>
    expect(gradient.gdy_linear_base_orange_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FFACA8,transparent,#FFACA8);"`,
    ));
  test('gdy_linear_base_orange_200', () =>
    expect(gradient.gdy_linear_base_orange_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FF907E,transparent,#FF907E);"`,
    ));
  test('gdy_linear_base_orange_300', () =>
    expect(gradient.gdy_linear_base_orange_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FB7A54,transparent,#FB7A54);"`,
    ));
  test('gdy_linear_base_orange_400', () =>
    expect(gradient.gdy_linear_base_orange_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#EB682A,transparent,#EB682A);"`,
    ));
  test('gdy_linear_base_orange_500', () =>
    expect(gradient.gdy_linear_base_orange_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#D55901,transparent,#D55901);"`,
    ));
  test('gdy_linear_base_orange_600', () =>
    expect(gradient.gdy_linear_base_orange_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#C04400,transparent,#C04400);"`,
    ));
  test('gdy_linear_base_orange_700', () =>
    expect(gradient.gdy_linear_base_orange_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#993000,transparent,#993000);"`,
    ));
  test('gdy_linear_base_orange_800', () =>
    expect(gradient.gdy_linear_base_orange_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#661E00,transparent,#661E00);"`,
    ));
  test('gdy_linear_base_orange_900', () =>
    expect(gradient.gdy_linear_base_orange_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#330E00,transparent,#330E00);"`,
    ));
  test('gdy_linear_base_pink_100', () =>
    expect(gradient.gdy_linear_base_pink_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FFC2EE,transparent,#FFC2EE);"`,
    ));
  test('gdy_linear_base_pink_200', () =>
    expect(gradient.gdy_linear_base_pink_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FFAAE5,transparent,#FFAAE5);"`,
    ));
  test('gdy_linear_base_pink_300', () =>
    expect(gradient.gdy_linear_base_pink_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FF96DB,transparent,#FF96DB);"`,
    ));
  test('gdy_linear_base_pink_400', () =>
    expect(gradient.gdy_linear_base_pink_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FF86D1,transparent,#FF86D1);"`,
    ));
  test('gdy_linear_base_pink_500', () =>
    expect(gradient.gdy_linear_base_pink_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#ff79c6,transparent,#ff79c6);"`,
    ));
  test('gdy_linear_base_pink_600', () =>
    expect(gradient.gdy_linear_base_pink_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#CC53A0,transparent,#CC53A0);"`,
    ));
  test('gdy_linear_base_pink_700', () =>
    expect(gradient.gdy_linear_base_pink_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#99357A,transparent,#99357A);"`,
    ));
  test('gdy_linear_base_pink_800', () =>
    expect(gradient.gdy_linear_base_pink_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#661C52,transparent,#661C52);"`,
    ));
  test('gdy_linear_base_pink_900', () =>
    expect(gradient.gdy_linear_base_pink_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#330B2A,transparent,#330B2A);"`,
    ));
  test('gdy_linear_base_purple_100', () =>
    expect(gradient.gdy_linear_base_purple_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#DCCFFF,transparent,#DCCFFF);"`,
    ));
  test('gdy_linear_base_purple_200', () =>
    expect(gradient.gdy_linear_base_purple_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#D1BCFF,transparent,#D1BCFF);"`,
    ));
  test('gdy_linear_base_purple_300', () =>
    expect(gradient.gdy_linear_base_purple_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#C8ABFF,transparent,#C8ABFF);"`,
    ));
  test('gdy_linear_base_purple_400', () =>
    expect(gradient.gdy_linear_base_purple_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#C29EFF,transparent,#C29EFF);"`,
    ));
  test('gdy_linear_base_purple_500', () =>
    expect(gradient.gdy_linear_base_purple_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#bd93f9,transparent,#bd93f9);"`,
    ));
  test('gdy_linear_base_purple_600', () =>
    expect(gradient.gdy_linear_base_purple_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#956BCC,transparent,#956BCC);"`,
    ));
  test('gdy_linear_base_purple_700', () =>
    expect(gradient.gdy_linear_base_purple_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#6F4999,transparent,#6F4999);"`,
    ));
  test('gdy_linear_base_purple_800', () =>
    expect(gradient.gdy_linear_base_purple_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#492C66,transparent,#492C66);"`,
    ));
  test('gdy_linear_base_purple_900', () =>
    expect(gradient.gdy_linear_base_purple_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#241333,transparent,#241333);"`,
    ));
  test('gdy_linear_base_sand_100', () =>
    expect(gradient.gdy_linear_base_sand_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FFF1D3,transparent,#FFF1D3);"`,
    ));
  test('gdy_linear_base_sand_200', () =>
    expect(gradient.gdy_linear_base_sand_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FFE3AE,transparent,#FFE3AE);"`,
    ));
  test('gdy_linear_base_sand_300', () =>
    expect(gradient.gdy_linear_base_sand_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FFD591,transparent,#FFD591);"`,
    ));
  test('gdy_linear_base_sand_400', () =>
    expect(gradient.gdy_linear_base_sand_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FFC77B,transparent,#FFC77B);"`,
    ));
  test('gdy_linear_base_sand_500', () =>
    expect(gradient.gdy_linear_base_sand_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#ffb86c,transparent,#ffb86c);"`,
    ));
  test('gdy_linear_base_sand_600', () =>
    expect(gradient.gdy_linear_base_sand_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#CC9448,transparent,#CC9448);"`,
    ));
  test('gdy_linear_base_sand_700', () =>
    expect(gradient.gdy_linear_base_sand_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#996F2B,transparent,#996F2B);"`,
    ));
  test('gdy_linear_base_sand_800', () =>
    expect(gradient.gdy_linear_base_sand_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#664A15,transparent,#664A15);"`,
    ));
  test('gdy_linear_base_sand_900', () =>
    expect(gradient.gdy_linear_base_sand_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#332507,transparent,#332507);"`,
    ));
  test('gdy_linear_base_sky_100', () =>
    expect(gradient.gdy_linear_base_sky_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#CBFFFF,transparent,#CBFFFF);"`,
    ));
  test('gdy_linear_base_sky_200', () =>
    expect(gradient.gdy_linear_base_sky_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#B6FFFF,transparent,#B6FFFF);"`,
    ));
  test('gdy_linear_base_sky_300', () =>
    expect(gradient.gdy_linear_base_sky_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#A5FFFF,transparent,#A5FFFF);"`,
    ));
  test('gdy_linear_base_sky_400', () =>
    expect(gradient.gdy_linear_base_sky_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#96F7FF,transparent,#96F7FF);"`,
    ));
  test('gdy_linear_base_sky_500', () =>
    expect(gradient.gdy_linear_base_sky_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#8be9fd,transparent,#8be9fd);"`,
    ));
  test('gdy_linear_base_sky_600', () =>
    expect(gradient.gdy_linear_base_sky_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#64C2CC,transparent,#64C2CC);"`,
    ));
  test('gdy_linear_base_sky_700', () =>
    expect(gradient.gdy_linear_base_sky_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#429799,transparent,#429799);"`,
    ));
  test('gdy_linear_base_sky_800', () =>
    expect(gradient.gdy_linear_base_sky_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#276666,transparent,#276666);"`,
    ));
  test('gdy_linear_base_sky_900', () =>
    expect(gradient.gdy_linear_base_sky_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#103333,transparent,#103333);"`,
    ));
  test('gdy_linear_base_white_100', () =>
    expect(gradient.gdy_linear_base_white_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FFFFFF,transparent,#FFFFFF);"`,
    ));
  test('gdy_linear_base_white_200', () =>
    expect(gradient.gdy_linear_base_white_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FEFEFB,transparent,#FEFEFB);"`,
    ));
  test('gdy_linear_base_white_300', () =>
    expect(gradient.gdy_linear_base_white_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FCFCF8,transparent,#FCFCF8);"`,
    ));
  test('gdy_linear_base_white_400', () =>
    expect(gradient.gdy_linear_base_white_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FAFAF5,transparent,#FAFAF5);"`,
    ));
  test('gdy_linear_base_white_500', () =>
    expect(gradient.gdy_linear_base_white_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#f8f8f2,transparent,#f8f8f2);"`,
    ));
  test('gdy_linear_base_white_600', () =>
    expect(gradient.gdy_linear_base_white_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#D9D9D4,transparent,#D9D9D4);"`,
    ));
  test('gdy_linear_base_white_700', () =>
    expect(gradient.gdy_linear_base_white_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#BABAB6,transparent,#BABAB6);"`,
    ));
  test('gdy_linear_base_white_800', () =>
    expect(gradient.gdy_linear_base_white_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#9B9B97,transparent,#9B9B97);"`,
    ));
  test('gdy_linear_base_white_900', () =>
    expect(gradient.gdy_linear_base_white_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#7C7C79,transparent,#7C7C79);"`,
    ));
  test('gdy_linear_base_yellow_100', () =>
    expect(gradient.gdy_linear_base_yellow_100()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FFFFFD,transparent,#FFFFFD);"`,
    ));
  test('gdy_linear_base_yellow_200', () =>
    expect(gradient.gdy_linear_base_yellow_200()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FFFFD7,transparent,#FFFFD7);"`,
    ));
  test('gdy_linear_base_yellow_300', () =>
    expect(gradient.gdy_linear_base_yellow_300()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FFFFB7,transparent,#FFFFB7);"`,
    ));
  test('gdy_linear_base_yellow_400', () =>
    expect(gradient.gdy_linear_base_yellow_400()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#FDFF9E,transparent,#FDFF9E);"`,
    ));
  test('gdy_linear_base_yellow_500', () =>
    expect(gradient.gdy_linear_base_yellow_500()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#f1fa8c,transparent,#f1fa8c);"`,
    ));
  test('gdy_linear_base_yellow_600', () =>
    expect(gradient.gdy_linear_base_yellow_600()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#CCC565,transparent,#CCC565);"`,
    ));
  test('gdy_linear_base_yellow_700', () =>
    expect(gradient.gdy_linear_base_yellow_700()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#998544,transparent,#998544);"`,
    ));
  test('gdy_linear_base_yellow_800', () =>
    expect(gradient.gdy_linear_base_yellow_800()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#664B28,transparent,#664B28);"`,
    ));
  test('gdy_linear_base_yellow_900', () =>
    expect(gradient.gdy_linear_base_yellow_900()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#331C11,transparent,#331C11);"`,
    ));
  test('gdy_linear_brand_primary', () =>
    expect(gradient.gdy_linear_brand_primary()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#D55901,transparent,#D55901);"`,
    ));
  test('gdy_linear_brand_secondary', () =>
    expect(gradient.gdy_linear_brand_secondary()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#330E00,transparent,#330E00);"`,
    ));
  test('gdy_linear_dark_code_background', () =>
    expect(gradient.gdy_linear_dark_code_background()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#282a36,transparent,#282a36);"`,
    ));
  test('gdy_linear_dark_code_baseColor', () =>
    expect(gradient.gdy_linear_dark_code_baseColor()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#f8f8f2,transparent,#f8f8f2);"`,
    ));
  test('gdy_linear_dark_code_builtin', () =>
    expect(gradient.gdy_linear_dark_code_builtin()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#8be9fd,transparent,#8be9fd);"`,
    ));
  test('gdy_linear_dark_code_comment', () =>
    expect(gradient.gdy_linear_dark_code_comment()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#6272a4,transparent,#6272a4);"`,
    ));
  test('gdy_linear_dark_code_function', () =>
    expect(gradient.gdy_linear_dark_code_function()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#50fa7b,transparent,#50fa7b);"`,
    ));
  test('gdy_linear_dark_code_keyword', () =>
    expect(gradient.gdy_linear_dark_code_keyword()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#ff79c6,transparent,#ff79c6);"`,
    ));
  test('gdy_linear_dark_code_operator', () =>
    expect(gradient.gdy_linear_dark_code_operator()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#ff79c6,transparent,#ff79c6);"`,
    ));
  test('gdy_linear_dark_code_parameter', () =>
    expect(gradient.gdy_linear_dark_code_parameter()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#ffb86c,transparent,#ffb86c);"`,
    ));
  test('gdy_linear_dark_code_property', () =>
    expect(gradient.gdy_linear_dark_code_property()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#bd93f9,transparent,#bd93f9);"`,
    ));
  test('gdy_linear_dark_code_punctuation', () =>
    expect(gradient.gdy_linear_dark_code_punctuation()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#f8f8f2,transparent,#f8f8f2);"`,
    ));
  test('gdy_linear_dark_code_selection', () =>
    expect(gradient.gdy_linear_dark_code_selection()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#44475a,transparent,#44475a);"`,
    ));
  test('gdy_linear_dark_code_string', () =>
    expect(gradient.gdy_linear_dark_code_string()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#f1fa8c,transparent,#f1fa8c);"`,
    ));
  test('gdy_linear_dark_code_variable', () =>
    expect(gradient.gdy_linear_dark_code_variable()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#bd93f9,transparent,#bd93f9);"`,
    ));
  test('gdy_linear_light_code_background', () =>
    expect(gradient.gdy_linear_light_code_background()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#f8f8f2,transparent,#f8f8f2);"`,
    ));
  test('gdy_linear_light_code_baseColor', () =>
    expect(gradient.gdy_linear_light_code_baseColor()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#657b83,transparent,#657b83);"`,
    ));
  test('gdy_linear_light_code_builtin', () =>
    expect(gradient.gdy_linear_light_code_builtin()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#268bd2,transparent,#268bd2);"`,
    ));
  test('gdy_linear_light_code_comment', () =>
    expect(gradient.gdy_linear_light_code_comment()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#93a1a1,transparent,#93a1a1);"`,
    ));
  test('gdy_linear_light_code_function', () =>
    expect(gradient.gdy_linear_light_code_function()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#b58900,transparent,#b58900);"`,
    ));
  test('gdy_linear_light_code_keyword', () =>
    expect(gradient.gdy_linear_light_code_keyword()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#859900,transparent,#859900);"`,
    ));
  test('gdy_linear_light_code_operator', () =>
    expect(gradient.gdy_linear_light_code_operator()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#586e75,transparent,#586e75);"`,
    ));
  test('gdy_linear_light_code_parameter', () =>
    expect(gradient.gdy_linear_light_code_parameter()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#D55901,transparent,#D55901);"`,
    ));
  test('gdy_linear_light_code_property', () =>
    expect(gradient.gdy_linear_light_code_property()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#268bd2,transparent,#268bd2);"`,
    ));
  test('gdy_linear_light_code_punctuation', () =>
    expect(gradient.gdy_linear_light_code_punctuation()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#586e75,transparent,#586e75);"`,
    ));
  test('gdy_linear_light_code_selection', () =>
    expect(gradient.gdy_linear_light_code_selection()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#073642,transparent,#073642);"`,
    ));
  test('gdy_linear_light_code_string', () =>
    expect(gradient.gdy_linear_light_code_string()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#2aa198,transparent,#2aa198);"`,
    ));
  test('gdy_linear_light_code_variable', () =>
    expect(gradient.gdy_linear_light_code_variable()).toMatchInlineSnapshot(
      `"background-image:linear-gradient(to top,#D55901,transparent,#D55901);"`,
    ));
});
