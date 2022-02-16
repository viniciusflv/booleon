import { sizing } from './sizing';

describe('sizing', () => {
  test('h_10xl', () =>
    expect(sizing.h_10xl()).toMatchInlineSnapshot(`"height:12rem;"`));
  test('h_11xl', () =>
    expect(sizing.h_11xl()).toMatchInlineSnapshot(`"height:24rem;"`));
  test('h_12xl', () =>
    expect(sizing.h_12xl()).toMatchInlineSnapshot(`"height:32rem;"`));
  test('h_13xl', () =>
    expect(sizing.h_13xl()).toMatchInlineSnapshot(`"height:48rem;"`));
  test('h_14xl', () =>
    expect(sizing.h_14xl()).toMatchInlineSnapshot(`"height:64rem;"`));
  test('h_15xl', () =>
    expect(sizing.h_15xl()).toMatchInlineSnapshot(`"height:96rem;"`));
  test('h_16xl', () =>
    expect(sizing.h_16xl()).toMatchInlineSnapshot(`"height:128rem;"`));
  test('h_2xl', () =>
    expect(sizing.h_2xl()).toMatchInlineSnapshot(`"height:1rem;"`));
  test('h_3xl', () =>
    expect(sizing.h_3xl()).toMatchInlineSnapshot(`"height:1.5rem;"`));
  test('h_4xl', () =>
    expect(sizing.h_4xl()).toMatchInlineSnapshot(`"height:2rem;"`));
  test('h_5xl', () =>
    expect(sizing.h_5xl()).toMatchInlineSnapshot(`"height:3rem;"`));
  test('h_6xl', () =>
    expect(sizing.h_6xl()).toMatchInlineSnapshot(`"height:4rem;"`));
  test('h_7xl', () =>
    expect(sizing.h_7xl()).toMatchInlineSnapshot(`"height:6rem;"`));
  test('h_8xl', () =>
    expect(sizing.h_8xl()).toMatchInlineSnapshot(`"height:8rem;"`));
  test('h_9xl', () =>
    expect(sizing.h_9xl()).toMatchInlineSnapshot(`"height:16rem;"`));
  test('h_auto', () =>
    expect(sizing.h_auto()).toMatchInlineSnapshot(`"height:auto;"`));
  test('h_lg', () =>
    expect(sizing.h_lg()).toMatchInlineSnapshot(`"height:0.5rem;"`));
  test('h_md', () =>
    expect(sizing.h_md()).toMatchInlineSnapshot(`"height:0.375rem;"`));
  test('h_none', () =>
    expect(sizing.h_none()).toMatchInlineSnapshot(`"height:0rem;"`));
  test('h_percentage_10', () =>
    expect(sizing.h_percentage_10()).toMatchInlineSnapshot(`"height:10%;"`));
  test('h_percentage_100', () =>
    expect(sizing.h_percentage_100()).toMatchInlineSnapshot(`"height:100%;"`));
  test('h_percentage_20', () =>
    expect(sizing.h_percentage_20()).toMatchInlineSnapshot(`"height:20%;"`));
  test('h_percentage_30', () =>
    expect(sizing.h_percentage_30()).toMatchInlineSnapshot(`"height:30%;"`));
  test('h_percentage_40', () =>
    expect(sizing.h_percentage_40()).toMatchInlineSnapshot(`"height:40%;"`));
  test('h_percentage_50', () =>
    expect(sizing.h_percentage_50()).toMatchInlineSnapshot(`"height:50%;"`));
  test('h_percentage_60', () =>
    expect(sizing.h_percentage_60()).toMatchInlineSnapshot(`"height:60%;"`));
  test('h_percentage_70', () =>
    expect(sizing.h_percentage_70()).toMatchInlineSnapshot(`"height:70%;"`));
  test('h_percentage_80', () =>
    expect(sizing.h_percentage_80()).toMatchInlineSnapshot(`"height:80%;"`));
  test('h_percentage_90', () =>
    expect(sizing.h_percentage_90()).toMatchInlineSnapshot(`"height:90%;"`));
  test('h_px', () =>
    expect(sizing.h_px()).toMatchInlineSnapshot(`"height:0.0625rem;"`));
  test('h_screen_height_10', () =>
    expect(sizing.h_screen_height_10()).toMatchInlineSnapshot(
      `"height:10vh;"`,
    ));
  test('h_screen_height_100', () =>
    expect(sizing.h_screen_height_100()).toMatchInlineSnapshot(
      `"height:100vh;"`,
    ));
  test('h_screen_height_20', () =>
    expect(sizing.h_screen_height_20()).toMatchInlineSnapshot(
      `"height:20vh;"`,
    ));
  test('h_screen_height_30', () =>
    expect(sizing.h_screen_height_30()).toMatchInlineSnapshot(
      `"height:30vh;"`,
    ));
  test('h_screen_height_40', () =>
    expect(sizing.h_screen_height_40()).toMatchInlineSnapshot(
      `"height:40vh;"`,
    ));
  test('h_screen_height_50', () =>
    expect(sizing.h_screen_height_50()).toMatchInlineSnapshot(
      `"height:50vh;"`,
    ));
  test('h_screen_height_60', () =>
    expect(sizing.h_screen_height_60()).toMatchInlineSnapshot(
      `"height:60vh;"`,
    ));
  test('h_screen_height_70', () =>
    expect(sizing.h_screen_height_70()).toMatchInlineSnapshot(
      `"height:70vh;"`,
    ));
  test('h_screen_height_80', () =>
    expect(sizing.h_screen_height_80()).toMatchInlineSnapshot(
      `"height:80vh;"`,
    ));
  test('h_screen_height_90', () =>
    expect(sizing.h_screen_height_90()).toMatchInlineSnapshot(
      `"height:90vh;"`,
    ));
  test('h_screen_width_10', () =>
    expect(sizing.h_screen_width_10()).toMatchInlineSnapshot(`"height:10vw;"`));
  test('h_screen_width_100', () =>
    expect(sizing.h_screen_width_100()).toMatchInlineSnapshot(
      `"height:100vw;"`,
    ));
  test('h_screen_width_20', () =>
    expect(sizing.h_screen_width_20()).toMatchInlineSnapshot(`"height:20vw;"`));
  test('h_screen_width_30', () =>
    expect(sizing.h_screen_width_30()).toMatchInlineSnapshot(`"height:30vw;"`));
  test('h_screen_width_40', () =>
    expect(sizing.h_screen_width_40()).toMatchInlineSnapshot(`"height:40vw;"`));
  test('h_screen_width_50', () =>
    expect(sizing.h_screen_width_50()).toMatchInlineSnapshot(`"height:50vw;"`));
  test('h_screen_width_60', () =>
    expect(sizing.h_screen_width_60()).toMatchInlineSnapshot(`"height:60vw;"`));
  test('h_screen_width_70', () =>
    expect(sizing.h_screen_width_70()).toMatchInlineSnapshot(`"height:70vw;"`));
  test('h_screen_width_80', () =>
    expect(sizing.h_screen_width_80()).toMatchInlineSnapshot(`"height:80vw;"`));
  test('h_screen_width_90', () =>
    expect(sizing.h_screen_width_90()).toMatchInlineSnapshot(`"height:90vw;"`));
  test('h_sm', () =>
    expect(sizing.h_sm()).toMatchInlineSnapshot(`"height:0.25rem;"`));
  test('h_xl', () =>
    expect(sizing.h_xl()).toMatchInlineSnapshot(`"height:0.75rem;"`));
  test('h_xs', () =>
    expect(sizing.h_xs()).toMatchInlineSnapshot(`"height:0.125rem;"`));
  test('max_h_10xl', () =>
    expect(sizing.max_h_10xl()).toMatchInlineSnapshot(`"max-height:12rem;"`));
  test('max_h_11xl', () =>
    expect(sizing.max_h_11xl()).toMatchInlineSnapshot(`"max-height:24rem;"`));
  test('max_h_12xl', () =>
    expect(sizing.max_h_12xl()).toMatchInlineSnapshot(`"max-height:32rem;"`));
  test('max_h_13xl', () =>
    expect(sizing.max_h_13xl()).toMatchInlineSnapshot(`"max-height:48rem;"`));
  test('max_h_14xl', () =>
    expect(sizing.max_h_14xl()).toMatchInlineSnapshot(`"max-height:64rem;"`));
  test('max_h_15xl', () =>
    expect(sizing.max_h_15xl()).toMatchInlineSnapshot(`"max-height:96rem;"`));
  test('max_h_16xl', () =>
    expect(sizing.max_h_16xl()).toMatchInlineSnapshot(`"max-height:128rem;"`));
  test('max_h_2xl', () =>
    expect(sizing.max_h_2xl()).toMatchInlineSnapshot(`"max-height:1rem;"`));
  test('max_h_3xl', () =>
    expect(sizing.max_h_3xl()).toMatchInlineSnapshot(`"max-height:1.5rem;"`));
  test('max_h_4xl', () =>
    expect(sizing.max_h_4xl()).toMatchInlineSnapshot(`"max-height:2rem;"`));
  test('max_h_5xl', () =>
    expect(sizing.max_h_5xl()).toMatchInlineSnapshot(`"max-height:3rem;"`));
  test('max_h_6xl', () =>
    expect(sizing.max_h_6xl()).toMatchInlineSnapshot(`"max-height:4rem;"`));
  test('max_h_7xl', () =>
    expect(sizing.max_h_7xl()).toMatchInlineSnapshot(`"max-height:6rem;"`));
  test('max_h_8xl', () =>
    expect(sizing.max_h_8xl()).toMatchInlineSnapshot(`"max-height:8rem;"`));
  test('max_h_9xl', () =>
    expect(sizing.max_h_9xl()).toMatchInlineSnapshot(`"max-height:16rem;"`));
  test('max_h_auto', () =>
    expect(sizing.max_h_auto()).toMatchInlineSnapshot(`"max-height:auto;"`));
  test('max_h_lg', () =>
    expect(sizing.max_h_lg()).toMatchInlineSnapshot(`"max-height:0.5rem;"`));
  test('max_h_md', () =>
    expect(sizing.max_h_md()).toMatchInlineSnapshot(`"max-height:0.375rem;"`));
  test('max_h_none', () =>
    expect(sizing.max_h_none()).toMatchInlineSnapshot(`"max-height:0rem;"`));
  test('max_h_percentage_10', () =>
    expect(sizing.max_h_percentage_10()).toMatchInlineSnapshot(
      `"max-height:10%;"`,
    ));
  test('max_h_percentage_100', () =>
    expect(sizing.max_h_percentage_100()).toMatchInlineSnapshot(
      `"max-height:100%;"`,
    ));
  test('max_h_percentage_20', () =>
    expect(sizing.max_h_percentage_20()).toMatchInlineSnapshot(
      `"max-height:20%;"`,
    ));
  test('max_h_percentage_30', () =>
    expect(sizing.max_h_percentage_30()).toMatchInlineSnapshot(
      `"max-height:30%;"`,
    ));
  test('max_h_percentage_40', () =>
    expect(sizing.max_h_percentage_40()).toMatchInlineSnapshot(
      `"max-height:40%;"`,
    ));
  test('max_h_percentage_50', () =>
    expect(sizing.max_h_percentage_50()).toMatchInlineSnapshot(
      `"max-height:50%;"`,
    ));
  test('max_h_percentage_60', () =>
    expect(sizing.max_h_percentage_60()).toMatchInlineSnapshot(
      `"max-height:60%;"`,
    ));
  test('max_h_percentage_70', () =>
    expect(sizing.max_h_percentage_70()).toMatchInlineSnapshot(
      `"max-height:70%;"`,
    ));
  test('max_h_percentage_80', () =>
    expect(sizing.max_h_percentage_80()).toMatchInlineSnapshot(
      `"max-height:80%;"`,
    ));
  test('max_h_percentage_90', () =>
    expect(sizing.max_h_percentage_90()).toMatchInlineSnapshot(
      `"max-height:90%;"`,
    ));
  test('max_h_px', () =>
    expect(sizing.max_h_px()).toMatchInlineSnapshot(`"max-height:0.0625rem;"`));
  test('max_h_screen_height_10', () =>
    expect(sizing.max_h_screen_height_10()).toMatchInlineSnapshot(
      `"max-height:10vh;"`,
    ));
  test('max_h_screen_height_100', () =>
    expect(sizing.max_h_screen_height_100()).toMatchInlineSnapshot(
      `"max-height:100vh;"`,
    ));
  test('max_h_screen_height_20', () =>
    expect(sizing.max_h_screen_height_20()).toMatchInlineSnapshot(
      `"max-height:20vh;"`,
    ));
  test('max_h_screen_height_30', () =>
    expect(sizing.max_h_screen_height_30()).toMatchInlineSnapshot(
      `"max-height:30vh;"`,
    ));
  test('max_h_screen_height_40', () =>
    expect(sizing.max_h_screen_height_40()).toMatchInlineSnapshot(
      `"max-height:40vh;"`,
    ));
  test('max_h_screen_height_50', () =>
    expect(sizing.max_h_screen_height_50()).toMatchInlineSnapshot(
      `"max-height:50vh;"`,
    ));
  test('max_h_screen_height_60', () =>
    expect(sizing.max_h_screen_height_60()).toMatchInlineSnapshot(
      `"max-height:60vh;"`,
    ));
  test('max_h_screen_height_70', () =>
    expect(sizing.max_h_screen_height_70()).toMatchInlineSnapshot(
      `"max-height:70vh;"`,
    ));
  test('max_h_screen_height_80', () =>
    expect(sizing.max_h_screen_height_80()).toMatchInlineSnapshot(
      `"max-height:80vh;"`,
    ));
  test('max_h_screen_height_90', () =>
    expect(sizing.max_h_screen_height_90()).toMatchInlineSnapshot(
      `"max-height:90vh;"`,
    ));
  test('max_h_screen_width_10', () =>
    expect(sizing.max_h_screen_width_10()).toMatchInlineSnapshot(
      `"max-height:10vw;"`,
    ));
  test('max_h_screen_width_100', () =>
    expect(sizing.max_h_screen_width_100()).toMatchInlineSnapshot(
      `"max-height:100vw;"`,
    ));
  test('max_h_screen_width_20', () =>
    expect(sizing.max_h_screen_width_20()).toMatchInlineSnapshot(
      `"max-height:20vw;"`,
    ));
  test('max_h_screen_width_30', () =>
    expect(sizing.max_h_screen_width_30()).toMatchInlineSnapshot(
      `"max-height:30vw;"`,
    ));
  test('max_h_screen_width_40', () =>
    expect(sizing.max_h_screen_width_40()).toMatchInlineSnapshot(
      `"max-height:40vw;"`,
    ));
  test('max_h_screen_width_50', () =>
    expect(sizing.max_h_screen_width_50()).toMatchInlineSnapshot(
      `"max-height:50vw;"`,
    ));
  test('max_h_screen_width_60', () =>
    expect(sizing.max_h_screen_width_60()).toMatchInlineSnapshot(
      `"max-height:60vw;"`,
    ));
  test('max_h_screen_width_70', () =>
    expect(sizing.max_h_screen_width_70()).toMatchInlineSnapshot(
      `"max-height:70vw;"`,
    ));
  test('max_h_screen_width_80', () =>
    expect(sizing.max_h_screen_width_80()).toMatchInlineSnapshot(
      `"max-height:80vw;"`,
    ));
  test('max_h_screen_width_90', () =>
    expect(sizing.max_h_screen_width_90()).toMatchInlineSnapshot(
      `"max-height:90vw;"`,
    ));
  test('max_h_sm', () =>
    expect(sizing.max_h_sm()).toMatchInlineSnapshot(`"max-height:0.25rem;"`));
  test('max_h_xl', () =>
    expect(sizing.max_h_xl()).toMatchInlineSnapshot(`"max-height:0.75rem;"`));
  test('max_h_xs', () =>
    expect(sizing.max_h_xs()).toMatchInlineSnapshot(`"max-height:0.125rem;"`));
  test('max_w_10xl', () =>
    expect(sizing.max_w_10xl()).toMatchInlineSnapshot(`"max-width:12rem;"`));
  test('max_w_11xl', () =>
    expect(sizing.max_w_11xl()).toMatchInlineSnapshot(`"max-width:24rem;"`));
  test('max_w_12xl', () =>
    expect(sizing.max_w_12xl()).toMatchInlineSnapshot(`"max-width:32rem;"`));
  test('max_w_13xl', () =>
    expect(sizing.max_w_13xl()).toMatchInlineSnapshot(`"max-width:48rem;"`));
  test('max_w_14xl', () =>
    expect(sizing.max_w_14xl()).toMatchInlineSnapshot(`"max-width:64rem;"`));
  test('max_w_15xl', () =>
    expect(sizing.max_w_15xl()).toMatchInlineSnapshot(`"max-width:96rem;"`));
  test('max_w_16xl', () =>
    expect(sizing.max_w_16xl()).toMatchInlineSnapshot(`"max-width:128rem;"`));
  test('max_w_2xl', () =>
    expect(sizing.max_w_2xl()).toMatchInlineSnapshot(`"max-width:1rem;"`));
  test('max_w_3xl', () =>
    expect(sizing.max_w_3xl()).toMatchInlineSnapshot(`"max-width:1.5rem;"`));
  test('max_w_4xl', () =>
    expect(sizing.max_w_4xl()).toMatchInlineSnapshot(`"max-width:2rem;"`));
  test('max_w_5xl', () =>
    expect(sizing.max_w_5xl()).toMatchInlineSnapshot(`"max-width:3rem;"`));
  test('max_w_6xl', () =>
    expect(sizing.max_w_6xl()).toMatchInlineSnapshot(`"max-width:4rem;"`));
  test('max_w_7xl', () =>
    expect(sizing.max_w_7xl()).toMatchInlineSnapshot(`"max-width:6rem;"`));
  test('max_w_8xl', () =>
    expect(sizing.max_w_8xl()).toMatchInlineSnapshot(`"max-width:8rem;"`));
  test('max_w_9xl', () =>
    expect(sizing.max_w_9xl()).toMatchInlineSnapshot(`"max-width:16rem;"`));
  test('max_w_auto', () =>
    expect(sizing.max_w_auto()).toMatchInlineSnapshot(`"max-width:auto;"`));
  test('max_w_lg', () =>
    expect(sizing.max_w_lg()).toMatchInlineSnapshot(`"max-width:0.5rem;"`));
  test('max_w_md', () =>
    expect(sizing.max_w_md()).toMatchInlineSnapshot(`"max-width:0.375rem;"`));
  test('max_w_none', () =>
    expect(sizing.max_w_none()).toMatchInlineSnapshot(`"max-width:0rem;"`));
  test('max_w_percentage_10', () =>
    expect(sizing.max_w_percentage_10()).toMatchInlineSnapshot(
      `"max-width:10%;"`,
    ));
  test('max_w_percentage_100', () =>
    expect(sizing.max_w_percentage_100()).toMatchInlineSnapshot(
      `"max-width:100%;"`,
    ));
  test('max_w_percentage_20', () =>
    expect(sizing.max_w_percentage_20()).toMatchInlineSnapshot(
      `"max-width:20%;"`,
    ));
  test('max_w_percentage_30', () =>
    expect(sizing.max_w_percentage_30()).toMatchInlineSnapshot(
      `"max-width:30%;"`,
    ));
  test('max_w_percentage_40', () =>
    expect(sizing.max_w_percentage_40()).toMatchInlineSnapshot(
      `"max-width:40%;"`,
    ));
  test('max_w_percentage_50', () =>
    expect(sizing.max_w_percentage_50()).toMatchInlineSnapshot(
      `"max-width:50%;"`,
    ));
  test('max_w_percentage_60', () =>
    expect(sizing.max_w_percentage_60()).toMatchInlineSnapshot(
      `"max-width:60%;"`,
    ));
  test('max_w_percentage_70', () =>
    expect(sizing.max_w_percentage_70()).toMatchInlineSnapshot(
      `"max-width:70%;"`,
    ));
  test('max_w_percentage_80', () =>
    expect(sizing.max_w_percentage_80()).toMatchInlineSnapshot(
      `"max-width:80%;"`,
    ));
  test('max_w_percentage_90', () =>
    expect(sizing.max_w_percentage_90()).toMatchInlineSnapshot(
      `"max-width:90%;"`,
    ));
  test('max_w_px', () =>
    expect(sizing.max_w_px()).toMatchInlineSnapshot(`"max-width:0.0625rem;"`));
  test('max_w_screen_height_10', () =>
    expect(sizing.max_w_screen_height_10()).toMatchInlineSnapshot(
      `"max-width:10vh;"`,
    ));
  test('max_w_screen_height_100', () =>
    expect(sizing.max_w_screen_height_100()).toMatchInlineSnapshot(
      `"max-width:100vh;"`,
    ));
  test('max_w_screen_height_20', () =>
    expect(sizing.max_w_screen_height_20()).toMatchInlineSnapshot(
      `"max-width:20vh;"`,
    ));
  test('max_w_screen_height_30', () =>
    expect(sizing.max_w_screen_height_30()).toMatchInlineSnapshot(
      `"max-width:30vh;"`,
    ));
  test('max_w_screen_height_40', () =>
    expect(sizing.max_w_screen_height_40()).toMatchInlineSnapshot(
      `"max-width:40vh;"`,
    ));
  test('max_w_screen_height_50', () =>
    expect(sizing.max_w_screen_height_50()).toMatchInlineSnapshot(
      `"max-width:50vh;"`,
    ));
  test('max_w_screen_height_60', () =>
    expect(sizing.max_w_screen_height_60()).toMatchInlineSnapshot(
      `"max-width:60vh;"`,
    ));
  test('max_w_screen_height_70', () =>
    expect(sizing.max_w_screen_height_70()).toMatchInlineSnapshot(
      `"max-width:70vh;"`,
    ));
  test('max_w_screen_height_80', () =>
    expect(sizing.max_w_screen_height_80()).toMatchInlineSnapshot(
      `"max-width:80vh;"`,
    ));
  test('max_w_screen_height_90', () =>
    expect(sizing.max_w_screen_height_90()).toMatchInlineSnapshot(
      `"max-width:90vh;"`,
    ));
  test('max_w_screen_width_10', () =>
    expect(sizing.max_w_screen_width_10()).toMatchInlineSnapshot(
      `"max-width:10vw;"`,
    ));
  test('max_w_screen_width_100', () =>
    expect(sizing.max_w_screen_width_100()).toMatchInlineSnapshot(
      `"max-width:100vw;"`,
    ));
  test('max_w_screen_width_20', () =>
    expect(sizing.max_w_screen_width_20()).toMatchInlineSnapshot(
      `"max-width:20vw;"`,
    ));
  test('max_w_screen_width_30', () =>
    expect(sizing.max_w_screen_width_30()).toMatchInlineSnapshot(
      `"max-width:30vw;"`,
    ));
  test('max_w_screen_width_40', () =>
    expect(sizing.max_w_screen_width_40()).toMatchInlineSnapshot(
      `"max-width:40vw;"`,
    ));
  test('max_w_screen_width_50', () =>
    expect(sizing.max_w_screen_width_50()).toMatchInlineSnapshot(
      `"max-width:50vw;"`,
    ));
  test('max_w_screen_width_60', () =>
    expect(sizing.max_w_screen_width_60()).toMatchInlineSnapshot(
      `"max-width:60vw;"`,
    ));
  test('max_w_screen_width_70', () =>
    expect(sizing.max_w_screen_width_70()).toMatchInlineSnapshot(
      `"max-width:70vw;"`,
    ));
  test('max_w_screen_width_80', () =>
    expect(sizing.max_w_screen_width_80()).toMatchInlineSnapshot(
      `"max-width:80vw;"`,
    ));
  test('max_w_screen_width_90', () =>
    expect(sizing.max_w_screen_width_90()).toMatchInlineSnapshot(
      `"max-width:90vw;"`,
    ));
  test('max_w_sm', () =>
    expect(sizing.max_w_sm()).toMatchInlineSnapshot(`"max-width:0.25rem;"`));
  test('max_w_xl', () =>
    expect(sizing.max_w_xl()).toMatchInlineSnapshot(`"max-width:0.75rem;"`));
  test('max_w_xs', () =>
    expect(sizing.max_w_xs()).toMatchInlineSnapshot(`"max-width:0.125rem;"`));
  test('min_h_10xl', () =>
    expect(sizing.min_h_10xl()).toMatchInlineSnapshot(`"min-height:12rem;"`));
  test('min_h_11xl', () =>
    expect(sizing.min_h_11xl()).toMatchInlineSnapshot(`"min-height:24rem;"`));
  test('min_h_12xl', () =>
    expect(sizing.min_h_12xl()).toMatchInlineSnapshot(`"min-height:32rem;"`));
  test('min_h_13xl', () =>
    expect(sizing.min_h_13xl()).toMatchInlineSnapshot(`"min-height:48rem;"`));
  test('min_h_14xl', () =>
    expect(sizing.min_h_14xl()).toMatchInlineSnapshot(`"min-height:64rem;"`));
  test('min_h_15xl', () =>
    expect(sizing.min_h_15xl()).toMatchInlineSnapshot(`"min-height:96rem;"`));
  test('min_h_16xl', () =>
    expect(sizing.min_h_16xl()).toMatchInlineSnapshot(`"min-height:128rem;"`));
  test('min_h_2xl', () =>
    expect(sizing.min_h_2xl()).toMatchInlineSnapshot(`"min-height:1rem;"`));
  test('min_h_3xl', () =>
    expect(sizing.min_h_3xl()).toMatchInlineSnapshot(`"min-height:1.5rem;"`));
  test('min_h_4xl', () =>
    expect(sizing.min_h_4xl()).toMatchInlineSnapshot(`"min-height:2rem;"`));
  test('min_h_5xl', () =>
    expect(sizing.min_h_5xl()).toMatchInlineSnapshot(`"min-height:3rem;"`));
  test('min_h_6xl', () =>
    expect(sizing.min_h_6xl()).toMatchInlineSnapshot(`"min-height:4rem;"`));
  test('min_h_7xl', () =>
    expect(sizing.min_h_7xl()).toMatchInlineSnapshot(`"min-height:6rem;"`));
  test('min_h_8xl', () =>
    expect(sizing.min_h_8xl()).toMatchInlineSnapshot(`"min-height:8rem;"`));
  test('min_h_9xl', () =>
    expect(sizing.min_h_9xl()).toMatchInlineSnapshot(`"min-height:16rem;"`));
  test('min_h_auto', () =>
    expect(sizing.min_h_auto()).toMatchInlineSnapshot(`"min-height:auto;"`));
  test('min_h_lg', () =>
    expect(sizing.min_h_lg()).toMatchInlineSnapshot(`"min-height:0.5rem;"`));
  test('min_h_md', () =>
    expect(sizing.min_h_md()).toMatchInlineSnapshot(`"min-height:0.375rem;"`));
  test('min_h_none', () =>
    expect(sizing.min_h_none()).toMatchInlineSnapshot(`"min-height:0rem;"`));
  test('min_h_percentage_10', () =>
    expect(sizing.min_h_percentage_10()).toMatchInlineSnapshot(
      `"min-height:10%;"`,
    ));
  test('min_h_percentage_100', () =>
    expect(sizing.min_h_percentage_100()).toMatchInlineSnapshot(
      `"min-height:100%;"`,
    ));
  test('min_h_percentage_20', () =>
    expect(sizing.min_h_percentage_20()).toMatchInlineSnapshot(
      `"min-height:20%;"`,
    ));
  test('min_h_percentage_30', () =>
    expect(sizing.min_h_percentage_30()).toMatchInlineSnapshot(
      `"min-height:30%;"`,
    ));
  test('min_h_percentage_40', () =>
    expect(sizing.min_h_percentage_40()).toMatchInlineSnapshot(
      `"min-height:40%;"`,
    ));
  test('min_h_percentage_50', () =>
    expect(sizing.min_h_percentage_50()).toMatchInlineSnapshot(
      `"min-height:50%;"`,
    ));
  test('min_h_percentage_60', () =>
    expect(sizing.min_h_percentage_60()).toMatchInlineSnapshot(
      `"min-height:60%;"`,
    ));
  test('min_h_percentage_70', () =>
    expect(sizing.min_h_percentage_70()).toMatchInlineSnapshot(
      `"min-height:70%;"`,
    ));
  test('min_h_percentage_80', () =>
    expect(sizing.min_h_percentage_80()).toMatchInlineSnapshot(
      `"min-height:80%;"`,
    ));
  test('min_h_percentage_90', () =>
    expect(sizing.min_h_percentage_90()).toMatchInlineSnapshot(
      `"min-height:90%;"`,
    ));
  test('min_h_px', () =>
    expect(sizing.min_h_px()).toMatchInlineSnapshot(`"min-height:0.0625rem;"`));
  test('min_h_screen_height_10', () =>
    expect(sizing.min_h_screen_height_10()).toMatchInlineSnapshot(
      `"min-height:10vh;"`,
    ));
  test('min_h_screen_height_100', () =>
    expect(sizing.min_h_screen_height_100()).toMatchInlineSnapshot(
      `"min-height:100vh;"`,
    ));
  test('min_h_screen_height_20', () =>
    expect(sizing.min_h_screen_height_20()).toMatchInlineSnapshot(
      `"min-height:20vh;"`,
    ));
  test('min_h_screen_height_30', () =>
    expect(sizing.min_h_screen_height_30()).toMatchInlineSnapshot(
      `"min-height:30vh;"`,
    ));
  test('min_h_screen_height_40', () =>
    expect(sizing.min_h_screen_height_40()).toMatchInlineSnapshot(
      `"min-height:40vh;"`,
    ));
  test('min_h_screen_height_50', () =>
    expect(sizing.min_h_screen_height_50()).toMatchInlineSnapshot(
      `"min-height:50vh;"`,
    ));
  test('min_h_screen_height_60', () =>
    expect(sizing.min_h_screen_height_60()).toMatchInlineSnapshot(
      `"min-height:60vh;"`,
    ));
  test('min_h_screen_height_70', () =>
    expect(sizing.min_h_screen_height_70()).toMatchInlineSnapshot(
      `"min-height:70vh;"`,
    ));
  test('min_h_screen_height_80', () =>
    expect(sizing.min_h_screen_height_80()).toMatchInlineSnapshot(
      `"min-height:80vh;"`,
    ));
  test('min_h_screen_height_90', () =>
    expect(sizing.min_h_screen_height_90()).toMatchInlineSnapshot(
      `"min-height:90vh;"`,
    ));
  test('min_h_screen_width_10', () =>
    expect(sizing.min_h_screen_width_10()).toMatchInlineSnapshot(
      `"min-height:10vw;"`,
    ));
  test('min_h_screen_width_100', () =>
    expect(sizing.min_h_screen_width_100()).toMatchInlineSnapshot(
      `"min-height:100vw;"`,
    ));
  test('min_h_screen_width_20', () =>
    expect(sizing.min_h_screen_width_20()).toMatchInlineSnapshot(
      `"min-height:20vw;"`,
    ));
  test('min_h_screen_width_30', () =>
    expect(sizing.min_h_screen_width_30()).toMatchInlineSnapshot(
      `"min-height:30vw;"`,
    ));
  test('min_h_screen_width_40', () =>
    expect(sizing.min_h_screen_width_40()).toMatchInlineSnapshot(
      `"min-height:40vw;"`,
    ));
  test('min_h_screen_width_50', () =>
    expect(sizing.min_h_screen_width_50()).toMatchInlineSnapshot(
      `"min-height:50vw;"`,
    ));
  test('min_h_screen_width_60', () =>
    expect(sizing.min_h_screen_width_60()).toMatchInlineSnapshot(
      `"min-height:60vw;"`,
    ));
  test('min_h_screen_width_70', () =>
    expect(sizing.min_h_screen_width_70()).toMatchInlineSnapshot(
      `"min-height:70vw;"`,
    ));
  test('min_h_screen_width_80', () =>
    expect(sizing.min_h_screen_width_80()).toMatchInlineSnapshot(
      `"min-height:80vw;"`,
    ));
  test('min_h_screen_width_90', () =>
    expect(sizing.min_h_screen_width_90()).toMatchInlineSnapshot(
      `"min-height:90vw;"`,
    ));
  test('min_h_sm', () =>
    expect(sizing.min_h_sm()).toMatchInlineSnapshot(`"min-height:0.25rem;"`));
  test('min_h_xl', () =>
    expect(sizing.min_h_xl()).toMatchInlineSnapshot(`"min-height:0.75rem;"`));
  test('min_h_xs', () =>
    expect(sizing.min_h_xs()).toMatchInlineSnapshot(`"min-height:0.125rem;"`));
  test('min_w_10xl', () =>
    expect(sizing.min_w_10xl()).toMatchInlineSnapshot(`"min-width:12rem;"`));
  test('min_w_11xl', () =>
    expect(sizing.min_w_11xl()).toMatchInlineSnapshot(`"min-width:24rem;"`));
  test('min_w_12xl', () =>
    expect(sizing.min_w_12xl()).toMatchInlineSnapshot(`"min-width:32rem;"`));
  test('min_w_13xl', () =>
    expect(sizing.min_w_13xl()).toMatchInlineSnapshot(`"min-width:48rem;"`));
  test('min_w_14xl', () =>
    expect(sizing.min_w_14xl()).toMatchInlineSnapshot(`"min-width:64rem;"`));
  test('min_w_15xl', () =>
    expect(sizing.min_w_15xl()).toMatchInlineSnapshot(`"min-width:96rem;"`));
  test('min_w_16xl', () =>
    expect(sizing.min_w_16xl()).toMatchInlineSnapshot(`"min-width:128rem;"`));
  test('min_w_2xl', () =>
    expect(sizing.min_w_2xl()).toMatchInlineSnapshot(`"min-width:1rem;"`));
  test('min_w_3xl', () =>
    expect(sizing.min_w_3xl()).toMatchInlineSnapshot(`"min-width:1.5rem;"`));
  test('min_w_4xl', () =>
    expect(sizing.min_w_4xl()).toMatchInlineSnapshot(`"min-width:2rem;"`));
  test('min_w_5xl', () =>
    expect(sizing.min_w_5xl()).toMatchInlineSnapshot(`"min-width:3rem;"`));
  test('min_w_6xl', () =>
    expect(sizing.min_w_6xl()).toMatchInlineSnapshot(`"min-width:4rem;"`));
  test('min_w_7xl', () =>
    expect(sizing.min_w_7xl()).toMatchInlineSnapshot(`"min-width:6rem;"`));
  test('min_w_8xl', () =>
    expect(sizing.min_w_8xl()).toMatchInlineSnapshot(`"min-width:8rem;"`));
  test('min_w_9xl', () =>
    expect(sizing.min_w_9xl()).toMatchInlineSnapshot(`"min-width:16rem;"`));
  test('min_w_auto', () =>
    expect(sizing.min_w_auto()).toMatchInlineSnapshot(`"min-width:auto;"`));
  test('min_w_lg', () =>
    expect(sizing.min_w_lg()).toMatchInlineSnapshot(`"min-width:0.5rem;"`));
  test('min_w_md', () =>
    expect(sizing.min_w_md()).toMatchInlineSnapshot(`"min-width:0.375rem;"`));
  test('min_w_none', () =>
    expect(sizing.min_w_none()).toMatchInlineSnapshot(`"min-width:0rem;"`));
  test('min_w_percentage_10', () =>
    expect(sizing.min_w_percentage_10()).toMatchInlineSnapshot(
      `"min-width:10%;"`,
    ));
  test('min_w_percentage_100', () =>
    expect(sizing.min_w_percentage_100()).toMatchInlineSnapshot(
      `"min-width:100%;"`,
    ));
  test('min_w_percentage_20', () =>
    expect(sizing.min_w_percentage_20()).toMatchInlineSnapshot(
      `"min-width:20%;"`,
    ));
  test('min_w_percentage_30', () =>
    expect(sizing.min_w_percentage_30()).toMatchInlineSnapshot(
      `"min-width:30%;"`,
    ));
  test('min_w_percentage_40', () =>
    expect(sizing.min_w_percentage_40()).toMatchInlineSnapshot(
      `"min-width:40%;"`,
    ));
  test('min_w_percentage_50', () =>
    expect(sizing.min_w_percentage_50()).toMatchInlineSnapshot(
      `"min-width:50%;"`,
    ));
  test('min_w_percentage_60', () =>
    expect(sizing.min_w_percentage_60()).toMatchInlineSnapshot(
      `"min-width:60%;"`,
    ));
  test('min_w_percentage_70', () =>
    expect(sizing.min_w_percentage_70()).toMatchInlineSnapshot(
      `"min-width:70%;"`,
    ));
  test('min_w_percentage_80', () =>
    expect(sizing.min_w_percentage_80()).toMatchInlineSnapshot(
      `"min-width:80%;"`,
    ));
  test('min_w_percentage_90', () =>
    expect(sizing.min_w_percentage_90()).toMatchInlineSnapshot(
      `"min-width:90%;"`,
    ));
  test('min_w_px', () =>
    expect(sizing.min_w_px()).toMatchInlineSnapshot(`"min-width:0.0625rem;"`));
  test('min_w_screen_height_10', () =>
    expect(sizing.min_w_screen_height_10()).toMatchInlineSnapshot(
      `"min-width:10vh;"`,
    ));
  test('min_w_screen_height_100', () =>
    expect(sizing.min_w_screen_height_100()).toMatchInlineSnapshot(
      `"min-width:100vh;"`,
    ));
  test('min_w_screen_height_20', () =>
    expect(sizing.min_w_screen_height_20()).toMatchInlineSnapshot(
      `"min-width:20vh;"`,
    ));
  test('min_w_screen_height_30', () =>
    expect(sizing.min_w_screen_height_30()).toMatchInlineSnapshot(
      `"min-width:30vh;"`,
    ));
  test('min_w_screen_height_40', () =>
    expect(sizing.min_w_screen_height_40()).toMatchInlineSnapshot(
      `"min-width:40vh;"`,
    ));
  test('min_w_screen_height_50', () =>
    expect(sizing.min_w_screen_height_50()).toMatchInlineSnapshot(
      `"min-width:50vh;"`,
    ));
  test('min_w_screen_height_60', () =>
    expect(sizing.min_w_screen_height_60()).toMatchInlineSnapshot(
      `"min-width:60vh;"`,
    ));
  test('min_w_screen_height_70', () =>
    expect(sizing.min_w_screen_height_70()).toMatchInlineSnapshot(
      `"min-width:70vh;"`,
    ));
  test('min_w_screen_height_80', () =>
    expect(sizing.min_w_screen_height_80()).toMatchInlineSnapshot(
      `"min-width:80vh;"`,
    ));
  test('min_w_screen_height_90', () =>
    expect(sizing.min_w_screen_height_90()).toMatchInlineSnapshot(
      `"min-width:90vh;"`,
    ));
  test('min_w_screen_width_10', () =>
    expect(sizing.min_w_screen_width_10()).toMatchInlineSnapshot(
      `"min-width:10vw;"`,
    ));
  test('min_w_screen_width_100', () =>
    expect(sizing.min_w_screen_width_100()).toMatchInlineSnapshot(
      `"min-width:100vw;"`,
    ));
  test('min_w_screen_width_20', () =>
    expect(sizing.min_w_screen_width_20()).toMatchInlineSnapshot(
      `"min-width:20vw;"`,
    ));
  test('min_w_screen_width_30', () =>
    expect(sizing.min_w_screen_width_30()).toMatchInlineSnapshot(
      `"min-width:30vw;"`,
    ));
  test('min_w_screen_width_40', () =>
    expect(sizing.min_w_screen_width_40()).toMatchInlineSnapshot(
      `"min-width:40vw;"`,
    ));
  test('min_w_screen_width_50', () =>
    expect(sizing.min_w_screen_width_50()).toMatchInlineSnapshot(
      `"min-width:50vw;"`,
    ));
  test('min_w_screen_width_60', () =>
    expect(sizing.min_w_screen_width_60()).toMatchInlineSnapshot(
      `"min-width:60vw;"`,
    ));
  test('min_w_screen_width_70', () =>
    expect(sizing.min_w_screen_width_70()).toMatchInlineSnapshot(
      `"min-width:70vw;"`,
    ));
  test('min_w_screen_width_80', () =>
    expect(sizing.min_w_screen_width_80()).toMatchInlineSnapshot(
      `"min-width:80vw;"`,
    ));
  test('min_w_screen_width_90', () =>
    expect(sizing.min_w_screen_width_90()).toMatchInlineSnapshot(
      `"min-width:90vw;"`,
    ));
  test('min_w_sm', () =>
    expect(sizing.min_w_sm()).toMatchInlineSnapshot(`"min-width:0.25rem;"`));
  test('min_w_xl', () =>
    expect(sizing.min_w_xl()).toMatchInlineSnapshot(`"min-width:0.75rem;"`));
  test('min_w_xs', () =>
    expect(sizing.min_w_xs()).toMatchInlineSnapshot(`"min-width:0.125rem;"`));
  test('w_10xl', () =>
    expect(sizing.w_10xl()).toMatchInlineSnapshot(`"width:12rem;"`));
  test('w_11xl', () =>
    expect(sizing.w_11xl()).toMatchInlineSnapshot(`"width:24rem;"`));
  test('w_12xl', () =>
    expect(sizing.w_12xl()).toMatchInlineSnapshot(`"width:32rem;"`));
  test('w_13xl', () =>
    expect(sizing.w_13xl()).toMatchInlineSnapshot(`"width:48rem;"`));
  test('w_14xl', () =>
    expect(sizing.w_14xl()).toMatchInlineSnapshot(`"width:64rem;"`));
  test('w_15xl', () =>
    expect(sizing.w_15xl()).toMatchInlineSnapshot(`"width:96rem;"`));
  test('w_16xl', () =>
    expect(sizing.w_16xl()).toMatchInlineSnapshot(`"width:128rem;"`));
  test('w_2xl', () =>
    expect(sizing.w_2xl()).toMatchInlineSnapshot(`"width:1rem;"`));
  test('w_3xl', () =>
    expect(sizing.w_3xl()).toMatchInlineSnapshot(`"width:1.5rem;"`));
  test('w_4xl', () =>
    expect(sizing.w_4xl()).toMatchInlineSnapshot(`"width:2rem;"`));
  test('w_5xl', () =>
    expect(sizing.w_5xl()).toMatchInlineSnapshot(`"width:3rem;"`));
  test('w_6xl', () =>
    expect(sizing.w_6xl()).toMatchInlineSnapshot(`"width:4rem;"`));
  test('w_7xl', () =>
    expect(sizing.w_7xl()).toMatchInlineSnapshot(`"width:6rem;"`));
  test('w_8xl', () =>
    expect(sizing.w_8xl()).toMatchInlineSnapshot(`"width:8rem;"`));
  test('w_9xl', () =>
    expect(sizing.w_9xl()).toMatchInlineSnapshot(`"width:16rem;"`));
  test('w_auto', () =>
    expect(sizing.w_auto()).toMatchInlineSnapshot(`"width:auto;"`));
  test('w_lg', () =>
    expect(sizing.w_lg()).toMatchInlineSnapshot(`"width:0.5rem;"`));
  test('w_md', () =>
    expect(sizing.w_md()).toMatchInlineSnapshot(`"width:0.375rem;"`));
  test('w_none', () =>
    expect(sizing.w_none()).toMatchInlineSnapshot(`"width:0rem;"`));
  test('w_percentage_10', () =>
    expect(sizing.w_percentage_10()).toMatchInlineSnapshot(`"width:10%;"`));
  test('w_percentage_100', () =>
    expect(sizing.w_percentage_100()).toMatchInlineSnapshot(`"width:100%;"`));
  test('w_percentage_20', () =>
    expect(sizing.w_percentage_20()).toMatchInlineSnapshot(`"width:20%;"`));
  test('w_percentage_30', () =>
    expect(sizing.w_percentage_30()).toMatchInlineSnapshot(`"width:30%;"`));
  test('w_percentage_40', () =>
    expect(sizing.w_percentage_40()).toMatchInlineSnapshot(`"width:40%;"`));
  test('w_percentage_50', () =>
    expect(sizing.w_percentage_50()).toMatchInlineSnapshot(`"width:50%;"`));
  test('w_percentage_60', () =>
    expect(sizing.w_percentage_60()).toMatchInlineSnapshot(`"width:60%;"`));
  test('w_percentage_70', () =>
    expect(sizing.w_percentage_70()).toMatchInlineSnapshot(`"width:70%;"`));
  test('w_percentage_80', () =>
    expect(sizing.w_percentage_80()).toMatchInlineSnapshot(`"width:80%;"`));
  test('w_percentage_90', () =>
    expect(sizing.w_percentage_90()).toMatchInlineSnapshot(`"width:90%;"`));
  test('w_px', () =>
    expect(sizing.w_px()).toMatchInlineSnapshot(`"width:0.0625rem;"`));
  test('w_screen_height_10', () =>
    expect(sizing.w_screen_height_10()).toMatchInlineSnapshot(`"width:10vh;"`));
  test('w_screen_height_100', () =>
    expect(sizing.w_screen_height_100()).toMatchInlineSnapshot(
      `"width:100vh;"`,
    ));
  test('w_screen_height_20', () =>
    expect(sizing.w_screen_height_20()).toMatchInlineSnapshot(`"width:20vh;"`));
  test('w_screen_height_30', () =>
    expect(sizing.w_screen_height_30()).toMatchInlineSnapshot(`"width:30vh;"`));
  test('w_screen_height_40', () =>
    expect(sizing.w_screen_height_40()).toMatchInlineSnapshot(`"width:40vh;"`));
  test('w_screen_height_50', () =>
    expect(sizing.w_screen_height_50()).toMatchInlineSnapshot(`"width:50vh;"`));
  test('w_screen_height_60', () =>
    expect(sizing.w_screen_height_60()).toMatchInlineSnapshot(`"width:60vh;"`));
  test('w_screen_height_70', () =>
    expect(sizing.w_screen_height_70()).toMatchInlineSnapshot(`"width:70vh;"`));
  test('w_screen_height_80', () =>
    expect(sizing.w_screen_height_80()).toMatchInlineSnapshot(`"width:80vh;"`));
  test('w_screen_height_90', () =>
    expect(sizing.w_screen_height_90()).toMatchInlineSnapshot(`"width:90vh;"`));
  test('w_screen_width_10', () =>
    expect(sizing.w_screen_width_10()).toMatchInlineSnapshot(`"width:10vw;"`));
  test('w_screen_width_100', () =>
    expect(sizing.w_screen_width_100()).toMatchInlineSnapshot(
      `"width:100vw;"`,
    ));
  test('w_screen_width_20', () =>
    expect(sizing.w_screen_width_20()).toMatchInlineSnapshot(`"width:20vw;"`));
  test('w_screen_width_30', () =>
    expect(sizing.w_screen_width_30()).toMatchInlineSnapshot(`"width:30vw;"`));
  test('w_screen_width_40', () =>
    expect(sizing.w_screen_width_40()).toMatchInlineSnapshot(`"width:40vw;"`));
  test('w_screen_width_50', () =>
    expect(sizing.w_screen_width_50()).toMatchInlineSnapshot(`"width:50vw;"`));
  test('w_screen_width_60', () =>
    expect(sizing.w_screen_width_60()).toMatchInlineSnapshot(`"width:60vw;"`));
  test('w_screen_width_70', () =>
    expect(sizing.w_screen_width_70()).toMatchInlineSnapshot(`"width:70vw;"`));
  test('w_screen_width_80', () =>
    expect(sizing.w_screen_width_80()).toMatchInlineSnapshot(`"width:80vw;"`));
  test('w_screen_width_90', () =>
    expect(sizing.w_screen_width_90()).toMatchInlineSnapshot(`"width:90vw;"`));
  test('w_sm', () =>
    expect(sizing.w_sm()).toMatchInlineSnapshot(`"width:0.25rem;"`));
  test('w_xl', () =>
    expect(sizing.w_xl()).toMatchInlineSnapshot(`"width:0.75rem;"`));
  test('w_xs', () =>
    expect(sizing.w_xs()).toMatchInlineSnapshot(`"width:0.125rem;"`));
});
