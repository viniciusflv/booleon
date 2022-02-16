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
  test('fl_brightness_10', () =>
    expect(filter.fl_brightness_10()).toMatchInlineSnapshot(
      `"filter:brightness(0.1);"`,
    ));
  test('fl_brightness_100', () =>
    expect(filter.fl_brightness_100()).toMatchInlineSnapshot(
      `"filter:brightness(1);"`,
    ));

  test('fl_brightness_20', () =>
    expect(filter.fl_brightness_20()).toMatchInlineSnapshot(
      `"filter:brightness(0.2);"`,
    ));

  test('fl_brightness_30', () =>
    expect(filter.fl_brightness_30()).toMatchInlineSnapshot(
      `"filter:brightness(0.3);"`,
    ));
  test('fl_brightness_40', () =>
    expect(filter.fl_brightness_40()).toMatchInlineSnapshot(
      `"filter:brightness(0.4);"`,
    ));
  test('fl_brightness_50', () =>
    expect(filter.fl_brightness_50()).toMatchInlineSnapshot(
      `"filter:brightness(0.5);"`,
    ));
  test('fl_brightness_60', () =>
    expect(filter.fl_brightness_60()).toMatchInlineSnapshot(
      `"filter:brightness(0.6);"`,
    ));
  test('fl_brightness_70', () =>
    expect(filter.fl_brightness_70()).toMatchInlineSnapshot(
      `"filter:brightness(0.7);"`,
    ));
  test('fl_brightness_80', () =>
    expect(filter.fl_brightness_80()).toMatchInlineSnapshot(
      `"filter:brightness(0.8);"`,
    ));
  test('fl_brightness_90', () =>
    expect(filter.fl_brightness_90()).toMatchInlineSnapshot(
      `"filter:brightness(0.9);"`,
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
  test('fl_saturate_10', () =>
    expect(filter.fl_saturate_10()).toMatchInlineSnapshot(
      `"filter:saturate(0.1);"`,
    ));
  test('fl_saturate_100', () =>
    expect(filter.fl_saturate_100()).toMatchInlineSnapshot(
      `"filter:saturate(1);"`,
    ));
  test('fl_saturate_20', () =>
    expect(filter.fl_saturate_20()).toMatchInlineSnapshot(
      `"filter:saturate(0.2);"`,
    ));
  test('fl_saturate_30', () =>
    expect(filter.fl_saturate_30()).toMatchInlineSnapshot(
      `"filter:saturate(0.3);"`,
    ));
  test('fl_saturate_40', () =>
    expect(filter.fl_saturate_40()).toMatchInlineSnapshot(
      `"filter:saturate(0.4);"`,
    ));
  test('fl_saturate_50', () =>
    expect(filter.fl_saturate_50()).toMatchInlineSnapshot(
      `"filter:saturate(0.5);"`,
    ));
  test('fl_saturate_60', () =>
    expect(filter.fl_saturate_60()).toMatchInlineSnapshot(
      `"filter:saturate(0.6);"`,
    ));
  test('fl_saturate_70', () =>
    expect(filter.fl_saturate_70()).toMatchInlineSnapshot(
      `"filter:saturate(0.7);"`,
    ));
  test('fl_saturate_80', () =>
    expect(filter.fl_saturate_80()).toMatchInlineSnapshot(
      `"filter:saturate(0.8);"`,
    ));
  test('fl_saturate_90', () =>
    expect(filter.fl_saturate_90()).toMatchInlineSnapshot(
      `"filter:saturate(0.9);"`,
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
