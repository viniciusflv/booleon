<p align="center" style="color: #343a40">
  <img src="https://raw.githubusercontent.com/viniciusflv/booleon/master/booleon.svg" viewBox="0 0 129.80448 115.59661" width="100%" height="144" />
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

# Examples

Key also can be `Symbol` whose value will be instantiated as a `new RegExp()` to be matched.

```jsx
export const background = {
  [sym<'bg_color_COLOR'>('bg_color_(.*)')]: (value: string) =>
    `background-color:${handleColor(value)};`,
  bg_img: (value: string) => `background-image:url(${value});`,
  bg_transparent: () => 'background-color:transparent;',
  bg_repeat: () => 'background-repeat:repeat;',
  bg_norepeat: () => 'background-repeat:no-repeat;',
  bg_auto: () => 'background-size:auto;',
  bg_cover: () => 'background-size:cover;',
  bg_contain: () => 'background-size:contain;',
  bg_fixed: () => 'background-attachment:fixed;',
  bg_local: () => 'background-attachment:local;',
  bg_scroll: () => 'background-attachment:scroll;',
};
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
* [outline](#outline)
* [shadow](#shadow)
* [sizing](#sizing)
* [spacing](#spacing)
* [transform](#transform)
* [transition](#transition)

## animation
<hr />
<table>
  <tbody>
    <tr>
      <td>ani_name_`NAME`</td>
      <td>ani_duration_`TIME`</td>
      <td>ani_iteration_`NUMBER`</td>
      <td>ani_iteration_infinite</td>
      <td>ani_pause</td>
    </tr>
    <tr>
      <td>ani_play</td>
      <td>ani_forwards</td>
      <td>ani_backwards</td>
      <td>ani_linear</td>
      <td>ani_ease</td>
    </tr>
    <tr>
      <td>ani_ease_in</td>
      <td>ani_ease_out</td>
      <td>ani_ease_in_out</td>
    </tr>
  </tbody>
</table>

## background
<hr />
<table>
  <tbody>
    <tr>
      <td>bg_`COLOR`</td>
      <td>bg_img</td>
      <td>bg_transparent</td>
      <td>bg_repeat</td>
      <td>bg_norepeat</td>
    </tr>
    <tr>
      <td>bg_auto</td>
      <td>bg_cover</td>
      <td>bg_contain</td>
      <td>bg_fixed</td>
      <td>bg_local</td>
    </tr>
    <tr>
      <td>bg_scroll</td>
    </tr>
  </tbody>
</table>

## border
<hr />
<table>
  <tbody>
    <tr>
      <td>bd_`SIZE_STYLE_COLOR`</td>
      <td>bdt_`SIZE_STYLE_COLOR`</td>
      <td>bdb_`SIZE_STYLE_COLOR`</td>
      <td>bdl_`SIZE_STYLE_COLOR`</td>
      <td>bdr_`SIZE_STYLE_COLOR`</td>
    </tr>
    <tr>
      <td>bdx_`SIZE_STYLE_COLOR`</td>
      <td>bdy_`SIZE_STYLE_COLOR`</td>
      <td>bd_color_`COLOR`</td>
      <td>bdt_color_`COLOR`</td>
      <td>bdb_color_`COLOR`</td>
    </tr>
    <tr>
      <td>bdl_color_`COLOR`</td>
      <td>bdr_color_`COLOR`</td>
      <td>bdx_color_`COLOR`</td>
      <td>bdy_color_`COLOR`</td>
      <td>bd_width_`NUMBER`</td>
    </tr>
    <tr>
      <td>bdt_width_`NUMBER`</td>
      <td>bdb_width_`NUMBER`</td>
      <td>bdl_width_`NUMBER`</td>
      <td>bdr_width_`NUMBER`</td>
      <td>bdx_width_`NUMBER`</td>
    </tr>
    <tr>
      <td>bdy_width_`NUMBER`</td>
      <td>bd_radius_`VALUE`</td>
      <td>bdtr_radius_`VALUE`</td>
      <td>bdtl_radius_`VALUE`</td>
      <td>bdt_radius_`VALUE`</td>
    </tr>
    <tr>
      <td>bdbr_radius_`VALUE`</td>
      <td>bdbl_radius_`VALUE`</td>
      <td>bdb_radius_`VALUE`</td>
      <td>bdl_radius_`VALUE`</td>
      <td>bdr_radius_`VALUE`</td>
    </tr>
    <tr>
      <td>bd_style_none</td>
      <td>bd_style_hidden</td>
      <td>bd_style_dotted</td>
      <td>bd_style_dashed</td>
      <td>bd_style_solid</td>
    </tr>
    <tr>
      <td>bd_style_double</td>
      <td>bd_style_groove</td>
      <td>bd_style_ridge</td>
      <td>bd_style_inset</td>
      <td>bd_style_outset</td>
    </tr>
    <tr>
      <td>bd_style_initial</td>
      <td>bd_style_inherit</td>
      <td>bdt_style_none</td>
      <td>bdt_style_hidden</td>
      <td>bdt_style_dotted</td>
    </tr>
    <tr>
      <td>bdt_style_dashed</td>
      <td>bdt_style_solid</td>
      <td>bdt_style_double</td>
      <td>bdt_style_groove</td>
      <td>bdt_style_ridge</td>
    </tr>
    <tr>
      <td>bdt_style_inset</td>
      <td>bdt_style_outset</td>
      <td>bdt_style_initial</td>
      <td>bdt_style_inherit</td>
      <td>bdb_style_none</td>
    </tr>
    <tr>
      <td>bdb_style_hidden</td>
      <td>bdb_style_dotted</td>
      <td>bdb_style_dashed</td>
      <td>bdb_style_solid</td>
      <td>bdb_style_double</td>
    </tr>
    <tr>
      <td>bdb_style_groove</td>
      <td>bdb_style_ridge</td>
      <td>bdb_style_inset</td>
      <td>bdb_style_outset</td>
      <td>bdb_style_initial</td>
    </tr>
    <tr>
      <td>bdb_style_inherit</td>
      <td>bdl_style_none</td>
      <td>bdl_style_hidden</td>
      <td>bdl_style_dotted</td>
      <td>bdl_style_dashed</td>
    </tr>
    <tr>
      <td>bdl_style_solid</td>
      <td>bdl_style_double</td>
      <td>bdl_style_groove</td>
      <td>bdl_style_ridge</td>
      <td>bdl_style_inset</td>
    </tr>
    <tr>
      <td>bdl_style_outset</td>
      <td>bdl_style_initial</td>
      <td>bdl_style_inherit</td>
      <td>bdr_style_none</td>
      <td>bdr_style_hidden</td>
    </tr>
    <tr>
      <td>bdr_style_dotted</td>
      <td>bdr_style_dashed</td>
      <td>bdr_style_solid</td>
      <td>bdr_style_double</td>
      <td>bdr_style_groove</td>
    </tr>
    <tr>
      <td>bdr_style_ridge</td>
      <td>bdr_style_inset</td>
      <td>bdr_style_outset</td>
      <td>bdr_style_initial</td>
      <td>bdr_style_inherit</td>
    </tr>
    <tr>
      <td>bdx_style_none</td>
      <td>bdx_style_hidden</td>
      <td>bdx_style_dotted</td>
      <td>bdx_style_dashed</td>
      <td>bdx_style_solid</td>
    </tr>
    <tr>
      <td>bdx_style_double</td>
      <td>bdx_style_groove</td>
      <td>bdx_style_ridge</td>
      <td>bdx_style_inset</td>
      <td>bdx_style_outset</td>
    </tr>
    <tr>
      <td>bdx_style_initial</td>
      <td>bdx_style_inherit</td>
      <td>bdy_style_none</td>
      <td>bdy_style_hidden</td>
      <td>bdy_style_dotted</td>
    </tr>
    <tr>
      <td>bdy_style_dashed</td>
      <td>bdy_style_solid</td>
      <td>bdy_style_double</td>
      <td>bdy_style_groove</td>
      <td>bdy_style_ridge</td>
    </tr>
    <tr>
      <td>bdy_style_inset</td>
      <td>bdy_style_outset</td>
      <td>bdy_style_initial</td>
      <td>bdy_style_inherit</td>
      <td>bd_collapse</td>
    </tr>
    <tr>
      <td>bd_separate</td>
      <td>bd_none</td>
      <td>bdt_none</td>
      <td>bdb_none</td>
      <td>bdl_none</td>
    </tr>
    <tr>
      <td>bdr_none</td>
      <td>bdx_none</td>
      <td>bdy_none</td>
    </tr>
  </tbody>
</table>

## container
<hr />
<table>
  <tbody>
    <tr>
      <td>z_`NUMBER`</td>
      <td>op_`NUMBER`</td>
      <td>top_`NUMBER`</td>
      <td>bottom_`NUMBER`</td>
      <td>left_`NUMBER`</td>
    </tr>
    <tr>
      <td>right_`NUMBER`</td>
      <td>z_max</td>
      <td>z_auto</td>
      <td>sc_auto</td>
      <td>sc_hidden</td>
    </tr>
    <tr>
      <td>sc_visible</td>
      <td>scy_auto</td>
      <td>scy_hidden</td>
      <td>scy_visible</td>
      <td>scx_auto</td>
    </tr>
    <tr>
      <td>scx_hidden</td>
      <td>scx_visible</td>
      <td>fixed</td>
      <td>absolute</td>
      <td>relative</td>
    </tr>
    <tr>
      <td>sticky</td>
      <td>top</td>
      <td>right</td>
      <td>bottom</td>
      <td>left</td>
    </tr>
    <tr>
      <td>inset</td>
      <td>inset_x</td>
      <td>inset_y</td>
      <td>fit_contain</td>
      <td>fit_cover</td>
    </tr>
    <tr>
      <td>fit_fill</td>
      <td>fit_none</td>
      <td>hidden</td>
      <td>visible</td>
      <td>invisible</td>
    </tr>
    <tr>
      <td>noappearance</td>
      <td>rz_none</td>
      <td>rz</td>
      <td>rzy</td>
      <td>rzx</td>
    </tr>
    <tr>
      <td>content</td>
    </tr>
  </tbody>
</table>

## cursor
<hr />
<table>
  <tbody>
    <tr>
      <td>cr_auto</td>
      <td>cr_default</td>
      <td>cr_pointer</td>
      <td>cr_wait</td>
      <td>cr_text</td>
    </tr>
    <tr>
      <td>cr_move</td>
      <td>cr_disallowed</td>
      <td>cr_cross</td>
      <td>cr_grabbing</td>
      <td>cr_help</td>
    </tr>
    <tr>
      <td>cry_resize</td>
      <td>cra_resize</td>
      <td>crb_resize</td>
      <td>crx_resize</td>
      <td>cr_no_drop</td>
    </tr>
    <tr>
      <td>cr_none</td>
      <td>cr_progress</td>
      <td>cr_zoom_in</td>
      <td>cr_zoom_out</td>
      <td>cr_noevents</td>
    </tr>
    <tr>
      <td>cr_events</td>
      <td>cr_url</td>
    </tr>
  </tbody>
</table>

## filter
<hr />
<table>
  <tbody>
    <tr>
      <td>fl_blur_`SIZE`</td>
      <td>fl_brightness_`SIZE`</td>
      <td>fl_contrast_`SIZE`</td>
      <td>fl_grayscale_`SIZE`</td>
      <td>fl_hue_`SIZE`</td>
    </tr>
    <tr>
      <td>fl_opacity_`SIZE`</td>
      <td>fl_saturate_`SIZE`</td>
      <td>fl_sepia_`SIZE`</td>
      <td>fl_sd_`SIZE`</td>
      <td>fl_invert</td>
    </tr>
  </tbody>
</table>

## flex
<hr />
<table>
  <tbody>
    <tr>
      <td>flex</td>
      <td>wrap</td>
      <td>no_wrap</td>
      <td>reverse_wrap</td>
      <td>grow</td>
    </tr>
    <tr>
      <td>col</td>
      <td>row</td>
      <td>row_reverse</td>
      <td>col_reverse</td>
      <td>main_between</td>
    </tr>
    <tr>
      <td>main_around</td>
      <td>main_evenly</td>
      <td>main_center</td>
      <td>cross_center</td>
      <td>main_stretch</td>
    </tr>
    <tr>
      <td>cross_stretch</td>
      <td>main_start</td>
      <td>cross_start</td>
      <td>main_end</td>
      <td>cross_end</td>
    </tr>
  </tbody>
</table>

## font
<hr />
<table>
  <tbody>
    <tr>
      <td>ft_border_`COLOR`</td>
      <td>ft_color_`COLOR`</td>
      <td>ft_size_`NUMBER`</td>
      <td>ft_spacing_`NUMBER`</td>
      <td>ft_height_`NUMBER`</td>
    </tr>
    <tr>
      <td>ft_family_`FAMILY`</td>
      <td>ft_family_sans</td>
      <td>ft_family_serif</td>
      <td>ft_family_mono</td>
      <td>ft_select_none</td>
    </tr>
    <tr>
      <td>ft_select_auto</td>
      <td>ft_select_text</td>
      <td>ft_select_contain</td>
      <td>ft_select_all</td>
      <td>ft_select_inherit</td>
    </tr>
    <tr>
      <td>ft_select_initial</td>
      <td>ft_select_unset</td>
      <td>ft_align_left</td>
      <td>ft_align_right</td>
      <td>ft_align_center</td>
    </tr>
    <tr>
      <td>ft_align_justify</td>
      <td>ft_align_initial</td>
      <td>ft_align_inherit</td>
      <td>ft_transform_none</td>
      <td>ft_transform_normal</td>
    </tr>
    <tr>
      <td>ft_transform_capitalize</td>
      <td>ft_transform_uppercase</td>
      <td>ft_transform_lowercase</td>
      <td>ft_transform_initial</td>
      <td>ft_transform_inherit</td>
    </tr>
    <tr>
      <td>ft_italic</td>
      <td>ft_weight_lightest</td>
      <td>ft_weight_lighter</td>
      <td>ft_weight_light</td>
      <td>ft_weight_normal</td>
    </tr>
    <tr>
      <td>ft_weight_medium</td>
      <td>ft_weight_semibold</td>
      <td>ft_weight_bold</td>
      <td>ft_weight_bolder</td>
      <td>ft_weight_black</td>
    </tr>
    <tr>
      <td>li_none</td>
      <td>li_disc</td>
      <td>li_decimal</td>
      <td>li_inside</td>
      <td>li_outside</td>
    </tr>
    <tr>
      <td>ft_underline</td>
      <td>ft_line_through</td>
      <td>ft_no_underline</td>
      <td>ft_wrap_space</td>
      <td>ft_wrap_word</td>
    </tr>
    <tr>
      <td>ft_wrap_letter</td>
      <td>ft_no_wrap</td>
      <td>ft_truncate</td>
    </tr>
  </tbody>
</table>

## gradient
<hr />
<table>
  <tbody>
    <tr>
      <td>gx_`COLOR`</td>
      <td>gy_`COLOR`</td>
      <td>gt_`COLOR`</td>
      <td>gb_`COLOR`</td>
      <td>gl_`COLOR`</td>
    </tr>
    <tr>
      <td>gr_`COLOR`</td>
    </tr>
  </tbody>
</table>

## grid
<hr />
<table>
  <tbody>
    <tr>
      <td>rows_`FRACTIONS`</td>
      <td>cols_`FRACTIONS`</td>
      <td>area_`AREA`</td>
      <td>cols_span_`NUMBER`</td>
      <td>rows_span_`NUMBER`</td>
    </tr>
    <tr>
      <td>cols_start_`NUMBER`</td>
      <td>cols_end_`NUMBER`</td>
      <td>rows_start_`NUMBER`</td>
      <td>rows_end_`NUMBER`</td>
      <td>grid</td>
    </tr>
    <tr>
      <td>areas</td>
    </tr>
  </tbody>
</table>

## outline
<hr />
<table>
  <tbody>
    <tr>
      <td>ol_color_`COLOR`</td>
      <td>ol_width_`NUMBER`</td>
      <td>ol_none</td>
      <td>ol_style_auto</td>
      <td>ol_style_none</td>
    </tr>
    <tr>
      <td>ol_style_dotted</td>
      <td>ol_style_dashed</td>
      <td>ol_style_solid</td>
      <td>ol_style_double</td>
      <td>ol_style_groove</td>
    </tr>
    <tr>
      <td>ol_style_ridge</td>
      <td>ol_style_inset</td>
      <td>ol_style_outset</td>
      <td>ol_style_inherit</td>
      <td>ol_style_initial</td>
    </tr>
    <tr>
      <td>ol_style_unset</td>
    </tr>
  </tbody>
</table>

## shadow
<hr />
<table>
  <tbody>
    <tr>
      <td>sd_1</td>
      <td>sd_2</td>
      <td>sd_3</td>
      <td>sd_4</td>
      <td>sd_6</td>
    </tr>
    <tr>
      <td>sd_8</td>
      <td>sd_9</td>
      <td>sd_12</td>
      <td>sd_16</td>
      <td>sd_24</td>
    </tr>
    <tr>
      <td>sdi_1</td>
      <td>sdi_2</td>
      <td>sdi_3</td>
      <td>sdi_4</td>
      <td>sdi_6</td>
    </tr>
    <tr>
      <td>sdi_8</td>
      <td>sdi_9</td>
      <td>sdi_12</td>
      <td>sdi_16</td>
      <td>sdi_24</td>
    </tr>
  </tbody>
</table>

## sizing
<hr />
<table>
  <tbody>
    <tr>
      <td>h_`NUMBER`</td>
      <td>max_h_`NUMBER`</td>
      <td>min_h_`NUMBER`</td>
      <td>min_h_`NUMBER`</td>
      <td>w_`NUMBER`</td>
    </tr>
    <tr>
      <td>max_w_`NUMBER`</td>
      <td>min_w_`NUMBER`</td>
      <td>min_w_`NUMBER`</td>
      <td>h_full</td>
      <td>max_h_full</td>
    </tr>
    <tr>
      <td>min_h_full</td>
      <td>h_auto</td>
      <td>max_h_auto</td>
      <td>min_h_auto</td>
      <td>h_screen</td>
    </tr>
    <tr>
      <td>max_h_screen</td>
      <td>min_h_screen</td>
      <td>w_full</td>
      <td>max_w_full</td>
      <td>min_w_full</td>
    </tr>
    <tr>
      <td>w_auto</td>
      <td>max_w_auto</td>
      <td>min_w_auto</td>
      <td>w_screen</td>
      <td>max_w_screen</td>
    </tr>
    <tr>
      <td>min_w_screen</td>
    </tr>
  </tbody>
</table>


## spacing
<hr />
<table>
  <tbody>
    <tr>
      <td>m_`NUMBER`</td>
      <td>mt_`NUMBER`</td>
      <td>mb_`NUMBER`</td>
      <td>ml_`NUMBER`</td>
      <td>mr_`NUMBER`</td>
    </tr>
    <tr>
      <td>mx_`NUMBER`</td>
      <td>my_`NUMBER`</td>
      <td>p_`NUMBER`</td>
      <td>pt_`NUMBER`</td>
      <td>pb_`NUMBER`</td>
    </tr>
    <tr>
      <td>pl_`NUMBER`</td>
      <td>pr_`NUMBER`</td>
      <td>px_`NUMBER`</td>
      <td>py_`NUMBER`</td>
      <td>m_auto</td>
    </tr>
    <tr>
      <td>mt_auto</td>
      <td>mb_auto</td>
      <td>ml_auto</td>
      <td>mr_auto</td>
      <td>mx_auto</td>
    </tr>
    <tr>
      <td>my_auto</td>
    </tr>
  </tbody>
</table>

  
## transform
<hr />
<table>
  <tbody>
    <tr>
      <td>tf_sl_`NUMBER`</td>
      <td>tf_slx_`NUMBER`</td>
      <td>tf_sly_`NUMBER`</td>
      <td>tf_rt_`NUMBER`</td>
      <td>tf_sk_`NUMBER`</td>
    </tr>
    <tr>
      <td>tf_skx_`NUMBER`</td>
      <td>tf_sky_`NUMBER`</td>
      <td>tf_tl_`NUMBER`</td>
      <td>tf_tlx_`NUMBER`</td>
      <td>tf_tly_`NUMBER`</td>
    </tr>
    <tr>
      <td>tf_ori_`VALUE`</td>
    </tr>
  </tbody>
</table>

## transition
<hr />
<table>
  <tbody>
    <tr>
      <td>ts_delay_`TIME`</td>
      <td>ts_duration_`TIME`</td>
      <td>ts</td>
      <td>ts_none</td>
      <td>ts_all</td>
    </tr>
    <tr>
      <td>ts_colors</td>
      <td>ts_opacity</td>
      <td>ts_shadow</td>
      <td>ts_transform</td>
      <td>ts_ease_linear</td>
    </tr>
    <tr>
      <td>ts_ease_in</td>
      <td>ts_ease_out</td>
      <td>ts_ease_in_out</td>
    </tr>
  </tbody>
</table>

