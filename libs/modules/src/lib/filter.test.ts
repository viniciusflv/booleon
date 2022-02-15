import { filter } from './filter';

describe('filter', () => {
  test('fl_blur_lg', () =>
    expect(filter.fl_blur_lg()).toMatchInlineSnapshot(
      `"filter:blur(0.5rem);"`,
    ));
  test('fl_blur_md', () =>
    expect(filter.fl_blur_md()).toMatchInlineSnapshot(
      `"filter:blur(0.375rem);"`,
    ));
  test('fl_blur_none', () =>
    expect(filter.fl_blur_none()).toMatchInlineSnapshot(
      `"filter:blur(0rem);"`,
    ));
  test('fl_blur_px', () =>
    expect(filter.fl_blur_px()).toMatchInlineSnapshot(
      `"filter:blur(0.0625rem);"`,
    ));
  test('fl_blur_sm', () =>
    expect(filter.fl_blur_sm()).toMatchInlineSnapshot(
      `"filter:blur(0.25rem);"`,
    ));
  test('fl_blur_xl', () =>
    expect(filter.fl_blur_xl()).toMatchInlineSnapshot(
      `"filter:blur(0.75rem);"`,
    ));
  test('fl_blur_xs', () =>
    expect(filter.fl_blur_xs()).toMatchInlineSnapshot(
      `"filter:blur(0.125rem);"`,
    ));
  test('fl_brightness_1', () =>
    expect(filter.fl_brightness_1()).toMatchInlineSnapshot(
      `"filter:brightness(0.01);"`,
    ));
  test('fl_brightness_10', () =>
    expect(filter.fl_brightness_10()).toMatchInlineSnapshot(
      `"filter:brightness(0.1);"`,
    ));
  test('fl_brightness_100', () =>
    expect(filter.fl_brightness_100()).toMatchInlineSnapshot(
      `"filter:brightness(1);"`,
    ));
  test('fl_brightness_11', () =>
    expect(filter.fl_brightness_11()).toMatchInlineSnapshot(
      `"filter:brightness(0.11);"`,
    ));
  test('fl_brightness_12', () =>
    expect(filter.fl_brightness_12()).toMatchInlineSnapshot(
      `"filter:brightness(0.12);"`,
    ));
  test('fl_brightness_13', () =>
    expect(filter.fl_brightness_13()).toMatchInlineSnapshot(
      `"filter:brightness(0.13);"`,
    ));
  test('fl_brightness_14', () =>
    expect(filter.fl_brightness_14()).toMatchInlineSnapshot(
      `"filter:brightness(0.14);"`,
    ));
  test('fl_brightness_15', () =>
    expect(filter.fl_brightness_15()).toMatchInlineSnapshot(
      `"filter:brightness(0.15);"`,
    ));
  test('fl_brightness_16', () =>
    expect(filter.fl_brightness_16()).toMatchInlineSnapshot(
      `"filter:brightness(0.16);"`,
    ));
  test('fl_brightness_17', () =>
    expect(filter.fl_brightness_17()).toMatchInlineSnapshot(
      `"filter:brightness(0.17);"`,
    ));
  test('fl_brightness_18', () =>
    expect(filter.fl_brightness_18()).toMatchInlineSnapshot(
      `"filter:brightness(0.18);"`,
    ));
  test('fl_brightness_19', () =>
    expect(filter.fl_brightness_19()).toMatchInlineSnapshot(
      `"filter:brightness(0.19);"`,
    ));
  test('fl_brightness_2', () =>
    expect(filter.fl_brightness_2()).toMatchInlineSnapshot(
      `"filter:brightness(0.02);"`,
    ));
  test('fl_brightness_20', () =>
    expect(filter.fl_brightness_20()).toMatchInlineSnapshot(
      `"filter:brightness(0.2);"`,
    ));
  test('fl_brightness_21', () =>
    expect(filter.fl_brightness_21()).toMatchInlineSnapshot(
      `"filter:brightness(0.21);"`,
    ));
  test('fl_brightness_22', () =>
    expect(filter.fl_brightness_22()).toMatchInlineSnapshot(
      `"filter:brightness(0.22);"`,
    ));
  test('fl_brightness_23', () =>
    expect(filter.fl_brightness_23()).toMatchInlineSnapshot(
      `"filter:brightness(0.23);"`,
    ));
  test('fl_brightness_24', () =>
    expect(filter.fl_brightness_24()).toMatchInlineSnapshot(
      `"filter:brightness(0.24);"`,
    ));
  test('fl_brightness_25', () =>
    expect(filter.fl_brightness_25()).toMatchInlineSnapshot(
      `"filter:brightness(0.25);"`,
    ));
  test('fl_brightness_26', () =>
    expect(filter.fl_brightness_26()).toMatchInlineSnapshot(
      `"filter:brightness(0.26);"`,
    ));
  test('fl_brightness_27', () =>
    expect(filter.fl_brightness_27()).toMatchInlineSnapshot(
      `"filter:brightness(0.27);"`,
    ));
  test('fl_brightness_28', () =>
    expect(filter.fl_brightness_28()).toMatchInlineSnapshot(
      `"filter:brightness(0.28);"`,
    ));
  test('fl_brightness_29', () =>
    expect(filter.fl_brightness_29()).toMatchInlineSnapshot(
      `"filter:brightness(0.29);"`,
    ));
  test('fl_brightness_3', () =>
    expect(filter.fl_brightness_3()).toMatchInlineSnapshot(
      `"filter:brightness(0.03);"`,
    ));
  test('fl_brightness_30', () =>
    expect(filter.fl_brightness_30()).toMatchInlineSnapshot(
      `"filter:brightness(0.3);"`,
    ));
  test('fl_brightness_31', () =>
    expect(filter.fl_brightness_31()).toMatchInlineSnapshot(
      `"filter:brightness(0.31);"`,
    ));
  test('fl_brightness_32', () =>
    expect(filter.fl_brightness_32()).toMatchInlineSnapshot(
      `"filter:brightness(0.32);"`,
    ));
  test('fl_brightness_33', () =>
    expect(filter.fl_brightness_33()).toMatchInlineSnapshot(
      `"filter:brightness(0.33);"`,
    ));
  test('fl_brightness_34', () =>
    expect(filter.fl_brightness_34()).toMatchInlineSnapshot(
      `"filter:brightness(0.34);"`,
    ));
  test('fl_brightness_35', () =>
    expect(filter.fl_brightness_35()).toMatchInlineSnapshot(
      `"filter:brightness(0.35);"`,
    ));
  test('fl_brightness_36', () =>
    expect(filter.fl_brightness_36()).toMatchInlineSnapshot(
      `"filter:brightness(0.36);"`,
    ));
  test('fl_brightness_37', () =>
    expect(filter.fl_brightness_37()).toMatchInlineSnapshot(
      `"filter:brightness(0.37);"`,
    ));
  test('fl_brightness_38', () =>
    expect(filter.fl_brightness_38()).toMatchInlineSnapshot(
      `"filter:brightness(0.38);"`,
    ));
  test('fl_brightness_39', () =>
    expect(filter.fl_brightness_39()).toMatchInlineSnapshot(
      `"filter:brightness(0.39);"`,
    ));
  test('fl_brightness_4', () =>
    expect(filter.fl_brightness_4()).toMatchInlineSnapshot(
      `"filter:brightness(0.04);"`,
    ));
  test('fl_brightness_40', () =>
    expect(filter.fl_brightness_40()).toMatchInlineSnapshot(
      `"filter:brightness(0.4);"`,
    ));
  test('fl_brightness_41', () =>
    expect(filter.fl_brightness_41()).toMatchInlineSnapshot(
      `"filter:brightness(0.41);"`,
    ));
  test('fl_brightness_42', () =>
    expect(filter.fl_brightness_42()).toMatchInlineSnapshot(
      `"filter:brightness(0.42);"`,
    ));
  test('fl_brightness_43', () =>
    expect(filter.fl_brightness_43()).toMatchInlineSnapshot(
      `"filter:brightness(0.43);"`,
    ));
  test('fl_brightness_44', () =>
    expect(filter.fl_brightness_44()).toMatchInlineSnapshot(
      `"filter:brightness(0.44);"`,
    ));
  test('fl_brightness_45', () =>
    expect(filter.fl_brightness_45()).toMatchInlineSnapshot(
      `"filter:brightness(0.45);"`,
    ));
  test('fl_brightness_46', () =>
    expect(filter.fl_brightness_46()).toMatchInlineSnapshot(
      `"filter:brightness(0.46);"`,
    ));
  test('fl_brightness_47', () =>
    expect(filter.fl_brightness_47()).toMatchInlineSnapshot(
      `"filter:brightness(0.47);"`,
    ));
  test('fl_brightness_48', () =>
    expect(filter.fl_brightness_48()).toMatchInlineSnapshot(
      `"filter:brightness(0.48);"`,
    ));
  test('fl_brightness_49', () =>
    expect(filter.fl_brightness_49()).toMatchInlineSnapshot(
      `"filter:brightness(0.49);"`,
    ));
  test('fl_brightness_5', () =>
    expect(filter.fl_brightness_5()).toMatchInlineSnapshot(
      `"filter:brightness(0.05);"`,
    ));
  test('fl_brightness_50', () =>
    expect(filter.fl_brightness_50()).toMatchInlineSnapshot(
      `"filter:brightness(0.5);"`,
    ));
  test('fl_brightness_51', () =>
    expect(filter.fl_brightness_51()).toMatchInlineSnapshot(
      `"filter:brightness(0.51);"`,
    ));
  test('fl_brightness_52', () =>
    expect(filter.fl_brightness_52()).toMatchInlineSnapshot(
      `"filter:brightness(0.52);"`,
    ));
  test('fl_brightness_53', () =>
    expect(filter.fl_brightness_53()).toMatchInlineSnapshot(
      `"filter:brightness(0.53);"`,
    ));
  test('fl_brightness_54', () =>
    expect(filter.fl_brightness_54()).toMatchInlineSnapshot(
      `"filter:brightness(0.54);"`,
    ));
  test('fl_brightness_55', () =>
    expect(filter.fl_brightness_55()).toMatchInlineSnapshot(
      `"filter:brightness(0.55);"`,
    ));
  test('fl_brightness_56', () =>
    expect(filter.fl_brightness_56()).toMatchInlineSnapshot(
      `"filter:brightness(0.56);"`,
    ));
  test('fl_brightness_57', () =>
    expect(filter.fl_brightness_57()).toMatchInlineSnapshot(
      `"filter:brightness(0.57);"`,
    ));
  test('fl_brightness_58', () =>
    expect(filter.fl_brightness_58()).toMatchInlineSnapshot(
      `"filter:brightness(0.58);"`,
    ));
  test('fl_brightness_59', () =>
    expect(filter.fl_brightness_59()).toMatchInlineSnapshot(
      `"filter:brightness(0.59);"`,
    ));
  test('fl_brightness_6', () =>
    expect(filter.fl_brightness_6()).toMatchInlineSnapshot(
      `"filter:brightness(0.06);"`,
    ));
  test('fl_brightness_60', () =>
    expect(filter.fl_brightness_60()).toMatchInlineSnapshot(
      `"filter:brightness(0.6);"`,
    ));
  test('fl_brightness_61', () =>
    expect(filter.fl_brightness_61()).toMatchInlineSnapshot(
      `"filter:brightness(0.61);"`,
    ));
  test('fl_brightness_62', () =>
    expect(filter.fl_brightness_62()).toMatchInlineSnapshot(
      `"filter:brightness(0.62);"`,
    ));
  test('fl_brightness_63', () =>
    expect(filter.fl_brightness_63()).toMatchInlineSnapshot(
      `"filter:brightness(0.63);"`,
    ));
  test('fl_brightness_64', () =>
    expect(filter.fl_brightness_64()).toMatchInlineSnapshot(
      `"filter:brightness(0.64);"`,
    ));
  test('fl_brightness_65', () =>
    expect(filter.fl_brightness_65()).toMatchInlineSnapshot(
      `"filter:brightness(0.65);"`,
    ));
  test('fl_brightness_66', () =>
    expect(filter.fl_brightness_66()).toMatchInlineSnapshot(
      `"filter:brightness(0.66);"`,
    ));
  test('fl_brightness_67', () =>
    expect(filter.fl_brightness_67()).toMatchInlineSnapshot(
      `"filter:brightness(0.67);"`,
    ));
  test('fl_brightness_68', () =>
    expect(filter.fl_brightness_68()).toMatchInlineSnapshot(
      `"filter:brightness(0.68);"`,
    ));
  test('fl_brightness_69', () =>
    expect(filter.fl_brightness_69()).toMatchInlineSnapshot(
      `"filter:brightness(0.69);"`,
    ));
  test('fl_brightness_7', () =>
    expect(filter.fl_brightness_7()).toMatchInlineSnapshot(
      `"filter:brightness(0.07);"`,
    ));
  test('fl_brightness_70', () =>
    expect(filter.fl_brightness_70()).toMatchInlineSnapshot(
      `"filter:brightness(0.7);"`,
    ));
  test('fl_brightness_71', () =>
    expect(filter.fl_brightness_71()).toMatchInlineSnapshot(
      `"filter:brightness(0.71);"`,
    ));
  test('fl_brightness_72', () =>
    expect(filter.fl_brightness_72()).toMatchInlineSnapshot(
      `"filter:brightness(0.72);"`,
    ));
  test('fl_brightness_73', () =>
    expect(filter.fl_brightness_73()).toMatchInlineSnapshot(
      `"filter:brightness(0.73);"`,
    ));
  test('fl_brightness_74', () =>
    expect(filter.fl_brightness_74()).toMatchInlineSnapshot(
      `"filter:brightness(0.74);"`,
    ));
  test('fl_brightness_75', () =>
    expect(filter.fl_brightness_75()).toMatchInlineSnapshot(
      `"filter:brightness(0.75);"`,
    ));
  test('fl_brightness_76', () =>
    expect(filter.fl_brightness_76()).toMatchInlineSnapshot(
      `"filter:brightness(0.76);"`,
    ));
  test('fl_brightness_77', () =>
    expect(filter.fl_brightness_77()).toMatchInlineSnapshot(
      `"filter:brightness(0.77);"`,
    ));
  test('fl_brightness_78', () =>
    expect(filter.fl_brightness_78()).toMatchInlineSnapshot(
      `"filter:brightness(0.78);"`,
    ));
  test('fl_brightness_79', () =>
    expect(filter.fl_brightness_79()).toMatchInlineSnapshot(
      `"filter:brightness(0.79);"`,
    ));
  test('fl_brightness_8', () =>
    expect(filter.fl_brightness_8()).toMatchInlineSnapshot(
      `"filter:brightness(0.08);"`,
    ));
  test('fl_brightness_80', () =>
    expect(filter.fl_brightness_80()).toMatchInlineSnapshot(
      `"filter:brightness(0.8);"`,
    ));
  test('fl_brightness_81', () =>
    expect(filter.fl_brightness_81()).toMatchInlineSnapshot(
      `"filter:brightness(0.81);"`,
    ));
  test('fl_brightness_82', () =>
    expect(filter.fl_brightness_82()).toMatchInlineSnapshot(
      `"filter:brightness(0.82);"`,
    ));
  test('fl_brightness_83', () =>
    expect(filter.fl_brightness_83()).toMatchInlineSnapshot(
      `"filter:brightness(0.83);"`,
    ));
  test('fl_brightness_84', () =>
    expect(filter.fl_brightness_84()).toMatchInlineSnapshot(
      `"filter:brightness(0.84);"`,
    ));
  test('fl_brightness_85', () =>
    expect(filter.fl_brightness_85()).toMatchInlineSnapshot(
      `"filter:brightness(0.85);"`,
    ));
  test('fl_brightness_86', () =>
    expect(filter.fl_brightness_86()).toMatchInlineSnapshot(
      `"filter:brightness(0.86);"`,
    ));
  test('fl_brightness_87', () =>
    expect(filter.fl_brightness_87()).toMatchInlineSnapshot(
      `"filter:brightness(0.87);"`,
    ));
  test('fl_brightness_88', () =>
    expect(filter.fl_brightness_88()).toMatchInlineSnapshot(
      `"filter:brightness(0.88);"`,
    ));
  test('fl_brightness_89', () =>
    expect(filter.fl_brightness_89()).toMatchInlineSnapshot(
      `"filter:brightness(0.89);"`,
    ));
  test('fl_brightness_9', () =>
    expect(filter.fl_brightness_9()).toMatchInlineSnapshot(
      `"filter:brightness(0.09);"`,
    ));
  test('fl_brightness_90', () =>
    expect(filter.fl_brightness_90()).toMatchInlineSnapshot(
      `"filter:brightness(0.9);"`,
    ));
  test('fl_brightness_91', () =>
    expect(filter.fl_brightness_91()).toMatchInlineSnapshot(
      `"filter:brightness(0.91);"`,
    ));
  test('fl_brightness_92', () =>
    expect(filter.fl_brightness_92()).toMatchInlineSnapshot(
      `"filter:brightness(0.92);"`,
    ));
  test('fl_brightness_93', () =>
    expect(filter.fl_brightness_93()).toMatchInlineSnapshot(
      `"filter:brightness(0.93);"`,
    ));
  test('fl_brightness_94', () =>
    expect(filter.fl_brightness_94()).toMatchInlineSnapshot(
      `"filter:brightness(0.94);"`,
    ));
  test('fl_brightness_95', () =>
    expect(filter.fl_brightness_95()).toMatchInlineSnapshot(
      `"filter:brightness(0.95);"`,
    ));
  test('fl_brightness_96', () =>
    expect(filter.fl_brightness_96()).toMatchInlineSnapshot(
      `"filter:brightness(0.96);"`,
    ));
  test('fl_brightness_97', () =>
    expect(filter.fl_brightness_97()).toMatchInlineSnapshot(
      `"filter:brightness(0.97);"`,
    ));
  test('fl_brightness_98', () =>
    expect(filter.fl_brightness_98()).toMatchInlineSnapshot(
      `"filter:brightness(0.98);"`,
    ));
  test('fl_brightness_99', () =>
    expect(filter.fl_brightness_99()).toMatchInlineSnapshot(
      `"filter:brightness(0.99);"`,
    ));
  test('fl_contrast_10', () =>
    expect(filter.fl_contrast_10()).toMatchInlineSnapshot(
      `"filter:contrast(10%);"`,
    ));
  test('fl_contrast_100', () =>
    expect(filter.fl_contrast_100()).toMatchInlineSnapshot(
      `"filter:contrast(100%);"`,
    ));
  test('fl_contrast_20', () =>
    expect(filter.fl_contrast_20()).toMatchInlineSnapshot(
      `"filter:contrast(20%);"`,
    ));
  test('fl_contrast_30', () =>
    expect(filter.fl_contrast_30()).toMatchInlineSnapshot(
      `"filter:contrast(30%);"`,
    ));
  test('fl_contrast_40', () =>
    expect(filter.fl_contrast_40()).toMatchInlineSnapshot(
      `"filter:contrast(40%);"`,
    ));
  test('fl_contrast_50', () =>
    expect(filter.fl_contrast_50()).toMatchInlineSnapshot(
      `"filter:contrast(50%);"`,
    ));
  test('fl_contrast_60', () =>
    expect(filter.fl_contrast_60()).toMatchInlineSnapshot(
      `"filter:contrast(60%);"`,
    ));
  test('fl_contrast_70', () =>
    expect(filter.fl_contrast_70()).toMatchInlineSnapshot(
      `"filter:contrast(70%);"`,
    ));
  test('fl_contrast_80', () =>
    expect(filter.fl_contrast_80()).toMatchInlineSnapshot(
      `"filter:contrast(80%);"`,
    ));
  test('fl_contrast_90', () =>
    expect(filter.fl_contrast_90()).toMatchInlineSnapshot(
      `"filter:contrast(90%);"`,
    ));
  test('fl_grayscale_10', () =>
    expect(filter.fl_grayscale_10()).toMatchInlineSnapshot(
      `"filter:grayscale(10%);"`,
    ));
  test('fl_grayscale_100', () =>
    expect(filter.fl_grayscale_100()).toMatchInlineSnapshot(
      `"filter:grayscale(100%);"`,
    ));
  test('fl_grayscale_20', () =>
    expect(filter.fl_grayscale_20()).toMatchInlineSnapshot(
      `"filter:grayscale(20%);"`,
    ));
  test('fl_grayscale_30', () =>
    expect(filter.fl_grayscale_30()).toMatchInlineSnapshot(
      `"filter:grayscale(30%);"`,
    ));
  test('fl_grayscale_40', () =>
    expect(filter.fl_grayscale_40()).toMatchInlineSnapshot(
      `"filter:grayscale(40%);"`,
    ));
  test('fl_grayscale_50', () =>
    expect(filter.fl_grayscale_50()).toMatchInlineSnapshot(
      `"filter:grayscale(50%);"`,
    ));
  test('fl_grayscale_60', () =>
    expect(filter.fl_grayscale_60()).toMatchInlineSnapshot(
      `"filter:grayscale(60%);"`,
    ));
  test('fl_grayscale_70', () =>
    expect(filter.fl_grayscale_70()).toMatchInlineSnapshot(
      `"filter:grayscale(70%);"`,
    ));
  test('fl_grayscale_80', () =>
    expect(filter.fl_grayscale_80()).toMatchInlineSnapshot(
      `"filter:grayscale(80%);"`,
    ));
  test('fl_grayscale_90', () =>
    expect(filter.fl_grayscale_90()).toMatchInlineSnapshot(
      `"filter:grayscale(90%);"`,
    ));
  test('fl_hue_0', () =>
    expect(filter.fl_hue_0()).toMatchInlineSnapshot(
      `"filter:hue-rotate(0deg);"`,
    ));
  test('fl_hue_135', () =>
    expect(filter.fl_hue_135()).toMatchInlineSnapshot(
      `"filter:hue-rotate(135deg);"`,
    ));
  test('fl_hue_180', () =>
    expect(filter.fl_hue_180()).toMatchInlineSnapshot(
      `"filter:hue-rotate(180deg);"`,
    ));
  test('fl_hue_225', () =>
    expect(filter.fl_hue_225()).toMatchInlineSnapshot(
      `"filter:hue-rotate(225deg);"`,
    ));
  test('fl_hue_360', () =>
    expect(filter.fl_hue_360()).toMatchInlineSnapshot(
      `"filter:hue-rotate(360deg);"`,
    ));
  test('fl_hue_45', () =>
    expect(filter.fl_hue_45()).toMatchInlineSnapshot(
      `"filter:hue-rotate(45deg);"`,
    ));
  test('fl_hue_90', () =>
    expect(filter.fl_hue_90()).toMatchInlineSnapshot(
      `"filter:hue-rotate(90deg);"`,
    ));
  test('fl_invert_10', () =>
    expect(filter.fl_invert_10()).toMatchInlineSnapshot(
      `"filter:invert(10%);"`,
    ));
  test('fl_invert_100', () =>
    expect(filter.fl_invert_100()).toMatchInlineSnapshot(
      `"filter:invert(100%);"`,
    ));
  test('fl_invert_20', () =>
    expect(filter.fl_invert_20()).toMatchInlineSnapshot(
      `"filter:invert(20%);"`,
    ));
  test('fl_invert_30', () =>
    expect(filter.fl_invert_30()).toMatchInlineSnapshot(
      `"filter:invert(30%);"`,
    ));
  test('fl_invert_40', () =>
    expect(filter.fl_invert_40()).toMatchInlineSnapshot(
      `"filter:invert(40%);"`,
    ));
  test('fl_invert_50', () =>
    expect(filter.fl_invert_50()).toMatchInlineSnapshot(
      `"filter:invert(50%);"`,
    ));
  test('fl_invert_60', () =>
    expect(filter.fl_invert_60()).toMatchInlineSnapshot(
      `"filter:invert(60%);"`,
    ));
  test('fl_invert_70', () =>
    expect(filter.fl_invert_70()).toMatchInlineSnapshot(
      `"filter:invert(70%);"`,
    ));
  test('fl_invert_80', () =>
    expect(filter.fl_invert_80()).toMatchInlineSnapshot(
      `"filter:invert(80%);"`,
    ));
  test('fl_invert_90', () =>
    expect(filter.fl_invert_90()).toMatchInlineSnapshot(
      `"filter:invert(90%);"`,
    ));
  test('fl_opacity_10', () =>
    expect(filter.fl_opacity_10()).toMatchInlineSnapshot(
      `"filter:opacity(10%);"`,
    ));
  test('fl_opacity_100', () =>
    expect(filter.fl_opacity_100()).toMatchInlineSnapshot(
      `"filter:opacity(100%);"`,
    ));
  test('fl_opacity_20', () =>
    expect(filter.fl_opacity_20()).toMatchInlineSnapshot(
      `"filter:opacity(20%);"`,
    ));
  test('fl_opacity_30', () =>
    expect(filter.fl_opacity_30()).toMatchInlineSnapshot(
      `"filter:opacity(30%);"`,
    ));
  test('fl_opacity_40', () =>
    expect(filter.fl_opacity_40()).toMatchInlineSnapshot(
      `"filter:opacity(40%);"`,
    ));
  test('fl_opacity_50', () =>
    expect(filter.fl_opacity_50()).toMatchInlineSnapshot(
      `"filter:opacity(50%);"`,
    ));
  test('fl_opacity_60', () =>
    expect(filter.fl_opacity_60()).toMatchInlineSnapshot(
      `"filter:opacity(60%);"`,
    ));
  test('fl_opacity_70', () =>
    expect(filter.fl_opacity_70()).toMatchInlineSnapshot(
      `"filter:opacity(70%);"`,
    ));
  test('fl_opacity_80', () =>
    expect(filter.fl_opacity_80()).toMatchInlineSnapshot(
      `"filter:opacity(80%);"`,
    ));
  test('fl_opacity_90', () =>
    expect(filter.fl_opacity_90()).toMatchInlineSnapshot(
      `"filter:opacity(90%);"`,
    ));
  test('fl_saturate_1', () =>
    expect(filter.fl_saturate_1()).toMatchInlineSnapshot(
      `"filter:saturate(0.01);"`,
    ));
  test('fl_saturate_10', () =>
    expect(filter.fl_saturate_10()).toMatchInlineSnapshot(
      `"filter:saturate(0.1);"`,
    ));
  test('fl_saturate_100', () =>
    expect(filter.fl_saturate_100()).toMatchInlineSnapshot(
      `"filter:saturate(1);"`,
    ));
  test('fl_saturate_11', () =>
    expect(filter.fl_saturate_11()).toMatchInlineSnapshot(
      `"filter:saturate(0.11);"`,
    ));
  test('fl_saturate_12', () =>
    expect(filter.fl_saturate_12()).toMatchInlineSnapshot(
      `"filter:saturate(0.12);"`,
    ));
  test('fl_saturate_13', () =>
    expect(filter.fl_saturate_13()).toMatchInlineSnapshot(
      `"filter:saturate(0.13);"`,
    ));
  test('fl_saturate_14', () =>
    expect(filter.fl_saturate_14()).toMatchInlineSnapshot(
      `"filter:saturate(0.14);"`,
    ));
  test('fl_saturate_15', () =>
    expect(filter.fl_saturate_15()).toMatchInlineSnapshot(
      `"filter:saturate(0.15);"`,
    ));
  test('fl_saturate_16', () =>
    expect(filter.fl_saturate_16()).toMatchInlineSnapshot(
      `"filter:saturate(0.16);"`,
    ));
  test('fl_saturate_17', () =>
    expect(filter.fl_saturate_17()).toMatchInlineSnapshot(
      `"filter:saturate(0.17);"`,
    ));
  test('fl_saturate_18', () =>
    expect(filter.fl_saturate_18()).toMatchInlineSnapshot(
      `"filter:saturate(0.18);"`,
    ));
  test('fl_saturate_19', () =>
    expect(filter.fl_saturate_19()).toMatchInlineSnapshot(
      `"filter:saturate(0.19);"`,
    ));
  test('fl_saturate_2', () =>
    expect(filter.fl_saturate_2()).toMatchInlineSnapshot(
      `"filter:saturate(0.02);"`,
    ));
  test('fl_saturate_20', () =>
    expect(filter.fl_saturate_20()).toMatchInlineSnapshot(
      `"filter:saturate(0.2);"`,
    ));
  test('fl_saturate_21', () =>
    expect(filter.fl_saturate_21()).toMatchInlineSnapshot(
      `"filter:saturate(0.21);"`,
    ));
  test('fl_saturate_22', () =>
    expect(filter.fl_saturate_22()).toMatchInlineSnapshot(
      `"filter:saturate(0.22);"`,
    ));
  test('fl_saturate_23', () =>
    expect(filter.fl_saturate_23()).toMatchInlineSnapshot(
      `"filter:saturate(0.23);"`,
    ));
  test('fl_saturate_24', () =>
    expect(filter.fl_saturate_24()).toMatchInlineSnapshot(
      `"filter:saturate(0.24);"`,
    ));
  test('fl_saturate_25', () =>
    expect(filter.fl_saturate_25()).toMatchInlineSnapshot(
      `"filter:saturate(0.25);"`,
    ));
  test('fl_saturate_26', () =>
    expect(filter.fl_saturate_26()).toMatchInlineSnapshot(
      `"filter:saturate(0.26);"`,
    ));
  test('fl_saturate_27', () =>
    expect(filter.fl_saturate_27()).toMatchInlineSnapshot(
      `"filter:saturate(0.27);"`,
    ));
  test('fl_saturate_28', () =>
    expect(filter.fl_saturate_28()).toMatchInlineSnapshot(
      `"filter:saturate(0.28);"`,
    ));
  test('fl_saturate_29', () =>
    expect(filter.fl_saturate_29()).toMatchInlineSnapshot(
      `"filter:saturate(0.29);"`,
    ));
  test('fl_saturate_3', () =>
    expect(filter.fl_saturate_3()).toMatchInlineSnapshot(
      `"filter:saturate(0.03);"`,
    ));
  test('fl_saturate_30', () =>
    expect(filter.fl_saturate_30()).toMatchInlineSnapshot(
      `"filter:saturate(0.3);"`,
    ));
  test('fl_saturate_31', () =>
    expect(filter.fl_saturate_31()).toMatchInlineSnapshot(
      `"filter:saturate(0.31);"`,
    ));
  test('fl_saturate_32', () =>
    expect(filter.fl_saturate_32()).toMatchInlineSnapshot(
      `"filter:saturate(0.32);"`,
    ));
  test('fl_saturate_33', () =>
    expect(filter.fl_saturate_33()).toMatchInlineSnapshot(
      `"filter:saturate(0.33);"`,
    ));
  test('fl_saturate_34', () =>
    expect(filter.fl_saturate_34()).toMatchInlineSnapshot(
      `"filter:saturate(0.34);"`,
    ));
  test('fl_saturate_35', () =>
    expect(filter.fl_saturate_35()).toMatchInlineSnapshot(
      `"filter:saturate(0.35);"`,
    ));
  test('fl_saturate_36', () =>
    expect(filter.fl_saturate_36()).toMatchInlineSnapshot(
      `"filter:saturate(0.36);"`,
    ));
  test('fl_saturate_37', () =>
    expect(filter.fl_saturate_37()).toMatchInlineSnapshot(
      `"filter:saturate(0.37);"`,
    ));
  test('fl_saturate_38', () =>
    expect(filter.fl_saturate_38()).toMatchInlineSnapshot(
      `"filter:saturate(0.38);"`,
    ));
  test('fl_saturate_39', () =>
    expect(filter.fl_saturate_39()).toMatchInlineSnapshot(
      `"filter:saturate(0.39);"`,
    ));
  test('fl_saturate_4', () =>
    expect(filter.fl_saturate_4()).toMatchInlineSnapshot(
      `"filter:saturate(0.04);"`,
    ));
  test('fl_saturate_40', () =>
    expect(filter.fl_saturate_40()).toMatchInlineSnapshot(
      `"filter:saturate(0.4);"`,
    ));
  test('fl_saturate_41', () =>
    expect(filter.fl_saturate_41()).toMatchInlineSnapshot(
      `"filter:saturate(0.41);"`,
    ));
  test('fl_saturate_42', () =>
    expect(filter.fl_saturate_42()).toMatchInlineSnapshot(
      `"filter:saturate(0.42);"`,
    ));
  test('fl_saturate_43', () =>
    expect(filter.fl_saturate_43()).toMatchInlineSnapshot(
      `"filter:saturate(0.43);"`,
    ));
  test('fl_saturate_44', () =>
    expect(filter.fl_saturate_44()).toMatchInlineSnapshot(
      `"filter:saturate(0.44);"`,
    ));
  test('fl_saturate_45', () =>
    expect(filter.fl_saturate_45()).toMatchInlineSnapshot(
      `"filter:saturate(0.45);"`,
    ));
  test('fl_saturate_46', () =>
    expect(filter.fl_saturate_46()).toMatchInlineSnapshot(
      `"filter:saturate(0.46);"`,
    ));
  test('fl_saturate_47', () =>
    expect(filter.fl_saturate_47()).toMatchInlineSnapshot(
      `"filter:saturate(0.47);"`,
    ));
  test('fl_saturate_48', () =>
    expect(filter.fl_saturate_48()).toMatchInlineSnapshot(
      `"filter:saturate(0.48);"`,
    ));
  test('fl_saturate_49', () =>
    expect(filter.fl_saturate_49()).toMatchInlineSnapshot(
      `"filter:saturate(0.49);"`,
    ));
  test('fl_saturate_5', () =>
    expect(filter.fl_saturate_5()).toMatchInlineSnapshot(
      `"filter:saturate(0.05);"`,
    ));
  test('fl_saturate_50', () =>
    expect(filter.fl_saturate_50()).toMatchInlineSnapshot(
      `"filter:saturate(0.5);"`,
    ));
  test('fl_saturate_51', () =>
    expect(filter.fl_saturate_51()).toMatchInlineSnapshot(
      `"filter:saturate(0.51);"`,
    ));
  test('fl_saturate_52', () =>
    expect(filter.fl_saturate_52()).toMatchInlineSnapshot(
      `"filter:saturate(0.52);"`,
    ));
  test('fl_saturate_53', () =>
    expect(filter.fl_saturate_53()).toMatchInlineSnapshot(
      `"filter:saturate(0.53);"`,
    ));
  test('fl_saturate_54', () =>
    expect(filter.fl_saturate_54()).toMatchInlineSnapshot(
      `"filter:saturate(0.54);"`,
    ));
  test('fl_saturate_55', () =>
    expect(filter.fl_saturate_55()).toMatchInlineSnapshot(
      `"filter:saturate(0.55);"`,
    ));
  test('fl_saturate_56', () =>
    expect(filter.fl_saturate_56()).toMatchInlineSnapshot(
      `"filter:saturate(0.56);"`,
    ));
  test('fl_saturate_57', () =>
    expect(filter.fl_saturate_57()).toMatchInlineSnapshot(
      `"filter:saturate(0.57);"`,
    ));
  test('fl_saturate_58', () =>
    expect(filter.fl_saturate_58()).toMatchInlineSnapshot(
      `"filter:saturate(0.58);"`,
    ));
  test('fl_saturate_59', () =>
    expect(filter.fl_saturate_59()).toMatchInlineSnapshot(
      `"filter:saturate(0.59);"`,
    ));
  test('fl_saturate_6', () =>
    expect(filter.fl_saturate_6()).toMatchInlineSnapshot(
      `"filter:saturate(0.06);"`,
    ));
  test('fl_saturate_60', () =>
    expect(filter.fl_saturate_60()).toMatchInlineSnapshot(
      `"filter:saturate(0.6);"`,
    ));
  test('fl_saturate_61', () =>
    expect(filter.fl_saturate_61()).toMatchInlineSnapshot(
      `"filter:saturate(0.61);"`,
    ));
  test('fl_saturate_62', () =>
    expect(filter.fl_saturate_62()).toMatchInlineSnapshot(
      `"filter:saturate(0.62);"`,
    ));
  test('fl_saturate_63', () =>
    expect(filter.fl_saturate_63()).toMatchInlineSnapshot(
      `"filter:saturate(0.63);"`,
    ));
  test('fl_saturate_64', () =>
    expect(filter.fl_saturate_64()).toMatchInlineSnapshot(
      `"filter:saturate(0.64);"`,
    ));
  test('fl_saturate_65', () =>
    expect(filter.fl_saturate_65()).toMatchInlineSnapshot(
      `"filter:saturate(0.65);"`,
    ));
  test('fl_saturate_66', () =>
    expect(filter.fl_saturate_66()).toMatchInlineSnapshot(
      `"filter:saturate(0.66);"`,
    ));
  test('fl_saturate_67', () =>
    expect(filter.fl_saturate_67()).toMatchInlineSnapshot(
      `"filter:saturate(0.67);"`,
    ));
  test('fl_saturate_68', () =>
    expect(filter.fl_saturate_68()).toMatchInlineSnapshot(
      `"filter:saturate(0.68);"`,
    ));
  test('fl_saturate_69', () =>
    expect(filter.fl_saturate_69()).toMatchInlineSnapshot(
      `"filter:saturate(0.69);"`,
    ));
  test('fl_saturate_7', () =>
    expect(filter.fl_saturate_7()).toMatchInlineSnapshot(
      `"filter:saturate(0.07);"`,
    ));
  test('fl_saturate_70', () =>
    expect(filter.fl_saturate_70()).toMatchInlineSnapshot(
      `"filter:saturate(0.7);"`,
    ));
  test('fl_saturate_71', () =>
    expect(filter.fl_saturate_71()).toMatchInlineSnapshot(
      `"filter:saturate(0.71);"`,
    ));
  test('fl_saturate_72', () =>
    expect(filter.fl_saturate_72()).toMatchInlineSnapshot(
      `"filter:saturate(0.72);"`,
    ));
  test('fl_saturate_73', () =>
    expect(filter.fl_saturate_73()).toMatchInlineSnapshot(
      `"filter:saturate(0.73);"`,
    ));
  test('fl_saturate_74', () =>
    expect(filter.fl_saturate_74()).toMatchInlineSnapshot(
      `"filter:saturate(0.74);"`,
    ));
  test('fl_saturate_75', () =>
    expect(filter.fl_saturate_75()).toMatchInlineSnapshot(
      `"filter:saturate(0.75);"`,
    ));
  test('fl_saturate_76', () =>
    expect(filter.fl_saturate_76()).toMatchInlineSnapshot(
      `"filter:saturate(0.76);"`,
    ));
  test('fl_saturate_77', () =>
    expect(filter.fl_saturate_77()).toMatchInlineSnapshot(
      `"filter:saturate(0.77);"`,
    ));
  test('fl_saturate_78', () =>
    expect(filter.fl_saturate_78()).toMatchInlineSnapshot(
      `"filter:saturate(0.78);"`,
    ));
  test('fl_saturate_79', () =>
    expect(filter.fl_saturate_79()).toMatchInlineSnapshot(
      `"filter:saturate(0.79);"`,
    ));
  test('fl_saturate_8', () =>
    expect(filter.fl_saturate_8()).toMatchInlineSnapshot(
      `"filter:saturate(0.08);"`,
    ));
  test('fl_saturate_80', () =>
    expect(filter.fl_saturate_80()).toMatchInlineSnapshot(
      `"filter:saturate(0.8);"`,
    ));
  test('fl_saturate_81', () =>
    expect(filter.fl_saturate_81()).toMatchInlineSnapshot(
      `"filter:saturate(0.81);"`,
    ));
  test('fl_saturate_82', () =>
    expect(filter.fl_saturate_82()).toMatchInlineSnapshot(
      `"filter:saturate(0.82);"`,
    ));
  test('fl_saturate_83', () =>
    expect(filter.fl_saturate_83()).toMatchInlineSnapshot(
      `"filter:saturate(0.83);"`,
    ));
  test('fl_saturate_84', () =>
    expect(filter.fl_saturate_84()).toMatchInlineSnapshot(
      `"filter:saturate(0.84);"`,
    ));
  test('fl_saturate_85', () =>
    expect(filter.fl_saturate_85()).toMatchInlineSnapshot(
      `"filter:saturate(0.85);"`,
    ));
  test('fl_saturate_86', () =>
    expect(filter.fl_saturate_86()).toMatchInlineSnapshot(
      `"filter:saturate(0.86);"`,
    ));
  test('fl_saturate_87', () =>
    expect(filter.fl_saturate_87()).toMatchInlineSnapshot(
      `"filter:saturate(0.87);"`,
    ));
  test('fl_saturate_88', () =>
    expect(filter.fl_saturate_88()).toMatchInlineSnapshot(
      `"filter:saturate(0.88);"`,
    ));
  test('fl_saturate_89', () =>
    expect(filter.fl_saturate_89()).toMatchInlineSnapshot(
      `"filter:saturate(0.89);"`,
    ));
  test('fl_saturate_9', () =>
    expect(filter.fl_saturate_9()).toMatchInlineSnapshot(
      `"filter:saturate(0.09);"`,
    ));
  test('fl_saturate_90', () =>
    expect(filter.fl_saturate_90()).toMatchInlineSnapshot(
      `"filter:saturate(0.9);"`,
    ));
  test('fl_saturate_91', () =>
    expect(filter.fl_saturate_91()).toMatchInlineSnapshot(
      `"filter:saturate(0.91);"`,
    ));
  test('fl_saturate_92', () =>
    expect(filter.fl_saturate_92()).toMatchInlineSnapshot(
      `"filter:saturate(0.92);"`,
    ));
  test('fl_saturate_93', () =>
    expect(filter.fl_saturate_93()).toMatchInlineSnapshot(
      `"filter:saturate(0.93);"`,
    ));
  test('fl_saturate_94', () =>
    expect(filter.fl_saturate_94()).toMatchInlineSnapshot(
      `"filter:saturate(0.94);"`,
    ));
  test('fl_saturate_95', () =>
    expect(filter.fl_saturate_95()).toMatchInlineSnapshot(
      `"filter:saturate(0.95);"`,
    ));
  test('fl_saturate_96', () =>
    expect(filter.fl_saturate_96()).toMatchInlineSnapshot(
      `"filter:saturate(0.96);"`,
    ));
  test('fl_saturate_97', () =>
    expect(filter.fl_saturate_97()).toMatchInlineSnapshot(
      `"filter:saturate(0.97);"`,
    ));
  test('fl_saturate_98', () =>
    expect(filter.fl_saturate_98()).toMatchInlineSnapshot(
      `"filter:saturate(0.98);"`,
    ));
  test('fl_saturate_99', () =>
    expect(filter.fl_saturate_99()).toMatchInlineSnapshot(
      `"filter:saturate(0.99);"`,
    ));
  test('fl_sd_1', () =>
    expect(filter.fl_sd_1()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.2))drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.14))drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_10', () =>
    expect(filter.fl_sd_10()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.2))drop-shadow(0px 10px 14px rgba(0, 0, 0, 0.14))drop-shadow(0px 4px 18px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_11', () =>
    expect(filter.fl_sd_11()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 6px 7px rgba(0, 0, 0, 0.2))drop-shadow(0px 11px 15px rgba(0, 0, 0, 0.14))drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_12', () =>
    expect(filter.fl_sd_12()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 7px 8px rgba(0, 0, 0, 0.2))drop-shadow(0px 12px 17px rgba(0, 0, 0, 0.14))drop-shadow(0px 5px 22px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_13', () =>
    expect(filter.fl_sd_13()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 7px 8px rgba(0, 0, 0, 0.2))drop-shadow(0px 13px 19px rgba(0, 0, 0, 0.14))drop-shadow(0px 5px 24px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_14', () =>
    expect(filter.fl_sd_14()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 7px 9px rgba(0, 0, 0, 0.2))drop-shadow(0px 14px 21px rgba(0, 0, 0, 0.14))drop-shadow(0px 5px 26px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_15', () =>
    expect(filter.fl_sd_15()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 8px 9px rgba(0, 0, 0, 0.2))drop-shadow(0px 15px 22px rgba(0, 0, 0, 0.14))drop-shadow(0px 6px 28px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_16', () =>
    expect(filter.fl_sd_16()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.2))drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.14))drop-shadow(0px 6px 30px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_17', () =>
    expect(filter.fl_sd_17()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 8px 11px rgba(0, 0, 0, 0.2))drop-shadow(0px 17px 26px rgba(0, 0, 0, 0.14))drop-shadow(0px 6px 32px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_18', () =>
    expect(filter.fl_sd_18()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 9px 11px rgba(0, 0, 0, 0.2))drop-shadow(0px 18px 28px rgba(0, 0, 0, 0.14))drop-shadow(0px 7px 34px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_19', () =>
    expect(filter.fl_sd_19()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 9px 12px rgba(0, 0, 0, 0.2))drop-shadow(0px 19px 29px rgba(0, 0, 0, 0.14))drop-shadow(0px 7px 36px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_2', () =>
    expect(filter.fl_sd_2()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.2))drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.14))drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_20', () =>
    expect(filter.fl_sd_20()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 10px 13px rgba(0, 0, 0, 0.2))drop-shadow(0px 20px 31px rgba(0, 0, 0, 0.14))drop-shadow(0px 8px 38px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_21', () =>
    expect(filter.fl_sd_21()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 10px 13px rgba(0, 0, 0, 0.2))drop-shadow(0px 21px 33px rgba(0, 0, 0, 0.14))drop-shadow(0px 8px 40px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_22', () =>
    expect(filter.fl_sd_22()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 10px 14px rgba(0, 0, 0, 0.2))drop-shadow(0px 22px 35px rgba(0, 0, 0, 0.14))drop-shadow(0px 8px 42px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_23', () =>
    expect(filter.fl_sd_23()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 11px 14px rgba(0, 0, 0, 0.2))drop-shadow(0px 23px 36px rgba(0, 0, 0, 0.14))drop-shadow(0px 9px 44px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_24', () =>
    expect(filter.fl_sd_24()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 11px 15px rgba(0, 0, 0, 0.2))drop-shadow(0px 24px 38px rgba(0, 0, 0, 0.14))drop-shadow(0px 9px 46px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_3', () =>
    expect(filter.fl_sd_3()).toMatchInlineSnapshot(
      `"filter:drop-shadow(1px 8px 0px rgba(0, 0, 0, 0.2))drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.14))drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_4', () =>
    expect(filter.fl_sd_4()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.14))drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_5', () =>
    expect(filter.fl_sd_5()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.2))drop-shadow(0px 5px 8px rgba(0, 0, 0, 0.14))drop-shadow(0px 1px 14px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_6', () =>
    expect(filter.fl_sd_6()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.2))drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.14))drop-shadow(0px 1px 18px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_7', () =>
    expect(filter.fl_sd_7()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.2))drop-shadow(0px 7px 10px rgba(0, 0, 0, 0.14))drop-shadow(0px 2px 16px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_8', () =>
    expect(filter.fl_sd_8()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2))drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.14))drop-shadow(0px 3px 14px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sd_9', () =>
    expect(filter.fl_sd_9()).toMatchInlineSnapshot(
      `"filter:drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.2))drop-shadow(0px 9px 12px rgba(0, 0, 0, 0.14))drop-shadow(0px 3px 16px rgba(0, 0, 0, 0.12));"`,
    ));
  test('fl_sepia_10', () =>
    expect(filter.fl_sepia_10()).toMatchInlineSnapshot(`"filter:sepia(10%);"`));
  test('fl_sepia_100', () =>
    expect(filter.fl_sepia_100()).toMatchInlineSnapshot(
      `"filter:sepia(100%);"`,
    ));
  test('fl_sepia_20', () =>
    expect(filter.fl_sepia_20()).toMatchInlineSnapshot(`"filter:sepia(20%);"`));
  test('fl_sepia_30', () =>
    expect(filter.fl_sepia_30()).toMatchInlineSnapshot(`"filter:sepia(30%);"`));
  test('fl_sepia_40', () =>
    expect(filter.fl_sepia_40()).toMatchInlineSnapshot(`"filter:sepia(40%);"`));
  test('fl_sepia_50', () =>
    expect(filter.fl_sepia_50()).toMatchInlineSnapshot(`"filter:sepia(50%);"`));
  test('fl_sepia_60', () =>
    expect(filter.fl_sepia_60()).toMatchInlineSnapshot(`"filter:sepia(60%);"`));
  test('fl_sepia_70', () =>
    expect(filter.fl_sepia_70()).toMatchInlineSnapshot(`"filter:sepia(70%);"`));
  test('fl_sepia_80', () =>
    expect(filter.fl_sepia_80()).toMatchInlineSnapshot(`"filter:sepia(80%);"`));
  test('fl_sepia_90', () =>
    expect(filter.fl_sepia_90()).toMatchInlineSnapshot(`"filter:sepia(90%);"`));
});
