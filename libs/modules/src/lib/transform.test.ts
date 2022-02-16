import { transform } from './transform';

describe('transform', () => {
  test('fl_hue_0', () =>
    expect(transform.fl_hue_0()).toMatchInlineSnapshot(
      `"transform:rotate(0deg);"`,
    ));
  test('fl_hue_135', () =>
    expect(transform.fl_hue_135()).toMatchInlineSnapshot(
      `"transform:rotate(135deg);"`,
    ));
  test('fl_hue_180', () =>
    expect(transform.fl_hue_180()).toMatchInlineSnapshot(
      `"transform:rotate(180deg);"`,
    ));
  test('fl_hue_225', () =>
    expect(transform.fl_hue_225()).toMatchInlineSnapshot(
      `"transform:rotate(225deg);"`,
    ));
  test('fl_hue_360', () =>
    expect(transform.fl_hue_360()).toMatchInlineSnapshot(
      `"transform:rotate(360deg);"`,
    ));
  test('fl_hue_45', () =>
    expect(transform.fl_hue_45()).toMatchInlineSnapshot(
      `"transform:rotate(45deg);"`,
    ));
  test('fl_hue_90', () =>
    expect(transform.fl_hue_90()).toMatchInlineSnapshot(
      `"transform:rotate(90deg);"`,
    ));
  test('tf_ori_bottom', () =>
    expect(transform.tf_ori_bottom()).toMatchInlineSnapshot(
      `"transform-origin:bottom;"`,
    ));
  test('tf_ori_bottom_left', () =>
    expect(transform.tf_ori_bottom_left()).toMatchInlineSnapshot(
      `"transform-origin:bottom left;"`,
    ));
  test('tf_ori_bottom_right', () =>
    expect(transform.tf_ori_bottom_right()).toMatchInlineSnapshot(
      `"transform-origin:bottom right;"`,
    ));
  test('tf_ori_left', () =>
    expect(transform.tf_ori_left()).toMatchInlineSnapshot(
      `"transform-origin:left;"`,
    ));
  test('tf_ori_right', () =>
    expect(transform.tf_ori_right()).toMatchInlineSnapshot(
      `"transform-origin:right;"`,
    ));
  test('tf_ori_top', () =>
    expect(transform.tf_ori_top()).toMatchInlineSnapshot(
      `"transform-origin:top;"`,
    ));
  test('tf_ori_top_left', () =>
    expect(transform.tf_ori_top_left()).toMatchInlineSnapshot(
      `"transform-origin:top left;"`,
    ));
  test('tf_ori_top_right', () =>
    expect(transform.tf_ori_top_right()).toMatchInlineSnapshot(
      `"transform-origin:top right;"`,
    ));
  test('tf_sk_0', () =>
    expect(transform.tf_sk_0()).toMatchInlineSnapshot(
      `"transform:skew(0deg,0deg);"`,
    ));
  test('tf_sk_135', () =>
    expect(transform.tf_sk_135()).toMatchInlineSnapshot(
      `"transform:skew(135deg,135deg);"`,
    ));
  test('tf_sk_180', () =>
    expect(transform.tf_sk_180()).toMatchInlineSnapshot(
      `"transform:skew(180deg,180deg);"`,
    ));
  test('tf_sk_225', () =>
    expect(transform.tf_sk_225()).toMatchInlineSnapshot(
      `"transform:skew(225deg,225deg);"`,
    ));
  test('tf_sk_360', () =>
    expect(transform.tf_sk_360()).toMatchInlineSnapshot(
      `"transform:skew(360deg,360deg);"`,
    ));
  test('tf_sk_45', () =>
    expect(transform.tf_sk_45()).toMatchInlineSnapshot(
      `"transform:skew(45deg,45deg);"`,
    ));
  test('tf_sk_90', () =>
    expect(transform.tf_sk_90()).toMatchInlineSnapshot(
      `"transform:skew(90deg,90deg);"`,
    ));
  test('tf_skx_0', () =>
    expect(transform.tf_skx_0()).toMatchInlineSnapshot(
      `"transform:skewX(0deg);"`,
    ));
  test('tf_skx_135', () =>
    expect(transform.tf_skx_135()).toMatchInlineSnapshot(
      `"transform:skewX(135deg);"`,
    ));
  test('tf_skx_180', () =>
    expect(transform.tf_skx_180()).toMatchInlineSnapshot(
      `"transform:skewX(180deg);"`,
    ));
  test('tf_skx_225', () =>
    expect(transform.tf_skx_225()).toMatchInlineSnapshot(
      `"transform:skewX(225deg);"`,
    ));
  test('tf_skx_360', () =>
    expect(transform.tf_skx_360()).toMatchInlineSnapshot(
      `"transform:skewX(360deg);"`,
    ));
  test('tf_skx_45', () =>
    expect(transform.tf_skx_45()).toMatchInlineSnapshot(
      `"transform:skewX(45deg);"`,
    ));
  test('tf_skx_90', () =>
    expect(transform.tf_skx_90()).toMatchInlineSnapshot(
      `"transform:skewX(90deg);"`,
    ));
  test('tf_sky_0', () =>
    expect(transform.tf_sky_0()).toMatchInlineSnapshot(
      `"transform:skewY(0deg);"`,
    ));
  test('tf_sky_135', () =>
    expect(transform.tf_sky_135()).toMatchInlineSnapshot(
      `"transform:skewY(135deg);"`,
    ));
  test('tf_sky_180', () =>
    expect(transform.tf_sky_180()).toMatchInlineSnapshot(
      `"transform:skewY(180deg);"`,
    ));
  test('tf_sky_225', () =>
    expect(transform.tf_sky_225()).toMatchInlineSnapshot(
      `"transform:skewY(225deg);"`,
    ));
  test('tf_sky_360', () =>
    expect(transform.tf_sky_360()).toMatchInlineSnapshot(
      `"transform:skewY(360deg);"`,
    ));
  test('tf_sky_45', () =>
    expect(transform.tf_sky_45()).toMatchInlineSnapshot(
      `"transform:skewY(45deg);"`,
    ));
  test('tf_sky_90', () =>
    expect(transform.tf_sky_90()).toMatchInlineSnapshot(
      `"transform:skewY(90deg);"`,
    ));
  test('tf_sl_10', () =>
    expect(transform.tf_sl_10()).toMatchInlineSnapshot(
      `"transform:scale(0.1,0.1);"`,
    ));
  test('tf_sl_100', () =>
    expect(transform.tf_sl_100()).toMatchInlineSnapshot(
      `"transform:scale(1,1);"`,
    ));
  test('tf_sl_20', () =>
    expect(transform.tf_sl_20()).toMatchInlineSnapshot(
      `"transform:scale(0.2,0.2);"`,
    ));
  test('tf_sl_30', () =>
    expect(transform.tf_sl_30()).toMatchInlineSnapshot(
      `"transform:scale(0.3,0.3);"`,
    ));
  test('tf_sl_40', () =>
    expect(transform.tf_sl_40()).toMatchInlineSnapshot(
      `"transform:scale(0.4,0.4);"`,
    ));
  test('tf_sl_50', () =>
    expect(transform.tf_sl_50()).toMatchInlineSnapshot(
      `"transform:scale(0.5,0.5);"`,
    ));
  test('tf_sl_60', () =>
    expect(transform.tf_sl_60()).toMatchInlineSnapshot(
      `"transform:scale(0.6,0.6);"`,
    ));
  test('tf_sl_70', () =>
    expect(transform.tf_sl_70()).toMatchInlineSnapshot(
      `"transform:scale(0.7,0.7);"`,
    ));
  test('tf_sl_80', () =>
    expect(transform.tf_sl_80()).toMatchInlineSnapshot(
      `"transform:scale(0.8,0.8);"`,
    ));
  test('tf_sl_90', () =>
    expect(transform.tf_sl_90()).toMatchInlineSnapshot(
      `"transform:scale(0.9,0.9);"`,
    ));
  test('tf_slx_10', () =>
    expect(transform.tf_slx_10()).toMatchInlineSnapshot(
      `"transform:scaleX(0.1);"`,
    ));
  test('tf_slx_100', () =>
    expect(transform.tf_slx_100()).toMatchInlineSnapshot(
      `"transform:scaleX(1);"`,
    ));
  test('tf_slx_20', () =>
    expect(transform.tf_slx_20()).toMatchInlineSnapshot(
      `"transform:scaleX(0.2);"`,
    ));
  test('tf_slx_30', () =>
    expect(transform.tf_slx_30()).toMatchInlineSnapshot(
      `"transform:scaleX(0.3);"`,
    ));
  test('tf_slx_40', () =>
    expect(transform.tf_slx_40()).toMatchInlineSnapshot(
      `"transform:scaleX(0.4);"`,
    ));
  test('tf_slx_50', () =>
    expect(transform.tf_slx_50()).toMatchInlineSnapshot(
      `"transform:scaleX(0.5);"`,
    ));
  test('tf_slx_60', () =>
    expect(transform.tf_slx_60()).toMatchInlineSnapshot(
      `"transform:scaleX(0.6);"`,
    ));
  test('tf_slx_70', () =>
    expect(transform.tf_slx_70()).toMatchInlineSnapshot(
      `"transform:scaleX(0.7);"`,
    ));
  test('tf_slx_80', () =>
    expect(transform.tf_slx_80()).toMatchInlineSnapshot(
      `"transform:scaleX(0.8);"`,
    ));
  test('tf_slx_90', () =>
    expect(transform.tf_slx_90()).toMatchInlineSnapshot(
      `"transform:scaleX(0.9);"`,
    ));
  test('tf_sly_10', () =>
    expect(transform.tf_sly_10()).toMatchInlineSnapshot(
      `"transform:scaleY(0.1);"`,
    ));
  test('tf_sly_100', () =>
    expect(transform.tf_sly_100()).toMatchInlineSnapshot(
      `"transform:scaleY(1);"`,
    ));
  test('tf_sly_20', () =>
    expect(transform.tf_sly_20()).toMatchInlineSnapshot(
      `"transform:scaleY(0.2);"`,
    ));
  test('tf_sly_30', () =>
    expect(transform.tf_sly_30()).toMatchInlineSnapshot(
      `"transform:scaleY(0.3);"`,
    ));
  test('tf_sly_40', () =>
    expect(transform.tf_sly_40()).toMatchInlineSnapshot(
      `"transform:scaleY(0.4);"`,
    ));
  test('tf_sly_50', () =>
    expect(transform.tf_sly_50()).toMatchInlineSnapshot(
      `"transform:scaleY(0.5);"`,
    ));
  test('tf_sly_60', () =>
    expect(transform.tf_sly_60()).toMatchInlineSnapshot(
      `"transform:scaleY(0.6);"`,
    ));
  test('tf_sly_70', () =>
    expect(transform.tf_sly_70()).toMatchInlineSnapshot(
      `"transform:scaleY(0.7);"`,
    ));
  test('tf_sly_80', () =>
    expect(transform.tf_sly_80()).toMatchInlineSnapshot(
      `"transform:scaleY(0.8);"`,
    ));
  test('tf_sly_90', () =>
    expect(transform.tf_sly_90()).toMatchInlineSnapshot(
      `"transform:scaleY(0.9);"`,
    ));
  test('tf_tl_10xl', () =>
    expect(transform.tf_tl_10xl()).toMatchInlineSnapshot(
      `"transform:translate(12rem,12rem);"`,
    ));
  test('tf_tl_11xl', () =>
    expect(transform.tf_tl_11xl()).toMatchInlineSnapshot(
      `"transform:translate(24rem,24rem);"`,
    ));
  test('tf_tl_12xl', () =>
    expect(transform.tf_tl_12xl()).toMatchInlineSnapshot(
      `"transform:translate(32rem,32rem);"`,
    ));
  test('tf_tl_13xl', () =>
    expect(transform.tf_tl_13xl()).toMatchInlineSnapshot(
      `"transform:translate(48rem,48rem);"`,
    ));
  test('tf_tl_14xl', () =>
    expect(transform.tf_tl_14xl()).toMatchInlineSnapshot(
      `"transform:translate(64rem,64rem);"`,
    ));
  test('tf_tl_15xl', () =>
    expect(transform.tf_tl_15xl()).toMatchInlineSnapshot(
      `"transform:translate(96rem,96rem);"`,
    ));
  test('tf_tl_16xl', () =>
    expect(transform.tf_tl_16xl()).toMatchInlineSnapshot(
      `"transform:translate(128rem,128rem);"`,
    ));
  test('tf_tl_2xl', () =>
    expect(transform.tf_tl_2xl()).toMatchInlineSnapshot(
      `"transform:translate(1rem,1rem);"`,
    ));
  test('tf_tl_3xl', () =>
    expect(transform.tf_tl_3xl()).toMatchInlineSnapshot(
      `"transform:translate(1.5rem,1.5rem);"`,
    ));
  test('tf_tl_4xl', () =>
    expect(transform.tf_tl_4xl()).toMatchInlineSnapshot(
      `"transform:translate(2rem,2rem);"`,
    ));
  test('tf_tl_5xl', () =>
    expect(transform.tf_tl_5xl()).toMatchInlineSnapshot(
      `"transform:translate(3rem,3rem);"`,
    ));
  test('tf_tl_6xl', () =>
    expect(transform.tf_tl_6xl()).toMatchInlineSnapshot(
      `"transform:translate(4rem,4rem);"`,
    ));
  test('tf_tl_7xl', () =>
    expect(transform.tf_tl_7xl()).toMatchInlineSnapshot(
      `"transform:translate(6rem,6rem);"`,
    ));
  test('tf_tl_8xl', () =>
    expect(transform.tf_tl_8xl()).toMatchInlineSnapshot(
      `"transform:translate(8rem,8rem);"`,
    ));
  test('tf_tl_9xl', () =>
    expect(transform.tf_tl_9xl()).toMatchInlineSnapshot(
      `"transform:translate(16rem,16rem);"`,
    ));
  test('tf_tl_auto', () =>
    expect(transform.tf_tl_auto()).toMatchInlineSnapshot(
      `"transform:translate(auto,auto);"`,
    ));
  test('tf_tl_lg', () =>
    expect(transform.tf_tl_lg()).toMatchInlineSnapshot(
      `"transform:translate(0.5rem,0.5rem);"`,
    ));
  test('tf_tl_md', () =>
    expect(transform.tf_tl_md()).toMatchInlineSnapshot(
      `"transform:translate(0.375rem,0.375rem);"`,
    ));
  test('tf_tl_none', () =>
    expect(transform.tf_tl_none()).toMatchInlineSnapshot(
      `"transform:translate(0rem,0rem);"`,
    ));
  test('tf_tl_percentage_10', () =>
    expect(transform.tf_tl_percentage_10()).toMatchInlineSnapshot(
      `"transform:translate(10%,10%);"`,
    ));
  test('tf_tl_percentage_100', () =>
    expect(transform.tf_tl_percentage_100()).toMatchInlineSnapshot(
      `"transform:translate(100%,100%);"`,
    ));
  test('tf_tl_percentage_20', () =>
    expect(transform.tf_tl_percentage_20()).toMatchInlineSnapshot(
      `"transform:translate(20%,20%);"`,
    ));
  test('tf_tl_percentage_30', () =>
    expect(transform.tf_tl_percentage_30()).toMatchInlineSnapshot(
      `"transform:translate(30%,30%);"`,
    ));
  test('tf_tl_percentage_40', () =>
    expect(transform.tf_tl_percentage_40()).toMatchInlineSnapshot(
      `"transform:translate(40%,40%);"`,
    ));
  test('tf_tl_percentage_50', () =>
    expect(transform.tf_tl_percentage_50()).toMatchInlineSnapshot(
      `"transform:translate(50%,50%);"`,
    ));
  test('tf_tl_percentage_60', () =>
    expect(transform.tf_tl_percentage_60()).toMatchInlineSnapshot(
      `"transform:translate(60%,60%);"`,
    ));
  test('tf_tl_percentage_70', () =>
    expect(transform.tf_tl_percentage_70()).toMatchInlineSnapshot(
      `"transform:translate(70%,70%);"`,
    ));
  test('tf_tl_percentage_80', () =>
    expect(transform.tf_tl_percentage_80()).toMatchInlineSnapshot(
      `"transform:translate(80%,80%);"`,
    ));
  test('tf_tl_percentage_90', () =>
    expect(transform.tf_tl_percentage_90()).toMatchInlineSnapshot(
      `"transform:translate(90%,90%);"`,
    ));
  test('tf_tl_px', () =>
    expect(transform.tf_tl_px()).toMatchInlineSnapshot(
      `"transform:translate(0.0625rem,0.0625rem);"`,
    ));
  test('tf_tl_screen_height_10', () =>
    expect(transform.tf_tl_screen_height_10()).toMatchInlineSnapshot(
      `"transform:translate(10vh,10vh);"`,
    ));
  test('tf_tl_screen_height_100', () =>
    expect(transform.tf_tl_screen_height_100()).toMatchInlineSnapshot(
      `"transform:translate(100vh,100vh);"`,
    ));
  test('tf_tl_screen_height_20', () =>
    expect(transform.tf_tl_screen_height_20()).toMatchInlineSnapshot(
      `"transform:translate(20vh,20vh);"`,
    ));
  test('tf_tl_screen_height_30', () =>
    expect(transform.tf_tl_screen_height_30()).toMatchInlineSnapshot(
      `"transform:translate(30vh,30vh);"`,
    ));
  test('tf_tl_screen_height_40', () =>
    expect(transform.tf_tl_screen_height_40()).toMatchInlineSnapshot(
      `"transform:translate(40vh,40vh);"`,
    ));
  test('tf_tl_screen_height_50', () =>
    expect(transform.tf_tl_screen_height_50()).toMatchInlineSnapshot(
      `"transform:translate(50vh,50vh);"`,
    ));
  test('tf_tl_screen_height_60', () =>
    expect(transform.tf_tl_screen_height_60()).toMatchInlineSnapshot(
      `"transform:translate(60vh,60vh);"`,
    ));
  test('tf_tl_screen_height_70', () =>
    expect(transform.tf_tl_screen_height_70()).toMatchInlineSnapshot(
      `"transform:translate(70vh,70vh);"`,
    ));
  test('tf_tl_screen_height_80', () =>
    expect(transform.tf_tl_screen_height_80()).toMatchInlineSnapshot(
      `"transform:translate(80vh,80vh);"`,
    ));
  test('tf_tl_screen_height_90', () =>
    expect(transform.tf_tl_screen_height_90()).toMatchInlineSnapshot(
      `"transform:translate(90vh,90vh);"`,
    ));
  test('tf_tl_screen_width_10', () =>
    expect(transform.tf_tl_screen_width_10()).toMatchInlineSnapshot(
      `"transform:translate(10vw,10vw);"`,
    ));
  test('tf_tl_screen_width_100', () =>
    expect(transform.tf_tl_screen_width_100()).toMatchInlineSnapshot(
      `"transform:translate(100vw,100vw);"`,
    ));
  test('tf_tl_screen_width_20', () =>
    expect(transform.tf_tl_screen_width_20()).toMatchInlineSnapshot(
      `"transform:translate(20vw,20vw);"`,
    ));
  test('tf_tl_screen_width_30', () =>
    expect(transform.tf_tl_screen_width_30()).toMatchInlineSnapshot(
      `"transform:translate(30vw,30vw);"`,
    ));
  test('tf_tl_screen_width_40', () =>
    expect(transform.tf_tl_screen_width_40()).toMatchInlineSnapshot(
      `"transform:translate(40vw,40vw);"`,
    ));
  test('tf_tl_screen_width_50', () =>
    expect(transform.tf_tl_screen_width_50()).toMatchInlineSnapshot(
      `"transform:translate(50vw,50vw);"`,
    ));
  test('tf_tl_screen_width_60', () =>
    expect(transform.tf_tl_screen_width_60()).toMatchInlineSnapshot(
      `"transform:translate(60vw,60vw);"`,
    ));
  test('tf_tl_screen_width_70', () =>
    expect(transform.tf_tl_screen_width_70()).toMatchInlineSnapshot(
      `"transform:translate(70vw,70vw);"`,
    ));
  test('tf_tl_screen_width_80', () =>
    expect(transform.tf_tl_screen_width_80()).toMatchInlineSnapshot(
      `"transform:translate(80vw,80vw);"`,
    ));
  test('tf_tl_screen_width_90', () =>
    expect(transform.tf_tl_screen_width_90()).toMatchInlineSnapshot(
      `"transform:translate(90vw,90vw);"`,
    ));
  test('tf_tl_sm', () =>
    expect(transform.tf_tl_sm()).toMatchInlineSnapshot(
      `"transform:translate(0.25rem,0.25rem);"`,
    ));
  test('tf_tl_xl', () =>
    expect(transform.tf_tl_xl()).toMatchInlineSnapshot(
      `"transform:translate(0.75rem,0.75rem);"`,
    ));
  test('tf_tl_xs', () =>
    expect(transform.tf_tl_xs()).toMatchInlineSnapshot(
      `"transform:translate(0.125rem,0.125rem);"`,
    ));
  test('tf_tlx_10xl', () =>
    expect(transform.tf_tlx_10xl()).toMatchInlineSnapshot(
      `"transform:translateX(12rem);"`,
    ));
  test('tf_tlx_11xl', () =>
    expect(transform.tf_tlx_11xl()).toMatchInlineSnapshot(
      `"transform:translateX(24rem);"`,
    ));
  test('tf_tlx_12xl', () =>
    expect(transform.tf_tlx_12xl()).toMatchInlineSnapshot(
      `"transform:translateX(32rem);"`,
    ));
  test('tf_tlx_13xl', () =>
    expect(transform.tf_tlx_13xl()).toMatchInlineSnapshot(
      `"transform:translateX(48rem);"`,
    ));
  test('tf_tlx_14xl', () =>
    expect(transform.tf_tlx_14xl()).toMatchInlineSnapshot(
      `"transform:translateX(64rem);"`,
    ));
  test('tf_tlx_15xl', () =>
    expect(transform.tf_tlx_15xl()).toMatchInlineSnapshot(
      `"transform:translateX(96rem);"`,
    ));
  test('tf_tlx_16xl', () =>
    expect(transform.tf_tlx_16xl()).toMatchInlineSnapshot(
      `"transform:translateX(128rem);"`,
    ));
  test('tf_tlx_2xl', () =>
    expect(transform.tf_tlx_2xl()).toMatchInlineSnapshot(
      `"transform:translateX(1rem);"`,
    ));
  test('tf_tlx_3xl', () =>
    expect(transform.tf_tlx_3xl()).toMatchInlineSnapshot(
      `"transform:translateX(1.5rem);"`,
    ));
  test('tf_tlx_4xl', () =>
    expect(transform.tf_tlx_4xl()).toMatchInlineSnapshot(
      `"transform:translateX(2rem);"`,
    ));
  test('tf_tlx_5xl', () =>
    expect(transform.tf_tlx_5xl()).toMatchInlineSnapshot(
      `"transform:translateX(3rem);"`,
    ));
  test('tf_tlx_6xl', () =>
    expect(transform.tf_tlx_6xl()).toMatchInlineSnapshot(
      `"transform:translateX(4rem);"`,
    ));
  test('tf_tlx_7xl', () =>
    expect(transform.tf_tlx_7xl()).toMatchInlineSnapshot(
      `"transform:translateX(6rem);"`,
    ));
  test('tf_tlx_8xl', () =>
    expect(transform.tf_tlx_8xl()).toMatchInlineSnapshot(
      `"transform:translateX(8rem);"`,
    ));
  test('tf_tlx_9xl', () =>
    expect(transform.tf_tlx_9xl()).toMatchInlineSnapshot(
      `"transform:translateX(16rem);"`,
    ));
  test('tf_tlx_auto', () =>
    expect(transform.tf_tlx_auto()).toMatchInlineSnapshot(
      `"transform:translateX(auto);"`,
    ));
  test('tf_tlx_lg', () =>
    expect(transform.tf_tlx_lg()).toMatchInlineSnapshot(
      `"transform:translateX(0.5rem);"`,
    ));
  test('tf_tlx_md', () =>
    expect(transform.tf_tlx_md()).toMatchInlineSnapshot(
      `"transform:translateX(0.375rem);"`,
    ));
  test('tf_tlx_none', () =>
    expect(transform.tf_tlx_none()).toMatchInlineSnapshot(
      `"transform:translateX(0rem);"`,
    ));
  test('tf_tlx_percentage_10', () =>
    expect(transform.tf_tlx_percentage_10()).toMatchInlineSnapshot(
      `"transform:translateX(10%);"`,
    ));
  test('tf_tlx_percentage_100', () =>
    expect(transform.tf_tlx_percentage_100()).toMatchInlineSnapshot(
      `"transform:translateX(100%);"`,
    ));
  test('tf_tlx_percentage_20', () =>
    expect(transform.tf_tlx_percentage_20()).toMatchInlineSnapshot(
      `"transform:translateX(20%);"`,
    ));
  test('tf_tlx_percentage_30', () =>
    expect(transform.tf_tlx_percentage_30()).toMatchInlineSnapshot(
      `"transform:translateX(30%);"`,
    ));
  test('tf_tlx_percentage_40', () =>
    expect(transform.tf_tlx_percentage_40()).toMatchInlineSnapshot(
      `"transform:translateX(40%);"`,
    ));
  test('tf_tlx_percentage_50', () =>
    expect(transform.tf_tlx_percentage_50()).toMatchInlineSnapshot(
      `"transform:translateX(50%);"`,
    ));
  test('tf_tlx_percentage_60', () =>
    expect(transform.tf_tlx_percentage_60()).toMatchInlineSnapshot(
      `"transform:translateX(60%);"`,
    ));
  test('tf_tlx_percentage_70', () =>
    expect(transform.tf_tlx_percentage_70()).toMatchInlineSnapshot(
      `"transform:translateX(70%);"`,
    ));
  test('tf_tlx_percentage_80', () =>
    expect(transform.tf_tlx_percentage_80()).toMatchInlineSnapshot(
      `"transform:translateX(80%);"`,
    ));
  test('tf_tlx_percentage_90', () =>
    expect(transform.tf_tlx_percentage_90()).toMatchInlineSnapshot(
      `"transform:translateX(90%);"`,
    ));
  test('tf_tlx_px', () =>
    expect(transform.tf_tlx_px()).toMatchInlineSnapshot(
      `"transform:translateX(0.0625rem);"`,
    ));
  test('tf_tlx_screen_height_10', () =>
    expect(transform.tf_tlx_screen_height_10()).toMatchInlineSnapshot(
      `"transform:translateX(10vh);"`,
    ));
  test('tf_tlx_screen_height_100', () =>
    expect(transform.tf_tlx_screen_height_100()).toMatchInlineSnapshot(
      `"transform:translateX(100vh);"`,
    ));
  test('tf_tlx_screen_height_20', () =>
    expect(transform.tf_tlx_screen_height_20()).toMatchInlineSnapshot(
      `"transform:translateX(20vh);"`,
    ));
  test('tf_tlx_screen_height_30', () =>
    expect(transform.tf_tlx_screen_height_30()).toMatchInlineSnapshot(
      `"transform:translateX(30vh);"`,
    ));
  test('tf_tlx_screen_height_40', () =>
    expect(transform.tf_tlx_screen_height_40()).toMatchInlineSnapshot(
      `"transform:translateX(40vh);"`,
    ));
  test('tf_tlx_screen_height_50', () =>
    expect(transform.tf_tlx_screen_height_50()).toMatchInlineSnapshot(
      `"transform:translateX(50vh);"`,
    ));
  test('tf_tlx_screen_height_60', () =>
    expect(transform.tf_tlx_screen_height_60()).toMatchInlineSnapshot(
      `"transform:translateX(60vh);"`,
    ));
  test('tf_tlx_screen_height_70', () =>
    expect(transform.tf_tlx_screen_height_70()).toMatchInlineSnapshot(
      `"transform:translateX(70vh);"`,
    ));
  test('tf_tlx_screen_height_80', () =>
    expect(transform.tf_tlx_screen_height_80()).toMatchInlineSnapshot(
      `"transform:translateX(80vh);"`,
    ));
  test('tf_tlx_screen_height_90', () =>
    expect(transform.tf_tlx_screen_height_90()).toMatchInlineSnapshot(
      `"transform:translateX(90vh);"`,
    ));
  test('tf_tlx_screen_width_10', () =>
    expect(transform.tf_tlx_screen_width_10()).toMatchInlineSnapshot(
      `"transform:translateX(10vw);"`,
    ));
  test('tf_tlx_screen_width_100', () =>
    expect(transform.tf_tlx_screen_width_100()).toMatchInlineSnapshot(
      `"transform:translateX(100vw);"`,
    ));
  test('tf_tlx_screen_width_20', () =>
    expect(transform.tf_tlx_screen_width_20()).toMatchInlineSnapshot(
      `"transform:translateX(20vw);"`,
    ));
  test('tf_tlx_screen_width_30', () =>
    expect(transform.tf_tlx_screen_width_30()).toMatchInlineSnapshot(
      `"transform:translateX(30vw);"`,
    ));
  test('tf_tlx_screen_width_40', () =>
    expect(transform.tf_tlx_screen_width_40()).toMatchInlineSnapshot(
      `"transform:translateX(40vw);"`,
    ));
  test('tf_tlx_screen_width_50', () =>
    expect(transform.tf_tlx_screen_width_50()).toMatchInlineSnapshot(
      `"transform:translateX(50vw);"`,
    ));
  test('tf_tlx_screen_width_60', () =>
    expect(transform.tf_tlx_screen_width_60()).toMatchInlineSnapshot(
      `"transform:translateX(60vw);"`,
    ));
  test('tf_tlx_screen_width_70', () =>
    expect(transform.tf_tlx_screen_width_70()).toMatchInlineSnapshot(
      `"transform:translateX(70vw);"`,
    ));
  test('tf_tlx_screen_width_80', () =>
    expect(transform.tf_tlx_screen_width_80()).toMatchInlineSnapshot(
      `"transform:translateX(80vw);"`,
    ));
  test('tf_tlx_screen_width_90', () =>
    expect(transform.tf_tlx_screen_width_90()).toMatchInlineSnapshot(
      `"transform:translateX(90vw);"`,
    ));
  test('tf_tlx_sm', () =>
    expect(transform.tf_tlx_sm()).toMatchInlineSnapshot(
      `"transform:translateX(0.25rem);"`,
    ));
  test('tf_tlx_xl', () =>
    expect(transform.tf_tlx_xl()).toMatchInlineSnapshot(
      `"transform:translateX(0.75rem);"`,
    ));
  test('tf_tlx_xs', () =>
    expect(transform.tf_tlx_xs()).toMatchInlineSnapshot(
      `"transform:translateX(0.125rem);"`,
    ));
  test('tf_tly_10xl', () =>
    expect(transform.tf_tly_10xl()).toMatchInlineSnapshot(
      `"transform:translateY(12rem);"`,
    ));
  test('tf_tly_11xl', () =>
    expect(transform.tf_tly_11xl()).toMatchInlineSnapshot(
      `"transform:translateY(24rem);"`,
    ));
  test('tf_tly_12xl', () =>
    expect(transform.tf_tly_12xl()).toMatchInlineSnapshot(
      `"transform:translateY(32rem);"`,
    ));
  test('tf_tly_13xl', () =>
    expect(transform.tf_tly_13xl()).toMatchInlineSnapshot(
      `"transform:translateY(48rem);"`,
    ));
  test('tf_tly_14xl', () =>
    expect(transform.tf_tly_14xl()).toMatchInlineSnapshot(
      `"transform:translateY(64rem);"`,
    ));
  test('tf_tly_15xl', () =>
    expect(transform.tf_tly_15xl()).toMatchInlineSnapshot(
      `"transform:translateY(96rem);"`,
    ));
  test('tf_tly_16xl', () =>
    expect(transform.tf_tly_16xl()).toMatchInlineSnapshot(
      `"transform:translateY(128rem);"`,
    ));
  test('tf_tly_2xl', () =>
    expect(transform.tf_tly_2xl()).toMatchInlineSnapshot(
      `"transform:translateY(1rem);"`,
    ));
  test('tf_tly_3xl', () =>
    expect(transform.tf_tly_3xl()).toMatchInlineSnapshot(
      `"transform:translateY(1.5rem);"`,
    ));
  test('tf_tly_4xl', () =>
    expect(transform.tf_tly_4xl()).toMatchInlineSnapshot(
      `"transform:translateY(2rem);"`,
    ));
  test('tf_tly_5xl', () =>
    expect(transform.tf_tly_5xl()).toMatchInlineSnapshot(
      `"transform:translateY(3rem);"`,
    ));
  test('tf_tly_6xl', () =>
    expect(transform.tf_tly_6xl()).toMatchInlineSnapshot(
      `"transform:translateY(4rem);"`,
    ));
  test('tf_tly_7xl', () =>
    expect(transform.tf_tly_7xl()).toMatchInlineSnapshot(
      `"transform:translateY(6rem);"`,
    ));
  test('tf_tly_8xl', () =>
    expect(transform.tf_tly_8xl()).toMatchInlineSnapshot(
      `"transform:translateY(8rem);"`,
    ));
  test('tf_tly_9xl', () =>
    expect(transform.tf_tly_9xl()).toMatchInlineSnapshot(
      `"transform:translateY(16rem);"`,
    ));
  test('tf_tly_auto', () =>
    expect(transform.tf_tly_auto()).toMatchInlineSnapshot(
      `"transform:translateY(auto);"`,
    ));
  test('tf_tly_lg', () =>
    expect(transform.tf_tly_lg()).toMatchInlineSnapshot(
      `"transform:translateY(0.5rem);"`,
    ));
  test('tf_tly_md', () =>
    expect(transform.tf_tly_md()).toMatchInlineSnapshot(
      `"transform:translateY(0.375rem);"`,
    ));
  test('tf_tly_none', () =>
    expect(transform.tf_tly_none()).toMatchInlineSnapshot(
      `"transform:translateY(0rem);"`,
    ));
  test('tf_tly_percentage_10', () =>
    expect(transform.tf_tly_percentage_10()).toMatchInlineSnapshot(
      `"transform:translateY(10%);"`,
    ));
  test('tf_tly_percentage_100', () =>
    expect(transform.tf_tly_percentage_100()).toMatchInlineSnapshot(
      `"transform:translateY(100%);"`,
    ));
  test('tf_tly_percentage_20', () =>
    expect(transform.tf_tly_percentage_20()).toMatchInlineSnapshot(
      `"transform:translateY(20%);"`,
    ));
  test('tf_tly_percentage_30', () =>
    expect(transform.tf_tly_percentage_30()).toMatchInlineSnapshot(
      `"transform:translateY(30%);"`,
    ));
  test('tf_tly_percentage_40', () =>
    expect(transform.tf_tly_percentage_40()).toMatchInlineSnapshot(
      `"transform:translateY(40%);"`,
    ));
  test('tf_tly_percentage_50', () =>
    expect(transform.tf_tly_percentage_50()).toMatchInlineSnapshot(
      `"transform:translateY(50%);"`,
    ));
  test('tf_tly_percentage_60', () =>
    expect(transform.tf_tly_percentage_60()).toMatchInlineSnapshot(
      `"transform:translateY(60%);"`,
    ));
  test('tf_tly_percentage_70', () =>
    expect(transform.tf_tly_percentage_70()).toMatchInlineSnapshot(
      `"transform:translateY(70%);"`,
    ));
  test('tf_tly_percentage_80', () =>
    expect(transform.tf_tly_percentage_80()).toMatchInlineSnapshot(
      `"transform:translateY(80%);"`,
    ));
  test('tf_tly_percentage_90', () =>
    expect(transform.tf_tly_percentage_90()).toMatchInlineSnapshot(
      `"transform:translateY(90%);"`,
    ));
  test('tf_tly_px', () =>
    expect(transform.tf_tly_px()).toMatchInlineSnapshot(
      `"transform:translateY(0.0625rem);"`,
    ));
  test('tf_tly_screen_height_10', () =>
    expect(transform.tf_tly_screen_height_10()).toMatchInlineSnapshot(
      `"transform:translateY(10vh);"`,
    ));
  test('tf_tly_screen_height_100', () =>
    expect(transform.tf_tly_screen_height_100()).toMatchInlineSnapshot(
      `"transform:translateY(100vh);"`,
    ));
  test('tf_tly_screen_height_20', () =>
    expect(transform.tf_tly_screen_height_20()).toMatchInlineSnapshot(
      `"transform:translateY(20vh);"`,
    ));
  test('tf_tly_screen_height_30', () =>
    expect(transform.tf_tly_screen_height_30()).toMatchInlineSnapshot(
      `"transform:translateY(30vh);"`,
    ));
  test('tf_tly_screen_height_40', () =>
    expect(transform.tf_tly_screen_height_40()).toMatchInlineSnapshot(
      `"transform:translateY(40vh);"`,
    ));
  test('tf_tly_screen_height_50', () =>
    expect(transform.tf_tly_screen_height_50()).toMatchInlineSnapshot(
      `"transform:translateY(50vh);"`,
    ));
  test('tf_tly_screen_height_60', () =>
    expect(transform.tf_tly_screen_height_60()).toMatchInlineSnapshot(
      `"transform:translateY(60vh);"`,
    ));
  test('tf_tly_screen_height_70', () =>
    expect(transform.tf_tly_screen_height_70()).toMatchInlineSnapshot(
      `"transform:translateY(70vh);"`,
    ));
  test('tf_tly_screen_height_80', () =>
    expect(transform.tf_tly_screen_height_80()).toMatchInlineSnapshot(
      `"transform:translateY(80vh);"`,
    ));
  test('tf_tly_screen_height_90', () =>
    expect(transform.tf_tly_screen_height_90()).toMatchInlineSnapshot(
      `"transform:translateY(90vh);"`,
    ));
  test('tf_tly_screen_width_10', () =>
    expect(transform.tf_tly_screen_width_10()).toMatchInlineSnapshot(
      `"transform:translateY(10vw);"`,
    ));
  test('tf_tly_screen_width_100', () =>
    expect(transform.tf_tly_screen_width_100()).toMatchInlineSnapshot(
      `"transform:translateY(100vw);"`,
    ));
  test('tf_tly_screen_width_20', () =>
    expect(transform.tf_tly_screen_width_20()).toMatchInlineSnapshot(
      `"transform:translateY(20vw);"`,
    ));
  test('tf_tly_screen_width_30', () =>
    expect(transform.tf_tly_screen_width_30()).toMatchInlineSnapshot(
      `"transform:translateY(30vw);"`,
    ));
  test('tf_tly_screen_width_40', () =>
    expect(transform.tf_tly_screen_width_40()).toMatchInlineSnapshot(
      `"transform:translateY(40vw);"`,
    ));
  test('tf_tly_screen_width_50', () =>
    expect(transform.tf_tly_screen_width_50()).toMatchInlineSnapshot(
      `"transform:translateY(50vw);"`,
    ));
  test('tf_tly_screen_width_60', () =>
    expect(transform.tf_tly_screen_width_60()).toMatchInlineSnapshot(
      `"transform:translateY(60vw);"`,
    ));
  test('tf_tly_screen_width_70', () =>
    expect(transform.tf_tly_screen_width_70()).toMatchInlineSnapshot(
      `"transform:translateY(70vw);"`,
    ));
  test('tf_tly_screen_width_80', () =>
    expect(transform.tf_tly_screen_width_80()).toMatchInlineSnapshot(
      `"transform:translateY(80vw);"`,
    ));
  test('tf_tly_screen_width_90', () =>
    expect(transform.tf_tly_screen_width_90()).toMatchInlineSnapshot(
      `"transform:translateY(90vw);"`,
    ));
  test('tf_tly_sm', () =>
    expect(transform.tf_tly_sm()).toMatchInlineSnapshot(
      `"transform:translateY(0.25rem);"`,
    ));
  test('tf_tly_xl', () =>
    expect(transform.tf_tly_xl()).toMatchInlineSnapshot(
      `"transform:translateY(0.75rem);"`,
    ));
  test('tf_tly_xs', () =>
    expect(transform.tf_tly_xs()).toMatchInlineSnapshot(
      `"transform:translateY(0.125rem);"`,
    ));
});
