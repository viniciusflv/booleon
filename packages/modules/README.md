<p align="center" style="color: #343a40">
  <img src="../../booleon.svg" width="100%" height="144">
  <h1 align="center">booleon/modules</h1>
  <p align="center" style="font-size: 1.2rem;">Key value entries of CSS</p>
  <hr />
</p>

Booleon modules are a `pre-defined` entry of css with keys that can be static (`string`) or dynamic (`RegEx`).

![NPM version](https://badgen.net/npm/v/@booleon/modules)
![NPM version](https://badgen.net/github/commits/viniciusflv/booleon)
![NPM version](https://badgen.net//packagephobia/publish/@booleon/modules)
![NPM version](https://badgen.net/bundlephobia/min/@booleon/modules)
![NPM version](https://badgen.net/bundlephobia/minzip/@booleon/modules)

# Get Started

## Instalation

```sh
npm i @booleon/modules
```

```sh
yarn add @booleon/modules
```

# Example

Key must be `string` or `array of strings`. If is an array, the joined value will be instanciated as a `new RegExp()` to be matched.

```jsx
export const outline = [
  ['ol_none', () => 'outline:none;'],
  [
    ['olc_' as 'olc_HEX', `(${hexColor})`], // olc_([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})
    (value: string) => `outline-color:#${value};`,
  ],
  [
    ['olw_' as 'olw_NUMBER', `(${number})`],
    (value: string) => `outline-width:${rem(value)};`,
  ],
  [
    ['ols_' as ols_STYLE, `(${lowerCase})`],
    (value: string) => `outline-style:${value};`,
  ],
] as const;
```

# Available Modules

* [animation](#animation)
* [background](#background)
* [border](#border)
* [container](#container)
* [cursor](#cursor)
* [filter](#filter)
* [flex](#flex)
* [font](#font)
* [gradient](#gradient)
* [grid](#grid)
* [margin](#margin)
* [outline](#outline)
* [padding](#padding)
* [shadow](#shadow)
* [sizing](#sizing)
* [transform](#transform)
* [transition](#transition)

## animation
  * kf_`NAME`
  * ani_duration_`TIME`
  * ani_iteration_`NUMBER`
  * ani_iteration_infinite
  * ani_play
  * ani_forwards
  * ani_backwards
  * ani_linear
  * ani_ease
  * ani_ease_in
  * ani_ease_out
  * ani_ease_in_out
## background
  * bg_`HEX`
  * bg_img
  * bg_transparent
  * bg_repeat
  * bg_norepeat
  * bg_auto
  * bg_cover
  * bg_contain
  * bg_fixed
  * bg_local
  * bg_scroll
## border
  * bc_`HEX`
  * btc_`HEX`
  * bbc_`HEX`
  * blc_`HEX`
  * brc_`HEX`
  * bxc_`HEX`
  * byc_`HEX`
  * bs_`STYLE`
  * bts_`STYLE`
  * bbs_`STYLE`
  * bls_`STYLE`
  * brs_`STYLE`
  * bxs_`STYLE`
  * bys_`STYLE`
  * bw_`NUMBER`
  * btw_`NUMBER`
  * bbw_`NUMBER`
  * blw_`NUMBER`
  * brw_`NUMBER`
  * bxw_`NUMBER`
  * byw_`NUMBER`
  * b_collapse
  * b_separate
  * b_none
  * bt_none
  * bb_none
  * bl_none
  * br_none
  * bx_none
  * by_none
  * b_circular
  * btr_circular
  * btl_circular
  * bbr_circular
  * bbl_circular
  * br_circular
  * bl_circular
  * bb_circular
  * bt_circular
  * b_rounded
  * btr_rounded
  * btl_rounded
  * bbr_rounded
  * bbl_rounded
  * br_rounded
  * bl_rounded
  * bb_rounded
  * bt_rounded
  * b_edge
  * btr_edge
  * btl_edge
  * bbr_edge
  * bbl_edge
  * br_edge
  * bl_edge
  * bb_edge
  * bt_edge
## container
  * z_`NUMBER`
  * op_`NUMBER`
  * top_`NUMBER`
  * bottom_`NUMBER`
  * left_`NUMBER`
  * right_`NUMBER`
  * top_neg_`NUMBER`
  * bottom_neg_`NUMBER`
  * left_neg_`NUMBER`
  * right_neg_`NUMBER`
  * z_max
  * z_neg
  * z_auto
  * sc_auto
  * sc_hidden
  * sc_visible
  * scy_auto
  * scy_hidden
  * scy_visible
  * scx_auto
  * scx_hidden
  * scx_visible
  * fixed
  * absolute
  * relative
  * sticky
  * top
  * top_full
  * top_neg
  * right
  * right_full
  * right_neg
  * bottom
  * bottom_full
  * bottom_neg
  * left
  * left_full
  * left_neg
  * inset
  * inset_x
  * inset_y
  * fit_contain
  * fit_cover
  * fit_fill
  * fit_none
  * hidden
  * visible
  * invisible
  * noappearance
  * rz_none
  * rz
  * rzy
  * rzx
  * content
## cursor
  * cr_auto
  * cr_default
  * cr_pointer
  * cr_wait
  * cr_text
  * cr_move
  * cr_disallowed
  * cr_cross
  * cr_grabbing
  * cr_help
  * cry_resize
  * cra_resize
  * crb_resize
  * crx_resize
  * cr_no_drop
  * cr_none
  * cr_progress
  * cr_zoom_in
  * cr_zoom_out
  * cr_noevents
  * cr_events
  * cr_url
## filter
  * ft_blur_`NUMBER`
  * ft_bn_`NUMBER`
  * ft_contrast_`NUMBER`
  * ft_grayscale_`NUMBER`
  * ft_hue_`NUMBER`
  * ft_opacity_`NUMBER`
  * ft_saturate_`NUMBER`
  * ft_sepia_`NUMBER`
  * ft_sd_`NUMBER`
  * ft_invert
## flex
  * flex
  * grow
  * col
  * row
  * row_reverse
  * col_reverse
  * main_between
  * main_around
  * main_evenly
  * main_center
  * cross_center
  * main_stretch
  * cross_stretch
  * main_start
  * cross_start
  * main_end
  * cross_end
## font
  * fb_`HEX`
  * fc_`HEX`
  * fs_`NUMBER`
  * ls_`NUMBER`
  * ls_neg_`NUMBER`
  * lh_`NUMBER`
  * fsl_`SELECT`
  * fa_`ALIGN`
  * ft_`TRANSFORM`
  * ff_`FAMILY`
  * ff_sans
  * ff_serif
  * ff_mono
  * f_italic
  * fw_lightest
  * fw_lighter
  * fw_light
  * fw_normal
  * fw_medium
  * fw_semibold
  * fw_bold
  * fw_bolder
  * fw_black
  * li_none
  * li_disc
  * li_decimal
  * li_inside
  * li_outside
  * f_underline
  * f_line_through
  * f_no_underline
  * f_wrap_space
  * f_wrap_word
  * f_wrap_letter
  * f_no_wrap
  * f_truncate
## gradient
  * gx_`HEX`
  * gy_`HEX`
  * gt_`HEX`
  * gb_`HEX`
  * gl_`HEX`
  * gr_`HEX`
## grid
  * rows_`FRACTIONS`
  * cols_`FRACTIONS`
  * area_`AREA`
  * cols_span_`NUMBER`
  * rows_span_`NUMBER`
  * cols_start_`NUMBER`
  * cols_end_`NUMBER`
  * rows_start_`NUMBER`
  * rows_end_`NUMBER`
  * grid
  * areas
## margin
  * m_`NUMBER`
  * mt_`NUMBER`
  * mb_`NUMBER`
  * ml_`NUMBER`
  * mr_`NUMBER`
  * mx_`NUMBER`
  * my_`NUMBER`
## outline
  * olc_`HEX`
  * olw_`NUMBER`
  * ols_`STYLE`
  * ol_none
## padding
  * p_`NUMBER`
  * pt_`NUMBER`
  * pb_`NUMBER`
  * pl_`NUMBER`
  * pr_`NUMBER`
  * px_`NUMBER`
  * py_`NUMBER`
## shadow
  * sd_1
  * sd_2
  * sd_3
  * sd_4
  * sd_6
  * sd_8
  * sd_9
  * sd_12
  * sd_16
  * sd_24
  * sdi_1
  * sdi_2
  * sdi_3
  * sdi_4
  * sdi_6
  * sdi_8
  * sdi_9
  * sdi_12
  * sdi_16
  * sdi_24
## sizing
  * h_`NUMBER`
  * h_max_`NUMBER`
  * h_min_`NUMBER`
  * w_`NUMBER`
  * w_max_`NUMBER`
  * w_min_`NUMBER`
  * h_screen_`NUMBER`
  * h_max_screen_`NUMBER`
  * h_min_screen_`NUMBER`
  * w_screen_`NUMBER`
  * w_max_screen_`NUMBER`
  * w_min_screen_`NUMBER`
  * h_full
  * h_max_full
  * h_min_full
  * h_auto
  * h_max_auto
  * h_min_auto
  * h_screen
  * h_max_screen
  * h_min_screen
  * w_full
  * w_max_full
  * w_min_full
  * w_auto
  * w_max_auto
  * w_min_auto
  * w_screen
  * w_max_screen
  * w_min_screen
## transform
  * sl_`NUMBER`
  * slx_`NUMBER`
  * sly_`NUMBER`
  * sl_neg_`NUMBER`
  * slx_neg_`NUMBER`
  * sly_neg_`NUMBER`
  * rt_`NUMBER`
  * rt_neg_`NUMBER`
  * sk_`NUMBER`
  * skx_`NUMBER`
  * sky_`NUMBER`
  * sk_neg_`NUMBER`
  * skx_neg_`NUMBER`
  * sky_neg_`NUMBER`
  * tl_`NUMBER`
  * tlx_`NUMBER`
  * tly_`NUMBER`
  * tl_neg_`NUMBER`
  * tlx_neg_`NUMBER`
  * tly_neg_`NUMBER`
  * ori_`NUMBER`
  * tl_full
  * tl_half
  * tl_full_neg
  * tl_half_neg
  * tlx_full
  * tlx_half
  * tlx_full_neg
  * tlx_half_neg
  * tly_full
  * tly_half
  * tly_full_neg
  * tly_half_neg
## transition
  * ts_delay_`TIME`
  * ts_duration_`TIME`
  * ts
  * ts_none
  * ts_all
  * ts_colors
  * ts_opacity
  * ts_shadow
  * ts_transform
  * ts_ease_linear
  * ts_ease_in
  * ts_ease_out
  * ts_ease_in_out
