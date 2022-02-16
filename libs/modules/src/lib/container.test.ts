import { container } from './container';

describe('container', () => {
  test('absolute', () =>
    expect(container.absolute()).toMatchInlineSnapshot(`"position:absolute;"`));
  test('block', () =>
    expect(container.block()).toMatchInlineSnapshot(`"display:block;"`));
  test('bottom', () =>
    expect(container.bottom()).toMatchInlineSnapshot(`"bottom:0;"`));
  test('bottom_10xl', () =>
    expect(container.bottom_10xl()).toMatchInlineSnapshot(`"bottom:12rem;"`));
  test('bottom_11xl', () =>
    expect(container.bottom_11xl()).toMatchInlineSnapshot(`"bottom:24rem;"`));
  test('bottom_12xl', () =>
    expect(container.bottom_12xl()).toMatchInlineSnapshot(`"bottom:32rem;"`));
  test('bottom_13xl', () =>
    expect(container.bottom_13xl()).toMatchInlineSnapshot(`"bottom:48rem;"`));
  test('bottom_14xl', () =>
    expect(container.bottom_14xl()).toMatchInlineSnapshot(`"bottom:64rem;"`));
  test('bottom_15xl', () =>
    expect(container.bottom_15xl()).toMatchInlineSnapshot(`"bottom:96rem;"`));
  test('bottom_16xl', () =>
    expect(container.bottom_16xl()).toMatchInlineSnapshot(`"bottom:128rem;"`));
  test('bottom_2xl', () =>
    expect(container.bottom_2xl()).toMatchInlineSnapshot(`"bottom:1rem;"`));
  test('bottom_3xl', () =>
    expect(container.bottom_3xl()).toMatchInlineSnapshot(`"bottom:1.5rem;"`));
  test('bottom_4xl', () =>
    expect(container.bottom_4xl()).toMatchInlineSnapshot(`"bottom:2rem;"`));
  test('bottom_5xl', () =>
    expect(container.bottom_5xl()).toMatchInlineSnapshot(`"bottom:3rem;"`));
  test('bottom_6xl', () =>
    expect(container.bottom_6xl()).toMatchInlineSnapshot(`"bottom:4rem;"`));
  test('bottom_7xl', () =>
    expect(container.bottom_7xl()).toMatchInlineSnapshot(`"bottom:6rem;"`));
  test('bottom_8xl', () =>
    expect(container.bottom_8xl()).toMatchInlineSnapshot(`"bottom:8rem;"`));
  test('bottom_9xl', () =>
    expect(container.bottom_9xl()).toMatchInlineSnapshot(`"bottom:16rem;"`));
  test('bottom_auto', () =>
    expect(container.bottom_auto()).toMatchInlineSnapshot(`"bottom:auto;"`));
  test('bottom_lg', () =>
    expect(container.bottom_lg()).toMatchInlineSnapshot(`"bottom:0.5rem;"`));
  test('bottom_md', () =>
    expect(container.bottom_md()).toMatchInlineSnapshot(`"bottom:0.375rem;"`));
  test('bottom_none', () =>
    expect(container.bottom_none()).toMatchInlineSnapshot(`"bottom:0rem;"`));
  test('bottom_percentage_10', () =>
    expect(container.bottom_percentage_10()).toMatchInlineSnapshot(
      `"bottom:10%;"`,
    ));
  test('bottom_percentage_100', () =>
    expect(container.bottom_percentage_100()).toMatchInlineSnapshot(
      `"bottom:100%;"`,
    ));
  test('bottom_percentage_20', () =>
    expect(container.bottom_percentage_20()).toMatchInlineSnapshot(
      `"bottom:20%;"`,
    ));
  test('bottom_percentage_30', () =>
    expect(container.bottom_percentage_30()).toMatchInlineSnapshot(
      `"bottom:30%;"`,
    ));
  test('bottom_percentage_40', () =>
    expect(container.bottom_percentage_40()).toMatchInlineSnapshot(
      `"bottom:40%;"`,
    ));
  test('bottom_percentage_50', () =>
    expect(container.bottom_percentage_50()).toMatchInlineSnapshot(
      `"bottom:50%;"`,
    ));
  test('bottom_percentage_60', () =>
    expect(container.bottom_percentage_60()).toMatchInlineSnapshot(
      `"bottom:60%;"`,
    ));
  test('bottom_percentage_70', () =>
    expect(container.bottom_percentage_70()).toMatchInlineSnapshot(
      `"bottom:70%;"`,
    ));
  test('bottom_percentage_80', () =>
    expect(container.bottom_percentage_80()).toMatchInlineSnapshot(
      `"bottom:80%;"`,
    ));
  test('bottom_percentage_90', () =>
    expect(container.bottom_percentage_90()).toMatchInlineSnapshot(
      `"bottom:90%;"`,
    ));
  test('bottom_px', () =>
    expect(container.bottom_px()).toMatchInlineSnapshot(`"bottom:0.0625rem;"`));
  test('bottom_screen_height_10', () =>
    expect(container.bottom_screen_height_10()).toMatchInlineSnapshot(
      `"bottom:10vh;"`,
    ));
  test('bottom_screen_height_100', () =>
    expect(container.bottom_screen_height_100()).toMatchInlineSnapshot(
      `"bottom:100vh;"`,
    ));
  test('bottom_screen_height_20', () =>
    expect(container.bottom_screen_height_20()).toMatchInlineSnapshot(
      `"bottom:20vh;"`,
    ));
  test('bottom_screen_height_30', () =>
    expect(container.bottom_screen_height_30()).toMatchInlineSnapshot(
      `"bottom:30vh;"`,
    ));
  test('bottom_screen_height_40', () =>
    expect(container.bottom_screen_height_40()).toMatchInlineSnapshot(
      `"bottom:40vh;"`,
    ));
  test('bottom_screen_height_50', () =>
    expect(container.bottom_screen_height_50()).toMatchInlineSnapshot(
      `"bottom:50vh;"`,
    ));
  test('bottom_screen_height_60', () =>
    expect(container.bottom_screen_height_60()).toMatchInlineSnapshot(
      `"bottom:60vh;"`,
    ));
  test('bottom_screen_height_70', () =>
    expect(container.bottom_screen_height_70()).toMatchInlineSnapshot(
      `"bottom:70vh;"`,
    ));
  test('bottom_screen_height_80', () =>
    expect(container.bottom_screen_height_80()).toMatchInlineSnapshot(
      `"bottom:80vh;"`,
    ));
  test('bottom_screen_height_90', () =>
    expect(container.bottom_screen_height_90()).toMatchInlineSnapshot(
      `"bottom:90vh;"`,
    ));
  test('bottom_screen_width_10', () =>
    expect(container.bottom_screen_width_10()).toMatchInlineSnapshot(
      `"bottom:10vw;"`,
    ));
  test('bottom_screen_width_100', () =>
    expect(container.bottom_screen_width_100()).toMatchInlineSnapshot(
      `"bottom:100vw;"`,
    ));
  test('bottom_screen_width_20', () =>
    expect(container.bottom_screen_width_20()).toMatchInlineSnapshot(
      `"bottom:20vw;"`,
    ));
  test('bottom_screen_width_30', () =>
    expect(container.bottom_screen_width_30()).toMatchInlineSnapshot(
      `"bottom:30vw;"`,
    ));
  test('bottom_screen_width_40', () =>
    expect(container.bottom_screen_width_40()).toMatchInlineSnapshot(
      `"bottom:40vw;"`,
    ));
  test('bottom_screen_width_50', () =>
    expect(container.bottom_screen_width_50()).toMatchInlineSnapshot(
      `"bottom:50vw;"`,
    ));
  test('bottom_screen_width_60', () =>
    expect(container.bottom_screen_width_60()).toMatchInlineSnapshot(
      `"bottom:60vw;"`,
    ));
  test('bottom_screen_width_70', () =>
    expect(container.bottom_screen_width_70()).toMatchInlineSnapshot(
      `"bottom:70vw;"`,
    ));
  test('bottom_screen_width_80', () =>
    expect(container.bottom_screen_width_80()).toMatchInlineSnapshot(
      `"bottom:80vw;"`,
    ));
  test('bottom_screen_width_90', () =>
    expect(container.bottom_screen_width_90()).toMatchInlineSnapshot(
      `"bottom:90vw;"`,
    ));
  test('bottom_sm', () =>
    expect(container.bottom_sm()).toMatchInlineSnapshot(`"bottom:0.25rem;"`));
  test('bottom_xl', () =>
    expect(container.bottom_xl()).toMatchInlineSnapshot(`"bottom:0.75rem;"`));
  test('bottom_xs', () =>
    expect(container.bottom_xs()).toMatchInlineSnapshot(`"bottom:0.125rem;"`));
  test('content', () =>
    expect(container.content('""')).toMatchInlineSnapshot(`"content:\\"\\";"`));
  test('fit_contain', () =>
    expect(container.fit_contain()).toMatchInlineSnapshot(
      `"object-fit:contain;"`,
    ));
  test('fit_cover', () =>
    expect(container.fit_cover()).toMatchInlineSnapshot(`"object-fit:cover;"`));
  test('fit_fill', () =>
    expect(container.fit_fill()).toMatchInlineSnapshot(`"object-fit:fill;"`));
  test('fit_none', () =>
    expect(container.fit_none()).toMatchInlineSnapshot(`"object-fit:none;"`));
  test('fixed', () =>
    expect(container.fixed()).toMatchInlineSnapshot(`"position:fixed;"`));
  test('hidden', () =>
    expect(container.hidden()).toMatchInlineSnapshot(`"display:none;"`));
  test('inset', () =>
    expect(container.inset()).toMatchInlineSnapshot(
      `"left:0;top:0;right:0;bottom:0;"`,
    ));
  test('inset_x', () =>
    expect(container.inset_x()).toMatchInlineSnapshot(`"left:0;right:0;"`));
  test('inset_y', () =>
    expect(container.inset_y()).toMatchInlineSnapshot(`"top:0;bottom:0;"`));
  test('invisible', () =>
    expect(container.invisible()).toMatchInlineSnapshot(
      `"visibility:hidden;"`,
    ));
  test('left', () =>
    expect(container.left()).toMatchInlineSnapshot(`"left:0;"`));
  test('left_10xl', () =>
    expect(container.left_10xl()).toMatchInlineSnapshot(`"left:12rem;"`));
  test('left_11xl', () =>
    expect(container.left_11xl()).toMatchInlineSnapshot(`"left:24rem;"`));
  test('left_12xl', () =>
    expect(container.left_12xl()).toMatchInlineSnapshot(`"left:32rem;"`));
  test('left_13xl', () =>
    expect(container.left_13xl()).toMatchInlineSnapshot(`"left:48rem;"`));
  test('left_14xl', () =>
    expect(container.left_14xl()).toMatchInlineSnapshot(`"left:64rem;"`));
  test('left_15xl', () =>
    expect(container.left_15xl()).toMatchInlineSnapshot(`"left:96rem;"`));
  test('left_16xl', () =>
    expect(container.left_16xl()).toMatchInlineSnapshot(`"left:128rem;"`));
  test('left_2xl', () =>
    expect(container.left_2xl()).toMatchInlineSnapshot(`"left:1rem;"`));
  test('left_3xl', () =>
    expect(container.left_3xl()).toMatchInlineSnapshot(`"left:1.5rem;"`));
  test('left_4xl', () =>
    expect(container.left_4xl()).toMatchInlineSnapshot(`"left:2rem;"`));
  test('left_5xl', () =>
    expect(container.left_5xl()).toMatchInlineSnapshot(`"left:3rem;"`));
  test('left_6xl', () =>
    expect(container.left_6xl()).toMatchInlineSnapshot(`"left:4rem;"`));
  test('left_7xl', () =>
    expect(container.left_7xl()).toMatchInlineSnapshot(`"left:6rem;"`));
  test('left_8xl', () =>
    expect(container.left_8xl()).toMatchInlineSnapshot(`"left:8rem;"`));
  test('left_9xl', () =>
    expect(container.left_9xl()).toMatchInlineSnapshot(`"left:16rem;"`));
  test('left_auto', () =>
    expect(container.left_auto()).toMatchInlineSnapshot(`"left:auto;"`));
  test('left_lg', () =>
    expect(container.left_lg()).toMatchInlineSnapshot(`"left:0.5rem;"`));
  test('left_md', () =>
    expect(container.left_md()).toMatchInlineSnapshot(`"left:0.375rem;"`));
  test('left_none', () =>
    expect(container.left_none()).toMatchInlineSnapshot(`"left:0rem;"`));
  test('left_percentage_10', () =>
    expect(container.left_percentage_10()).toMatchInlineSnapshot(
      `"left:10%;"`,
    ));
  test('left_percentage_100', () =>
    expect(container.left_percentage_100()).toMatchInlineSnapshot(
      `"left:100%;"`,
    ));
  test('left_percentage_20', () =>
    expect(container.left_percentage_20()).toMatchInlineSnapshot(
      `"left:20%;"`,
    ));
  test('left_percentage_30', () =>
    expect(container.left_percentage_30()).toMatchInlineSnapshot(
      `"left:30%;"`,
    ));
  test('left_percentage_40', () =>
    expect(container.left_percentage_40()).toMatchInlineSnapshot(
      `"left:40%;"`,
    ));
  test('left_percentage_50', () =>
    expect(container.left_percentage_50()).toMatchInlineSnapshot(
      `"left:50%;"`,
    ));
  test('left_percentage_60', () =>
    expect(container.left_percentage_60()).toMatchInlineSnapshot(
      `"left:60%;"`,
    ));
  test('left_percentage_70', () =>
    expect(container.left_percentage_70()).toMatchInlineSnapshot(
      `"left:70%;"`,
    ));
  test('left_percentage_80', () =>
    expect(container.left_percentage_80()).toMatchInlineSnapshot(
      `"left:80%;"`,
    ));
  test('left_percentage_90', () =>
    expect(container.left_percentage_90()).toMatchInlineSnapshot(
      `"left:90%;"`,
    ));
  test('left_px', () =>
    expect(container.left_px()).toMatchInlineSnapshot(`"left:0.0625rem;"`));
  test('left_screen_height_10', () =>
    expect(container.left_screen_height_10()).toMatchInlineSnapshot(
      `"left:10vh;"`,
    ));
  test('left_screen_height_100', () =>
    expect(container.left_screen_height_100()).toMatchInlineSnapshot(
      `"left:100vh;"`,
    ));
  test('left_screen_height_20', () =>
    expect(container.left_screen_height_20()).toMatchInlineSnapshot(
      `"left:20vh;"`,
    ));
  test('left_screen_height_30', () =>
    expect(container.left_screen_height_30()).toMatchInlineSnapshot(
      `"left:30vh;"`,
    ));
  test('left_screen_height_40', () =>
    expect(container.left_screen_height_40()).toMatchInlineSnapshot(
      `"left:40vh;"`,
    ));
  test('left_screen_height_50', () =>
    expect(container.left_screen_height_50()).toMatchInlineSnapshot(
      `"left:50vh;"`,
    ));
  test('left_screen_height_60', () =>
    expect(container.left_screen_height_60()).toMatchInlineSnapshot(
      `"left:60vh;"`,
    ));
  test('left_screen_height_70', () =>
    expect(container.left_screen_height_70()).toMatchInlineSnapshot(
      `"left:70vh;"`,
    ));
  test('left_screen_height_80', () =>
    expect(container.left_screen_height_80()).toMatchInlineSnapshot(
      `"left:80vh;"`,
    ));
  test('left_screen_height_90', () =>
    expect(container.left_screen_height_90()).toMatchInlineSnapshot(
      `"left:90vh;"`,
    ));
  test('left_screen_width_10', () =>
    expect(container.left_screen_width_10()).toMatchInlineSnapshot(
      `"left:10vw;"`,
    ));
  test('left_screen_width_100', () =>
    expect(container.left_screen_width_100()).toMatchInlineSnapshot(
      `"left:100vw;"`,
    ));
  test('left_screen_width_20', () =>
    expect(container.left_screen_width_20()).toMatchInlineSnapshot(
      `"left:20vw;"`,
    ));
  test('left_screen_width_30', () =>
    expect(container.left_screen_width_30()).toMatchInlineSnapshot(
      `"left:30vw;"`,
    ));
  test('left_screen_width_40', () =>
    expect(container.left_screen_width_40()).toMatchInlineSnapshot(
      `"left:40vw;"`,
    ));
  test('left_screen_width_50', () =>
    expect(container.left_screen_width_50()).toMatchInlineSnapshot(
      `"left:50vw;"`,
    ));
  test('left_screen_width_60', () =>
    expect(container.left_screen_width_60()).toMatchInlineSnapshot(
      `"left:60vw;"`,
    ));
  test('left_screen_width_70', () =>
    expect(container.left_screen_width_70()).toMatchInlineSnapshot(
      `"left:70vw;"`,
    ));
  test('left_screen_width_80', () =>
    expect(container.left_screen_width_80()).toMatchInlineSnapshot(
      `"left:80vw;"`,
    ));
  test('left_screen_width_90', () =>
    expect(container.left_screen_width_90()).toMatchInlineSnapshot(
      `"left:90vw;"`,
    ));
  test('left_sm', () =>
    expect(container.left_sm()).toMatchInlineSnapshot(`"left:0.25rem;"`));
  test('left_xl', () =>
    expect(container.left_xl()).toMatchInlineSnapshot(`"left:0.75rem;"`));
  test('left_xs', () =>
    expect(container.left_xs()).toMatchInlineSnapshot(`"left:0.125rem;"`));
  test('noappearance', () =>
    expect(container.noappearance()).toMatchInlineSnapshot(
      `"appearance:none;"`,
    ));
  test('op_10', () =>
    expect(container.op_10()).toMatchInlineSnapshot(`"opacity:0.1;"`));
  test('op_100', () =>
    expect(container.op_100()).toMatchInlineSnapshot(`"opacity:1;"`));
  test('op_20', () =>
    expect(container.op_20()).toMatchInlineSnapshot(`"opacity:0.2;"`));
  test('op_30', () =>
    expect(container.op_30()).toMatchInlineSnapshot(`"opacity:0.3;"`));
  test('op_40', () =>
    expect(container.op_40()).toMatchInlineSnapshot(`"opacity:0.4;"`));
  test('op_50', () =>
    expect(container.op_50()).toMatchInlineSnapshot(`"opacity:0.5;"`));
  test('op_60', () =>
    expect(container.op_60()).toMatchInlineSnapshot(`"opacity:0.6;"`));
  test('op_70', () =>
    expect(container.op_70()).toMatchInlineSnapshot(`"opacity:0.7;"`));
  test('op_80', () =>
    expect(container.op_80()).toMatchInlineSnapshot(`"opacity:0.8;"`));
  test('op_90', () =>
    expect(container.op_90()).toMatchInlineSnapshot(`"opacity:0.9;"`));
  test('relative', () =>
    expect(container.relative()).toMatchInlineSnapshot(`"position:relative;"`));
  test('right', () =>
    expect(container.right()).toMatchInlineSnapshot(`"right:0;"`));
  test('right_10xl', () =>
    expect(container.right_10xl()).toMatchInlineSnapshot(`"right:12rem;"`));
  test('right_11xl', () =>
    expect(container.right_11xl()).toMatchInlineSnapshot(`"right:24rem;"`));
  test('right_12xl', () =>
    expect(container.right_12xl()).toMatchInlineSnapshot(`"right:32rem;"`));
  test('right_13xl', () =>
    expect(container.right_13xl()).toMatchInlineSnapshot(`"right:48rem;"`));
  test('right_14xl', () =>
    expect(container.right_14xl()).toMatchInlineSnapshot(`"right:64rem;"`));
  test('right_15xl', () =>
    expect(container.right_15xl()).toMatchInlineSnapshot(`"right:96rem;"`));
  test('right_16xl', () =>
    expect(container.right_16xl()).toMatchInlineSnapshot(`"right:128rem;"`));
  test('right_2xl', () =>
    expect(container.right_2xl()).toMatchInlineSnapshot(`"right:1rem;"`));
  test('right_3xl', () =>
    expect(container.right_3xl()).toMatchInlineSnapshot(`"right:1.5rem;"`));
  test('right_4xl', () =>
    expect(container.right_4xl()).toMatchInlineSnapshot(`"right:2rem;"`));
  test('right_5xl', () =>
    expect(container.right_5xl()).toMatchInlineSnapshot(`"right:3rem;"`));
  test('right_6xl', () =>
    expect(container.right_6xl()).toMatchInlineSnapshot(`"right:4rem;"`));
  test('right_7xl', () =>
    expect(container.right_7xl()).toMatchInlineSnapshot(`"right:6rem;"`));
  test('right_8xl', () =>
    expect(container.right_8xl()).toMatchInlineSnapshot(`"right:8rem;"`));
  test('right_9xl', () =>
    expect(container.right_9xl()).toMatchInlineSnapshot(`"right:16rem;"`));
  test('right_auto', () =>
    expect(container.right_auto()).toMatchInlineSnapshot(`"right:auto;"`));
  test('right_lg', () =>
    expect(container.right_lg()).toMatchInlineSnapshot(`"right:0.5rem;"`));
  test('right_md', () =>
    expect(container.right_md()).toMatchInlineSnapshot(`"right:0.375rem;"`));
  test('right_none', () =>
    expect(container.right_none()).toMatchInlineSnapshot(`"right:0rem;"`));
  test('right_percentage_10', () =>
    expect(container.right_percentage_10()).toMatchInlineSnapshot(
      `"right:10%;"`,
    ));
  test('right_percentage_100', () =>
    expect(container.right_percentage_100()).toMatchInlineSnapshot(
      `"right:100%;"`,
    ));
  test('right_percentage_20', () =>
    expect(container.right_percentage_20()).toMatchInlineSnapshot(
      `"right:20%;"`,
    ));
  test('right_percentage_30', () =>
    expect(container.right_percentage_30()).toMatchInlineSnapshot(
      `"right:30%;"`,
    ));
  test('right_percentage_40', () =>
    expect(container.right_percentage_40()).toMatchInlineSnapshot(
      `"right:40%;"`,
    ));
  test('right_percentage_50', () =>
    expect(container.right_percentage_50()).toMatchInlineSnapshot(
      `"right:50%;"`,
    ));
  test('right_percentage_60', () =>
    expect(container.right_percentage_60()).toMatchInlineSnapshot(
      `"right:60%;"`,
    ));
  test('right_percentage_70', () =>
    expect(container.right_percentage_70()).toMatchInlineSnapshot(
      `"right:70%;"`,
    ));
  test('right_percentage_80', () =>
    expect(container.right_percentage_80()).toMatchInlineSnapshot(
      `"right:80%;"`,
    ));
  test('right_percentage_90', () =>
    expect(container.right_percentage_90()).toMatchInlineSnapshot(
      `"right:90%;"`,
    ));
  test('right_px', () =>
    expect(container.right_px()).toMatchInlineSnapshot(`"right:0.0625rem;"`));
  test('right_screen_height_10', () =>
    expect(container.right_screen_height_10()).toMatchInlineSnapshot(
      `"right:10vh;"`,
    ));
  test('right_screen_height_100', () =>
    expect(container.right_screen_height_100()).toMatchInlineSnapshot(
      `"right:100vh;"`,
    ));
  test('right_screen_height_20', () =>
    expect(container.right_screen_height_20()).toMatchInlineSnapshot(
      `"right:20vh;"`,
    ));
  test('right_screen_height_30', () =>
    expect(container.right_screen_height_30()).toMatchInlineSnapshot(
      `"right:30vh;"`,
    ));
  test('right_screen_height_40', () =>
    expect(container.right_screen_height_40()).toMatchInlineSnapshot(
      `"right:40vh;"`,
    ));
  test('right_screen_height_50', () =>
    expect(container.right_screen_height_50()).toMatchInlineSnapshot(
      `"right:50vh;"`,
    ));
  test('right_screen_height_60', () =>
    expect(container.right_screen_height_60()).toMatchInlineSnapshot(
      `"right:60vh;"`,
    ));
  test('right_screen_height_70', () =>
    expect(container.right_screen_height_70()).toMatchInlineSnapshot(
      `"right:70vh;"`,
    ));
  test('right_screen_height_80', () =>
    expect(container.right_screen_height_80()).toMatchInlineSnapshot(
      `"right:80vh;"`,
    ));
  test('right_screen_height_90', () =>
    expect(container.right_screen_height_90()).toMatchInlineSnapshot(
      `"right:90vh;"`,
    ));
  test('right_screen_width_10', () =>
    expect(container.right_screen_width_10()).toMatchInlineSnapshot(
      `"right:10vw;"`,
    ));
  test('right_screen_width_100', () =>
    expect(container.right_screen_width_100()).toMatchInlineSnapshot(
      `"right:100vw;"`,
    ));
  test('right_screen_width_20', () =>
    expect(container.right_screen_width_20()).toMatchInlineSnapshot(
      `"right:20vw;"`,
    ));
  test('right_screen_width_30', () =>
    expect(container.right_screen_width_30()).toMatchInlineSnapshot(
      `"right:30vw;"`,
    ));
  test('right_screen_width_40', () =>
    expect(container.right_screen_width_40()).toMatchInlineSnapshot(
      `"right:40vw;"`,
    ));
  test('right_screen_width_50', () =>
    expect(container.right_screen_width_50()).toMatchInlineSnapshot(
      `"right:50vw;"`,
    ));
  test('right_screen_width_60', () =>
    expect(container.right_screen_width_60()).toMatchInlineSnapshot(
      `"right:60vw;"`,
    ));
  test('right_screen_width_70', () =>
    expect(container.right_screen_width_70()).toMatchInlineSnapshot(
      `"right:70vw;"`,
    ));
  test('right_screen_width_80', () =>
    expect(container.right_screen_width_80()).toMatchInlineSnapshot(
      `"right:80vw;"`,
    ));
  test('right_screen_width_90', () =>
    expect(container.right_screen_width_90()).toMatchInlineSnapshot(
      `"right:90vw;"`,
    ));
  test('right_sm', () =>
    expect(container.right_sm()).toMatchInlineSnapshot(`"right:0.25rem;"`));
  test('right_xl', () =>
    expect(container.right_xl()).toMatchInlineSnapshot(`"right:0.75rem;"`));
  test('right_xs', () =>
    expect(container.right_xs()).toMatchInlineSnapshot(`"right:0.125rem;"`));
  test('rz', () =>
    expect(container.rz()).toMatchInlineSnapshot(`"resize:both;"`));
  test('rz_none', () =>
    expect(container.rz_none()).toMatchInlineSnapshot(`"resize:none;"`));
  test('rzx', () =>
    expect(container.rzx()).toMatchInlineSnapshot(`"resize:horizontal;"`));
  test('rzy', () =>
    expect(container.rzy()).toMatchInlineSnapshot(`"resize:vertical;"`));
  test('sc_auto', () =>
    expect(container.sc_auto()).toMatchInlineSnapshot(`"overflow:auto;"`));
  test('sc_hidden', () =>
    expect(container.sc_hidden()).toMatchInlineSnapshot(`"overflow:hidden;"`));
  test('sc_visible', () =>
    expect(container.sc_visible()).toMatchInlineSnapshot(
      `"overflow:visible;"`,
    ));
  test('scx_auto', () =>
    expect(container.scx_auto()).toMatchInlineSnapshot(`"overflow-x:auto;"`));
  test('scx_hidden', () =>
    expect(container.scx_hidden()).toMatchInlineSnapshot(
      `"overflow-x:hidden;"`,
    ));
  test('scx_visible', () =>
    expect(container.scx_visible()).toMatchInlineSnapshot(
      `"overflow-x:visible;"`,
    ));
  test('scy_auto', () =>
    expect(container.scy_auto()).toMatchInlineSnapshot(`"overflow-y:auto;"`));
  test('scy_hidden', () =>
    expect(container.scy_hidden()).toMatchInlineSnapshot(
      `"overflow-y:hidden;"`,
    ));
  test('scy_visible', () =>
    expect(container.scy_visible()).toMatchInlineSnapshot(
      `"overflow-y:visible;"`,
    ));
  test('static', () =>
    expect(container.static()).toMatchInlineSnapshot(`"position:static;"`));
  test('sticky', () =>
    expect(container.sticky()).toMatchInlineSnapshot(`"position:sticky;"`));
  test('top', () => expect(container.top()).toMatchInlineSnapshot(`"top:0;"`));
  test('top_10xl', () =>
    expect(container.top_10xl()).toMatchInlineSnapshot(`"top:12rem;"`));
  test('top_11xl', () =>
    expect(container.top_11xl()).toMatchInlineSnapshot(`"top:24rem;"`));
  test('top_12xl', () =>
    expect(container.top_12xl()).toMatchInlineSnapshot(`"top:32rem;"`));
  test('top_13xl', () =>
    expect(container.top_13xl()).toMatchInlineSnapshot(`"top:48rem;"`));
  test('top_14xl', () =>
    expect(container.top_14xl()).toMatchInlineSnapshot(`"top:64rem;"`));
  test('top_15xl', () =>
    expect(container.top_15xl()).toMatchInlineSnapshot(`"top:96rem;"`));
  test('top_16xl', () =>
    expect(container.top_16xl()).toMatchInlineSnapshot(`"top:128rem;"`));
  test('top_2xl', () =>
    expect(container.top_2xl()).toMatchInlineSnapshot(`"top:1rem;"`));
  test('top_3xl', () =>
    expect(container.top_3xl()).toMatchInlineSnapshot(`"top:1.5rem;"`));
  test('top_4xl', () =>
    expect(container.top_4xl()).toMatchInlineSnapshot(`"top:2rem;"`));
  test('top_5xl', () =>
    expect(container.top_5xl()).toMatchInlineSnapshot(`"top:3rem;"`));
  test('top_6xl', () =>
    expect(container.top_6xl()).toMatchInlineSnapshot(`"top:4rem;"`));
  test('top_7xl', () =>
    expect(container.top_7xl()).toMatchInlineSnapshot(`"top:6rem;"`));
  test('top_8xl', () =>
    expect(container.top_8xl()).toMatchInlineSnapshot(`"top:8rem;"`));
  test('top_9xl', () =>
    expect(container.top_9xl()).toMatchInlineSnapshot(`"top:16rem;"`));
  test('top_auto', () =>
    expect(container.top_auto()).toMatchInlineSnapshot(`"top:auto;"`));
  test('top_lg', () =>
    expect(container.top_lg()).toMatchInlineSnapshot(`"top:0.5rem;"`));
  test('top_md', () =>
    expect(container.top_md()).toMatchInlineSnapshot(`"top:0.375rem;"`));
  test('top_none', () =>
    expect(container.top_none()).toMatchInlineSnapshot(`"top:0rem;"`));
  test('top_percentage_10', () =>
    expect(container.top_percentage_10()).toMatchInlineSnapshot(`"top:10%;"`));
  test('top_percentage_100', () =>
    expect(container.top_percentage_100()).toMatchInlineSnapshot(
      `"top:100%;"`,
    ));
  test('top_percentage_20', () =>
    expect(container.top_percentage_20()).toMatchInlineSnapshot(`"top:20%;"`));
  test('top_percentage_30', () =>
    expect(container.top_percentage_30()).toMatchInlineSnapshot(`"top:30%;"`));
  test('top_percentage_40', () =>
    expect(container.top_percentage_40()).toMatchInlineSnapshot(`"top:40%;"`));
  test('top_percentage_50', () =>
    expect(container.top_percentage_50()).toMatchInlineSnapshot(`"top:50%;"`));
  test('top_percentage_60', () =>
    expect(container.top_percentage_60()).toMatchInlineSnapshot(`"top:60%;"`));
  test('top_percentage_70', () =>
    expect(container.top_percentage_70()).toMatchInlineSnapshot(`"top:70%;"`));
  test('top_percentage_80', () =>
    expect(container.top_percentage_80()).toMatchInlineSnapshot(`"top:80%;"`));
  test('top_percentage_90', () =>
    expect(container.top_percentage_90()).toMatchInlineSnapshot(`"top:90%;"`));
  test('top_px', () =>
    expect(container.top_px()).toMatchInlineSnapshot(`"top:0.0625rem;"`));
  test('top_screen_height_10', () =>
    expect(container.top_screen_height_10()).toMatchInlineSnapshot(
      `"top:10vh;"`,
    ));
  test('top_screen_height_100', () =>
    expect(container.top_screen_height_100()).toMatchInlineSnapshot(
      `"top:100vh;"`,
    ));
  test('top_screen_height_20', () =>
    expect(container.top_screen_height_20()).toMatchInlineSnapshot(
      `"top:20vh;"`,
    ));
  test('top_screen_height_30', () =>
    expect(container.top_screen_height_30()).toMatchInlineSnapshot(
      `"top:30vh;"`,
    ));
  test('top_screen_height_40', () =>
    expect(container.top_screen_height_40()).toMatchInlineSnapshot(
      `"top:40vh;"`,
    ));
  test('top_screen_height_50', () =>
    expect(container.top_screen_height_50()).toMatchInlineSnapshot(
      `"top:50vh;"`,
    ));
  test('top_screen_height_60', () =>
    expect(container.top_screen_height_60()).toMatchInlineSnapshot(
      `"top:60vh;"`,
    ));
  test('top_screen_height_70', () =>
    expect(container.top_screen_height_70()).toMatchInlineSnapshot(
      `"top:70vh;"`,
    ));
  test('top_screen_height_80', () =>
    expect(container.top_screen_height_80()).toMatchInlineSnapshot(
      `"top:80vh;"`,
    ));
  test('top_screen_height_90', () =>
    expect(container.top_screen_height_90()).toMatchInlineSnapshot(
      `"top:90vh;"`,
    ));
  test('top_screen_width_10', () =>
    expect(container.top_screen_width_10()).toMatchInlineSnapshot(
      `"top:10vw;"`,
    ));
  test('top_screen_width_100', () =>
    expect(container.top_screen_width_100()).toMatchInlineSnapshot(
      `"top:100vw;"`,
    ));
  test('top_screen_width_20', () =>
    expect(container.top_screen_width_20()).toMatchInlineSnapshot(
      `"top:20vw;"`,
    ));
  test('top_screen_width_30', () =>
    expect(container.top_screen_width_30()).toMatchInlineSnapshot(
      `"top:30vw;"`,
    ));
  test('top_screen_width_40', () =>
    expect(container.top_screen_width_40()).toMatchInlineSnapshot(
      `"top:40vw;"`,
    ));
  test('top_screen_width_50', () =>
    expect(container.top_screen_width_50()).toMatchInlineSnapshot(
      `"top:50vw;"`,
    ));
  test('top_screen_width_60', () =>
    expect(container.top_screen_width_60()).toMatchInlineSnapshot(
      `"top:60vw;"`,
    ));
  test('top_screen_width_70', () =>
    expect(container.top_screen_width_70()).toMatchInlineSnapshot(
      `"top:70vw;"`,
    ));
  test('top_screen_width_80', () =>
    expect(container.top_screen_width_80()).toMatchInlineSnapshot(
      `"top:80vw;"`,
    ));
  test('top_screen_width_90', () =>
    expect(container.top_screen_width_90()).toMatchInlineSnapshot(
      `"top:90vw;"`,
    ));
  test('top_sm', () =>
    expect(container.top_sm()).toMatchInlineSnapshot(`"top:0.25rem;"`));
  test('top_xl', () =>
    expect(container.top_xl()).toMatchInlineSnapshot(`"top:0.75rem;"`));
  test('top_xs', () =>
    expect(container.top_xs()).toMatchInlineSnapshot(`"top:0.125rem;"`));
  test('visible', () =>
    expect(container.visible()).toMatchInlineSnapshot(`"visibility:visible;"`));
  test('z_1', () =>
    expect(container.z_1()).toMatchInlineSnapshot(`"z-index:1;"`));
  test('z_10', () =>
    expect(container.z_10()).toMatchInlineSnapshot(`"z-index:10;"`));
  test('z_100', () =>
    expect(container.z_100()).toMatchInlineSnapshot(`"z-index:100;"`));
  test('z_11', () =>
    expect(container.z_11()).toMatchInlineSnapshot(`"z-index:11;"`));
  test('z_12', () =>
    expect(container.z_12()).toMatchInlineSnapshot(`"z-index:12;"`));
  test('z_13', () =>
    expect(container.z_13()).toMatchInlineSnapshot(`"z-index:13;"`));
  test('z_14', () =>
    expect(container.z_14()).toMatchInlineSnapshot(`"z-index:14;"`));
  test('z_15', () =>
    expect(container.z_15()).toMatchInlineSnapshot(`"z-index:15;"`));
  test('z_16', () =>
    expect(container.z_16()).toMatchInlineSnapshot(`"z-index:16;"`));
  test('z_17', () =>
    expect(container.z_17()).toMatchInlineSnapshot(`"z-index:17;"`));
  test('z_18', () =>
    expect(container.z_18()).toMatchInlineSnapshot(`"z-index:18;"`));
  test('z_19', () =>
    expect(container.z_19()).toMatchInlineSnapshot(`"z-index:19;"`));
  test('z_2', () =>
    expect(container.z_2()).toMatchInlineSnapshot(`"z-index:2;"`));
  test('z_20', () =>
    expect(container.z_20()).toMatchInlineSnapshot(`"z-index:20;"`));
  test('z_21', () =>
    expect(container.z_21()).toMatchInlineSnapshot(`"z-index:21;"`));
  test('z_22', () =>
    expect(container.z_22()).toMatchInlineSnapshot(`"z-index:22;"`));
  test('z_23', () =>
    expect(container.z_23()).toMatchInlineSnapshot(`"z-index:23;"`));
  test('z_24', () =>
    expect(container.z_24()).toMatchInlineSnapshot(`"z-index:24;"`));
  test('z_25', () =>
    expect(container.z_25()).toMatchInlineSnapshot(`"z-index:25;"`));
  test('z_26', () =>
    expect(container.z_26()).toMatchInlineSnapshot(`"z-index:26;"`));
  test('z_27', () =>
    expect(container.z_27()).toMatchInlineSnapshot(`"z-index:27;"`));
  test('z_28', () =>
    expect(container.z_28()).toMatchInlineSnapshot(`"z-index:28;"`));
  test('z_29', () =>
    expect(container.z_29()).toMatchInlineSnapshot(`"z-index:29;"`));
  test('z_3', () =>
    expect(container.z_3()).toMatchInlineSnapshot(`"z-index:3;"`));
  test('z_30', () =>
    expect(container.z_30()).toMatchInlineSnapshot(`"z-index:30;"`));
  test('z_31', () =>
    expect(container.z_31()).toMatchInlineSnapshot(`"z-index:31;"`));
  test('z_32', () =>
    expect(container.z_32()).toMatchInlineSnapshot(`"z-index:32;"`));
  test('z_33', () =>
    expect(container.z_33()).toMatchInlineSnapshot(`"z-index:33;"`));
  test('z_34', () =>
    expect(container.z_34()).toMatchInlineSnapshot(`"z-index:34;"`));
  test('z_35', () =>
    expect(container.z_35()).toMatchInlineSnapshot(`"z-index:35;"`));
  test('z_36', () =>
    expect(container.z_36()).toMatchInlineSnapshot(`"z-index:36;"`));
  test('z_37', () =>
    expect(container.z_37()).toMatchInlineSnapshot(`"z-index:37;"`));
  test('z_38', () =>
    expect(container.z_38()).toMatchInlineSnapshot(`"z-index:38;"`));
  test('z_39', () =>
    expect(container.z_39()).toMatchInlineSnapshot(`"z-index:39;"`));
  test('z_4', () =>
    expect(container.z_4()).toMatchInlineSnapshot(`"z-index:4;"`));
  test('z_40', () =>
    expect(container.z_40()).toMatchInlineSnapshot(`"z-index:40;"`));
  test('z_41', () =>
    expect(container.z_41()).toMatchInlineSnapshot(`"z-index:41;"`));
  test('z_42', () =>
    expect(container.z_42()).toMatchInlineSnapshot(`"z-index:42;"`));
  test('z_43', () =>
    expect(container.z_43()).toMatchInlineSnapshot(`"z-index:43;"`));
  test('z_44', () =>
    expect(container.z_44()).toMatchInlineSnapshot(`"z-index:44;"`));
  test('z_45', () =>
    expect(container.z_45()).toMatchInlineSnapshot(`"z-index:45;"`));
  test('z_46', () =>
    expect(container.z_46()).toMatchInlineSnapshot(`"z-index:46;"`));
  test('z_47', () =>
    expect(container.z_47()).toMatchInlineSnapshot(`"z-index:47;"`));
  test('z_48', () =>
    expect(container.z_48()).toMatchInlineSnapshot(`"z-index:48;"`));
  test('z_49', () =>
    expect(container.z_49()).toMatchInlineSnapshot(`"z-index:49;"`));
  test('z_5', () =>
    expect(container.z_5()).toMatchInlineSnapshot(`"z-index:5;"`));
  test('z_50', () =>
    expect(container.z_50()).toMatchInlineSnapshot(`"z-index:50;"`));
  test('z_51', () =>
    expect(container.z_51()).toMatchInlineSnapshot(`"z-index:51;"`));
  test('z_52', () =>
    expect(container.z_52()).toMatchInlineSnapshot(`"z-index:52;"`));
  test('z_53', () =>
    expect(container.z_53()).toMatchInlineSnapshot(`"z-index:53;"`));
  test('z_54', () =>
    expect(container.z_54()).toMatchInlineSnapshot(`"z-index:54;"`));
  test('z_55', () =>
    expect(container.z_55()).toMatchInlineSnapshot(`"z-index:55;"`));
  test('z_56', () =>
    expect(container.z_56()).toMatchInlineSnapshot(`"z-index:56;"`));
  test('z_57', () =>
    expect(container.z_57()).toMatchInlineSnapshot(`"z-index:57;"`));
  test('z_58', () =>
    expect(container.z_58()).toMatchInlineSnapshot(`"z-index:58;"`));
  test('z_59', () =>
    expect(container.z_59()).toMatchInlineSnapshot(`"z-index:59;"`));
  test('z_6', () =>
    expect(container.z_6()).toMatchInlineSnapshot(`"z-index:6;"`));
  test('z_60', () =>
    expect(container.z_60()).toMatchInlineSnapshot(`"z-index:60;"`));
  test('z_61', () =>
    expect(container.z_61()).toMatchInlineSnapshot(`"z-index:61;"`));
  test('z_62', () =>
    expect(container.z_62()).toMatchInlineSnapshot(`"z-index:62;"`));
  test('z_63', () =>
    expect(container.z_63()).toMatchInlineSnapshot(`"z-index:63;"`));
  test('z_64', () =>
    expect(container.z_64()).toMatchInlineSnapshot(`"z-index:64;"`));
  test('z_65', () =>
    expect(container.z_65()).toMatchInlineSnapshot(`"z-index:65;"`));
  test('z_66', () =>
    expect(container.z_66()).toMatchInlineSnapshot(`"z-index:66;"`));
  test('z_67', () =>
    expect(container.z_67()).toMatchInlineSnapshot(`"z-index:67;"`));
  test('z_68', () =>
    expect(container.z_68()).toMatchInlineSnapshot(`"z-index:68;"`));
  test('z_69', () =>
    expect(container.z_69()).toMatchInlineSnapshot(`"z-index:69;"`));
  test('z_7', () =>
    expect(container.z_7()).toMatchInlineSnapshot(`"z-index:7;"`));
  test('z_70', () =>
    expect(container.z_70()).toMatchInlineSnapshot(`"z-index:70;"`));
  test('z_71', () =>
    expect(container.z_71()).toMatchInlineSnapshot(`"z-index:71;"`));
  test('z_72', () =>
    expect(container.z_72()).toMatchInlineSnapshot(`"z-index:72;"`));
  test('z_73', () =>
    expect(container.z_73()).toMatchInlineSnapshot(`"z-index:73;"`));
  test('z_74', () =>
    expect(container.z_74()).toMatchInlineSnapshot(`"z-index:74;"`));
  test('z_75', () =>
    expect(container.z_75()).toMatchInlineSnapshot(`"z-index:75;"`));
  test('z_76', () =>
    expect(container.z_76()).toMatchInlineSnapshot(`"z-index:76;"`));
  test('z_77', () =>
    expect(container.z_77()).toMatchInlineSnapshot(`"z-index:77;"`));
  test('z_78', () =>
    expect(container.z_78()).toMatchInlineSnapshot(`"z-index:78;"`));
  test('z_79', () =>
    expect(container.z_79()).toMatchInlineSnapshot(`"z-index:79;"`));
  test('z_8', () =>
    expect(container.z_8()).toMatchInlineSnapshot(`"z-index:8;"`));
  test('z_80', () =>
    expect(container.z_80()).toMatchInlineSnapshot(`"z-index:80;"`));
  test('z_81', () =>
    expect(container.z_81()).toMatchInlineSnapshot(`"z-index:81;"`));
  test('z_82', () =>
    expect(container.z_82()).toMatchInlineSnapshot(`"z-index:82;"`));
  test('z_83', () =>
    expect(container.z_83()).toMatchInlineSnapshot(`"z-index:83;"`));
  test('z_84', () =>
    expect(container.z_84()).toMatchInlineSnapshot(`"z-index:84;"`));
  test('z_85', () =>
    expect(container.z_85()).toMatchInlineSnapshot(`"z-index:85;"`));
  test('z_86', () =>
    expect(container.z_86()).toMatchInlineSnapshot(`"z-index:86;"`));
  test('z_87', () =>
    expect(container.z_87()).toMatchInlineSnapshot(`"z-index:87;"`));
  test('z_88', () =>
    expect(container.z_88()).toMatchInlineSnapshot(`"z-index:88;"`));
  test('z_89', () =>
    expect(container.z_89()).toMatchInlineSnapshot(`"z-index:89;"`));
  test('z_9', () =>
    expect(container.z_9()).toMatchInlineSnapshot(`"z-index:9;"`));
  test('z_90', () =>
    expect(container.z_90()).toMatchInlineSnapshot(`"z-index:90;"`));
  test('z_91', () =>
    expect(container.z_91()).toMatchInlineSnapshot(`"z-index:91;"`));
  test('z_92', () =>
    expect(container.z_92()).toMatchInlineSnapshot(`"z-index:92;"`));
  test('z_93', () =>
    expect(container.z_93()).toMatchInlineSnapshot(`"z-index:93;"`));
  test('z_94', () =>
    expect(container.z_94()).toMatchInlineSnapshot(`"z-index:94;"`));
  test('z_95', () =>
    expect(container.z_95()).toMatchInlineSnapshot(`"z-index:95;"`));
  test('z_96', () =>
    expect(container.z_96()).toMatchInlineSnapshot(`"z-index:96;"`));
  test('z_97', () =>
    expect(container.z_97()).toMatchInlineSnapshot(`"z-index:97;"`));
  test('z_98', () =>
    expect(container.z_98()).toMatchInlineSnapshot(`"z-index:98;"`));
  test('z_99', () =>
    expect(container.z_99()).toMatchInlineSnapshot(`"z-index:99;"`));
  test('z_auto', () =>
    expect(container.z_auto()).toMatchInlineSnapshot(`"z-index:auto;"`));
  test('z_max', () =>
    expect(container.z_max()).toMatchInlineSnapshot(`"z-index:2147483647;"`));
});
